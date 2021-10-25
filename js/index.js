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

  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  if (state.greenPeppers) {
    oneGreenPepper.style.visibility = 'visible';
  } else {
    oneGreenPepper.style.visibility = 'hidden';
  }}

function renderWhiteSauce() {

  const sauce = document.querySelectorAll('.sauce').forEach((sauce) => {
    if(state.whiteSauce) {
      sauce.classList.add('.sauce-white')
    } else {
      sauce.classList.remove('.sauce-white')
    }
  });
  }

function renderGlutenFreeCrust() {
  {
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    const crust = document.querySelectorAll('.crust').forEach((crust) => {
      if(state.crust) {
        crust.classList.add('.crust-gluten-free')
      } else {
        crust.classList.remove('.crust-gluten-free')
      }
    });
    }
    

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`


  if (state.pepperoni){
    btnPepperoni.classList.add('active')
  }
  if (state.mushrooms){
    btnMushrooms.classList.add('active')
  }


  if (state.greenPeppers){
    btnGreenPeppers.classList.add('active')
  }

  if (state.sauce){
    btnSauce.classList.add('active')
  }
  if (state.crust){
    btnCrust.classList.add('active')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const total = document.querySelectorAll('.price strong')
  let itemsPrice = 10
  if(state.pepperoni){
    itemsPrice+=1}else 0
    if (state.mushrooms){
      itemsPrice+=1
    }else 0
    if(state.greenPeppers){
      itemsPrice +=1
    }else 0
    if (state.whiteSauce){
      itemsPrice +=1
    } else 0
    if (state.whiteSauce){
      itemsPrice+=1
    }else 0
    if(state.glutenFreeCrust){
      itemsPrice +=1
    }else 0
  }
  total.textContent = itemsPrice

  const list = document.querySelectorAll (`.price ul`)
  list.innerHTML = ``

  const pepperoni = document.createElement('li')
  const mushroom = document.createElement('li')
  const greenpepper = document.createElement('li')
  const souce = document.createElement('li')
  const crust = document.createElement('li')

  if (state.pepperoni){
    pepperoni.textContent += '$1 pepperoni'
    list.appendChild(pepperoni)
  } 
  if (state.mushrooms) {
    mushroom.textContent += '$1 mushrooms'
    list.appendChild(mushroom)
  } 
  if (state.greenPeppers) {
    greenpepper.textContent += '$1 green pepper'
    list.appendChild(greenpepper)
  }
  if (state.whiteSauce) {
    souce.textContent += '$3 white souce'
    list.appendChild(souce)
  }
  if (state.glutenFreeCrust) {
    crust.textContent += '$5 gluten-free crust'
    list.appendChild(crust)
  }

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
document.querySelector('.btn.btn-green-pepper').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(`.btn.btn-sauce`).addEventListener('click',function(){
  state.whiteSauce =!state.whiteSauce
  renderEverything ()
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(`.btn.btn-crust`).addEventListener('click',function(){
  state.crust =!state.crust
  renderEverything ()
})