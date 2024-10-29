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
  document.querySelectorAll('.mushroom').forEach((oneMushroom)=>{
    if(state.mushrooms){
      oneMushroom.style.visibility = 'visible';
    }else{
      oneMushroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper)=>{
    if(state.greenPeppers){
      onePepper.style.visibility = 'visible';
    } else{
      onePepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce')
  if(!state.whiteSauce){
    sauce.classList.remove('sauce-white')
  } else {
    sauce.classList.add('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const gluten = document.querySelector('.crust');
  if(!state.glutenFreeCrust){
    gluten.classList.remove('crust-gluten-free')
  } else{
    gluten.classList.add('crust-gluten-free')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button)=>{
    button.classList.remove('active');
    button.addEventListener('click', ()=>{
      button.classList.toggle('active')
    })
  })
  
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
const price = document.querySelector('aside');
const strong = price.querySelector('strong')
const ul = price.querySelector('ul');
while(ul.firstChild){
  ul.removeChild(ul.firstChild);
}
price.removeChild(strong)
let sum = 10;
for (let key in state){

  if(key === 'pepperoni'){
    if(state.pepperoni){
      let liElement = document.createElement('li');
      liElement.innerHTML = '$1 pepperoni';
      ul.append(liElement);
      sum += 1;
    }
  }
  if(key === 'mushrooms'){
    if(state.mushrooms){
      let liElement = document.createElement('li');
      liElement.innerHTML = '$1 mushrooms';
      ul.append(liElement);
      sum += 1
    }
  }
  if(key === 'greenPeppers'){
    if(state.greenPeppers){
      let liElement = document.createElement('li');
      liElement.innerHTML = '$1 green peppers';
      ul.append(liElement);
      sum += 1
    }
  }
  if(state.whiteSauce){
  if(key === 'whiteSauce'){
      let liElement = document.createElement('li');
      liElement.innerHTML = '$3 white sauce';
      ul.append(liElement);
      sum += 3
    }
  }
  if(key === 'glutenFreeCrust'){
    if(state.glutenFreeCrust){
      let liElement = document.createElement('li');
      liElement.innerHTML = '$5 gluten-free crust';
      ul.append(liElement);
      sum += 5
    }
  }
}
  const strongPrice = document.createElement('strong');
  strongPrice.innerHTML= `$${sum}`;
  price.append(strongPrice)

}







renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', ()=>{
  state.mushrooms = !state.mushrooms;
  renderEverything();
})
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', ()=>{
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', ()=>{
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', ()=>{
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})