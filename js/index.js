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
	document.querySelectorAll('.pep').forEach(function(onePep) {
		if (state.pepperoni) {
			onePep.style.visibility = 'visible';
		} else {
			onePep.style.visibility = 'hidden';
		}
	});
}

  // Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
	document.querySelectorAll('.mushroom').forEach(function(mushroom) {
		if (state.mushrooms) {
			mushroom.style.visibility = 'visible';
		} else {
			mushroom.style.visibility = 'hidden';
		}
	});
}

  // Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
	document.querySelectorAll('.green-pepper').forEach(function(greenPepper) {
		if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible';}
       else {
      	greenPepper.style.visibility = 'hidden';
		}
	});
}

  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
const sauce =	document.querySelectorAll('.sauce').forEach(function(toggleSauce) {
		if (state.whiteSauce) {
			toggleSauce.classList.add('sauce-white');
		} else {
			toggleSauce.classList.remove('sauce-white');
		}
	});
}


  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  const pizzaCrust =	document.querySelectorAll('.crust').forEach(function(toggleCrust) {
	if (state.glutenFreeCrust) {
      toggleCrust.classList.add('crust-gluten-free');
    } else {	
      toggleCrust.classList.remove('crust-gluten-free');	
    	}
	});
}

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  if (state.pepperoni == true){
    document.querySelector('.btn.btn-pepperoni').classList.add('active')
  } else document.querySelector('.btn.btn-pepperoni').classList.remove('active')

  if(state.mushrooms == true){
    document.querySelector('.btn.btn-mushrooms').classList.add('active')
  } else document.querySelector('.btn.btn-mushrooms').classList.remove('active')

  if(state.greenPeppers == true){
    document.querySelector('.btn.btn-green-peppers').classList.add('active')
  } else document.querySelector('.btn.btn-green-peppers').classList.remove('active')

  if(state.whiteSauce == true){
    document.querySelector('.btn.btn-sauce').classList.add('active')
  } else document.querySelector('.btn.btn-sauce').classList.remove('active')

  if(state.glutenFreeCrust == true){
    document.querySelector('.btn.btn-crust').classList.add('active')
  } else document.querySelector('.btn.btn-crust').classList.remove('active')
}

    // Iteration 4: change the HTML of `<aside class="panel price">
  function renderPrice() {
    let totalPrice = basePrice;
  
  const parent = document.querySelector('.panel.price ul');
  parent.innerHTML = "";
  for (let i in ingredients) {
    if (state[i]){
      totalPrice += ingredients[i].price;
      parent.innerHTML += `<li> $${ingredients[i].price} ${ingredients[i].name} </li>`;
      console.log(`${ingredients[i].price}`)
    }
   }
   document.querySelector(".panel.price strong").innerHTML = "$" + totalPrice;
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