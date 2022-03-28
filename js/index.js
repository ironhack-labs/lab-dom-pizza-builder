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
  document.querySelectorAll('.mushroom').forEach((mushy) => {
    if (state.mushrooms) {
      mushy.style.visibility = 'visible';
    } else {
      mushy.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenPepp) => {
    if (state.greenPeppers) {
      greenPepp.style.visibility = 'visible';
    } else {
      greenPepp.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
 
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add("sauce-white")

   
  } else {
    document.querySelector('.sauce').classList.remove("sauce-white")
    
  }
   
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add("crust-gluten-free")
   
  } else {
    document.querySelector('.crust').classList.remove("crust-gluten-free")
    
  }

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

    if (state.pepperoni) {
      document.querySelector('.btn-pepperoni').classList.add("active") 
    } else if (!state.pepperoni){
      document.querySelector('.btn-pepperoni').classList.remove("active")  
    }

    if (state.mushrooms) {
      document.querySelector('.btn-mushrooms').classList.add("active") 
    } else if (!state.mushrooms){
      document.querySelector('.btn-mushrooms').classList.remove("active")  
    }

    if (state.greenPeppers) {
      document.querySelector('.btn-green-peppers').classList.add("active") 
    } else if (!state.greenPeppers){
      document.querySelector('.btn-green-peppers').classList.remove("active")  
    }

    if (state.whiteSauce) {
      document.querySelector('.btn-sauce').classList.add("active") 
    
    } else if (!state.whiteSauce){
      document.querySelector('.btn-sauce').classList.remove("active") 
    
    }

    if (state.glutenFreeCrust) {
      document.querySelector('.btn-crust').classList.add("active") 
    } else if (!state.glutenFreeCrust){
      document.querySelector('.btn-crust').classList.remove("active")  
    }

   
}

function renderPrice() {

  let totalPrice = 10


  if (state.pepperoni) {
    document.querySelector('body > aside > ul > li:nth-child(1)').style.display = "block";
    totalPrice += 1
  } else if (!state.pepperoni){
 document.querySelector('body > aside > ul > li:nth-child(1)').style.display = "none";
  
  }

  if (state.mushrooms) {
    document.querySelector('body > aside > ul > li:nth-child(2)').style.display = "block";
    totalPrice += 1
  } else if (!state.mushrooms){
    document.querySelector('body > aside > ul > li:nth-child(2)').style.display = "none";
 
  }

  if (state.greenPeppers) {
    document.querySelector('body > aside > ul > li:nth-child(3)').style.display = "block"; 
    totalPrice += 1
  } else if (!state.greenPeppers){
    document.querySelector('body > aside > ul > li:nth-child(3)').style.display = "none";
    
  }

  if (state.whiteSauce) {
    document.querySelector('body > aside > ul > li:nth-child(4)').style.display = "block";
    totalPrice += 3
  } else if (!state.whiteSauce){
    document.querySelector('body > aside > ul > li:nth-child(4)').style.display = "none";
  
  
  }

  if (state.glutenFreeCrust) {
    document.querySelector('body > aside > ul > li:nth-child(5)').style.display = "block";
    totalPrice += 5
  } else if (!state.glutenFreeCrust){
    document.querySelector('body > aside > ul > li:nth-child(5)').style.display = "none";
  
  }


 document.querySelector('strong').innerText = "$" + totalPrice
 

  
 
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
 
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {

  if(!state.whiteSauce){
    state.whiteSauce = true;
   
  } else if (state.whiteSauce) {
    state.whiteSauce = false;

  }

  renderEverything();

}) 

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  
  if(!state.glutenFreeCrust){
    state.glutenFreeCrust = true;
    
   
  } else if (state.glutenFreeCrust) {
    state.glutenFreeCrust = false;
    
   
  }

  renderEverything();
  
}) 
