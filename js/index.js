// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 13;
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
  document.querySelectorAll( '.pep' ).forEach( item => {
    if ( state.pepperoni ) {
      item.style.visibility = 'visible';
    } else {
      item.style.visibility = 'hidden';
    }
  } );
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll( '.mushroom' ).forEach( item => {
    if ( state.mushrooms ) {
      item.style.visibility = 'visible';
    } else {
      item.style.visibility = 'hidden';
    }
  } );
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll( '.green-pepper' ).forEach( item => {
    if ( state.greenPeppers ) {
      item.style.visibility = 'visible';
    } else {
      item.style.visibility = 'hidden';
    }
  } );
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll( '.sauce' ).forEach( item => {
    if ( state.sauce ) {
      item.style.visibility = 'visible';
    } else {
      item.style.visibility = 'hidden';
    }
  } );
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust');

  if(state.glutenFreeCrust) crust.classList.remove('crust-gluten-free');
  else crust.classList.add('crust-gluten-free');
}

function renderButtons() {

  let btns = document.querySelectorAll(".btn");

  let btnArr = [...btns];

  btnArr.forEach( button => {
    switch (button.innerHTML) {
      case "pepperoni":
        state.pepperoni ? 
        button.classList.add('active'):
        button.classList.remove('active')
        break;
      case "Mushrooms":
        state.mushrooms ? 
        button.classList.add('active'):
        button.classList.remove('active')
        break;
      case "Green peppers":
        state.greenPeppers ? 
        button.classList.add('active'):
        button.classList.remove('active')
        break;
      case "White sauce":
        state.sauce ? 
        button.classList.add('active'):
        button.classList.remove('active')
        break;
      case "Gluten-free crust":
        state.glutenFreeCrust ? 
        button.classList.add('active'):
        button.classList.remove('active')
        break;
      default:
        break;
    }
    

  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let priceContainer = document.querySelectorAll('aside ul li');
  let priceArr = [...priceContainer];
  let strong = document.querySelector("strong");

  
  priceArr.forEach( price => {
    switch (price.innerHTML) {
      case "$1 pepperoni": //true
        if(state.pepperoni){
        price.style.display = "block"
        } else {
          price.style.display = "none"
        }
        break;
      case "$1 mushrooms": //true
        if(state.mushrooms){
        price.style.display = "block"
        } else {
          price.style.display = "none"
        }
        break;
      case "$1 green peppers": //true

        if(state.greenPeppers){
        price.style.display = "block"
        } else {
          price.style.display = "none"
        }
        break;
      case "$3 white sauce": //false
        if(state.sauce){
          price.style.display = "block"
        } else {
          price.style.display = "none"
        }
        break;
      case "$5 gluten-free crust": //false
        if(state.crust){
           basePrice += ingredients.glutenFreeCrust.price
          price.style.display = "block"
        } else {
           
          price.style.display = "none"
        }
        break;
      default:
        break;
    }

    

    strong.innerHTML = `$${basePrice}`
  });
  
}
    
renderEverything();

let ul = document.querySelector("aside ul");
let li = document.createElement('li');
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector( '.btn.btn-pepperoni' ).addEventListener( 'click', (e) => {
  state.pepperoni = !state.pepperoni
  state.pepperoni ? 
  basePrice += ingredients.pepperoni.price : 
  basePrice -= ingredients.pepperoni.price
  renderEverything();
} );

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector( '.btn.btn-mushrooms' ).addEventListener( 'click', (e) => {
  state.mushrooms = !state.mushrooms;
  state.mushrooms ? 
  basePrice += ingredients.mushrooms.price : 
  basePrice -= ingredients.mushrooms.price
  renderEverything();
} );

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector( '.btn.btn-green-peppers' ).addEventListener( 'click', (e) => {
  state.greenPeppers = !state.greenPeppers;
  state.greenPeppers ? 
  basePrice += ingredients.greenPeppers.price : 
  basePrice -= ingredients.greenPeppers.price
  renderEverything();
} );

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector( '.btn.btn-sauce' ).addEventListener( 'click', (e) => {
  state.sauce = !state.sauce;
  state.sauce ? 
  basePrice += ingredients.whiteSauce.price : 
  basePrice -= ingredients.whiteSauce.price
  renderEverything();
} );

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector( '.btn.btn-crust' ).addEventListener( 'click', (e) => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  state.glutenFreeCrust ? 
  basePrice += ingredients.glutenFreeCrust.price : 
  basePrice -= ingredients.glutenFreeCrust.price
  renderEverything();
} );