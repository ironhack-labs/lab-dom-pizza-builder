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
    document.querySelectorAll('.mushroom').forEach(oneMush => {
        if (state.mushroom) {
            oneMush.style.visibility = 'visible';
        } else {
            oneMush.style.visibility = 'hidden';
        }
    })
}

function renderGreenPeppers() {
    // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach(onePep => {
        if (state.greenPeppers) {
            onePep.style.visibility = 'visible';
        } else {
            onePep.style.visibility = 'hidden';
        }
    });
}

function renderWhiteSauce() {
    let sauce = document.querySelector(".sauce")
    if (state.whiteSauce) {
        sauce.classList.add("sauce-white")
    } else {
        sauce.classList.remove("sauce-white")
    }
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    let crust = document.querySelector(".crust")
    if (state.glutenFreeCrust) {
        crust.classList.add("crust-gluten-free")
    } else {
        crust.classList.remove("crust-gluten-free")
    }
}

function renderButtons() {
    let pepperoniButton = document.querySelector('.btn-pepperoni');

    if (state.pepperoni) {
        pepperoniButton.classList.add('active')
    } else {
        pepperoniButton.classList.remove('active')
    }

    let mushroomsButton = document.querySelector('.btn-mushrooms');

    if (state.mushroom) {
        mushroomsButton.classList.add('active')
    } else {
        mushroomsButton.classList.remove('active')
    }

    let peppersButton = document.querySelector('.btn-green-peppers');

    if (state.greenPeppers) {
        peppersButton.classList.add('active')
    } else {
        peppersButton.classList.remove('active')
    }

    let sauceButton = document.querySelector('.btn-sauce');

    if (state.whiteSauce) {
        sauceButton.classList.add('active')
    } else {
        sauceButton.classList.remove('active')
    }

    let crustButton = document.querySelector('.btn-crust');

    if (state.glutenFreeCrust) {
        crustButton.classList.add('active')
    } else {
        crustButton.classList.remove('active')
    }
}


function renderPrice() {
    let liElements = document.querySelectorAll('.panel.price ul li')
    liElements.forEach(list => {
        list.style.display = 'none'
    })
    let ulElements = document.querySelector('.panel.price ul')
    for (let topping in state) {
        for (let ingredient in ingredients) {
            if (state[topping] && ingredient === topping) {
                let nuevoLi = [...liElements].filter(li => {
                    li.innerText = ''
                })
            }

        }

    }




    // Iteration 4: change the HTML of `<aside class="panel price">`

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
    state.pepperoni = !state.pepperoni;
    renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
    state.mushroom = !state.mushroom;
    renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener('click', () => {
    state.glutenFreeCrust = !state.glutenFreeCrust
    renderEverything()
})