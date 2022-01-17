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
    // Iteration 1: set the visibility of `<section class="mushroom">`
    document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
        if (state.mushrooms === true) {
            oneMushroom.style.visibility = 'visible';
        } else {
            oneMushroom.style.visibility = 'hidden';
        }
    });
}

function renderGreenPeppers() {
    // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
        if (state.greenPeppers === true) {
            oneGreenPepper.style.visibility = 'visible';
        } else {
            oneGreenPepper.style.visibility = 'hidden';
        }
    });
}

function renderWhiteSauce() {
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    document.querySelector('.sauce').classList.toggle('sauce-white', state.whiteSauce);
}

function renderGlutenFreeCrust() {
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    document.querySelector('.crust').classList.toggle('crust-gluten-free', state.glutenFreeCrust);
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function toggleActiveClass(selector, state) {
    document.querySelector(selector).classList.toggle('active', state);
}

function renderButtons() {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    // const activeSelection = document.querySelector
    toggleActiveClass('.btn.btn-pepperoni', state.pepperoni);
    toggleActiveClass('.btn.btn-mushrooms', state.mushrooms);
    toggleActiveClass('.btn.btn-green-peppers', state.greenPeppers);
    toggleActiveClass('.btn.btn-sauce', state.whiteSauce);
    toggleActiveClass('.btn.btn-crust', state.glutenFreeCrust);
}


function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
    const priceList = document.querySelector('aside.price ul');
    priceList.innerHTML = '';

    if (state.pepperoni) {
        const pepperoniPrice = document.createElement('li');
        pepperoniPrice.textContent = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`;
        priceList.appendChild(pepperoniPrice)
    }
    if (state.mushrooms) {
        const mushroomsPrice = document.createElement('li');
        mushroomsPrice.textContent = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`;
        priceList.appendChild(mushroomsPrice)
    }
    if (state.greenPeppers) {
        const greenPeppersPrice = document.createElement('li');
        greenPeppersPrice.textContent = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`;
        priceList.appendChild(greenPeppersPrice)
    }
    if (state.whiteSauce) {
        const whiteSaucePrice = document.createElement('li');
        whiteSaucePrice.textContent = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`;
        priceList.appendChild(whiteSaucePrice)
    }
    if (state.glutenFreeCrust) {
        const crustPrice = document.createElement('li');
        crustPrice.textContent = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`;
        priceList.appendChild(crustPrice)
    }



    let sum = basePrice;
    if (state.pepperoni) {
        sum += ingredients.pepperoni.price;
    }
    if (state.mushrooms) {
        sum += ingredients.mushrooms.price;
    }
    if (state.greenPeppers) {
        sum += ingredients.greenPeppers.price;
    }
    if (state.whiteSauce) {
        sum += ingredients.whiteSauce.price;
    }
    if (state.glutenFreeCrust) {
        sum += ingredients.glutenFreeCrust.price;
    }
    document.querySelector('aside.price strong').textContent = `$${sum}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function() {
    state.pepperoni = !state.pepperoni;
    renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function() {
    state.mushrooms = !state.mushrooms;
    renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function() {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function() {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function() {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
})