// Write your Pizza Builder JavaScript in this file.

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
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((shroom) => {
    if(state.mushrooms){
      shroom.style.visibility = 'visible';
    }else {
      shroom.style.visibility = 'hidden'
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if(state.greenPeppers){
      pepper.style.visibility = 'visible';
    }else {
      pepper.style.visibility = 'hidden'
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  // WHY DOES querySelector work and getElementByClassName not work
  const sauceWhite = document.querySelector('.sauce')
  if(state.whiteSauce){
    sauceWhite.classList.add('sauce-white')
  }else{
    sauceWhite.classList.remove('sauce-white')
  }

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustGlutenFree = document.querySelector('.crust')
  if(state.glutenFreeCrust){
    crustGlutenFree.classList.add('crust-gluten-free')
  }else{
    crustGlutenFree.classList.remove('crust-gluten-free')

  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`


  document.querySelectorAll('.btn').forEach((button) => {

    button.onclick = function(){
      if(button.classList.contains('active')){
      button.classList.remove('active')
    }else{
      button.classList.add('active')
    }
  }

  })
  
 
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const pepperoniPrice = document.querySelector('.price li:nth-child(1)')
  const mushroomsPrice = document.querySelector('.price li:nth-child(2)')
  const peppersPrice = document.querySelector('.price li:nth-child(3)')
  const saucePrice = document.querySelector('.price li:nth-child(4)')
  const crustPrice = document.querySelector('.price li:nth-child(5)')
  
  let totalPrice = basePrice;
 

  console.log(crustPrice)

  if (state.pepperoni === true) {
    pepperoniPrice.style.display = "block"
    totalPrice = totalPrice + ingredients['pepperoni']['price']
    console.log(totalPrice)
  }else if(state.pepperoni === !true) {
    pepperoniPrice.style.display = "none"
    totalPrice = totalPrice - ingredients['pepperoni']['price']
    console.log(totalPrice)

  }if (state.mushrooms === true) {
    mushroomsPrice.style.display = "block"
    totalPrice = totalPrice + ingredients['mushrooms']['price']
  }else if(state.mushrooms === !true) {
    mushroomsPrice.style.display = "none"
    totalPrice = totalPrice - ingredients['mushrooms']['price']


  } if (state.greenPeppers === true) {
    peppersPrice.style.display = "block"
    totalPrice = totalPrice + ingredients['greenPeppers']['price']
  }else if(state.greenPeppers === !true) {
    peppersPrice.style.display = "none"
    totalPrice = totalPrice - ingredients['greenPeppers']['price']


  }if (state.whiteSauce === true) {
    saucePrice.style.display = "block"
    totalPrice = totalPrice + ingredients['whiteSauce']['price']
  }else if(state.whiteSauce === !true) {
    saucePrice.style.display = "none"
    totalPrice = totalPrice - ingredients['whiteSauce']['price']


  }if (state.glutenFreeCrust === true) {
    crustPrice.style.display = "block"
    totalPrice = totalPrice - ingredients['glutenFreeCrust']['price']

  }else if(state.glutenFreeCrust === !true) {
    crustPrice.style.display = "none"
    totalPrice = totalPrice - ingredients['glutenFreeCrust']['price']
    
  }  
  let priceHTML = document.querySelector('.price strong').replace('$','')
  console.log(priceHTML)



}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;

  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function(){
  state.greenPeppers = !state.greenPeppers

  renderEverything();


});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function(){
  state.whiteSauce = !state.whiteSauce
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything();
})
