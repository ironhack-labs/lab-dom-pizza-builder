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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(gPepper => {
    if (state.greenPeppers) {
      gPepper.style.visibility = 'visible';
    } else {
      gPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(wSauce => {
    if (state.whiteSauce) {
      wSauce.classList.add("sauce-white");
    } else {
      wSauce.classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(gFree => {
    if (state.glutenFreeCrust) {
      gFree.classList.add("crust-gluten-free");
    } else {
      gFree.classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let allButtons = document.querySelectorAll('button');
  //console.log(allButtons);

  allButtons.forEach(function(button) {
  
    if (button.classList.contains("btn-pepperoni")) {
      if (!state.pepperoni) {
        button.classList.add("active");
      }
      else {
        button.classList.remove("active");
      }
    }
    else if (button.classList.contains("btn-mushrooms")) {
      if (!state.mushrooms) {
        button.classList.add("active");
      }
      else {
        button.classList.remove("active");
      }
    }
    else if (button.classList.contains("btn-green-peppers")) {
      if (!state.greenPeppers) {
        button.classList.add("active");
      }
      else {
        button.classList.remove("active");
      }
    }
    else if (button.classList.contains("btn-sauce")) {
      if (!state.whiteSauce) {
        button.classList.add("active");
      }
      else {
        button.classList.remove("active");
      }
    }
    else if (button.classList.contains("btn-crust")) {
      if (!state.glutenFreeCrust) {
        button.classList.add("active");
      }
      else {
        button.classList.remove("active");
      }
    }

  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // let basePrice = 10;
  // let listItems = document.querySelector('price li');

  // listItems.forEach(function(button) {
  //   if (!state.pepperoni) {
  //     //listItems[0].innerHTML = '<li>iiiiiii</li>';
  //     console.log('hello');
  //   }


  // })
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