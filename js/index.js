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
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(greenPep => {
    if (state.greenPeppers) {
      greenPep.style.visibility = 'visible';
    } else {
      greenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
if(state.whiteSauce) {
  document.querySelector('.sauce').classList.add('sauce-white');
} else {
  document.querySelector('.sauce').classList.remove('sauce-white');
}
};

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if(state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
};

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
 state.pepperoni ? document.querySelector('.btn.btn-pepperoni').classList.add('active') :
                  document.querySelector('.btn.btn-pepperoni').classList.remove('active');

  state.mushrooms ? document.querySelector('.btn.btn-mushrooms').classList.add('active') :
                    document.querySelector('.btn.btn-mushrooms').classList.remove('active');

  state.greenPeppers ? document.querySelector('.btn.btn-green-peppers').classList.add('active') :
                        document.querySelector('.btn.btn-green-peppers').classList.remove('active');

  state.whiteSauce ? document.querySelector('.btn.btn-sauce').classList.add('active') :
                      document.querySelector('.btn.btn-sauce').classList.remove('active'); 
                      
  state.glutenFreeCrust ? document.querySelector('.btn.btn-crust').classList.add('active') :
                      document.querySelector('.btn.btn-crust').classList.remove('active');
 
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

let chosenToppings = "";
let totalPrice = 10;

if (state.pepperoni){
  chosenToppings += "<li>$1 pepperoni</li>";
  totalPrice += 1;
}  
if (state.mushrooms) {
  chosenToppings += "<li>$1 mushrooms</li>";
  totalPrice += 1;
} 
if (state.greenPeppers) {
  chosenToppings += "<li>$1 green peppers</li>";
  totalPrice += 1;
} 
if (state.whiteSauce) {
  chosenToppings += "<li>$3 white sauce</li>";
  totalPrice += 3;
} 
if (state.glutenFreeCrust) {
  chosenToppings += "<li>$5 gluten-free crust</li>";
  totalPrice += 5;  
} 
document.querySelector('#toppings-list').innerHTML = chosenToppings;
document.getElementById('price').textContent = `$${totalPrice} cheese pizza`;
  
}


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
  console.log(state.whiteSauce);
  console.log(document.querySelector('.sauce').classList);
});



// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
  console.log(state.glutenFreeCrust);
  console.log(document.querySelector('.sauce').classList);
  console.log(document.querySelector('.crust').classList);
});

renderPrice();
