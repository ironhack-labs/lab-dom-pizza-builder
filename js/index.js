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
  glutenFreeCrust: false,
  crust: true
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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
      if (state.mushrooms) {
        oneMush.style.visibility = 'visible';
        
      } else {
        oneMush.style.visibility = 'hidden';
      }
    });

 
}
  // Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreen => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = 'visible';
    } else {
      oneGreen.style.visibility = 'hidden';
    }
  });

}

  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white')
  }
  else {
    document.querySelector('.sauce').classList.remove('sauce-white')
  }

}


  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free')
  }
  else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }

}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  if (state.pepperoni){ //if pepperoni state is true, execute code below
    document.querySelector('.btn.btn-pepperoni').classList.add('active') //add the 'active' class to the button and apply style
  }
  else { //if pepperoni state is false, execute:
    document.querySelector('.btn.btn-pepperoni').classList.remove('active') // remove the 'active' class to go back to initial style of 'btn'
  }
  
  if (state.mushrooms){
    document.querySelector('.btn.btn-mushrooms').classList.add('active')
  }
  else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active') 
   }

   if (state.greenPeppers){
    document.querySelector('.btn.btn-green-peppers').classList.add('active')
  }
  else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active') 
   }

   if (state.whiteSauce){
    document.querySelector('.btn.btn-sauce').classList.add('active')
  }
  else {
    document.querySelector('.btn.btn-sauce').classList.remove('active') 
   } 

   if (state.glutenFreeCrust){
    document.querySelector('.btn.btn-crust').classList.add('active')
  }
  else {
    document.querySelector('.btn.btn-crust').classList.remove('active') 
   } 
}
  

  // Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  let finalPrice = basePrice //replace basePrice value with the final value to get at the end
  let itemList = document.querySelector('aside.panel.price ul') // select all ingredients and prices in html aside
  itemList.innerHTML = "" //replace current itemList by empty string to be filled


  for (let item in ingredients) { //initialize for in loop trough ingredient objects
    
    if (state[item]) {  
    //if the ingredient object state is true, execute code below
    finalPrice += ingredients[item].price //ingredients which state is true get additioned to the final price
    itemList.innerHTML += `<li> $ ${ingredients[item].price} ${ingredients[item].name}</li>` //ingredient with true state are added to the ul and displayed on browser 
    } // condition and execution ends
  } //loop ends
  document.querySelector('aside.panel.price strong').innerHTML = "$ "+finalPrice //update final price line 
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
 state.mushrooms = !state.mushrooms;   //when button clicked, change state of mushrooms to false / true 
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
  renderEverything()
});

