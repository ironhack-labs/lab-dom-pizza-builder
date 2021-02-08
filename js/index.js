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
  const allPep = document.querySelectorAll('.pep')
  allPep.forEach(onePep => {
    if (state.pepperoni === true) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

  // Iteration 1: set the visibility of `<section class="mushroom">`

  function renderMushrooms() {
    const allMush = document.querySelectorAll('.mushrooms')
    allMush.forEach(oneMush => {
      if (state.mushrooms === true) {
        oneMush.style.visibility = 'visible';
      } else {
        oneMush.style.visibility = 'hidden';
      }
    });
  }

 // Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  const allPeppers = document.querySelectorAll('.green-pepper')
  allPeppers.forEach(onePepp => {
    if (state.greenPeppers === true) {
      onePepp.style.visibility = 'visible';
    } else {
      onePepp.style.visibility = 'hidden';
    }
  });
}
 
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  const whiteSauce = document.querySelector('.sauce')
  if (state.whiteSauce === false) {
    whiteSauce.classList.remove("sauce-white");
  } else {
    whiteSauce.classList.add("sauce-white");
  };
}


  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  const glutenFreeCrust = document.querySelector('.crust')
  if (state.glutenFreeCrust === false) {
    glutenFreeCrust.classList.remove("crust-gluten-free");
  } else {
    glutenFreeCrust.classList.add("crust-gluten-free");
  };
}

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
  const btn = document.querySelector('.btn')
  if (state.btn === false){
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
}

  // Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice() {
  let sumPrice = basePrice;
  let priceList = document.querySelector('.price > ul');
  priceList.innerHTML = "";

    if (state.pepperoni === true) {
      sumPrice += ingredients.pepperoni.price;
      priceList.innerHTML += "<li>$1 pepperoni</li>";
    };
    if (state.mushrooms === true){
      sumPrice += ingredients.mushrooms.price;
      priceList.innerHTML += "<li>$1 mushrooms</li>"
    };
    if (state.greenPeppers === true){
      sumPrice += ingredients.greenPeppers.price;
      priceList.innerHTML += "<li>$1 green peppers</li>"
    };
    if (state.whiteSauce === true){
      sumPrice += ingredients.whiteSauce.price;
      priceList.innerHTML += "<li>$3 white sauce</li>"
    };
    if (state.glutenFreeCrust === true){
      sumPrice += ingredients.glutenFreeCrust.price;
      priceList.innerHTML += "<li>$5 gluten-free crust</li>"
    };

   document.querySelector('.price > strong').innerText = "$" + `${sumPrice}`

  }
renderEverything();


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  console.log(state.mushrooms);
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});