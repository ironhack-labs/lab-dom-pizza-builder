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
  pepperoni: false,
  mushrooms: false,
  greenPeppers: false,
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
  let pepeButton = document.querySelector('.btn.btn-pepperoni');
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
      pepeButton.classList.add('active');
    } else {
      onePep.style.visibility = 'hidden';
      pepeButton.classList.remove('active');
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if(state.mushrooms){
      mushroom.style.visibility = 'visible';
      document.querySelector('.btn.btn-mushrooms').classList.add('active');
    } else {
      mushroom.style.visibility = 'hidden';
      document.querySelector('.btn.btn-mushrooms').classList.remove('active');
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if(state.greenPeppers){
      pepper.style.visibility = 'visible';
      document.querySelector('.btn.btn-green-peppers').classList.add('active');
    } else {
      pepper.style.visibility = 'hidden';
      document.querySelector('.btn.btn-green-peppers').classList.remove('active');
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');  
  if(state.whiteSauce){
    sauce.setAttribute('class','sauce sauce-white');
    document.querySelector('.btn.btn-sauce').classList.add('active');
  } else {
    sauce.setAttribute('class','sauce');  
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust')
  if(state.glutenFreeCrust){
    crust.setAttribute('class','crust crust-gluten-free');
    document.querySelector('.btn.btn-crust').classList.add('active');
  } else {
    crust.setAttribute('class','crust');
    document.querySelector('.btn.btn-crust').classList.remove('active');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceHtmlArray = document.querySelectorAll(".price > ul > li ");
  const totalHtmlPrice = document.querySelector('.price > strong'); 
  let totalPizzaPrice = basePrice;
  
  if(state.pepperoni){
    priceHtmlArray[0].style.display = 'block';
    totalPizzaPrice += ingredients.pepperoni.price;
  }else{
    priceHtmlArray[0].style.display = 'none';
  }
  if(state.mushrooms){
    priceHtmlArray[1].style.display = 'block';
    totalPizzaPrice += ingredients.mushrooms.price;
  }else{
    priceHtmlArray[1].style.display = 'none';
  }
  if(state.greenPeppers){
    priceHtmlArray[2].style.display = 'block';
    totalPizzaPrice += ingredients.greenPeppers.price;
  }else{
    priceHtmlArray[2].style.display = 'none';
  }
  if(state.whiteSauce){
    priceHtmlArray[3].style.display = 'block';
    totalPizzaPrice += ingredients.whiteSauce.price;
  }else{
    priceHtmlArray[3].style.display = 'none';
  }
  if(state.glutenFreeCrust){
    priceHtmlArray[4].style.display = 'block';
    totalPizzaPrice += ingredients.glutenFreeCrust.price;
  }else{
    priceHtmlArray[4].style.display = 'none';
  }
  totalHtmlPrice.innerHTML = `$${totalPizzaPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})