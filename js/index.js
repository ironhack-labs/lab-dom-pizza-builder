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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}




// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreen => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = 'visible';
    } else {
      oneGreen.style.visibility = 'hidden';
    }
  });
}



function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(oneSauce => {
    if (state.whiteSauce) {
      oneSauce.classList.add("sauce-white");
    } else {
      oneSauce.classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(oneCrust => {
    if (state.glutenFreeCrust) {
      oneCrust.classList.add("crust-gluten-free");
    } else {
      oneCrust.classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const peperButton = document.querySelector('.btn-pepperoni')
  if (state.pepperoni) {
    peperButton.classList.add('active');
  } else {
    peperButton.classList.remove('active');
  }


  const mushButton = document.querySelector('.btn-mushrooms')
  if (state.mushrooms) {
    mushButton.classList.add('active');
  } else {
    mushButton.classList.remove('active');
  }

  const greenPeppersButton = document.querySelector('.btn-green-peppers')
  if (state.greenPeppers) {
    greenPeppersButton.classList.add('active');
  } else {
    greenPeppersButton.classList.remove('active')
  }

  const whiteSauceButton = document.querySelector('.btn-sauce')
  if (state.whiteSauce) {
    whiteSauceButton.classList.add('active');
  } else {
    whiteSauceButton.classList.remove('active');
  }

  const glutenFreeCrustButton = document.querySelector('.btn-crust')
  if (state.glutenFreeCrust) {
    glutenFreeCrustButton.classList.add('active')
  } else {
    glutenFreeCrustButton.classList.remove('active')
  }
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // const changeAside = document.getElementsByTagName('aside')
  const changeStrong = document.getElementsByTagName('strong')
  if(state.pepperoni){
changeStrong.innerHtml = changeStrong + 1
  } if(state.mushrooms){
changeStrong.innerHtml = changeStrong + 1
  }if(state.greenPeppers){
    changeStrong.innerHtml = changeStrong + 1
}if(state.whiteSauce){
  changeStrong.innerHtml = changeStrong + 3
}if(state.glutenFreeCrust){
  changeStrong.innerHtml = changeStrong + 5
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});



// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
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
