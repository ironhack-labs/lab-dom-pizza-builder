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
  document.querySelectorAll('.mushroom').forEach(mush=> {
    if (state.mushrooms){
      mush.style.visibility= 'visible';
    } else {
      mush.style.visibility= 'hidden';
    }
    });
  }
 // Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(greenpep => {
    if (state.greenPeppers) {
      greenpep.style.visibility='visible';
    }else {
      greenpep.style.visibility='hidden';
    }
    
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  document.querySelector('.sauce.sauce-white').classList.toggle("sauce-white")
}
 /* let sauce=document.querySelector(".sauce")
  if (state.whiteSauce) {
    sauce.classList.add("sauce-white")
  }
  else {
    sauce.classList.remove("sauce-white")
  }
}
*/
  
// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  document.querySelector('.crust.crust-gluten-free').classList.toggle("crust-gluten-free")
}
 // Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
 document.querySelectorAll('.btn').classList.toggle("active")
}

// Iteration 4: change the HTML of `<aside class="panel price">`

/*let finalPrice=
function renderPrice() {
  document.querySelector('.panel.price).innerHTML= `${finalPrice}`
}
*/

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderPepperoni();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click',()=> {
  state.mushrooms= !state.mushrooms;
  renderMushrooms()
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click',()=> {
  state.greenPeppers= !state.greenPeppers;
  renderGreenPeppers()
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click',()=> {
  state.Whitesauce= !state.whiteSauce;
  renderWhiteSauce()
});
 //Iteration 2: Add click event listener on `<button class="btn btn-crust">`
  document.querySelector('.btn.btn-crust').addEventListener('click',()=> {
  state.glutenFreeCrust= !state.glutenFreeCrust;
  renderGlutenFreeCrust()
});
