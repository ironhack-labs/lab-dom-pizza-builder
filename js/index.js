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

  const mushroomsImgs = document.querySelectorAll(".mushroom");
  
  mushroomsImgs.forEach((oneMush) => {
    if(state.mushrooms) {
      oneMush.style.visibility = 'visible';
    }else { 
      oneMush.style.visibility = "hidden";
    }
    
  });


}

function renderGreenPeppers() {
  const greenPImgs = document.querySelectorAll(".green-pepper");

  greenPImgs.forEach((oneGreenP) => {
    if(state. greenPeppers) {
      oneGreenP.style.visibility = "visible";
    }else {
      oneGreenP.style.visibility = "hidden";
    }
  });

  

}

function renderWhiteSauce() {
  const whiteSauceImgs = document.querySelector(".sauce");
  if(state.whiteSauce) {
    whiteSauceImgs.style.visibility = "hidden";
  } else {
    whiteSauceImgs.style.visibility = "visible";

  }
  
}

function renderGlutenFreeCrust() {
  const glutenFreeImgs = document.querySelector(".crust")
  if(state.glutenFreeCrust) {
    glutenFreeImgs.style.visibility = "hidden";
  }else {
    glutenFreeImgs.style.visibility = "visible";
  }

  


}

function renderButtons() {

  const ingredientBtns = document.querySelectorAll(".active");
  
  const ingredientBtnsArr = Object.values(ingredientBtns)
 
    

  ingredientBtnsArr.forEach(function(element){
    
    if(state.element === "false") {
      ingredientBtns.className.remove("active");
    } else if(state.element === "true") {
      ingredientBtns.className.add("active");

    }
    
  })
 
  
  
}



function renderPrice() {

  
  const priceStrong = document.querySelector("strong");
  
  const pricesList = document.querySelectorAll("aside li");

  const stateArr = Object.keys(state);


  stateArr.forEach(function(element){
    let textPrice = "";
    let totalSum = basePrice;

    if (state.element === "true") {
      
      textPrice += `${ingredients.price} ${ingredients.name}`
      totalSum +=`${ingredients.price} `;
    
    }

    pricesList.innerHTML = textPrice;
    priceStrong.innerHTML = `${totalSum}`;
  })



  // Iteration 4: change the HTML of `<aside class="panel price">`
}


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn.btn-green-peppers').addEventListener("click", function () {

  state.greenPeppers = !state.greenPeppers;
  renderEverything();

});

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
