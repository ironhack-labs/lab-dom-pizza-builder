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

  // Iteration 1: set the visibility of `<section class="mushroom">`

  function renderMushrooms() {
    document.querySelectorAll('.mushroom').forEach(oneMushroom => {
      if(state.mushrooms){
        oneMushroom.style.visibility='visible';
      }else{
        oneMushroom.style.visibility='hidden';
      } 
    });

}


  // Iteration 1: set the visibility of `<section class="green-pepper">`
  function renderGreenPeppers() {
    document.querySelectorAll('.green-pepper').forEach(oneGreenPepper=>{
      if(state.greenPeppers){
        oneGreenPepper.style.visibility='visible';
      }else{
        oneGreenPepper.style.visibility='hidden';
      }
    });

}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(oneSauce=>{
    if(state.whiteSauce){
      oneSauce.style.visibility='visible';
    }else{
      oneSauce.style.visibility='hidden';
    }
  });
}


  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  function renderGlutenFreeCrust() {
    document.querySelectorAll('.crust').forEach(oneCrust=>{
      if(state.glutenFreeCrust){
        oneCrust.style.visibility='visible';
      }else{
        oneCrust.style.visibility='hidden';
      }
    });
}


  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
 if (state.pepperoni) { 
      document.querySelector('.btn.btn-pepperoni').classList.remove('active');
    } else {
      document.querySelector('.btn.btn-pepperoni').classList.add('active');
    }
    if (state.mushrooms) {
      document.querySelector('.btn.btn-mushrooms').classList.remove('active');
    } else {
      document.querySelector('.btn.btn-mushrooms').classList.add('active');
    }
    if (state.greenPeppers) {
      document.querySelector('.btn-green-peppers').classList.remove('active');
    } else {
      document.querySelector('.btn-green-peppers').classList.add('active');
    }
    if (state.whiteSauce) {
      document.querySelector('.btn-sauce').classList.remove('active');
    } else {
      document.querySelector('.btn-sauce').classList.add('active');
    }
    if (state.glutenFreeCrust) {
      document.querySelector('.btn-crust').classList.remove('active');
    } else {
      document.querySelector('.btn-crust').classList.add('active');
    }
  }



  // Iteration 4: change the HTML of `<aside class="panel price">`
  // idea is not working ... 

  /*function renderPrice() {
    let totalPrice = basePrice;
    let ingredientsList = document.querySelector('aside.panel.price ul')
    ingredientsList.innerHTML = '';
  for (let ingredient of ingredients) {
      if (state.ingredient) {
        totalPrice += ingredients[ingredient]price
        ingredientsList.innerHTML += `<li>$ ${ingredients.ingredient.price} ${ingredients.ingredient.name}</li>`
  
      }
    }
    document.getElementsByTagName('strong').innerHTML = "$" + totalPrice;
renderEverything();
  }*/

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click',()=>{
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click',()=>{
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click',()=>{
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click',()=>{
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
