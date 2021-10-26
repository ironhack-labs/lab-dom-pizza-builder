require('expect-puppeteer');

// Helpers
const pascalCaseToDashSeparated = (value) =>
  value
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase();

const extractAmountFromPrice = (price) => Number(price.replace(/\$/g, ''));

const getPageState = async () => await page.evaluate(() => state);

// Ironhack Pizza Builder Test-suite
describe('Ironhack Pizza Builder', () => {
  beforeAll(async () => {
    page.on('console', (msg) => console.log(msg.text()));
    await page.goto('http://localhost:4444');
  });

  beforeEach(async () => {
    await page.reload();
    // Start of by attempting to de-activate every ingredient
    const state = await getPageState();
    const activeIngredients = Object.entries(state)
      .filter(([ingredient, active]) => active)
      .map(([ingredient]) => ingredient);
    const buttonSelectors = activeIngredients.map(
      (ingredient) => `.btn-${pascalCaseToDashSeparated(ingredient)}`
    );
    for (const selector of buttonSelectors) {
      const button = await page.$(selector);
      await button.click();
    }
  });

  describe('Single Ingredient', () => {
    it('should set state.pepperoni to true when button is clicked', async () => {
      {
        const state = await getPageState();
        expect(state.pepperoni).toBe(false);
      }
      const $button = await page.$('.btn-pepperoni');
      await $button.click();
      {
        const state = await getPageState();
        expect(state.pepperoni).toBe(true);
      }
    });

    it('should toggle the value of state.pepperoni between true and false', async () => {
      const $button = await page.$('.btn-pepperoni');
      {
        const state = await getPageState();
        expect(state.pepperoni).toBe(false);
      }
      await $button.click();
      {
        const state = await getPageState();
        expect(state.pepperoni).toBe(true);
      }
      await $button.click();
      {
        const state = await getPageState();
        expect(state.pepperoni).toBe(false);
      }
    });

    it('should not display pepperoni when state.pepperoni is false', async () => {
      {
        const state = await getPageState();
        expect(state.pepperoni).toBe(false);
      }
      const $elements = await page.$$('.pep');
      for (let $element of $elements) {
        const visibility = await $element.evaluate(
          (element) => element.style.visibility
        );
        expect(visibility).toBe('hidden');
      }
    });

    it('should display pepperoni after button has been toggled', async () => {
      {
        const state = await getPageState();
        expect(state.pepperoni).toBe(false);
      }
      const $button = await page.$('.btn-pepperoni');
      await $button.click();
      const $elements = await page.$$('.pep');
      for (let $element of $elements) {
        const visibility = await $element.evaluate(
          (element) => element.style.visibility
        );
        expect(visibility).toBe('visible');
      }
    });

    it('should toggle active class in pepperoni button when clicked', async () => {
      const $button = await page.$('.btn-pepperoni');
      const getButtonActiveStatus = () =>
        $button.evaluate((element) => element.classList.contains('active'));
      {
        const state = await getPageState();
        expect(state.pepperoni).toBe(false);
      }
      {
        const active = await getButtonActiveStatus();
        expect(active).toBe(false);
      }
      await $button.click();
      {
        const active = await getButtonActiveStatus();
        expect(active).toBe(true);
      }
    });
  });

  describe('Price', () => {
    it('should render base price for pizza', async () => {
      const $totalPrice = await page.$('.price > *:last-child');
      const value = await $totalPrice.evaluate((element) => element.innerText);
      const amount = extractAmountFromPrice(value);
      expect(amount).toBe(10);
    });

    it('should render price item for each ingredient selected', async () => {
      const buttonSelectors = [
        '.btn-mushrooms',
        '.btn-green-peppers',
        '.btn-sauce'
      ];
      const $buttons = await page.$$(buttonSelectors.join(', '));
      for (let $button of $buttons) await $button.click();
      const $ingredientListItems = await page.$$('.price > ul li');
      expect($ingredientListItems.length).toBe(buttonSelectors.length);
    });

    it('should render total price for multiple selected ingredients', async () => {
      const buttonSelectors = [
        '.btn-mushrooms',
        '.btn-green-peppers',
        '.btn-sauce'
      ];
      const $buttons = await page.$$(buttonSelectors.join(', '));
      for (let $button of $buttons) await $button.click();
      const $totalPrice = await page.$('.price > *:last-child');
      const value = await $totalPrice.evaluate((element) => element.innerText);
      const amount = extractAmountFromPrice(value);
      expect(amount).toBe(15);
    });
  });
});
