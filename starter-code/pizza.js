// Constants
const basePrice = 10;
const ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
const renderEverything = _ => {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
};

const renderPepperonni = _ =>
  $(".pep").each((_, $pep) => ($pep.style.visibility = state.pepperonni ? "visible" : "hidden"));

const renderMushrooms = _ =>
  $(".mushroom").each((_, $mushrooms) => ($mushrooms.style.visibility = state.mushrooms ? "visible" : "hidden"));

const renderGreenPeppers = _ =>
  $(".green-pepper").each(
    (_, $greenPeppers) => ($greenPeppers.style.visibility = state.greenPeppers ? "visible" : "hidden")
  );

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
const renderWhiteSauce = _ => $(".sauce")[state.whiteSauce ? "addClass" : "removeClass"]("sauce-white");

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
const renderGlutenFreeCrust = _ => {
  $(".crust")[state.glutenFreeCrust ? "addClass" : "removeClass"]("crust-gluten-free");
};

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
const renderButtons = _ => $(".btn").click(e => $(e.target).toggleClass("active"));

// Iteration 4: change the HTML of `<aside class="panel price">`
const renderPrice = _ => {
  const total = Object.keys(state).reduce(
    (acc, key) => {
      if (state[key]) {
        const { price, name } = ingredients[key];
        acc.totalPrice += price;
        acc.activeIngredients.push(`<li>$${price} ${name}</li>`);
      }
      return acc;
    },
    { totalPrice: basePrice, activeIngredients: [] }
  );
  $(".price ul").html(total.activeIngredients);
  $(".price strong").html(`$${total.totalPrice}`);
};

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
$(".btn-pepperonni").click(_ => {
  state.pepperonni = !state.pepperonni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
$(".btn.btn-mushrooms").click(_ => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
$(".btn.btn-green-peppers").click(_ => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
$(".btn.btn-sauce").click(_ => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
$(".btn.btn-crust").click(_ => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
