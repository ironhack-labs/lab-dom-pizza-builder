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
    glutenFreeCrust: false,
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
    document.querySelectorAll('.pep').forEach(onePep => {
        if (state.pepperoni) {
            onePep.style.visibility = 'visible';
        } else {
            onePep.style.visibility = 'hidden';
        }
    });
}

function renderMushrooms() {
    document.querySelectorAll('.mushroom').forEach(mushroom => {
        if (state.mushrooms) {
            mushroom.style.visibility = 'visible';
        } else { mushroom.style.visibility = 'hidden'; }
    });
}

function renderGreenPeppers() {
    document.querySelectorAll('.green-pepper').forEach(pepper => {
        if (state.greenPeppers) {
            pepper.style.visibility = 'visible';
        } else { pepper.style.visibility = 'hidden'; }
    });
}

function renderWhiteSauce() {
    document.querySelectorAll('.sauce-white').forEach(sauce => {
        if (state.whiteSauce) {
            sauce.style.visibility = 'visible';
        } else { sauce.style.visibility = 'hidden'; }
    });
}

function renderGlutenFreeCrust() {
    document.querySelectorAll('.crust-gluten-free').forEach(crust => {
        if (state.glutenFreeCrust) {
            crust.style.visibility = 'visible';
        } else { crust.style.visibility = 'hidden'; }
    });
}

function renderButtons() {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    if (state.pepperoni) { document.querySelector('.btn-pepperoni').classList.add('active'); }
    else { document.querySelector('.btn-pepperoni').classList.remove('active'); }

    if (state.mushrooms) { document.querySelector('.btn-mushrooms').classList.add('active'); }
    else { document.querySelector('.btn-mushrooms').classList.remove('active'); }

    if (state.greenPeppers) { document.querySelector('.btn-green-peppers').classList.add('active'); }
    else { document.querySelector('.btn-green-peppers').classList.remove('active'); }

    if (state.whiteSauce) { document.querySelector('.btn-sauce').classList.add('active'); }
    else { document.querySelector('.btn-sauce').classList.remove('active'); }

    if (state.glutenFreeCrust) { document.querySelector('.btn-crust').classList.add('active'); }
    else { document.querySelector('.btn-crust').classList.remove('active'); }
}

function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
    const priceList = document.querySelector('.price ul');
    let totalPrice = document.querySelector('.price strong');
    // Reset List
    priceList.innerHTML = '';
    // Reset total price
    let total = basePrice;

    for (let ingr in ingredients) {
        if (state[ingr]) {
            total += +ingredients[ingr].price
            priceList.innerHTML += `<li>$${ingredients[ingr].price} ${ingredients[ingr].name}`
        }
        totalPrice.innerText = total;
    }
    console.log(total);
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
    state.pepperoni = !state.pepperoni;
    renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
    state.mushrooms = !state.mushrooms;
    renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
});
