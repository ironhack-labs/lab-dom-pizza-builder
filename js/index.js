// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
    pepperoni: { name: 'pepperoni', price: 1 },
    mushrooms: { name: 'Mushrooms', price: 1 },
    greenPeppers: { name: 'Green Peppers', price: 1 },
    whiteSauce: { name: 'White sauce', price: 3 },
    glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
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
    //renderWhiteSauce();
    //renderGlutenFreeCrust();

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
    // Iteration 1: set the visibility of `<section class="mushroom">`
    document.querySelectorAll('.mushroom').forEach(oneMush => {
        if (state.mushrooms) {
            oneMush.style.visibility = 'visible';
        } else {
            oneMush.style.visibility = 'hidden';
        }
    });
}

function renderGreenPeppers() {
    // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach(greenpepper => {
        if (state.greenPeppers) {
            greenpepper.style.visibility = 'visible';
        } else {
            greenpepper.style.visibility = 'hidden';
        }
    });
}

function renderWhiteSauce() {
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    document.querySelector('.sauce').classList.toggle("sauce-white");
    console.log(document.querySelector('.sauce'));
}

function renderGlutenFreeCrust() {
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    document.querySelector('.crust').classList.toggle("crust-gluten-free");
    console.log(document.querySelector('.crust'));
}

function renderButtons() {

    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    let buttons = document.querySelectorAll('.btn');
    for (let i = 0; i < Object.keys(state).length; i++) {
        //console.log(buttons[i]);
        if (Object.values(state)[i]) buttons[i].classList.add("active");
        else buttons[i].classList.remove("active");
    }
}

function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
    let priceUl = document.querySelector(".price ul");
    //let lilist = document.querySelectorAll(".price li");
    console.log(priceUl.innerHTML);
    priceUl.innerHTML = "";
    let price = 10;

    for (let i = 0; i < Object.keys(state).length; i++) {
        if (Object.values(state)[i]) {
            priceUl.innerHTML += `<li>$ ${Object.values(ingredients)[i].price} ${Object.values(ingredients)[i].name}</li>`;
            price += Object.values(ingredients)[i].price;
        }
    }

    let htmlprice = document.querySelector(".price strong");
    htmlprice.innerHTML = `$ ${price}`;
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
    renderWhiteSauce();
    renderButtons();
    renderPrice();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderGlutenFreeCrust();
    renderButtons();
    renderPrice();
});