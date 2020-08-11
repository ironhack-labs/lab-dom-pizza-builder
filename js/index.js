// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
    pepperoni: {
        name: 'pepperoni',
        price: 1
    },
    mushrooms: {
        name: 'Mushrooms',
        price: 1
    },
    greenPeppers: {
        name: 'Green Peppers',
        price: 1
    },
    whiteSauce: {
        name: 'White sauce',
        price: 3
    },
    glutenFreeCrust: {
        name: 'Gluten-free crust',
        price: 5
    }
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
        if (state.mushrooms) {
            oneMush.style.visibility = 'visible';
        } else {
            oneMush.style.visibility = 'hidden';
        }
    });
}

function renderGreenPeppers() {
    document.querySelectorAll('.green-pepper').forEach(oneGreen => {
        if (state.greenPeppers) {
            oneGreen.style.visibility = 'visible';
        } else {
            oneGreen.style.visibility = 'hidden';
        }
    });
}

function renderWhiteSauce() {
    const $sauce = document.querySelector('.sauce');
    if (state.whiteSauce) {
        $sauce.classList.add("sauce-white")
    } else {
        $sauce.classList.remove("sauce-white");
    }
}; // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderGlutenFreeCrust() {
    const $crust = document.querySelector('.crust');
    if (state.glutenFreeCrust) {
        $crust.classList.add("crust-gluten-free")
    } else {
        $crust.classList.remove("crust-gluten-free");
    }
};
// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`


function renderButtons() {
    const classArray = [
        [state.pepperoni, ".btn.btn-pepperoni"],
        [state.mushrooms, ".btn.btn-mushrooms"],
        [state.greenPeppers, ".btn.btn-green-peppers"],
        [state.whiteSauce, ".btn.btn-sauce"],
        [state.glutenFreeCrust, ".btn.btn-crust"]
    ]

    for (let i = 0; i < classArray.length; i++) {
        if (classArray[i][0]) {
            document.querySelector(classArray[i][1]).classList.add("active")
        } else {
            document.querySelector(classArray[i][1]).classList.remove("active")
        }
    }
}

function renderPrice() {
    const $li = document.querySelectorAll(".panel.price> ul > li");
    const stateArray = Object.values(state);
    const pricesArray = [1, 1, 1, 3, 5];
    let totalPrice = 10;
    $li.forEach((li, index) => {
        if (stateArray[index]) {
            li.style.display = 'block'
            totalPrice += pricesArray[index]
        } else {
            li.style.display = 'none'
        }
    })
    const $totalPrice = document.querySelector(".panel.price>strong");
    $totalPrice.innerText = `$${totalPrice}`
}

renderEverything();

document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
    state.pepperoni = !state.pepperoni;
    renderEverything();
});

document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
    state.mushrooms = !state.mushrooms;
    renderEverything();
})

document.querySelector(".btn.btn-green-peppers").addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
})

document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
})

document.querySelector(".btn.btn-crust").addEventListener("click", () => {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
})