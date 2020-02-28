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
  document.querySelectorAll('.pep').forEach($pep => {
    if (state.pepperoni) {
      $pep.style.visibility = 'visible';
    } else {
      $pep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach($mush => {
    if (state.mushrooms) {
      $mush.style.visibility = 'visible';
    } else {
      $mush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach($greenPepper =>{
    if(state.greenPeppers){
      $greenPepper.style.visibility = 'visible';
    } else{
      $greenPepper.style.visibility = 'hidden';
    }
  });

}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    if(state.whiteSauce){
      document.getElementsByClassName('sauce')[0].classList.add('sauce-white');
    }else{
      document.getElementsByClassName('sauce')[0].classList.remove('sauce-white');
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    if(state.glutenFreeCrust){
      document.getElementsByClassName('crust')[0].classList.add('crust-gluten-free');
    } else {
      document.getElementsByClassName('crust')[0].classList.remove('crust-gluten-free');
    }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(state.pepperoni){
    document.getElementsByClassName('btn-pepperoni')[0].classList.add('active');
  } else {
    document.getElementsByClassName('btn-pepperoni')[0].classList.remove('active');
  }

  if(state.mushrooms){
    document.getElementsByClassName('btn-mushrooms')[0].classList.add('active');
  } else {
    document.getElementsByClassName('btn-mushrooms')[0].classList.remove('active');
  }

  if(state.greenPeppers){
    document.getElementsByClassName('btn-green-peppers')[0].classList.add('active');
  } else {
    document.getElementsByClassName('btn-green-peppers')[0].classList.remove('active');
  }


  if(state.glutenFreeCrust){
    document.getElementsByClassName('btn-crust')[0].classList.add('active');
  } else {
    document.getElementsByClassName('btn-crust')[0].classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;
  let ingredientList = document.querySelector('aside.panel.price ul')
  ingredientList.innerHTML = ""

  if(state.pepperoni){
    totalPrice += ingredients.pepperoni.price;
    ingredientList.innerHTML += `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name.toLowerCase()}</li>`;
  };
  if(state.mushrooms){
    totalPrice += ingredients.mushrooms.price;
    ingredientList.innerHTML += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name.toLowerCase()}</li>`;
  };
  if(state.greenPeppers){
    totalPrice += ingredients.greenPeppers.price;
    ingredientList.innerHTML += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name.toLowerCase()}</li>`;
  };
  if(state.whiteSauce){
    totalPrice += ingredients.whiteSauce.price;
    ingredientList.innerHTML += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name.toLowerCase()}</li>`;
  };
  if(state.glutenFreeCrust){
    totalPrice += ingredients.glutenFreeCrust.price;
    ingredientList.innerHTML += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name.toLowerCase()}</li>`;
  };


  document.querySelector('.price strong').innerText = `$${totalPrice}`;
  

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').onclick = () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
