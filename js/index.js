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

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(onePep => {
    if (state.mushrooms) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}


function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onePep => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  let sauce = document.querySelector('.sauce')
    if (state.whiteSauce) {
      sauce.setAttribute('class', 'sauce sauce-white')
    } else {
      sauce.setAttribute('class', 'sauce')
    }
}

function renderGlutenFreeCrust() {
  let crust = document.querySelector('.crust')
    if (state.glutenFreeCrust) {
      crust.setAttribute('class', 'crust crust-gluten-free')
    } else {
      crust.setAttribute('class', 'crust')
    }
}

function renderButtons() {
  state.pepperoni? document.querySelector('.btn.btn-pepperoni').setAttribute('class', 'btn btn-pepperoni active') : document.querySelector('.btn.btn-pepperoni').setAttribute('class', 'btn btn-pepperoni') 
  state.mushrooms? document.querySelector('.btn.btn-mushrooms').setAttribute('class', 'btn btn-mushrooms active') : document.querySelector('.btn.btn-mushrooms').setAttribute('class', 'btn btn-mushrooms')
  state.greenPeppers?  document.querySelector('.btn.btn-green-peppers').setAttribute('class', 'btn btn-green-peppers active') : document.querySelector('.btn.btn-green-peppers').setAttribute('class', 'btn btn-green-peppers')
  state.whiteSauce? document.querySelector('.btn.btn-sauce').setAttribute('class', 'btn btn-sauce active') : document.querySelector('.btn.btn-sauce').setAttribute('class', 'btn btn-sauce')
  state.glutenFreeCrust? document.querySelector('.btn.btn-crust').setAttribute('class', 'btn btn-crust active') : document.querySelector('.btn.btn-crust').setAttribute('class', 'btn btn-crust')
}

function renderPrice() {
  let finalPrice = 10;
  if(state.pepperoni){
    document.querySelector('.li-pep').style.display = 'block';
    finalPrice += 1;}
  else {document.querySelector('.li-pep').style.display = 'none';}
  if(state.mushrooms){
    document.querySelector('.li-mush').style.display = 'block';
    finalPrice +=1;}
  else {document.querySelector('.li-mush').style.display = 'none';}
  if (state.greenPeppers){
    document.querySelector('.li-green').style.display = 'block';
    finalPrice +=1;}
  else{document.querySelector('.li-green').style.display = 'none';}
  if(state.whiteSauce){
    document.querySelector('.li-sauce').style.display = 'block';
    finalPrice +=3;}
  else{document.querySelector('.li-sauce').style.display = 'none';}
  if(state.glutenFreeCrust){
    document.querySelector('.li-gluten').style.display = 'block';
    finalPrice +=5;}
  else{
    document.querySelector('.li-gluten').style.display = 'none';
  }
  document.getElementById('final-price').innerText = '$' + finalPrice;
}

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
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
