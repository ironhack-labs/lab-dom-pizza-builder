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
document.querySelectorAll('.mushroom').forEach(mush => {  
  if (state.mushrooms){ 
    mush.style.visibility ='visible'
  }
  else { 
    mush.style.visibility = "hidden"
  }
})

}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(pep => {  
    if (state.greenPeppers){ 
      pep.style.visibility ='visible'
    }
    else { 
      pep.style.visibility = "hidden"
    }
  })
  }


function renderWhiteSauce() {
  document.querySelectorAll('.sauce-white').forEach(sauce => {  
    if (state.whiteSauce){ 
      sauce.style.visibility ='visible'
    }
    else { 
      sauce.style.visibility = "hidden"
    }
  });
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  let glutenFreeCrust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    glutenFreeCrust.className = 'crust crust-gluten-free' 
  }
  else { glutenFreeCrust.className = 'crust'
}
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">  
}

function renderButtons() {

  const pep = document.querySelector('.btn.btn-pepperoni')
  if (state.pepperoni) {
    pep.className = 'btn btn-pepperoni active' 
  }
  else { pep.className = 'btn btn-pepperoni'
}

const mush = document.querySelector('.btn.btn-mushrooms')
if (state.mushrooms) {
  mush.className = 'btn btn-mushrooms active' 
}
else { mush.className = 'btn btn-mushrooms'
}

const green = document.querySelector('.btn.btn-green-peppers')
if (state.greenPeppers) {
  green.className = 'btn btn-green-peppers active' 
}
else { green.className = 'btn btn-green-peppers'
}

const sauce = document.querySelector('.btn.btn-sauce')
if (state.whiteSauce) {
  sauce.className = 'btn btn-sauce active' 
}
else { sauce.className = 'btn btn-sauce'
}
const crust = document.querySelector('.btn.btn-crust')
if (state.glutenFreeCrust) {
  crust.className = 'btn btn-crust active' 
}
else { crust.className = 'btn btn-crust'
}

}

function renderPrice() {
  let total = 10;
  let ul = document.querySelector('.panel.price ul');
  let str='';
  if (state.pepperoni){
    str = str+'<li>$1 pepperoni</li>'
    total+=1
  }
  if(state.mushrooms){
    str=str+'<li>1$ mushrooms</li>'
    total+=1
  }
  if(state.greenPeppers){
    str=str+'<li>$1 green peppers</li>'
    total+=1
  }
  if(state.whiteSauce){
    str=str+'<li>3$ white sauce</li>'
    total+=3
  }

  if(state.glutenFreeCrust){
    str=str+'<li>5$ gluten-free crust</li>'
    total+=5
  }
  ul.innerHTML=str;
  document.querySelector('.panel.price strong').innerHTML = '$' + total

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

