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
  document.querySelectorAll('.mushroom').forEach((onemushroom) =>{
    if(state.mushrooms) {
      onemushroom.style.visibility = 'visible';
    } else {
      onemushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenpepper)=>{
    if(state.greenPeppers) {
      greenpepper.style.visibility = 'visible';
    } else {
      greenpepper.style.visibility = 'hidden'
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white'); // if its true
  } else {
    sauce.classList.remove('sauce-white'); // if its false
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free'); // if its true
  } else {
    crust.classList.remove('crust-gluten-free'); // if its false

}
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
 
  const buttons = document.querySelectorAll('.btn')
  
  buttons.forEach((button)=> {
    const ingredient = button.dataset.ingredient
    if(state[ingredient]){
      button.classList.add('active')
    } else {
      button.classList.remove('active')
    }
  })

}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  
  let totalPrice = basePrice; 
  
  let selectedItemsList = [];
  

  Object.keys(state).forEach((ingredient) => {
    if (state[ingredient]) {
      totalPrice += ingredients[ingredient].price;
      selectedItemsList.push(`<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`);
    }
  });

  // Build the price panel content
  let finalPriceContent = `<h2>Your pizza's price</h2>
  <b>$ ${basePrice} cheese pizza</b>
    <ul>
      ${selectedItemsList.join('')} 
    <strong>Total: $${totalPrice}</strong> 
  `;


  let finalPricePanel = document.querySelector(".panel.price");
  if (finalPricePanel) { 
    finalPricePanel.innerHTML = finalPriceContent;
  } 
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function(){
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function(){
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
 document.querySelector('.btn.btn-crust').addEventListener('click', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust; // Toggle the state
  renderEverything(); 
}); 