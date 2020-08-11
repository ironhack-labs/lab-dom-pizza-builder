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
    whiteSauce: true,
    glutenFreeCrust: true
};

// This function takes care of rendering the pizza based on the state


// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
    renderPepperoni();
    renderMushrooms();
    renderGreenPeppers();
    renderWhiteSauce();
    renderGlutenFreeCrust();

    //renderButtons();
    renderPrice();
}


// asignar valores al dar clic en button Iteración 3
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", function(event) {
        event.target.classList.toggle("active");
    });
});



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
    document.querySelectorAll('.green-pepper').forEach(oneGreen => {
        if (state.greenPeppers) {
            oneGreen.style.visibility = 'visible';
        } else {
            oneGreen.style.visibility = 'hidden';
        }
    });
}

function renderWhiteSauce() {
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    document.querySelectorAll('.sauce').forEach(oneSauce => {
        if (state.whiteSauce) {
            oneSauce.style.visibility = 'visible';
        } else {
            oneSauce.style.visibility = 'hidden';
        }
    });
}

function renderGlutenFreeCrust() {
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    document.querySelectorAll('.crust').forEach(oneGluten => {
        if (state.glutenFreeCrust) {
            oneGluten.style.visibility = 'visible';
        } else {
            oneGluten.style.visibility = 'hidden';
        }
    });
}

function renderButtons() {
    /*   Iteration 3: add/remove the class "active" of each `<button class="btn">`
    .addEventListener('click', () => { */

    let $removeButtom = document.querySelectorAll(".btn");

    if ($removeButtom.classList.contains == "btn btn-pepperoni active") {
        removeButtom.classList.remove("active")
    } else {
        removeButtom.classList.add("active")
    }



    /* let buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", function(event) {
            event.target.classList.toggle("active");
        });
    });
 */



}

renderEverything();

function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`

    var totalPrice = 10;

    if (document.querySelector('.btn-pepperoni').classList.contains('active')) {
        totalPrice += 1;
    }
    if (document.querySelector('.btn.btn-mushrooms').classList.contains('active')) {
        totalPrice += 1;
    }
    if (document.querySelector('.btn.btn-green-peppers').classList.contains('active')) {
        totalPrice += 1;
    }
    if (document.querySelector('.btn.btn-sauce').classList.contains('active')) {
        totalPrice += 3;
    }
    if (document.querySelector('.btn.btn-crust').classList.contains('active')) {
        totalPrice += 5;
    }

    let $totalPrice = document.querySelector("aside strong");
    $totalPrice.innerHTML = `${totalPrice} `;



    /*     document.querySelector('#total-price').innerText(`${totalPrice}`); */
    console.log(totalPrice)




}




renderEverything();

// Iteration 1: Example of a click event listener on ` < button class = "btn btn-pepperoni" > `
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
    state.pepperoni = !state.pepperoni;
    renderEverything();
});

// Iteration 1: Add click event listener on ` < button class = "btn btn-mushrooms" > `
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
    state.mushrooms = !state.mushrooms;
    renderEverything();
});

// Iteration 1: Add click event listener on ` < button class = "btn btn-green-peppers" > `
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
});
// Iteration 2: Add click event listener on ` < button class = "btn btn-sauce" > `
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
});

// Iteration 2: Add click event listener on ` < button class = "btn btn-crust" > `
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
});