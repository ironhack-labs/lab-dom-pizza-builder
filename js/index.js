  
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
  document.querySelectorAll(".mushroom").forEach(mush => {
    if (state.mushrooms){
      mush.style.visibility = "visible"
    } else{
    mush.style.visibility = "hidden"
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(pepper => {
    if (state.greenPeppers){
      pepper.style.visibility = "visible"
    } else{
      pepper.style.visibility = "hidden"
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(saucewhite => {
    if (state.whiteSauce){
      saucewhite.style.visibility = "visible"
    } else{
      saucewhite.style.visibility = "hidden"
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(crusts => {
    if (state.glutenFreeCrust){
      crusts.style.visibility = "visible"
    } else{
      crusts.style.visibility = "hidden"
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let btnPep = document.querySelector('.btn.btn-pepperoni')
    if(state.pepperoni){
      btnPep.classList.add("active");
    }else{
      btnPep.classList.remove("active");
    }
  let btnMush = document.querySelector('.btn.btn-mushrooms')
    if(state.mushrooms){
      btnMush.classList.add("active");
    }else{
      btnMush.classList.remove("active");
    }
  let btnPepper = document.querySelector('.btn.btn-green-peppers')
    if(state.greenPeppers){
      btnPepper.classList.add("active");
    }else{
      btnPepper.classList.remove("active");
    }
   let btnSauce = document.querySelector('.btn.btn-sauce')
    if(state.whiteSauce){
      btnSauce.classList.add("active");
    }else{
      btnSauce.classList.remove("active");
    }
  let btnCrust = document.querySelector('.btn.btn-crust')
    if(state.glutenFreeCrust){
      btnCrust.classList.add("active");
    }else{
      btnCrust.classList.remove("active");
    }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">
  const ul = document.querySelector(".panel.price ul");
  ul.innerHTML="";
  let total = 10;
  for(let key in state){ 
    if(state[key]){ 
    let precio =  ingredients[key].price;
    //let ing = key;
    const li = document.createElement("li"); 
    li.innerText =`$ ${precio} ${key}`;
    ul.appendChild(li);
    total += precio;
    }
  }
  if(total > 10){
    document.querySelector(".panel strong").innerText = `$ ${total}`;
  } else {
    document.querySelector(".panel strong").innerText = "$ 0";
  }
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