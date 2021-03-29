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
  document.querySelectorAll('.mushroom').forEach(onemush => {
    if (state.mushroom) {
      onemush.style.visibility = 'visible';
    } else {
      onemush.style.visibility = 'hidden';
    };
  });
console.log (document.querySelectorAll('.mushroom'))
}
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onePep => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
  }});
console.log (document.querySelectorAll('.pepper'))
}

function renderWhiteSauce() {

  const sauce = document.querySelector(".sauce")
 console.log(sauce)
  if (state.whiteSauce) {
    state.whiteSauce = false
    sauce.classList.remove("sauce-white")
    console.log("sauce removed")
   }
   else {
    state.whiteSauce = true
    sauce.classList.add("sauce-white")

   console.log("sauce added")}
   
  console.log(sauce.classList)
  }


function renderGlutenFreeCrust() {
  const crust = document.querySelector(".crust")
  console.log(crust.classList)

  if (state.glutenFreeCrust) {
    state.glutenFreeCrust = false
    crust.classList.remove("crust-gluten-free")
    console.log("crust removed")
   }
   else {
    state.glutenFreeCrust = true
    crust.classList.add("crust-gluten-free")}
}

function renderButtons() {
  const pepperoniButton = document.querySelector('.btn.btn-pepperoni')
  if (state.pepperoni &&  pepperoniButton.classList.contains("active")) {
   console.log(pepperoniButton)
    pepperoniButton.add("active")
  }
else if (!state.pepperoni && pepperoniButton.classList.contains("active")) {
  pepperoniButton.remove("active")
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

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushroom = !state.mushroom;
  renderEverything();
});

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  
  renderEverything();
})

document.querySelector('.btn.btn-crust').addEventListener('click', () => {

  renderEverything();
});


