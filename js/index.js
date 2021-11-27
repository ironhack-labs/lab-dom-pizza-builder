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
  document.querySelectorAll('.mushroom').forEach( mushroom => {
    if(state.mushrooms) {
      mushroom.style.visibility = 'visible';
    }else{
      mushroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach( pepper => {
    if(state.greenPeppers) {
      pepper.style.visibility = 'visible';
    }else{
      pepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach( sauce => {
    if(state.whiteSauce) {
      sauce.style.visibility = 'visible';
    }else{
      sauce.style.visibility = 'hidden';
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach( crust => {
    if(state.glutenFreeCrust) {
      crust.style.visibility = 'visible';
    }else{
      crust.style.visibility = 'hidden';
    }
  })
}

function toggleButton(state,btn){
  if(state){
    btn.classList.add("active");
  }else{
    btn.classList.remove("active");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach(btn => {
    if(btn.classList.contains('btn-pepperoni')){
      toggleButton(state.pepperoni,btn);
    }

    if(btn.classList.contains('btn-mushrooms')){
      toggleButton(state.mushrooms,btn);
    }

    if(btn.classList.contains('btn-green-peppers')){
      toggleButton(state.greenPeppers,btn);
    }

    if(btn.classList.contains('btn-sauce')){
      toggleButton(state.whiteSauce,btn);
    }

    if(btn.classList.contains('btn-crust')){
      toggleButton(state.glutenFreeCrust,btn);
    }

  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const panel = document.querySelector('.panel.price');
  const list = panel.querySelector('ul');
  const total =  panel.querySelector('strong');
  let subtotal = basePrice; 

  list.innerHTML = '';
  
  for(const status in state){
    
    if(state[status]){

      const item = document.createElement('li');
      item.innerHTML = `$${ingredients[status].price} ${ingredients[status].name}`;
      list.appendChild(item);

      subtotal += ingredients[status].price;
    }

  }

  console.log(subtotal);
  total.innerHTML = `$${subtotal}`;
}

renderEverything();


document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', (event) => {

    if(event.target.classList.contains('btn-pepperoni')){
      state.pepperoni = !state.pepperoni;
    }

    if(event.target.classList.contains('btn-mushrooms')){
      state.mushrooms = !state.mushrooms;
    }

    if(event.target.classList.contains('btn-green-peppers')){
      state.greenPeppers = !state.greenPeppers;
    }

    if(event.target.classList.contains('btn-sauce')){
      state.whiteSauce = !state.whiteSauce;
    }

    if(event.target.classList.contains('btn-crust')){
      state.glutenFreeCrust = !state.glutenFreeCrust;
    }
    renderEverything();
   
  });
})

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
/*document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});*/

/*document.querySelector('.btn.btn-mushrooms').addEventListener('click' , () => {
  state.mushrooms = !state.mushrooms;
  renderEver();
})*/

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
