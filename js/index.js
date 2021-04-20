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
    document.querySelectorAll('.mushroom').forEach(onePep => {
        if (state.mushrooms) {

            onePep.style.visibility = 'visible';
        } else {
            onePep.style.visibility = 'hidden';
        }
    });


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
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

    document.querySelectorAll('.sauce').forEach(onePep => {
        if (state.whiteSauce) {

            onePep.style.visibility = 'visible';
        } else {
            onePep.style.visibility = 'hidden';
        }
    });
}

function renderGlutenFreeCrust() {
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    document.querySelectorAll('.crust').forEach(onePep => {
        if (state.glutenFreeCrust) {

            onePep.style.visibility = 'visible';
        } else {
            onePep.style.visibility = 'hidden';
        }
    });
}

function renderButtons() {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    const {
        pepperoni,
        mushrooms,
        greenPeppers,
        whiteSauce,
        glutenFreeCrust: crust
    } = state;
    document.querySelectorAll('.btn').forEach(onePep => {


        switch (onePep.textContent) {
            case 'pepperoni':

                pepperoni ? onePep.classList.add('active') : onePep.classList.remove('active');
                break;

            case 'Mushrooms':

                mushrooms ? onePep.classList.add('active') : onePep.classList.remove('active');
                break;
            case 'Green peppers':

                greenPeppers ? onePep.classList.add('active') : onePep.classList.remove('active');

                break;
            case 'White sauce':

                whiteSauce ? onePep.classList.add('active') : onePep.classList.remove('active');
                break;
            case 'Gluten-free crust':

                crust ? onePep.classList.add('active') : onePep.classList.remove('active');
                break;


        }

    });
}

function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
    let cantidad = 0
    const {
        pepperoni,
        mushrooms,
        greenPeppers,
        whiteSauce,
        glutenFreeCrust: crust
    } = state;
    document.querySelectorAll('.menu').forEach((onePep, index) => {



        switch (onePep.innerHTML) {
            case "$1 pepperoni":
                pepperoni ? (
                    onePep.style.visibility = 'visible',
                    cantidad = cantidad + 1

                ) : (

                    onePep.style.visibility = 'hidden',
                    cantidad = cantidad - 1


                );

                if (pepperoni) {
                    onePep.style.visibility = 'visible',
                        cantidad += 1
                } else {
                    onePep.style.visibility = 'hidden'
                    cantidad -= 1
                }


                break;

            case '$1 mushrooms':
                mushrooms ? (
                    onePep.style.visibility = 'visible',
                    cantidad += 1

                ) : (

                    onePep.style.visibility = 'hidden',
                    cantidad -= 1

                );

                break;
            case '$1 green peppers':

                greenPeppers ? (
                    onePep.style.visibility = 'visible',
                    cantidad += 1
                ) : (

                    onePep.style.visibility = 'hidden',
                    cantidad -= 1

                );

                break;
            case '$3 white sauce':
                whiteSauce ? (
                    onePep.style.visibility = 'visible',
                    cantidad += 3
                ) : (

                    onePep.style.visibility = 'hidden',
                    cantidad -= 3

                );

                break;
            case '$5 gluten-free crust':

                crust ? (
                    onePep.style.visibility = 'visible',
                    cantidad += 5
                ) : (

                    onePep.style.visibility = 'hidden',
                    cantidad -= 5

                );
                break;






        }








    })

    let precio = document.getElementById('precio');

    precio.innerHTML = `$${10+(cantidad-1)}`








    /* 

    NO SE ME OCURRIO OTRA IDEA :(

    */




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
    console.log("entro aqui");
    console.log(state.greenPeppers);
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

let button = document.getElementById('btn-crust');
console.log(button);
button.onclick = () => {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
};