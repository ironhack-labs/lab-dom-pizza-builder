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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';

    }else {
      oneMushroom.style.visibility = 'hidden';
    }

  }
  );
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';

    }else {
      oneGreenPep.style.visibility = 'hidden';
    }

  }
  );


}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  //No necesitamos el forEach porque no tiene que iterar en cada uno
  if (state.whiteSauce){
    document.querySelector('.sauce').classList.add('sauce-white')
    
  }else{
    document.querySelector('.sauce').classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if(state.glutenFreeCrust){
    document.querySelector('.crust').classList.add('crust-gluten-free')
  }else{
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  const productList =  document.querySelector('.panel.price ul');
  const totalPrice = document.querySelector('.panel.price strong');
  let sumPrice = basePrice;
  let selected = "";

  for (let key in state) {
    if (state[key]) {
      selected += `<li>$${ingredients[key]["price"]} ${ingredients[key]["name"]}</li>`;
      sumPrice += ingredients[key]["price"];
  }
}
  productList.innerHTML = selected
  totalPrice.innerHTML = `$${sumPrice}`
 // Iteration 4: change the HTML of `<aside class="panel price">`
}


// 
//   }

//   productList.innerHTML=``

//   sumDisplay.innerHTML = `$${sum}`;

  // let sum = basePrice;
  // for(let ingredient in state) //Por cada ingredient dentro de state es para objetos 
  //         {
  //            if(state[ingredient]){
  //             sum += ingredients[ingredient].price

  //            }

  //         }
  // //Iterar sobre elem de un for en elem que no sean numerables. Es sólo un boolean. Un for itera sobre elem que va contando, en este caso es true or false
  // //

  // totalPrice.innerHTML = `$${sum}`;



renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function(){
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function(){
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function(){
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function(){
state.glutenFreeCrust = !state.glutenFreeCrust;
renderEverything();
})