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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

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
    document.querySelectorAll('.sauce').forEach(white => {
      if (state.whiteSauce) {
        white.classList.add('sauce-white');
      } else {
        white.classList.remove('sauce-white');
      }
    });
  }

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach(gluten => {
    if (state.glutenFreeCrust) {
      gluten.classList.add("crust-gluten-free");
    } else {
      gluten.classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

    if(state.pepperoni) {
      document.querySelector('.btn-pepperoni').classList.add("active");
    } else {
      document.querySelector('.btn-pepperoni').classList.remove("active");
    }
    if(state.mushrooms) {
      document.querySelector('.btn-mushrooms').classList.add("active");
    } else {
      document.querySelector('.btn-mushrooms').classList.remove("active");
    }
    if(state.greenPeppers) {
      document.querySelector('.btn-green-peppers').classList.add("active");
    } else {
      document.querySelector('.btn-green-peppers').classList.remove("active");
    }
    if(state.whiteSauce) {
      document.querySelector('.btn-sauce').classList.add("active");
    } else {
      document.querySelector('.btn-sauce').classList.remove("active");
    }
    if(state.pepperoni) {
      document.querySelector('.btn-crust').classList.add("active");
    } else {
      document.querySelector('.btn-crust').classList.remove("active");
}

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  basePrice=10
  
    for(let key of Object.keys(state)){
    if(state[key]){
      basePrice+=ingredients[key].price
      document.getElementById(key).style.visibility="visible"
    }
    else{
      document.getElementById(key).style.visibility="hidden"

    }
    
}
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
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
 document.querySelector('.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
  document.querySelector('.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
  })