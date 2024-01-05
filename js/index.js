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

/************************************************ */

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
      
    } else {
      onePep.style.visibility = 'hidden';
      
    }
  });
}
/************************************************ */

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(`.mushroom`).forEach((oneMushrooms) => {
    if ( state.mushrooms){
      oneMushrooms.style.visibility = `visible`;
    } else {
      oneMushrooms.style.visibility = `hidden` ;
      
    }
  })
}
/********************************************* */

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll (`.green-pepper`).forEach((oneGreenPepper) => {
    if ( state.greenPeppers) {
      oneGreenPepper.style.visibility = `visible`;
      
    } else {
      oneGreenPepper.style.visibility = `hidden`;
      
    }
  })
}
/********************************************* */

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  
  if (state.whiteSauce){
    
    document.querySelector(`.sauce`).classList.add("sauce-white")
    

  }else {
    document.querySelector(`.sauce`).classList.remove("sauce-white")
    
  }
}
/************************************************ */

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if ( state.glutenFreeCrust) {
    document.querySelector(`.crust`).classList.add(`crust-gluten-free`)

  } else {
    document.querySelector(`.crust`).classList.remove(`crust-gluten-free`)
  }
  
}
/***************************************************** */

function renderButtons() {//I have decided to cancel this function because it's solved with one line of code using "addEventListener"
  
}

/**************************************************** */

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let priceBase = 10 
   
  if (document.querySelector(`strong`).innerHTML==="$ 11" )
  {
    document.querySelector(`strong`).innerHTML="$ 10"
    document.querySelector(`#strong`).innerHTML=`$ ${priceBase}`
  }
  
 
  if (state.pepperoni===false){
  document.querySelector("#pepperoni_price").style.display=`none`
  document.querySelector(`#strong`).innerHTML=`$ ${priceBase}`
  
 
}else if( state.pepperoni === true){
  document.querySelector("#pepperoni_price").style.display=`block`
  priceBase = priceBase + 1
  document.querySelector(`#strong`).innerHTML=`$ ${priceBase}`
   
}

if (state.mushrooms===false){
  document.querySelector("#mushroom_price").style.display=`none`
  document.querySelector(`#strong`).innerHTML=`$ ${priceBase}`
}else {
  document.querySelector("#mushroom_price").style.display=`block`
  priceBase = priceBase + 1
  document.querySelector(`#strong`).innerHTML=`$ ${priceBase}`

 
}
 
if (state.greenPeppers===false){
  document.querySelector("#green-pepper_price").style.display=`none`
  document.querySelector(`#strong`).innerHTML=`$ ${priceBase}`
 
}else {
  document.querySelector("#green-pepper_price").style.display=`block`
  priceBase = priceBase + 1
  document.querySelector(`#strong`).innerHTML=`$ ${priceBase}`
}

if (state.whiteSauce===true){
  document.querySelector("#sauce_price").style.display=`block`
  priceBase = priceBase + 3
  document.querySelector(`#strong`).innerHTML=`$ ${priceBase}`
}else {
  document.querySelector("#sauce_price").style.display=`none`
   
  
}
if (state.glutenFreeCrust===true){
  document.querySelector("#crust_price").style.display=`block`
 priceBase = priceBase + 5
 document.querySelector(`#strong`).innerHTML=`$ ${priceBase}`
}else {
  document.querySelector("#crust_price").style.display=`none`
}


}
/*console.log(state.pepperoni)
console.log(state.mushrooms)
console.log(state.greenPeppers)
console.log(state.whiteSauce)
console.log (state.glutenFreeCrust)*/

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
  document.querySelector('.btn.btn-pepperoni').classList.toggle(`active`)
 // document.querySelector(`#pepperoni_price`).style. display=`none`;


});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(`.btn.btn-mushrooms`).addEventListener(`click`, function () {
  state.mushrooms = !state.mushrooms ;
  renderEverything();
  document.querySelector(`.btn.btn-mushrooms`).classList.toggle(`active`)

 
})
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector(`.btn.btn-green-peppers`).addEventListener(`click`,function() {
  state.greenPeppers = !state.greenPeppers ;
  renderEverything ();
  document.querySelector(`.btn.btn-green-peppers`).classList.toggle(`active`)
 
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener (`click`, function () {
  state.whiteSauce = !state.whiteSauce ;
  renderEverything();
  document.querySelector(".btn.btn-sauce").classList.toggle("active")
  
  

})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener (`click`, function () {
  state. glutenFreeCrust = !state.glutenFreeCrust ;
  renderEverything();
  document.querySelector(".btn.btn-crust").classList.toggle(`active`)

  console.log(state.glutenFreeCrust)

})