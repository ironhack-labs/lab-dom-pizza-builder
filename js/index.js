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

  // Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {

    document.querySelectorAll('.green-pepper').forEach(onePep => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
    }); 
}


  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  // console.log(state.whiteSauce)
if (state.whiteSauce === false){
  document.querySelector('.sauce').classList.remove('sauce-white')
} else {
  document.querySelector('.sauce').classList.add('sauce-white')
}
// console.log(document.querySelector('.sauce'))
}
// document.querySelector('.sauce').classList.toggle('.sauce-white')

//   // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {

if (state.glutenFreeCrust === false){
  document.querySelector('.crust').classList.remove('crust-gluten-free')
} else {
  document.querySelector('.crust').classList.add('crust-gluten-free')
}
}

// // function renderGlutenFreeCrust() {
// // }
//   // Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
  // console.log('hi')
if (state.pepperoni){
  document.querySelector('.btn.btn-pepperoni').classList.add('active')   
} 
else {
  document.querySelector('.btn.btn-pepperoni').classList.remove('active') 
} 
if (state.mushrooms){
  document.querySelector('.btn.btn-mushrooms').classList.add('active') 
} 
else {
  document.querySelector('.btn.btn-mushrooms').classList.remove('active') 
}
 if (state.greenPeppers){
  document.querySelector('.btn.btn-green-peppers').classList.add('active')
} 
else {
  document.querySelector('.btn.btn-green-peppers').classList.remove('active')
} 
if (state.whiteSauce){
  document.querySelector('.btn.btn-sauce').classList.add('active')
 }
 else {
  document.querySelector('.btn.btn-sauce').classList.remove('active')
 } 
 if (state.glutenFreeCrust){
  document.querySelector('.btn.btn-crust').classList.add('active')
 } 
 else {
  document.querySelector('.btn.btn-crust').classList.remove('active')
 }
}



// const lookup = {}


// function renderButtons() {
//   Objects.keys(state).forEach(function (ingredient)
//   )
// }


// else if (state.mushrooms){
//   document.querySelector('btn.btn-mushrooms.active').classList.remove('active') 
// } else if (state.greenPeppers){
//   document.querySelector('btn.btn-green-peppers.active').classList.remove('active')
// } else if (state.whiteSauce){
//   document.querySelector('btn.btn-sauce').classList.remove('active')
// } else if (state.glutenFreeCrust){
//   document.querySelector('btn.btn-crust').classList.remove('active')
// }


// btn.btn-pepperoni.active

// btn btn-mushrooms active

// btn btn-green-peppers active

// btn btn-sauce active

// btn btn-crust active


function renderPrice() {
  let list = '';
  let price = basePrice;
  for (let ingredient in state) {
    if (state[ingredient]) {
      // console.log(ingredients[ingredient].name)
      list += `<li>$ ${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`
      price += ingredients[ingredient].price
    }
  }
  document.querySelector('.panel.price ul').innerHTML = list;
  document.querySelector('.panel.price strong').innerText = `$${price}`;
}





  // document.querySelectorAll('panel price').forEach( prices => {
  //   state.peperoni  + state.mushrooms + state.greenPeppers
  //   return prices
  // console.log(document.querySelectorAll('panel price'). 
  // innerHTMLS

//   // Iteration 4: change the HTML of `<aside class="panel price">`
//   //display the list of all items selected
//   //display the total price
//   console.log(prices)
// }

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
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
  // console.log('the green pepper');
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  console.log("this is crust");
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});


