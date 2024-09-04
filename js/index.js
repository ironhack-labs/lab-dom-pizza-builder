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
  document.querySelectorAll(".mushroom").forEach((champi)=>{
    if (state.mushrooms){
      champi.style.visibility = "visible";
    }
    else{
      champi.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((pepe)=>{
    if (state.greenPeppers){
      pepe.style.visibility = "visible";
    }
    else{
      pepe.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  sauce = document.querySelector(".crust .sauce")
  // console.log(sauce.classList)
  sauce.classList.toggle('sauce-white', state.whiteSauce);
 
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  crustGF = document.querySelector(".crust")
  // console.log(sauce.classList)
  crustGF.classList.toggle('crust-gluten-free', state.glutenFreeCrust);
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelector('.btn-pepperoni').classList.toggle('active', state.pepperoni);
  document.querySelector('.btn-mushrooms').classList.toggle('active', state.mushrooms);
  document.querySelector('.btn-green-peppers').classList.toggle('active', state.greenPeppers);
  document.querySelector('.btn-sauce').classList.toggle('active', state.whiteSauce);
  document.querySelector('.btn-crust').classList.toggle('active', state.glutenFreeCrust);
  }

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // ingredients = {
  //   pepperoni: { name: 'pepperoni', price: 1 },
  //   mushrooms: { name: 'Mushrooms', price: 1 },
  //   greenPeppers: { name: 'Green Peppers', price: 1 },
  //   whiteSauce: { name: 'White sauce', price: 3 },
  //   glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
  // };
  let listaAnadidos = Object.entries(state);
  listaAnadidos = listaAnadidos.filter((ingrediente)=>ingrediente[1]).map((elem)=>elem[0])
 
  factura = document.querySelector(".price ul")
  factura.innerHTML = ''
  
  listaAnadidos.forEach((alimento)=>{
    factura.innerHTML += `<li>$${ingredients[alimento].price} $${ingredients[alimento].name}</li>`
  })

  precio = document.querySelector("strong")
  precio.innerHTML = `$${listaAnadidos.reduce((sum, elem)=> sum + ingredients[elem].price, 10)}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  // console.log(state.whiteSauce)
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  // console.log(state.glutenFreeCrust)
  renderEverything();
});