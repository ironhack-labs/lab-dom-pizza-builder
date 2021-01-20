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
    document.querySelectorAll('.mushroom').forEach(oneMushroom => {
        if (state.mushrooms) {
            oneMushroom.style.visibility = 'visible';
        } else {
            oneMushroom.style.visibility = 'hidden';
        }
    });
}

function renderGreenPeppers() {
    document.querySelectorAll('.green-pepper').forEach(onePepper => {
        if (state.greenPeppers) {
            onePepper.style.visibility = 'visible';
        } else {
            onePepper.style.visibility = 'hidden';
        }
    });

}

function renderWhiteSauce() {
    document.querySelectorAll('.sauce').forEach(oneSau => {
        if (state.whiteSauce) {
            oneSau.classList.add("sauce-white");
        } else {
            oneSau.classList.remove("sauce-white");
        }
    })
}

function renderGlutenFreeCrust() {
    document.querySelectorAll('.crust').forEach(sauWh => {
        if (state.glutenFreeCrust) {
            sauWh.classList.add("crust-gluten-free");
        } else {
            sauWh.classList.remove("crust-gluten-free");
        }
    })
}

function renderButtons(event) {
    if (event) {
        console.log(event)
        const currentButton = event.currentTarget;
        const status = currentButton.classList.contains('active')
        if (status === true) {
            currentButton.classList.remove('active');
        } else {
            currentButton.classList.add('active');
        }
    }
}

function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
    state.pepperoni = !state.pepperoni;
    renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
    state.mushrooms = !state.mushrooms;
    renderEverything();
});


document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
});

document.querySelector(".btn.btn-sauce").addEventListener("click", (event) => {
    state.whiteSauce = !state.whiteSauce;
    renderEverything(event);
});

document.querySelector(".btn.btn-crust").addEventListener("click", (event) => {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything(event);
});