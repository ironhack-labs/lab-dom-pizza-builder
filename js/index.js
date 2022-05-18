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
  if(state.mushrooms){
    Array.from(document.querySelectorAll('.mushroom')).forEach(el=>el.style.visibility='visible')
  }else{
    Array.from(document.querySelectorAll('.mushroom')).forEach(el=>el.style.visibility='hidden')
  }
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  if(state.greenPeppers){
    Array.from(document.querySelectorAll('.green-pepper')).forEach(el=>el.style.visibility='visible')
  }else{
    Array.from(document.querySelectorAll('.green-pepper')).forEach(el=>el.style.visibility='hidden')
  }
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if(state.whiteSauce){
    document.querySelector('.sauce.sauce-white').style.visibility='visible'
  }else{
    document.querySelector('.sauce.sauce-white').style.visibility='hidden'
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if(state.glutenFreeCrust){
    document.querySelector('.crust').classList.add('crust-gluten-free')
  }else{
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }

}
const pepperoniBtn = document.querySelector('.btn.btn-pepperoni')
const mushroomsBtn = document.querySelector('.btn.btn-mushrooms')
const greenPeppersBtn = document.querySelector('.btn.btn-green-peppers')
const sauceBtn = document.querySelector('.btn.btn-sauce')
const crustBtn = document.querySelector('.btn.btn-crust')

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(state.pepperoni){
    pepperoniBtn.classList.add('active')
  }else{
    pepperoniBtn.classList.remove('active')
  }
  if(state.mushrooms){
    mushroomsBtn.classList.add('active')
  }else{
    mushroomsBtn.classList.remove('active')
  }
  if(state.greenPeppers){
    greenPeppersBtn.classList.add('active')
  }else{
    greenPeppersBtn.classList.remove('active')
  }
  if(state.whiteSauce){
    sauceBtn.classList.add('active')
  }else{
    sauceBtn.classList.remove('active')
  }
  if(state.glutenFreeCrust){
    crustBtn.classList.add('active')
  }else{
    crustBtn.classList.remove('active')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const pepperoniPrice = pepperoniBtn.classList.contains('active') ? 1 : 0
  const mushroomsPrice = mushroomsBtn.classList.contains('active') ? 1 : 0
  const greenPepperPrice = greenPeppersBtn.classList.contains('active') ? 1 : 0
  const saucePrice = sauceBtn.classList.contains('active') ? 3 : 0
  const crustPrice = crustBtn.classList.contains('active') ? 5 : 0
  const subTotal=pepperoniPrice+mushroomsPrice+greenPepperPrice+saucePrice+crustPrice
  console.log('SubTotal : ', subTotal)
  document.querySelector('.panel.price strong').innerHTML=`$${10+subTotal}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

pepperoniBtn.addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  if(state.pepperoni){
    //pepperoniBtn.classList.add('active')
    document.querySelector('.panel.price ul li:nth-child(1)').style.display="block"
  }else{
    //pepperoniBtn.classList.remove('active')
    document.querySelector('.panel.price ul li:nth-child(1)').style.display="none"
  }
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

mushroomsBtn.addEventListener('click', ()=>{
  state.mushrooms=!state.mushrooms
  if(state.mushrooms){
    //mushroomsBtn.classList.add('active')
    document.querySelector('.panel.price ul li:nth-child(2)').style.display="block"
  }else{
    //mushroomsBtn.classList.remove('active')
    document.querySelector('.panel.price ul li:nth-child(2)').style.display="none"
  }
  renderEverything()
})
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

greenPeppersBtn.addEventListener('click', ()=>{
  state.greenPeppers=!state.greenPeppers
  if(state.greenPeppers){
    //greenPeppersBtn.classList.add('active')
    document.querySelector('.panel.price ul li:nth-child(3)').style.display="block"
  }else{
    //greenPeppersBtn.classList.remove('active')
    document.querySelector('.panel.price ul li:nth-child(3)').style.display="none"
  }
  renderEverything()
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

sauceBtn.addEventListener('click', ()=>{
  state.whiteSauce=!state.whiteSauce
  if(state.whiteSauce){
    //sauceBtn.classList.add('active')
    document.querySelector('.panel.price ul li:nth-child(4)').style.display="block"
  }else{
    //sauceBtn.classList.remove('active')
    document.querySelector('.panel.price ul li:nth-child(4)').style.display="none"
  }
  renderEverything()
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

crustBtn.addEventListener('click', ()=>{
  state.glutenFreeCrust=!state.glutenFreeCrust
  if(state.glutenFreeCrust){
    //crustBtn.classList.add('active')
    document.querySelector('.panel.price ul li:nth-child(5)').style.display="block"
  }else{
    //crustBtn.classList.remove('active')
    document.querySelector('.panel.price ul li:nth-child(5)').style.display="none"
  }
  renderEverything()
})

document.querySelector('.panel.price ul li:nth-child(4)').style.display="none"
document.querySelector('.panel.price ul li:nth-child(5)').style.display="none"