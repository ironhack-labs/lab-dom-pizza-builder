// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
    pepperoni: { name: "pepperoni", price: 1 },
    mushrooms: { name: "Mushrooms", price: 1 },
    greenPeppers: { name: "Green Peppers", price: 1 },
    whiteSauce: { name: "White sauce", price: 3 },
    glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
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
    renderWhiteSauce();
    renderGlutenFreeCrust();

    renderButtons();
    renderPrice();
}

function renderPepperoni() {
    document.querySelectorAll(".pep").forEach(onePep => {
        if (state.pepperoni) {
            onePep.style.visibility = "visible";
        } else {
            onePep.style.visibility = "hidden";
        }
    });
}

function renderMushrooms() {
    // Iteration 1: set the visibility of `<section class="mushroom">`
    document.querySelectorAll(".mushroom").forEach(onePep => {
        if (state.mushrooms) {
            onePep.style.visibility = "visible";
        } else {
            onePep.style.visibility = "hidden";
        }
    });
}

function renderGreenPeppers() {
    // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll(".green-pepper").forEach(onePep => {
        if (state.greenPeppers) {
            onePep.style.visibility = "visible";
        } else {
            onePep.style.visibility = "hidden";
        }
    });
}

function renderWhiteSauce() {
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    const sauceType = document.querySelector(".sauce");
    if (state.whiteSauce) {
        sauceType.classList.add("sauce-white");
    } else {
        sauceType.classList.remove("sauce-white");
    }
}

function renderGlutenFreeCrust() {
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    const crustType = document.querySelector(".crust");
    if (state.glutenFreeCrust) {
        crustType.classList.add("crust-gluten-free");
    } else {
        crustType.classList.remove("crust-gluten-free");
    }
}

function renderButtons() {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    const btnPep = document.querySelector(".btn-pepperoni");
    if (state.pepperoni) {
        btnPep.classList.add("active");
    } else {
        btnPep.classList.remove("active");
    }

    const btnMushrooms = document.querySelector(".btn-mushrooms");
    if (state.mushrooms) {
        btnMushrooms.classList.add("active");
    } else {
        btnMushrooms.classList.remove("active");
    }

    const btnGreenPeppers = document.querySelector(".btn-green-peppers");
    if (state.greenPeppers) {
        btnGreenPeppers.classList.add("active");
    } else {
        btnGreenPeppers.classList.remove("active");
    }

    const btnWhiteSauce = document.querySelector(".btn-sauce");
    if (state.whiteSauce) {
        btnWhiteSauce.classList.add("active");
    } else {
        btnWhiteSauce.classList.remove("active");
    }

    const btnGlutenFreeCrust = document.querySelector(".btn-crust");
    if (state.glutenFreeCrust) {
        btnGlutenFreeCrust.classList.add("active");
    } else {
        btnGlutenFreeCrust.classList.remove("active");
    }
}

function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
    let totalPrice = basePrice;
    let ingredientsList = document.querySelector("aside.panel.price ul");
    ingredientsList.innerHTML = "";

    for (let ingredient in ingredients) {
        if (state[ingredient]) {
            totalPrice += ingredients[ingredient].price;
            ingredientsList.innerHTML += `<li>$${
                ingredients[ingredient].price
            } ${ingredients[ingredient].name.toLowerCase()}</li>`;
        }
    }
    document.querySelector("aside.panel.price strong").innerHTML =
        "$" + totalPrice;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
    state.pepperoni = !state.pepperoni;
    renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
    state.mushrooms = !state.mushrooms;
    renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
    .querySelector(".btn.btn-green-peppers")
    .addEventListener("click", () => {
        state.greenPeppers = !state.greenPeppers;
        renderEverything();
    });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
});
