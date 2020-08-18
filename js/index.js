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


  // Iteration 1: set the visibility of `<section class="mushroom">`:

  function renderMushrooms() {
    document.querySelectorAll('.mushroom').forEach(oneMush => {
      if (state.mushrooms) {
        oneMush.style.visibility = 'visible';
      } else {
        oneMush.style.visibility = 'hidden';
      }
    });
  }

// Iteration 1: set the visibility of `<section class="green-pepper">`:
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
const toggleSauce = document.querySelector('.sauce'); 
console.log(toggleSauce);
if (state.whiteSauce === true) { 
  toggleSauce.classList.add('sauce-white');
  console.log(toggleSauce.classList);
} else {
  toggleSauce.classList.remove('sauce-white');
  console.log(toggleSauce.classList);
}

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const toggleCrust = document.querySelector('.crust'); 
  console.log(toggleCrust);
  if (state.glutenFreeCrust === true) { 
    toggleCrust.classList.add('crust-gluten-free');
    console.log(toggleCrust.classList);
  } else {
    toggleCrust.classList.remove('crust-gluten-free');
    console.log(toggleCrust.classList);
  }
  
  }

  function renderButtons() {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`

    //pepperoni button
    if (state.pepperoni) {
      document.querySelector('.btn.btn-pepperoni').classList.add('active');
    } else {
      document.querySelector('.btn.btn-pepperoni').classList.remove('active');
    }

    // mushrooms button
    if (state.mushrooms) {
      document.querySelector('.btn.btn-mushrooms').classList.add('active');
    } else {
      document.querySelector('.btn.btn-mushrooms').classList.remove('active');
    }

    //greenPeppers Button 
    if (state.greenPeppers) {
      document.querySelector('.btn.btn-green-peppers').classList.add('active');
    } else {
      document.querySelector('.btn.btn-green-peppers').classList.remove('active');
    }

    // whiteSauce Button
    if (state.whiteSauce) {
      document.querySelector('.btn.btn-sauce').classList.add('active');
    } else {
      document.querySelector('.btn.btn-sauce').classList.remove('active');
    }

    //  glutenFreeCrust Button 
    if (state.glutenFreeCrust) {
      document.querySelector('.btn.btn-crust').classList.add('active');
    } else {
      document.querySelector('.btn.btn-crust').classList.remove('active');
    }
  }

 

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

/*
document.querySelector('.btn.btn-pepperoni').onclick = () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
*/

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click',() => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click',() => {
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
