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
  document.querySelectorAll('.mushroom').forEach(mush => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  });}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(greenP => {
    if (state.greenPeppers) {
      greenP.style.visibility = 'visible';
    } else {
      greenP.style.visibility = 'hidden';
    }
  });}


  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  function renderWhiteSauce() {
    const element = document.querySelector('.sauce')
    console.log(element)
    element.classList.toggle("sauce-white");
  }

//   // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  const element = document.querySelector('.crust')
  console.log(element);
  // element.classList.toggle("crust-gluten-free");
  state.glutenFreeCrust ? element.classList.add("crust-gluten-free"): element.classList.remove("crust-gluten-free")
}



  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  function renderButtons() {
    state.pepperoni ? document.querySelector('.btn-pepperoni').classList.add("active"): document.querySelector('.btn-pepperoni').classList.remove("active");
    state.mushrooms ? document.querySelector('.btn-mushrooms').classList.add("active"): document.querySelector('.btn-mushrooms').classList.remove("active");
    state.greenPeppers ? document.querySelector('.btn-green-peppers').classList.add("active"): document.querySelector('.btn-green-peppers').classList.remove("active");
    state.whiteSauce ? document.querySelector('.btn-sauce').classList.add("active"): document.querySelector('.btn-sauce').classList.remove("active");
    state.glutenFreeCrust ? document.querySelector('.btn-crust').classList.add("active"): document.querySelector('.btn-crust').classList.remove("active");

  }

    // Iteration 4: change the HTML of `<aside class="panel price">`
const aliments =document.querySelectorAll(".aliments")
const alimentsPep = document.querySelector(".alimentsPep")
const alimentsMush = document.querySelector(".alimentsMush")
const alimentsGP = document.querySelector(".alimentsGP")
const alimentsWS = document.querySelector(".alimentsWS")
const alimentsGFC =document.querySelector(".alimentsGFC")
const resultat= document.querySelector(".resultat")

function renderPrice() {
  let sum = 10;
  (state.pepperoni)? (
    alimentsPep.style.display = 'block',
    sum+=ingredients.pepperoni.price) : (alimentsPep.style.display = 'none');
  (state.mushrooms) ? (alimentsMush.style.display = 'block', sum+=ingredients.mushrooms.price) : alimentsMush.style.display = 'none';
  (state.greenPeppers) ? (alimentsGP.style.display = 'block', sum+=ingredients.greenPeppers.price): alimentsGP.style.display = 'none';
  (state.whiteSauce) ? (alimentsWS.style.display = 'block', sum+=ingredients.whiteSauce.price): alimentsWS.style.display = 'none';
  (state.glutenFreeCrust) ? (alimentsGFC.style.display = 'block', sum+=ingredients.glutenFreeCrust.price) : alimentsGFC.style.display = 'none';
  resultat.textContent= sum
}








renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});



// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
const mushroomsButton= document.querySelector('.btn.btn-mushrooms')

function handleclick1(){
  state.mushrooms = !state.mushrooms;
  return renderEverything();
}
mushroomsButton.addEventListener('click',handleclick1)

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
const greenPeppersButton= document.querySelector('.btn.btn-green-peppers')

function handleclick2(){
  state.greenPeppers = !state.greenPeppers;
  return renderEverything();
}
greenPeppersButton.addEventListener('click',handleclick2)

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();

  
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})


//Iteration 4
