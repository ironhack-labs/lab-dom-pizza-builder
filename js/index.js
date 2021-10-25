// Write your Pizza Builder JavaScript in this file.
// when we render pepperoni, we render all the pepperoni elemements. 
// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
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
  document.querySelectorAll('.pep').forEach((onePep) => {
    // if state is true, we turn it to visible. Add this same thing to the other functions.
    if (state.pepperoni === true) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    // if state is true, we turn it to visible. Add this same thing to the other functions.
    if (state.mushrooms === true) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPeppers) => {
    // if state is true, we turn it to visible. Add this same thing to the other functions.
    if (state.greenPeppers === true) {
      oneGreenPeppers.style.visibility = 'visible';
    } else {
      oneGreenPeppers.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((oneSauce) => {
    // if state is true, we turn it to visible. Add this same thing to the other functions.
    if (state.whiteSauce === true) {

      oneSauce.classList.add('sauce-white')
    } else {
      oneSauce.classList.remove('sauce-white')
    }
  });

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((oneGlutenFreeCrust) => {
    // if state is true, we turn it to visible. Add this same thing to the other functions.
    if (state.glutenFreeCrust === true) {

      oneGlutenFreeCrust.classList.add('crust-gluten-free')
    } else {
      oneGlutenFreeCrust.classList.remove('crust-gluten-free')
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach((button) => {
    // if state is true, we turn it to visible. Add this same thing to the other functions.
    if (state.btn === true) {

      button.classList.add('active')
    } else {
      button.classList.remove('active')
    }
  });

}


// THIS IS THE PRICE
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // [key]
  // loop through state (true or false)
  // check state of every ingredient if true or false
  // if true add to list, class list 
  let price = basePrice;

  // THIS IS THE LIST OF INGREDIENTS
  let list = ""

  for (let ingredient in state) {
    // console.log(ingredients[ingredient])

    if ((state[ingredient]) === true) {
      // console.log(ingredients[ingredient])
      list += `<li> $${ingredients[ingredient].price} ${ingredients[ingredient].name} </li> `
      price += ingredients[ingredient].price
      console.log(list)
    }

    document.querySelector(".panel.price ul").innerHTML = list

    document.querySelector(".panel.price strong").innerHTML = `$${price}`
  }
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  // on the click of the button, it toggles state pepperoni between TRUE/FALSE
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  // on the click of the button, it toggles state pepperoni between TRUE/FALSE
  state.mushrooms = !state.mushrooms;
  renderEverything();
});


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', function () {
  // on the click of the button, it toggles state pepperoni between TRUE/FALSE
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', function () {

  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn-crust').addEventListener('click', function () {

  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});