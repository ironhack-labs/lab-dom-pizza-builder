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
function renderEverything(event) {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons(event);
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
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const elementSauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    elementSauce.classList.add('sauce-white');
  } else {
    elementSauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const elementCrust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    elementCrust.classList.add('crust-gluten-free');
  } else {
    elementCrust.classList.remove('crust-gluten-free');
  }
}

function renderButtons(event) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(event){
    if(event.target.classList.contains('active')){
      event.target.classList.remove('active')
    }else{
      event.target.classList.add('active')
    }
  } else {
    const btnList = document.querySelectorAll('.btn')
    const stateValues = Object.values(state)
    stateValues.forEach((value, index) => { 
      if(value === true){
        btnList[index].classList.add('active')
      }else{
        btnList[index].classList.remove('active')
      }
    })

  }
}

function renderPrice(event) {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  const liList = document.querySelectorAll('.panel.price li')
  const listaElements = Array.from(liList)
  const stateValues = Object.values(state)

  stateValues.forEach((li, index)=>{
    if(li){
      listaElements[index].style.visibility = `visible`
    } else {
      listaElements[index].style.visibility = `hidden`
    }
  })

  const soma = Object.values(ingredients)
  const activeProducts = soma.filter((_, index)=>{
    return stateValues[index]
  })
  const total = activeProducts.reduce((total, cada)=>{
    return total +=cada.price
  },0)
  const priceTag = document.querySelector('.panel.price strong')
  priceTag.innerHTML = `$ ${total+basePrice}`
}


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function (event) {
  state.pepperoni = !state.pepperoni;
  renderEverything(event);
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function (event) {
  state.mushrooms = !state.mushrooms;
  renderEverything(event);
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function (event) {
  state.greenPeppers = !state.greenPeppers;
  renderEverything(event);
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function (event) {
  state.whiteSauce = !state.whiteSauce;
  renderEverything(event);
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function (event) {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything(event);
})

document.querySelector('.btn').addEventListener(`onload`, renderEverything())