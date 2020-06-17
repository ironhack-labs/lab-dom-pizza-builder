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
  pepperoni: false,
  mushrooms: false,
  greenPeppers: false,
  whiteSauce: false,
  glutenFreeCrust: true
  
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
      //document.querySelector('.price li').innerText = '$1 pepperoni';
      document.querySelector('.btn.btn-pepperoni').className = "btn btn-pepperoni active"
      onePep.style.visibility = 'visible';
    } else {
      //document.querySelector('.price li').innerText = "$0";
      document.querySelector('.btn.btn-pepperoni').className = "btn btn-pepperoni"
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if(state.mushrooms){
      
      document.querySelector('.btn.btn-mushrooms').className = "btn btn-mushrooms active"
      oneMushroom.style.visibility = 'visible';
    } else {
      
      document.querySelector('.btn.btn-mushrooms').className = "btn btn-mushrooms"
      oneMushroom.style.visibility = 'hidden';
    }
      
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGp =>{
    if (state.greenPeppers){
      document.querySelector('.btn.btn-green-peppers').className = "btn btn-green-peppers active"
      oneGp.style.visibility = "visible";
    }else {
      document.querySelector('.btn.btn-green-peppers').className = "btn btn-green-peppers"
      oneGp.style.visibility = "hidden";
    }

  });
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(oneSauce => {
    if(state.whiteSauce){
      document.querySelector('.btn.btn-sauce').className = "btn btn-sauce active"
      oneSauce.style.visibility = "visible";
    }else {
      document.querySelector('.btn.btn-sauce').className = "btn btn-sauce "
      oneSauce.style.visibility = "hidden";
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(oneCrust => {
    if(state.glutenFreeCrust){
      document.querySelector('.btn.btn-crust').className = "btn btn-crust active"
      oneCrust.style.visibility = "visible";
    }else {
      document.querySelector('.btn.btn-crust').className = "btn btn-crust"
      oneCrust.style.visibility = "hidden";
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // document.querySelectorAll('.active').forEach(act => {
  //   if(state.active){
     
  //     act.style.visibility = "visible";
  //     //document.querySelector('.btn.btn-pepperoni').className = "btn btn-pepperoni active"
  //   } else {
  //     act.style.visibility = "hidden";
  //     //document.querySelector('.btn.btn-pepperoni').className = "btn btn-pepperoni"
  //   }
  // });
}

  function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
    let total = basePrice
    let list = ``

    for(key in state){
      if(state[key]){
      total += ingredients[key].price;
      list += `<li>${ingredients[key].price} ${ingredients[key].name}`
    }
  }
  document.querySelector('.panel.price ul').innerHTML = list
  document.querySelector('#total1').innerText = '$'+ total
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
  //console.log(state);
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  //console.log(state);
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  //console.log(state);
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  //console.log(state);
  renderEverything()
}