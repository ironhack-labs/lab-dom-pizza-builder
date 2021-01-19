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
  document.querySelectorAll('.green-pepper').forEach(ingredient => {
    if (state.greenPeppers) {
      ingredient.style.visibility = 'visible';
    } else {
      ingredient.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  //   Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(ingredient => {
    if (state.whiteSauce) {
      ingredient.classList.add('sauce-white');
    } else {
      ingredient.classList.remove('sauce-white');
    }
  });
}


  //console.log(crust[0])

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  
  //Get a NodeList of all .crust elements
  const crust = document.querySelectorAll(".crust")
  //console.log(crust[1]);

  //remove add a class with  loop
  crust.forEach(element => {
   //console.log(element.classList[1]);
    
    if (state.glutenFreeCrust === false) {
      element.classList.add("crust-gluten-free")
    } else {
      element.classList.remove("crust-gluten-free")
    } 
  })
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    // if ingrendient active
    if (state.button) {
      button.classList.add('active');
    } else {     // if ingrendient inactive
      button.classList.remove('active');
    }
  });
  //console.log(buttons);
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  /* - Displays the list of all items selected
- Displays the total price.*/ 

}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});


// // Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
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
  renderEverything()
});
