// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
    pepperoni: { name: 'pepperoni', price: 1 },
    mushrooms: { name: 'Mushrooms', price: 1 },
    greenPeppers: { name: 'Green Peppers', price: 1 },
    whiteSauce: { name: 'White sauce', price: 3 },
    glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
    pepperoni: true,
    mushrooms: true,
    greenPeppers: true,
    whiteSauce: false,
    glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
    renderPepperoni();
    renderMushrooms();
    renderGreenPeppers();
    renderWhiteSauce();
    renderGlutenFreeCrust();

    renderButtons();
    renderPrice();
}

function renderPepperoni() {
    document.querySelectorAll('.pep').forEach((onePep) => {
        if (state.pepperoni) {
            onePep.style.visibility = 'visible';
        } else {
            onePep.style.visibility = 'hidden';
        }
    });
}

function renderMushrooms() {
    document.querySelectorAll('.mush').forEach((mush) => {
        if (state.mushrooms) {
            mush.style.visibility = 'visible';
        } else {
            mush.style.visibility = 'hidden';
        }
    });
    // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
    document.querySelectorAll('.green-pepper').forEach((onePepper) => {
        if (state.greenPeppers) {
            onePepper.style.visibility = 'visible';
        } else {
            onePepper.style.visibility = 'hidden';
        }
    });
    // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
    const sauce = document.querySelector('.sauce');

    if (state.whiteSauce) {
        sauce.setAttribute('class', 'sauce sauce-white');
    } else {
        sauce.setAttribute('class', 'sauce');
    }
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
    const crust = document.querySelector('.crust');

    if (state.glutenFreeCrust) {
        crust.setAttribute('class', 'crust crust-gluten-free');
    } else {
        crust.setAttribute('class', 'crust');
    }
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
    if (clickedButton) {
        const stateName = clickedButton.getAttribute('state-name');

        if (state[stateName]) {
            clickedButton.classList.add('active');
        } else {
            clickedButton.classList.remove('active');
        }

        return;
    }

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((button) => {
        const stateName = button.getAttribute('state-name');

        if (state[stateName]) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
    let totalPrice = basePrice;
    let priceIngredientsLi = '';

    for (const ingredient in ingredients) {
        if (state[ingredient]) {
            priceIngredientsLi += `
        <li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>
      `;

            totalPrice += ingredients[ingredient].price;
        }
    }

    const pricePanelHTML = `
    <h2>Your pizza's price</h2>
    <b>$${basePrice} cheese pizza</b>
    <ul>
      ${priceIngredientsLi}
    </ul>
    <strong>$${totalPrice}</strong>
  `;

    document.querySelector('.panel.price').innerHTML = pricePanelHTML;
}
// Iteration 4: change the HTML of `<aside class="panel price">`


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', (event) => {
    state.pepperoni = !state.pepperoni;
    renderEverything(event.target);
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').onclick = (event) => {
    state.mushrooms = !state.mushrooms;
    renderEverything(event.target);
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').onclick = (event) => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything(event.target);
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').onclick = (event) => {
    state.whiteSauce = !state.whiteSauce;
    renderEverything(event.target);
};
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').onclick = (event) => {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything(event.target);
};