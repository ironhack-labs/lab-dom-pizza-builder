// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
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
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.green-pepper').forEach( oneGre => 
   state.greenPeppers ? oneGre.style.visibility = 'visible' :  oneGre.style.visibility = 'hidden'
  )
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.mushroom').forEach(oneMus =>
    state.mushrooms ? oneMus.style.visibility='visible' : oneMus.style.visibility = 'hidden'
  )
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  state.whiteSauce ?  document.querySelector('.sauce').classList.add('sauce-white') :
                      document.querySelector('.sauce').classList.remove('sauce-white')
 }

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
 state.glutenFreeCrust ? document.querySelector('.crust').classList.add('crust-gluten-free') :
                         document.querySelector('.crust').classList.remove('crust-gluten-free')
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  state.pepperoni ? document.querySelector('.btn.btn-pepperoni').classList.add('active') :  
                    document.querySelector('.btn.btn-pepperoni').classList.remove('active');

  state.mushrooms ? document.querySelector('.btn.btn-mushrooms').classList.add('active') : 
                    document.querySelector('.btn.btn-mushrooms').classList.remove('active');

  state.greenPeppers ? document.querySelector('.btn.btn-green-peppers').classList.add('active') : 
                      document.querySelector('.btn.btn-green-peppers').classList.remove('active');

  state.whiteSauce ?  document.querySelector('.btn.btn-sauce').classList.add('active') :
                      document.querySelector('.btn.btn-sauce').classList.remove('active');
                  
  state.glutenFreeCrust ? document.querySelector('.btn.btn-crust').classList.add('active') :
                      document.querySelector('.btn.btn-crust').classList.remove('active');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  state.pepperoni ? document.querySelector('.price li:nth-child(1)').style = "color : black ; font-weight:bold;" :
                  document.querySelector('.price li:nth-child(1)').style = "color :#666 ; font-weight:"
      
  state.mushrooms ? document.querySelector('.price li:nth-child(2)').style = "color : black ; font-weight:bold;" :
                  document.querySelector('.price li:nth-child(2)').style = "color :#666 ; font-weight:"

  state.greenPeppers ? document.querySelector('.price li:nth-child(3)').style = "color : black ; font-weight:bold;" :
                  document.querySelector('.price li:nth-child(3)').style = "color :#666 ; font-weight:"

  state.whiteSauce ?  document.querySelector('.price li:nth-child(4)').style = "color : black ; font-weight:bold;" :
                  document.querySelector('.price li:nth-child(4)').style = "color :#666 ; font-weight:"
                  
  state.glutenFreeCrust ? document.querySelector('.price li:nth-child(5)').style = "color : black ; font-weight:bold;" :
                  document.querySelector('.price li:nth-child(5)').style = "color :#666 ; font-weight:"

  const sum = 10 + state.pepperoni + state.mushrooms + state.greenPeppers + (3 * state.whiteSauce ) + (5 * state.glutenFreeCrust)
  document.querySelector('.price strong').textContent = `$${sum}`

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click',()=>{
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', ()=>{
  state.greenPeppers = !state.greenPeppers
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', ()=>{
  state.whiteSauce = !state.whiteSauce
  console.log(state.whiteSauce)
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', ()=> {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
})
