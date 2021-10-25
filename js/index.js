// Write your Pizza Builder JavaScript in this file.

const list = document.querySelector(".panel.price ul")
list.innerHTML = ""

// Constants
const basePrice = 10
const ingredients = {
    pepperoni: { name: "pepperoni", price: 1 },
    mushrooms: { name: "Mushrooms", price: 1 },
    greenPeppers: { name: "Green Peppers", price: 1 },
    whiteSauce: { name: "White sauce", price: 3 },
    glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
}

// Initial value of the state (the state values can change over time)
const state = {
    pepperoni: true,
    mushrooms: true,
    greenPeppers: true,
    whiteSauce: false,
    glutenFreeCrust: false,
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
    renderPepperoni()
    renderMushrooms()
    renderGreenPeppers()
    renderWhiteSauce()
    renderGlutenFreeCrust()

    renderButtons()
    renderPrice()
}

function renderPepperoni() {
    document.querySelectorAll(".pep").forEach(onePep => {
        if (state.pepperoni) {
            onePep.style.visibility = "visible"
        } else {
            onePep.style.visibility = "hidden"
        }
    })
}

function renderMushrooms() {
    // Iteration 1: set the visibility of `<section class="mushroom">`
    document.querySelectorAll(".mushroom").forEach(oneMush => {
        if (state.mushrooms) {
            oneMush.style.visibility = "visible"
        } else {
            oneMush.style.visibility = "hidden"
        }
    })
}

function renderGreenPeppers() {
    // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll(".green-pepper").forEach(onePepper => {
        if (state.greenPeppers) {
            onePepper.style.visibility = "visible"
        } else {
            onePepper.style.visibility = "hidden"
        }
    })
}

function renderWhiteSauce() {
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    const sauce = document.querySelector(".sauce")

    if (state.whiteSauce) {
        sauce.classList.add("sauce-white")
    } else {
        sauce.classList.remove("sauce-white")
    }
}

function renderGlutenFreeCrust() {
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    const crust = document.querySelector(".crust")

    if (state.glutenFreeCrust) {
        crust.classList.add("crust-gluten-free")
    } else {
        crust.classList.remove("crust-gluten-free")
    }
}

function renderButtons() {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    if (state.pepperoni) {
        document.querySelector(".btn.btn-pepperoni").classList.add("active")
    } else if (!state.pepperoni) {
        document.querySelector(".btn.btn-pepperoni").classList.remove("active")
    }

    if (state.mushrooms) {
        document.querySelector(".btn.btn-mushrooms").classList.add("active")
    } else if (!state.mushrooms) {
        document.querySelector(".btn.btn-mushrooms").classList.remove("active")
    }

    if (state.greenPeppers) {
        document.querySelector(".btn.btn-green-peppers").classList.add("active")
    } else if (!state.greenPeppers) {
        document
            .querySelector(".btn.btn-green-peppers")
            .classList.remove("active")
    }

    if (state.whiteSauce) {
        document.querySelector(".btn.btn-sauce").classList.add("active")
    } else if (!state.whiteSauce) {
        document.querySelector(".btn.btn-sauce").classList.remove("active")
    }

    if (state.glutenFreeCrust) {
        document.querySelector(".btn.btn-crust").classList.add("active")
    } else if (!state.glutenFreeCrust) {
        document.querySelector(".btn.btn-crust").classList.remove("active")
    }
}

// Toggle visibility for each items
const newPepperoni = document.createElement("li")
// $1 pepperoni
newPepperoni.innerText = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`
// newPepperoni.innerText = ingredients.pepperoni.price

const newMushrooms = document.createElement("li")
newMushrooms.innerText = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`
// newMushrooms.innerText = ingredients.mushrooms.price

const newPeppers = document.createElement("li")
newPeppers.innerText = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`
// newPeppers.innerText = ingredients.greenPeppers.price

const newSauce = document.createElement("li")
newSauce.innerText = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`
// newSauce.innerText = ingredients.whiteSauce.price

const newCrust = document.createElement("li")
newCrust.innerText = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`
// newCrust.innerText = ingredients.glutenFreeCrust.price

function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
    let totalPrice = basePrice

    if (state.pepperoni) {
        totalPrice += ingredients.pepperoni.price
        list.appendChild(newPepperoni)
    } else if (!state.pepperoni) {
        newPepperoni.remove()
    }

    if (state.mushrooms) {
        totalPrice += ingredients.mushrooms.price
        list.appendChild(newMushrooms)
    } else if (!state.mushrooms) {
        newMushrooms.remove()
    }

    if (state.greenPeppers) {
        totalPrice += ingredients.greenPeppers.price
        list.appendChild(newPeppers)
    } else if (!state.greenPeppers) {
        newPeppers.remove()
    }

    if (state.whiteSauce) {
        totalPrice += ingredients.whiteSauce.price
        list.appendChild(newSauce)
    } else if (!state.whiteSauce) {
        newSauce.remove()
    }

    if (state.glutenFreeCrust) {
        totalPrice += ingredients.glutenFreeCrust.price
        list.appendChild(newCrust)
    } else if (!state.glutenFreeCrust) {
        newCrust.remove()
    }

    document.querySelector(".price strong").innerText = totalPrice
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
    .querySelector(".btn.btn-pepperoni")
    .addEventListener("click", function () {
        state.pepperoni = !state.pepperoni
        renderEverything()
    })

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
    .querySelector(".btn.btn-mushrooms")
    .addEventListener("click", function () {
        state.mushrooms = !state.mushrooms
        renderEverything()
    })

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
    .querySelector(".btn.btn-green-peppers")
    .addEventListener("click", function () {
        state.greenPeppers = !state.greenPeppers
        renderEverything()
    })

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", function () {
    state.whiteSauce = !state.whiteSauce
    renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", function () {
    state.glutenFreeCrust = !state.glutenFreeCrust
    renderEverything()
})
