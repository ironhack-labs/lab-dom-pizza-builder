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
document.querySelectorAll('.mushroom').forEach((onemushroom)=>{
  if (state.mushrooms) {
    onemushroom.style.visibility = 'visible';
  } else {
    onemushroom.style.visibility = 'hidden';
  }
})
}

function renderGreenPeppers() {
document.querySelectorAll('.green-pepper').forEach((onePepper)=>{
  if(state.greenPeppers) {
    onePepper.style.visibility = 'visible';
  } else {
    onePepper.style.visibility = 'hidden';
  }
})
}

function renderWhiteSauce() {
let whiteSauce = document.querySelector('.sauce');
if (state.whiteSauce){
  whiteSauce.className += ' sauce-white';
  } else {
    whiteSauce.className = 'sauce';
  }
}

function renderGlutenFreeCrust() {
  let crust = document.querySelector('.crust');
  if(state.glutenFreeCrust) {
    crust.className += ' crust=gluten-free';
    } else {
      crust.className = 'crust';
    }
}

function renderButtons() {
  let pepperoniBtn = document.querySelector(".btn-pepperoni");
  console.log(state.pepperoni);
  if(state.pepperoni===true){
    pepperoniBtn.classList.remove("active");
  }

  let mushroomBtn = document.querySelector(".btn-mushrooms");
  if(state.mushrooms===true){
    mushroomBtn.classList.add("active");
  }else{
    mushroomBtn.classList.remove("active");
  }

  let greenPeppersBtn = document.querySelector(".btn-green-peppers");
  if (state.greenPeppers===true){
    greenPeppersBtn.classList.add("active")
  }else{
    greenPeppersBtn.classList.remove("active")
  }

  let whiteSauceBtn = document.querySelector(".btn-sauce");
  if (state.whiteSauce===true){
    whiteSauceBtn.classList.add("active")
  }else{
    whiteSauceBtn.classList.remove("active")
  }

  let crusBtn = document.querySelector(".btn-crust");
  if(state.glutenFreeCrust===true){
    crustBtn.classList.add("active")
  }else{
    crustBtn.classList.remove("active")
  }
}

function renderPrice() {
  let price = document.querySelector(".price ul");
  price.inneHTML = '';

  let total = 10;

  let totalPrice = document.querySelector('.price strong');
  totalPrice.innerHTML = '';

  if (state.pepperoni===true){
    price.innerHTML += `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
    totalPrice.innerHTML = total += ingredients.pepperoni.price;
  }

  if(state.mushrooms===true){
    price.innerHTML += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    totalPrice.innerHTML = total += ingredients.mushrooms.price;
  }

  if(state.greenPeppers===true){
    price.innerHTML += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    totalPrice.innerHTML = total += ingredients.greenPeppers.price;
  }

  if(state.whiteSauce===true){
    price.innerHTML += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    totalPrice.innerHTML = total += ingredients.whiteSauce.price;
  }

  if(state.glutenFreeCrust===true){
    price.innerHTML += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    totalPrice.innerHTML = total += ingredients.glutenFreeCrust.price;
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click',function(){
  state.mushrooms = !state.mushrooms;
  renderEverything();
})
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click',function(){
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", function(){
state.whiteSauce = !state.whiteSauce;
renderEverything();  
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener('click', function(){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})