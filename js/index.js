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
  

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let priceContainer = document.querySelector('aside ul')

//     if(item.classList.contains('price')) {
//       item.classList.remove('price')
//     } else {
//       item.classList.add('price')
//     }
}
    
renderEverything();

let ul = document.querySelector("aside ul");
let li = document.createElement('li');
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector( '.btn.btn-pepperoni' ).addEventListener( 'click', (e) => {
  state.pepperoni = !state.pepperoni;
  if(e.target.classList.contains("active")){
    ul.innerHTML = `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`
    e.target.classList.remove("active")
  } 
  else {
    ul.innerHTML = ``;
    e.target.classList.add("active")
  }


  renderEverything();
} );

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector( '.btn.btn-mushrooms' ).addEventListener( 'click', (e) => {
  state.mushrooms = !state.mushrooms;
  if(e.target.classList.contains("active")){
    ul.innerHTML = `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`
    e.target.classList.remove("active")
  } 
  else {
    ul.innerHTML = ``;
    e.target.classList.add("active")
  }
  renderEverything();
} );

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector( '.btn.btn-green-peppers' ).addEventListener( 'click', (e) => {
  state.greenPeppers = !state.greenPeppers;
  if(e.target.classList.contains("active")){
    e.target.classList.remove("active")
  } 
  else {
    li.className = ingredients.greenPeppers.name;
    li.innerHTML = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`
    ul.appendChild(li);
    e.target.classList.add("active")
  }
  renderEverything();
} );

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector( '.btn.btn-sauce' ).addEventListener( 'click', (e) => {
  state.sauce = !state.sauce;
  if(e.target.classList.contains("active")){
    ul.innerHTML = `<li>$${ingredients.sauce.price} ${ingredients.sauce.name}`
    e.target.classList.remove("active")
  } 
  else {
    ul.innerHTML = ``;
    e.target.classList.add("active")
  }
  renderEverything();
} );

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector( '.btn.btn-crust' ).addEventListener( 'click', (e) => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  if(e.target.classList.contains("active")){
    ul.innerHTML = `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`
    e.target.classList.remove("active")
  } 
  else {
    ul.innerHTML = ``;
    e.target.classList.add("active")
  }
  renderEverything();
} );