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
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
   
    } else {
      mushroom.style.visibility = 'hidden';
      
    }
  });

}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(greenPep => {
    if (state.greenPeppers) {
      greenPep.style.visibility = 'visible';
    } else {
      greenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function(el){
    if(state.whiteSauce){
      el.classList.add('sauce-white');
  
    } else {
      el.classList.remove('sauce-white');

    }
  })
}




function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function(crusty){
    if(state.glutenFreeCrust){
      crusty.classList.add('crust-gluten-free');
 
    } else {
      crusty.classList.remove('crust-gluten-free');
 
    }
  })



}



function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  
  /*
   document.querySelector('.btn').forEach(function(){

   })
 */

 const buttonMushroom = document.querySelector('.btn-mushrooms');
 const buttonPepperoni = document.querySelector('.btn-pepperoni');
 const buttonGreenPeppers = document.querySelector('.btn-green-peppers');
 const buttonWhiteSauce = document.querySelector('.btn-sauce');
 const buttonGlutenFree = document.querySelector('.btn-crust');
 
 if(state.mushrooms){
  buttonMushroom.classList.add('active');
 } else {
  buttonMushroom.classList.remove('active');
 }

 if(state.pepperoni){
  buttonPepperoni.classList.add('active');
 } else {
  buttonPepperoni.classList.remove('active');
 }


 if(state.greenPeppers){
  buttonGreenPeppers.classList.add('active');
 } else {
  buttonGreenPeppers.classList.remove('active');
 }

 
 if(state.whiteSauce){
  buttonWhiteSauce.classList.add('active');
 } else {
  buttonWhiteSauce.classList.remove('active');
 }

 if(state.glutenFreeCrust){
  buttonGlutenFree.classList.add('active');
 } else {
  buttonGlutenFree.classList.remove('active');
 }

 

 
}



function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
 


  const ingredientList = document.querySelector('aside.panel.price ul').getElementsByTagName('li');
  console.log(ingredientList);
 ingredientList.forEach(function(el){
   console.log(el);
})



  /*
for(let i = 0; i < ingredientList.length;i++){
  console.log(ingredientList[i].innerHTML);
}
*/



  let pricesTotal = 0;
  let listOfIngredients = '';
/*
  for (let key in state) {
    if (state[key]) {
      listOfIngredients =+ ``
      
    }
  }
*/

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



