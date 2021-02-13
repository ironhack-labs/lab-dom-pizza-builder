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
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if(state.mushroom) {
      oneMushroom.style.visibility = "visible";
    } else {
      oneMushroom.style.visibility = "hidden";
    }
  });
  
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(oneSau => {
      if (state.whiteSauce) {
          oneSau.classList.add('sauce-white');
      } else {
          oneSau.classList.remove('sauce-white');
      }
  })
}
function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach(sauWh => {
      if (state.glutenFreeCrust) {
          sauWh.classList.add('crust-gluten-free');
      } else {
          sauWh.classList.remove('crust-gluten-free');
      }
  })
}
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`


function renderButtons() {
  document.querySelectorAll(".btn").forEach(onebtn => { 
    if(btn.classList.contains("active")) {
      onebtn.classList.remove("active");
    } else {
      onebtn.classList.add("active");
    }

  })
} 
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderPrice() {
  let list = '';
  Object.keys(state).forEach(key => {
    if (state[key] === true) list += `
    <li>$${ingredients[key].price} ${ingredients[key].name}</li>
    `;
  });
  document.querySelector('.panel.price ul').innerHTML = list;
  document.querySelector('.panel.price strong').innerHTML = `$${calculateTotal()}`;
}
function calculateTotal() {
  let price = 10;
  Object.keys(state).forEach(key => {
    if (state[key] === true) price += ingredients[key].price;
  });
  return price;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushroom = !state.mushroom;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPepper = !state.greenPepper;
  renderGreenPeppers()
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything()
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything()
});
