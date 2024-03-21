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
  // Add click event listener on the mushrooms button
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function() {
  // Toggle the active class on the mushrooms button
  this.classList.toggle('active');
  // Toggle the visibility of all mushroom sections
  document.querySelectorAll('.mushroom').forEach(function(section) {
    section.classList.toggle('visible');
  });
});
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  // Add click event listener on the green peppers button
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function() {
  // Toggle the active class on the green peppers button
  this.classList.toggle('active');
  // Toggle the visibility of all green pepper sections
  document.querySelectorAll('.green-pepper').forEach(function(section) {
    section.classList.toggle('visible');
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  // Add click event listener on the sauce button
document.querySelector('.btn.btn-sauce').addEventListener('click', function() {
  // Toggle the state for white sauce
  state.whiteSauce = !state.whiteSauce;
  // Call the function to render white sauce
  renderWhiteSauce();
});
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  // Function to render white sauce based on state
function renderWhiteSauce() {
  // Get all sauce elements
  const sauceElements = document.querySelectorAll('.sauce');
  // Loop through each sauce element
  sauceElements.forEach(function(sauce) {
    // Toggle the class to show/hide white sauce
    sauce.classList.toggle('sauce-white');
  });
}

// Add click event listener on the crust button
document.querySelector('.btn.btn-crust').addEventListener('click', function() {
  // Toggle the state for gluten-free crust
  state.glutenFreeCrust = !state.glutenFreeCrust;
  // Call the function to render gluten-free crust
  renderGlutenFreeCrust();
});

// Function to render gluten-free crust based on state
function renderGlutenFreeCrust() {
  // Get crust element
  const crust = document.querySelector('.crust');
  // Toggle the class to show/hide gluten-free crust
  crust.classList.toggle('crust-gluten-free');
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  / Get all buttons
  const buttons = document.querySelectorAll('.btn');
  
  // Loop through each button
  buttons.forEach(function(button) {
    // Check if the button corresponds to an active state
    const isActive = button.classList.contains('btn-pepperoni') ? state.pepperoni :
                     button.classList.contains('btn-mushrooms') ? state.mushrooms :
                     button.classList.contains('btn-green-peppers') ? state.greenPeppers :
                     button.classList.contains('btn-sauce') ? state.whiteSauce :
                     button.classList.contains('btn-crust') ? state.glutenFreeCrust : false;
    
    // Toggle the active class based on the state
    if (isActive) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  / Get the container elements
  const priceList = document.querySelector('.price ul');
  const totalPriceElement = document.querySelector('.price strong');
  
  // Clear previous content
  priceList.innerHTML = '';
  
  // Initialize total price
  let totalPrice = 10; // Base price of the pizza
  
  // Iterate through the state object
  for (const [ingredient, selected] of Object.entries(state)) {
    // Check if the ingredient is selected
    if (selected) {
      // Create a list item for the ingredient
      const listItem = document.createElement('li');
      listItem.textContent = `${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)} - $1`;
      
      // Add the list item to the price list
      priceList.appendChild(listItem);
      
      // Add $1 to the total price for each selected ingredient
      totalPrice += 1;
    }
  }
  
  // Update the total price displayed
  totalPriceElement.textContent = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});