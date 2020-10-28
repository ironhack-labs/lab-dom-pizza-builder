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
  document.getElementsByClassName('mushroom').forEach(mush => {
    if(state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  }); 
}

function renderGreenPeppers() {
  document.getElementsByClassName('.green-pepper').forEach(pepper => {
    if(state.greenPepper) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelector('.sauce.sauce-white').removeAttribute('.sauce-white');
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelector('.crust.crust-gluten-free').removeAttribute('.crust-gluten-free');
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const buttons = document.getElementsByClassName('btn');
  const buttonsArr = [...buttons];
  const ingrState = Object.values(state);
  for (let i = 0; i < buttonsArr.length; i++) {
    if(ingrState[i] === false) {
      buttons[i].removeAttribute('.active');
    } else {
      buttons[i].setAttribute ('class', 'active') //CÓMO AÑADIR CLASE active SIN CAMBIAR LAS OTRAS
    }
  }
  return ingrState;
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //DISPLAY THE LIST OF ALL ITEMS SELECTED
  const panelPrices = document.getElementsByClassName('.panel.price');
  const ingrCostList = panelPrices[0].querySelectorAll('li');
  const ingrCostListArr = [...ingrCostList];
  for (let i; i < ingrCostListArr.length; i++) {
    if(ingrState[i]) {
      ingrCostList[i].style.visibility = 'visible';
    } else {
      ingrCostList[i].style.visibility = 'hidden';
    }
  }
  
  //DISPLAY THE TOTAL PRICE
  const activeIngrPrices = [];
  for (let i = 0; i < ingrCostListArr.length; i++) {
    if(ingrState[i]) {
      activeIngrPrices.push(Number(ingrCostList[i].innerHTML[1]))
    }
  }

  const totalCost = activeIngrPrices.reduce((acc, item) => {
    return acc += item;
  }, 0)
  
  const totalDisplay = document.querySelector('.panel strong');
  totalDisplay.innerHTML = totalCost;
}


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () =>{
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce
  renderEverything();
})


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
