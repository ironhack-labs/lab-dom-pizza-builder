// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
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
function renderEverything(event) {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons(event);
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
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector('.sauce').style.visibility = 'visible';
  } else {
    document.querySelector('.sauce').style.visibility = 'hidden';
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').style.visibility = 'visible';
  } else {
    document.querySelector('.crust').style.visibility = 'hidden';
  }
}

function renderButtons(event) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (event) {
    event.path[0].classList.toggle('active');
  }
}

function renderPrice(event) {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let arrayOfPriceDisplay = document.querySelectorAll(".price ul li");
  let basePrice = Number(document.querySelector(".price b span").innerText);
  let totalPrice = basePrice;
  if (event){
    let eventTextToLowerCase = event.path[0].innerHTML.toLowerCase();
    for (let i = 0; i < arrayOfPriceDisplay.length; i++){
      if (arrayOfPriceDisplay[i].innerHTML.includes(eventTextToLowerCase) === true){
        if (arrayOfPriceDisplay[i].className.includes('active')){
          arrayOfPriceDisplay[i].classList.remove('active');
        } else{
          arrayOfPriceDisplay[i].classList.add('active');
        }
      }
    }
  }
  for (let i = 0; i < arrayOfPriceDisplay.length; i++) {
    if (arrayOfPriceDisplay[i].className.includes('active')) {
      totalPrice += Number(document.querySelectorAll(".price ul li span")[i].innerText);
      document.querySelector(".price strong span").innerHTML = totalPrice;
    }
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  let pathOfEvent = event.path[0]
  state.pepperoni = !state.pepperoni;
  renderEverything(event);
  renderPrice(event);
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', (event) => {
  let pathOfEvent = event.path[0];
  state.mushrooms = !state.mushrooms;
  renderEverything(event);
  renderPrice(event);
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', (event) => {
  let pathOfEvent = event.path[0];
  state.greenPeppers = !state.greenPeppers;
  renderEverything(event);
  renderPrice(event);
});


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', (event) => {
  let pathOfEvent = event.path[0];
  state.whiteSauce = !state.whiteSauce;
  renderEverything(event);
  renderPrice(event);
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', (event) => {
  let pathOfEvent = event.path[0];
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything(event);
  renderPrice(event);
});

