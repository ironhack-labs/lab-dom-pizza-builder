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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers){
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach((whiteSauce) => {
    if (state.whiteSauce){
      whiteSauce.style.visibility = 'visible';
    } else {
      whiteSauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((crust) => {
    if (state.glutenFreeCrust){
      crust.style.visibility = 'visible';
    } else {
      crust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  let btn = document.getElementsByClassName('btn');
  let btnStatus = Object.values(state);
  for (let i = 0; i < btn.length; i ++) {
    if (btnStatus[i]) {
      btn[i].classList.add('active');
    } else {
      btn[i].classList.remove('active');
    }
  }
}

function renderPrice() {
  let listOfIngredients = document.getElementById('prices');
  let listedIngredient = document.createElement("li");
  let appendedIngredient = listOfIngredients.appendChild(listedIngredient);
  let total = 10;
  
  if(state.pepperoni){
    appendedIngredient.innerHTML = '$1 pepperoni';
    appendedIngredient.setAttribute('id', 'added-peperoni');
  }

  
}

renderEverything();

document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function (){
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('click', function (){
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', function (){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});


