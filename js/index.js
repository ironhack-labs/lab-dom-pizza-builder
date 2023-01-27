// Write your Pizza Builder JavaScript in this file.

//---------------------------------------------------------------------------------------------------

//DOM manipulation to create variables for later use

let pepperoni = document.querySelector('.btn-pepperoni')
pepperoni.setAttribute('id','pepperoni')
let mushrooms = document.querySelector('.btn-mushrooms')
mushrooms.setAttribute('id','mushrooms')
let greenPeppers = document.querySelector('.btn-green-peppers')
greenPeppers.setAttribute('id','greenPeppers')
let whiteSauce = document.querySelector('.btn-sauce')
whiteSauce.setAttribute('id','whiteSauce')
let glutenFreeCrust = document.querySelector('.btn-crust')
glutenFreeCrust.setAttribute('id','glutenFreeCrust')
let priceList = [...document.querySelectorAll('aside li')]
priceList[0].classList.add('pepperoni')
priceList[1].classList.add('mushrooms')
priceList[2].classList.add('greenPeppers')
priceList[3].classList.add('whiteSauce')
priceList[4].classList.add('glutenFreeCrust')

//---------------------------------------------------------------------------------------------------

// Constants: I missed this part and ended up not using this information

const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

//---------------------------------------------------------------------------------------------------

// Initial value of the state (the state values can change over time)

const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

//---------------------------------------------------------------------------------------------------

//Ensuring buttons are active or not active as per state of ingredients before clicking event

function defaultButtons(){

  let btnsArray = [...document.getElementsByClassName('btn')]

  for(let item of btnsArray){

      if (state[item.id]){
        item.classList.add('active')
      }
      else if(!state[item.id]){
        item.classList.remove('active')
      }
  }

}

//---------------------------------------------------------------------------------------------------

defaultButtons()

//---------------------------------------------------------------------------------------------------

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

//---------------------------------------------------------------------------------------------------

function renderPepperoni() {

  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } 
    else {
      onePep.style.visibility = 'hidden';
    }

  });
  
}

//---------------------------------------------------------------------------------------------------

function renderMushrooms() {

  // Iteration 1: set the visibility of `<section class="mushroom">`

  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';  
    } 
    else {
      oneMushroom.style.visibility = 'hidden';
    }

  });

}

//---------------------------------------------------------------------------------------------------

function renderGreenPeppers() {

  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';  
    } 
    else {
      oneGreenPep.style.visibility = 'hidden';  
    }

  });

}

//---------------------------------------------------------------------------------------------------

function renderWhiteSauce() {

  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  document.querySelectorAll('.sauce-white').forEach((sauceWhite) =>{
    if(state.whiteSauce){
      sauceWhite.style.visibility = 'visible'  
    }
    else{
      sauceWhite.style.visibility='hidden'  
    }
  
  })

}

//---------------------------------------------------------------------------------------------------

function renderGlutenFreeCrust() {

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  document.querySelectorAll('.crust').forEach((crust) =>{
    if(state.glutenFreeCrust){
      crust.style.visibility = 'visible'  
    }
    else{
      crust.style.visibility='hidden' 
    }

  })
  
}

//---------------------------------------------------------------------------------------------------

function renderButtons() {

  let btnsArray = [...document.getElementsByClassName('btn')]
  
  for (let item of btnsArray){
      
        if(!state[item.id] && item.classList.contains('active')){
        item.classList.remove('active')
        
        }
        else if(state[item.id] && !item.classList.contains('active')){
          item.classList.add('active')
          
        }
      
  }

}

//---------------------------------------------------------------------------------------------------

function renderPrice() {

  // Iteration 4: change the HTML of `<aside class="panel price">`

  let startPrice = parseFloat(document.querySelector('aside b').innerText.substring(1));
  for(let item of priceList){
   if(state[item.className]){
    startPrice += parseFloat(item.innerText[1])
    document.querySelector('aside ul').appendChild(item)
   }
   else{
    item.remove()
    
   }
 }
 document.querySelector('strong').innerText = `$${startPrice}`

}

//---------------------------------------------------------------------------------------------------

renderEverything();

//---------------------------------------------------------------------------------------------------

function eventHandlers(){

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

  pepperoni.addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

  mushrooms.addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

  greenPeppers.addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

  whiteSauce.addEventListener('click', function () {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

  glutenFreeCrust.addEventListener('click', function () {
    state.glutenFreeCrust = !state.glutenFreeCrust;
      renderEverything();
  });

}

//---------------------------------------------------------------------------------------------------

eventHandlers();

//---------------------------------------------------------------------------------------------------