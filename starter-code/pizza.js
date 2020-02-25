// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
    pepperonni: { name: 'Pepperonni', price: 1 },
    mushrooms: { name: 'Mushrooms', price: 1 },
    greenPeppers: { name: 'Green Peppers', price: 1 },
    whiteSauce: { name: 'White sauce', price: 3 },
    glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
}

// Initial value of the state (the state values can change over time)
var state = {
    pepperonni: true,
    mushrooms: true,
    greenPeppers: true,
    whiteSauce: false,
    glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
    renderPepperonni()
    renderMushrooms()
    renderGreenPeppers()
    renderWhiteSauce()
    renderGlutenFreeCrust()

    renderButtons()
    renderPrice()
}

function renderPepperonni() {
    document.querySelectorAll('.pep').forEach(function($pep) {
        if (state.pepperonni) {
            $pep.style.visibility = "visible";
        } else {
            $pep.style.visibility = "hidden";
        }
    })
}

function renderMushrooms() {
    document.querySelectorAll('.mushroom').forEach(function($mushroom) {
        if (state.mushrooms) {
            $mushroom.style.visibility = "visible";
        } else {
            $mushroom.style.visibility = "hidden";
        }
    })
}

function renderGreenPeppers() {
    document.querySelectorAll('.green-pepper').forEach(function($greenpepper) {
        if (state.greenPeppers) {
            $greenpepper.style.visibility = "visible";
        } else {
            $greenpepper.style.visibility = "hidden";
        }
    })
}

function renderWhiteSauce() {
    document.querySelectorAll('.sauce').forEach(function($sauce) {
        if (state.whiteSauce) {
            $sauce.style.visibility = "visible";
        } else {
            $sauce.style.visibility = "hidden";
        }
    })
}

function renderGlutenFreeCrust() {
    document.querySelectorAll('.crust').forEach(function($crust) {
        if (state.glutenFreeCrust) {
            $crust.style.visibility = "visible";
        } else {
            $crust.style.visibility = "hidden";
        }
    })
}
// Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
    var buttons = document.querySelectorAll(".btn")

    for (let i = 0; i < buttons.length; i++) {
        for (const key in ingredients) {
            // console.log(state[key])
            if (ingredients[key].name.toLowerCase() === buttons[i].innerHTML.toLowerCase()) {
                //buttons[i].toggle("active")
                if (state[i]) {
                    buttons[i].classList.toggle("active");
                } else {
                    buttons[i].classList.toggle("active");
                }
            }
        }

    }
}

function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
    state.pepperonni = !state.pepperonni
    renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
        state.mushrooms = !state.mushrooms
        renderEverything()
    }
    // Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
        state.greenPeppers = !state.greenPeppers
        renderEverything()
    }
    // Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
        state.whiteSauce = !state.whiteSauce
        renderEverything()
    }
    // Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
    state.glutenFreeCrust = !state.glutenFreeCrust
    renderEverything()
}





// Try out code
// var btnActive = document.querySelectorAll(".btn .active");
// var removeActive = document.querySelectorAll(".btn .active").innerHTML = ".btn"
// for (let i = 0; i < state.length; i++) {
//     if (state[i] !== ingredients[i].name) {
//         "removeActive"
//     } else { "btnActive" }
// }