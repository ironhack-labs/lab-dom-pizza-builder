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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePep => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  }); 
}

function renderWhiteSauce() {
  const whiteS = document.querySelector('.sauce')
    if (state.whiteSauce) {
      whiteS.classList.add('sauce-white');
    } else {
      whiteS.classList.remove('sauce-white');
    }
  };
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`


function renderGlutenFreeCrust() {
  const glutenF = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    glutenF.classList.add('crust-gluten-free');
  } else {
    glutenF.classList.remove('crust-gluten-free');
  }
 
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepButton = document.querySelector(".btn.btn-pepperoni");
  if (state.pepperoni) {
    pepButton.classList.add("active");
  } else {
    pepButton.classList.remove("active");
  }
  let mushButton = document.querySelector(".btn.btn-mushrooms");
  if (state.mushrooms) {
    mushButton.classList.add("active");
  } else {
    mushButton.classList.remove("active");
  }
  let greenButton = document.querySelector(".btn.btn-green-peppers");
  if (state.greenPeppers) {
    greenButton.classList.add("active");
  } else {
    greenButton.classList.remove("active");
  }
  let sauceButton = document.querySelector(".btn.btn-sauce");
  if (state.whiteSauce) {
    sauceButton.classList.add("active");
  } else {
    sauceButton.classList.remove("active");
  }
  let glutenButton = document.querySelector(".btn.btn-crust");
  if (state.glutenFreeCrust) {
    glutenButton.classList.add("active");
  } else {
    glutenButton.classList.remove("active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var li = document.querySelectorAll('.price > ul > li');
  let price = document.querySelector('.price > strong')
  let totalPrice = basePrice;

  if(state.pepperoni){
    li[0].style.display = 'block';
    totalPrice += ingredients.pepperoni.price;
  }else{
    li[0].style.display = 'none';
}

  if(state.mushrooms){
    li[1].style.display = 'block'
    totalPrice += ingredients.mushrooms.price;
  }else{
    li[1].style.display = 'none';
  }
  if(state.greenPeppers){
    li[2].style.display = 'block'
    totalPrice += ingredients.greenPeppers.price;
  }else{
    li[2].style.display = 'none';
  }
  if(state.whiteSauce){
    li[3].style.display = 'block'
    totalPrice += ingredients.whiteSauce.price;
  }else{
    li[3].style.display = 'none';
  }
  if(state.glutenFreeCrust){
    li[4].style.display = 'block'
    totalPrice += ingredients.glutenFreeCrust.price;
  }else{
    li[4].style.display = 'none';
  }
  price.innerHTML = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});


document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
