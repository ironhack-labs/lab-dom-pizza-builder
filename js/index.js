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

let pep = true, mush = true, greenPep = true, sauceAct = true, crustAct = true;

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


function regularCrust() {
  
  const regCrust = document.querySelector('.crust.crust-gluten-free');
  regCrust.classList.remove('crust-gluten-free');
  
  state.glutenFreeCrust = !state.glutenFreeCrust;

}



function tomato() {

 const tomatoRedSauce = document.querySelector('.sauce.sauce-white');
 // tomatoRedSauce.classList.add('sauce');
  tomatoRedSauce.classList.remove('sauce-white');
  state.whiteSauce = !state.whiteSauce;

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
  document.querySelectorAll('.mushroom').forEach(oneMushrooms => {
    if (state.mushrooms) {
      oneMushrooms.style.visibility = 'visible';
    } else {
      oneMushrooms.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  })
}


function renderWhiteSauce() {
  /*
  const redSauceVisible = document.querySelector('.sauce');
  if (state.whiteSauce) {
    redSauceVisible.classList.add('sauce-white');
  } else {
    redSauceVisible.classList.remove('sauce-white');
  }
  */
}

function tomatoSauceVisible() {
  const redSauceVisible = document.querySelector('.sauce');
  if (state.whiteSauce) {
    redSauceVisible.classList.add('sauce-white');
  } else {
    redSauceVisible.classList.remove('sauce-white');
  }
}

function crustVisible(){
  const crustVisible = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crustVisible.classList.add('crust-gluten-free');
  } else {
    crustVisible.classList.remove('crust-gluten-free');
  }
}

function init() {
  document.querySelector('.btn.btn-crust').classList.remove('active');
  document.querySelector('.btn.btn-sauce').classList.remove('active');
  crustAct = !crustAct;
  sauceAct = !sauceAct;
  var whiteSauceelement = document.querySelector('.panel.price ul li:nth-child(4)');
  var element = document.querySelector('.panel.price ul li:nth-child(5)')
  element.parentNode.removeChild(element);
  whiteSauceelement.parentNode.removeChild(whiteSauceelement);
  var displayTotal = document.querySelector('.panel.price strong');
  displayTotal.innerHTML = "$10";
}

init()

function renderGlutenFreeCrust() {
  /*
  const glutenCrustVisible = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    glutenCrustVisible.classList.add('crust-gluten-free');
  } else {
    glutenCrustVisible.classList.remove('crust-gluten-free');
  }
  */
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pepperoniConst = document.querySelector('.btn.btn-pepperoni');
  const mushroomsConst = document.querySelector('.btn.btn-mushrooms');
  const greenPepConst = document.querySelector('.btn.btn-green-peppers');
  const sauceConst = document.querySelector('.btn.btn-sauce');
  const crustConst = document.querySelector('.btn.btn-crust');

  if(pep){
    pepperoniConst.classList.add('active');

  } else {
    pepperoniConst.classList.remove('active');

  }
  if(mush){
    mushroomsConst.classList.add('active');
  } else {
    mushroomsConst.classList.remove('active');
  }
  if(greenPep){
    greenPepConst.classList.add('active');
  } else {
    greenPepConst.classList.remove('active');
  }
  if(sauceAct){
    sauceConst.classList.add('active');
  } else {
    sauceConst.classList.remove('active');
  }
  if(crustAct){
    crustConst.classList.add('active');
  } else {
    crustConst.classList.remove('active');
  }
}




function renderPrice() {

  // Iteration 4: change the HTML of `<aside class="panel price">`
  console.log(basePrice);
  
  if (pep) {
    basePrice++;
  } else  { basePrice--; }

  
  document.querySelector('.panel.price strong').innerHTML = "$" + basePrice;

  console.log(basePrice);

}


renderEverything();
regularCrust();
tomato();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  renderButtons();
  state.pepperoni = !state.pepperoni;
  pep = !pep;
  renderEverything();
});



// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  renderButtons();
  state.mushrooms = !state.mushrooms;
  mush = !mush;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  renderButtons();
  state.greenPeppers = !state.greenPeppers;
  greenPep = !greenPep;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  sauceAct = !sauceAct;

  renderButtons();
  tomatoSauceVisible();
  state.whiteSauce = !state.whiteSauce;

})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  crustAct = !crustAct;

  renderButtons();
  crustVisible();
  state.glutenFreeCrust = !state.glutenFreeCrust;


 // renderEverything();
})