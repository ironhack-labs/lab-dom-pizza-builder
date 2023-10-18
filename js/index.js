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
  document.querySelectorAll('.mushroom').forEach((oneMush)=>{
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else{
      oneMush.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper)=>{
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else{
      onePepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');
  if(state.whiteSauce){
    sauce.classList.add("sauce-white")
  }else{
    sauce.classList.remove("sauce-white")
  }
  }

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust');
  if(state.glutenFreeCrust === true){
    crust.classList.add("crust-gluten-free")
  }else{
    crust.classList.remove("crust-gluten-free")
  }
  }


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let btn = document.querySelectorAll(".btn")
  btn.forEach(button =>{
    const ingredient = button.dataset.ingredient
    if(state[ingredient]){button.classList.add('active')
    }else{
          button.classList.remove('active')}
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const itemList = document.querySelector('.price ul');
  const totalPriceElement = document.querySelector('.price strong');
  let totalPrice = 10;

  itemList.innerHTML = ''

  const ingredients = [
    { name: 'pepperoni', price: 1, selected: state.pepperoni },
    { name: 'mushrooms', price: 1, selected: state.mushrooms },
    { name: 'green peppers', price: 1, selected: state.greenPeppers },
    { name: 'white sauce', price: 3, selected: state.whiteSauce },
    { name: 'gluten-free crust', price: 5, selected: state.glutenFreeCrust },
  ];

  ingredients.forEach((ingredient) => {
    if (ingredient.selected) {
      const listItem = document.createElement('li');
      listItem.textContent = `${ingredient.price} ${ingredient.name}`;
      itemList.appendChild(listItem);
      totalPrice += ingredient.price;
    }
  });}

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
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click',function(){
  state.whiteSauce = !state.whiteSauce
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click',function(){
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
})