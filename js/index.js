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
  document.querySelectorAll('.mushroom').forEach((mushrooms) => {
    if (state.mushrooms) {
      mushrooms.style.visibility = 'visible';
    } else {
      mushrooms.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((greenPeppers) => {
    if (state.greenPeppers) {
      greenPeppers.style.visibility = 'visible';
    } else {
      greenPeppers.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.classList.add('sauce-white')
    } else {
      sauce.classList.remove('sauce-white')
    }
  });}

function renderGlutenFreeCrust() {
   // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
 document.querySelectorAll('.crust').forEach((glutenFreeCrust) => {
    if (state.glutenFreeCrust) {
      glutenFreeCrust.classList.add('crust-gluten-free')
    } else {
      glutenFreeCrust.classList.remove('crust-gluten-free')
    }
  });}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  console.log(document.querySelector('.btn-pepperoni'))
    if (state.pepperoni === true){
      document.querySelector('.btn-pepperoni').classList.add('active');
    } else {
      document.querySelector('.btn-pepperoni').classList.remove('active');
    }
  

  console.log(document.querySelector('.btn.btn-mushrooms'))
  if (state.mushrooms === true){
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  }

  console.log(document.querySelector('.btn-green-peppers'))
  if (state.greenPeppers === true){
    document.querySelector('.btn-green-peppers').classList.add('active');
  } else {
    document.querySelector('.btn-green-peppers').classList.remove('active');
  }

  console.log(document.querySelector('.btn-sauce'))
  if (state.whiteSauce === true){
    document.querySelector('.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn-sauce').classList.remove('active');
  }

 

  console.log(document.querySelector('.btn-crust'))
  if (state.glutenFreeCrust === true){
    document.querySelector('.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn-crust').classList.remove('active');
  }
}
  

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
let list = '';
let price = basePrice;
for(let ingredient in state){
  console.log('ingredients in lopp', ingredient);
  console.log(ingredients[ingredient]);
  if (state[ingredient]) {
    list += `<li>$ ${ingredients[ingredient].price}
${ingredients[ingredient].name}<li> `
    price += ingredients[ingredient].price  
}
}
 console.log(`This is the price list: `, list)
 console.log(`This is the total price : `, price)

 console.log(document.querySelector('.panel.price ul'))
 document.querySelector('.panel.price ul').innerHTML = list;
 document.querySelector('.panel.price strong').innerText = '$ ' + price;
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
  console.log('mushroom')
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
  console.log('green-pepper')
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
  console.log('sauce')
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
  console.log('sauce')
});