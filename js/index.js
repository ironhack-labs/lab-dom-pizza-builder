// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
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
document.querySelectorAll('.mushroom').forEach((element)=>{
  if (state.mushrooms===true){
    element.style.visibility='visible';
  } else {
    element.style.visibility="hidden";
  }
})
  
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((element)=>{
    if (state.greenPeppers===true){
      element.style.visibility='visible';
    } else {
      element.style.visibility="hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((element)=>{
    if (state.whiteSauce===true){
      element.style.visibility='visible';
    } else {
      element.style.visibility="hidden";
    }
  })
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach((element)=>{
    if (state.glutenFreeCrust===true){
      element.style.visibility='visible';
    } else {
      element.style.visibility="hidden";

      }
    })
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn-pepperoni').forEach((element)=>{
    if (state.pepperoni===false){
      element.classList.remove('active')
    } else {
      element.classList.add('active')
    }
  })

  document.querySelectorAll('.btn-mushrooms').forEach((element)=>{
    if (state.mushrooms===false){
      element.classList.remove('active')
    } else {
      element.classList.add('active')
    }
  })
  document.querySelectorAll('.btn-green-peppers').forEach((element)=>{
    if (state.greenPeppers===false){
      element.classList.remove('active')
    } else {
      element.classList.add('active')
    }
  })

  document.querySelectorAll('.btn-sauce').forEach((element)=>{
    if (state.whiteSauce===true){
      element.classList.remove('active')
    } else {
      element.classList.add('active')
    }
  })

  document.querySelectorAll('.btn-crust').forEach((element)=>{
    if (state.glutenFreeCrust===true){
      element.classList.remove('active')
    } else {
      element.classList.add('active')
    }
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let subT= 0

  document.getElementById("pepp").innerHTML= `$${ingredients.pepperoni.price} pepperoni`
  if (state.pepperoni===true) {
    document.getElementById("pepp").style.visibility='visible';
     subT += ingredients.pepperoni.price
    
  } else {
    document.getElementById("pepp").style.visibility='hidden';
     subT += 0

  }

  document.getElementById("mush").innerHTML= `$${ingredients.mushrooms.price} mushrooms`
  if (state.mushrooms===true) {
    document.getElementById("mush").style.visibility='visible';
    subT += ingredients.mushrooms.price

  } else {
    document.getElementById("mush").style.visibility='hidden';
  }

  document.getElementById("gree").innerHTML= `$${ingredients.greenPeppers.price} green peppers`
  if (state.greenPeppers===true) {
    document.getElementById("gree").style.visibility='visible';
    subT += ingredients.greenPeppers.price

  } else {
    document.getElementById("gree").style.visibility='hidden';
  }

  document.getElementById("whit").innerHTML= `$${ingredients.whiteSauce.price} white sauce`
  if (state.whiteSauce===true) {
    document.getElementById("whit").style.visibility='visible';
    subT += ingredients.whiteSauce.price

  } else {
    document.getElementById("whit").style.visibility='hidden';
  }

  document.getElementById("glut").innerHTML= `$${ingredients.glutenFreeCrust.price} gluten-free crust`
  if (state.glutenFreeCrust===true) {
    document.getElementById("glut").style.visibility='visible';
    subT += ingredients.glutenFreeCrust.price

  } else {
    document.getElementById("glut").style.visibility='hidden';
  }

  
  document.getElementById("tota").innerHTML= `$${10+subT}`
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