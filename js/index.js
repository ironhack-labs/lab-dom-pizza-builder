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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushRoom => {
    if (state.mushrooms){
      oneMushRoom.style.visibility = 'visible';
    } else {
      oneMushRoom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers){
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce){
    document.querySelector('.sauce').classList.add('sauce-white') //don't use . WHY??
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust){
    document.querySelector('.crust').classList.add('crust-gluten-free')
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }

}

let ingredientClasses = {pepperoni: 'pepperoni', mushrooms: 'mushrooms', greenPeppers: 'green-peppers', whiteSauce: 'sauce', glutenFreeCrust: 'crust'};
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    //console.log(button)
    for (let key in ingredientClasses){
      //console.log(key)
      if (state[key]){
        //console.log(true)
        document.querySelector(`.btn-${ingredientClasses[key]}`).classList.add('active');
      } else {
        //console.log(false)
        document.querySelector(`.btn-${ingredientClasses[key]}`).classList.remove('active');
      }
      //console.log(button)
    };
}

let priceListString = {pepperoni: '$1 pepperoni', mushrooms: '$1 mushrooms', greenPeppers: '$1 green peppers', whiteSauce: '$3 white sauce', glutenFreeCrust: '$5 gluten-free crust'};

function renderPrice() {
  let sum  = 10;
  document.querySelector('.sum').innerText = `$${sum}`;
  document.querySelector('.calculator').innerHTML = ''
  for (let key in state){
    if (state[key]){
      sum += ingredients[key].price;
      document.querySelector('.sum').innerText = `$${sum}`;
      document.querySelector('.calculator').innerHTML += `<li class=${key}> ${priceListString[key]}</li>`;
    } else {
      //document.querySelector('.calculator').innerHTML -= `<li class=${key}> ${priceListString[key]}</li>`;
    }
  }
}

  // Iteration 4: change the HTML of `<aside class="panel price">`
  //let sum = 10;
  //for (let key in state) {
  //  if (state[key]){
 //     sum += priceList[key];
  //    document.querySelector('.calculator').innerHTML += `<li class=${key}> ${priceListString[key]}</li>`
  //  }

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener('click', function() { // why .btn.btn-mushrooms
  state.mushrooms = !state.mushrooms; // makes the opposite value when the mushroom button is clicked
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})