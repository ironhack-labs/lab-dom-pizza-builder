// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
    pepperonni: { name: 'Pepperonni', price: 1 },
    mushrooms: { name: 'Mushrooms', price: 1 },
    greenPeppers: { name: 'Green Peppers', price: 1 },
    whiteSauce: { name: 'White sauce', price: 3 },
    glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// HELLO:D:D:D:D
// Initial value of the state (the state values can change over time)
var state = {
    pepperonni: true,
    mushrooms: true,
    greenPeppers: true,
    whiteSauce: false,
    glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
    renderPepperonni(); // renders pepperoni
    renderMushrooms();
    renderGreenPeppers();
    renderWhiteSauce();
    renderGlutenFreeCrust();

    renderButtons();
    renderPrice();
}

function renderPepperonni() {
    document.querySelectorAll('.pep').forEach(function(el) {
        if (state.pepperonni === true) {
            el.style.visibility = 'visible';
        } else {
            el.style.visibility = 'hidden';
        }
    });
}

function renderMushrooms() {
    // Iteration 1: set the visibility of `<section class="mushroom">`
    document.querySelectorAll('.mushroom').forEach(function(el) {
        if (state.mushrooms === true) {
            el.style.visibility = 'visible';
        } else {
            el.style.visibility = 'hidden';
        }
    });
}

function renderGreenPeppers() {
    // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach(function(el) {
        if (state.greenPeppers === true) {
            el.style.visibility = 'visible';
        } else {
            el.style.visibility = 'hidden';
        }
    });
}

function renderWhiteSauce() {
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    if (state.whiteSauce === true) {
        document.querySelector('.sauce').classList.add('sauce-white');
    } else {
        document.querySelector('.sauce').classList.remove('sauce-white');
    }
}

function renderGlutenFreeCrust() {
    // HAMZA
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    if (state.glutenFreeCrust === true) {
        document.querySelector('.crust').classList.add('crust-gluten-free');
    } else {
        document.querySelector('.crust').classList.remove('crust-gluten-free');
    }
}

function renderButtons() {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    if (state.pepperonni == true) {
        document.querySelector('.btn-pepperonni').classList.add('active');
    } else {
        document.querySelector('.btn-pepperonni').classList.remove('active');
    }

    if (state.mushrooms == true) {
        document.querySelector('.btn-mushrooms').classList.add('active');
    } else {
        document.querySelector('.btn-mushrooms').classList.remove('active');
    }

    if (state.greenPeppers == true) {
        document.querySelector('.btn.btn-green-peppers').classList.add('active');
    } else {
        document.querySelector('.btn.btn-green-peppers').classList.remove('active');
    }

    if (state.whiteSauce == true) {
        document.querySelector('.btn.btn-sauce').classList.add('active');
    } else {
        document.querySelector('.btn.btn-sauce').classList.remove('active');
    }

    if (state.glutenFreeCrust == true) {
        document.querySelector('.btn.btn-crust').classList.add('active');
    } else {
        document.querySelector('.btn.btn-crust').classList.remove('active');
    }
}

function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
    let totalPrice = basePrice;

    for (var i in state) {
        if (state[i] == true) {
            totalPrice += ingredients[i].price;
        }
    }
    console.log(totalPrice);
    document.querySelector('aside.panel.price strong').innerHTML = '$' + totalPrice;
}
renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').addEventListener('click', function() {
    state.pepperonni = !state.pepperonni;
    renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function() {
    state.mushrooms = !state.mushrooms;
    renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function() {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
// HAMZA
document.querySelector('.btn.btn-sauce').addEventListener('click', function() {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
// SYLVIE
document.querySelector('.btn.btn-crust').addEventListener('click', function() {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
});
