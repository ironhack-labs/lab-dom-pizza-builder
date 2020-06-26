// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
    pepperoni: { name: "pepperoni", price: 1 },
    mushrooms: { name: "Mushrooms", price: 1 },
    greenPeppers: { name: "Green Peppers", price: 1 },
    whiteSauce: { name: "White sauce", price: 3 },
    glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
    pepperoni: false,
    mushrooms: false,
    greenPeppers: false,
    whiteSauce: true,
    glutenFreeCrust: true,
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
    document.querySelectorAll(".pep").forEach((onePep) => {
        state.pepperoni
            ? (onePep.style.visibility = "visible")
            : (onePep.style.visibility = "hidden");
    });
}

function renderMushrooms() {
    // Iteration 1: set the visibility of `<section class="mushroom">`
    document.querySelectorAll(".mushroom").forEach((eachMushroom) => {
        state.mushrooms
            ? (eachMushroom.style.visibility = "visible")
            : (eachMushroom.style.visibility = "hidden");
    });
}

function renderGreenPeppers() {
    // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll(".green-pepper").forEach((eachPepper) => {
        state.greenPeppers
            ? (eachPepper.style.visibility = "visible")
            : (eachPepper.style.visibility = "hidden");
    });
}

function renderWhiteSauce() {
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    state.whiteSauce
        ? document.querySelector(".sauce").classList.remove("sauce-white")
        : document.querySelector(".sauce").classList.add("sauce-white");
}

function renderGlutenFreeCrust() {
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    state.glutenFreeCrust
        ? document.querySelector(".crust").classList.remove("crust-gluten-free")
        : document.querySelector(".crust").classList.add("crust-gluten-free");
}

function renderButtons() {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    state.pepperoni
        ? document.querySelector(".btn-pepperoni").classList.add("active")
        : document.querySelector(".btn-pepperoni").classList.remove("active");
    state.mushrooms
        ? document.querySelector(".btn-mushrooms").classList.add("active")
        : document.querySelector(".btn-mushrooms").classList.remove("active");
    state.greenPeppers
        ? document.querySelector(".btn-green-peppers").classList.add("active")
        : document
              .querySelector(".btn-green-peppers")
              .classList.remove("active");
    state.whiteSauce
        ? document.querySelector(".btn-sauce").classList.remove("active")
        : document.querySelector(".btn-sauce").classList.add("active");
    state.glutenFreeCrust
        ? document.querySelector(".btn-crust").classList.remove("active")
        : document.querySelector(".btn-crust").classList.add("active");
}

function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
}
//=============================================================
renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn-pepperoni").addEventListener("click", () => {
    state.pepperoni = !state.pepperoni;
    renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn-mushrooms").addEventListener("click", () => {
    state.mushrooms = !state.mushrooms;
    renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn-green-peppers").addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn-sauce").addEventListener("click", () => {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn-crust").addEventListener("click", () => {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
});
