// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'pepperonni', price: 1},
  mushrooms: {name: 'mushrooms', price: 1},
  greenPeppers: {name: 'green peppers', price: 1},
  whiteSauce: {name: 'white sauce', price: 3},
  glutenFreeCrust: {name: 'gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything(e) {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons(e)
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function(pep){
    if (state.pepperonni) {
      pep.style.visibility = "visible";
    }
    else {
      pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  //querySelector gives you NodeList which has forEach method, but
  //getElementsByClassName gives HTMLCollection which is live but
  //does not have forEach
  // const mushroomSection = document.getElementsByClassName('mushroom');
  const mushroomSection = document.querySelectorAll('.mushroom')
  mushroomSection.forEach((mushroom) => {
    if(state.mushrooms) {
      mushroom.style.visibility = "visible"
    } else {
      mushroom.style.visibility = "hidden"
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if(state.greenPeppers) {
      pepper.style.visibility = "visible"
    } else {
      pepper.style.visibility = "hidden"
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(element => {
    if(state.whiteSauce) {
      element.classList.add('sauce-white')
    } else {
      element.classList.remove('sauce-white')
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(element => {
    if(state.glutenFreeCrust) {
      element.classList.add('crust-gluten-free')
    } else {
      element.classList.remove('crust-gluten-free')
    }
  });
}

function renderButtons(e) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //it works lite a toggle function now.
  
if(e) {
  let element = e.target
  if(element.className.includes('active')) {
    element.classList.remove('active')
  } else {
    element.classList.add('active')
  }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const pricePanel = document.querySelector('.panel.price');
  const priceUl = pricePanel.children[2];
  const priceTotal = pricePanel.children[3];

  // <li>$1 pepperonni</li>
  // <li>$1 mushrooms</li>
  // <li>$1 green peppers</li>
  // <li>$3 white sauce</li>
  // <li>$5 gluten-free crust</li>
  // ^^^^^^console.log(priceUl.innerHTML);^^^
  

  //For refference: 
  // var ingredients = {
  //   pepperonni: {name: 'Pepperonni', price: 1},
  //   mushrooms: {name: 'Mushrooms', price: 1},
  //   greenPeppers: {name: 'Green Peppers', price: 1},
  //   whiteSauce: {name: 'White sauce', price: 3},
  //   glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
  // }

  // var state = {
  //   pepperonni: true,
  //   mushrooms: true,
  //   greenPeppers: true,
  //   whiteSauce: false,
  //   glutenFreeCrust: false
  // }

  let sum = basePrice;
  priceUl.innerHTML = "";

  for(let key in state) {
    if(state[key]) {
      let newLi = document.createElement('li');
      newLi.innerText = `$${ingredients[key].price} ${ingredients[key].name}`;
      priceUl.appendChild(newLi);

      sum += ingredients[key].price;
      priceTotal.innerHTML = `$${sum}`
    } else {
      //if nothing is selected then previous condition will never be true
      //so it will never have a chance to rerender the price 
      //if we remove the last item 
      priceTotal.innerHTML = `$${sum}`

    }
  }


}



renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function(e) {
  state.pepperonni = !state.pepperonni
  renderEverything(e)
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
const btnMushrooms = document.getElementsByClassName('btn-mushrooms')[0];
btnMushrooms.addEventListener('click', (e) => {
  state.mushrooms = !state.mushrooms
  renderEverything(e)
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
const btnGreenPeppers = document.getElementsByClassName('btn-green-peppers')[0];
btnGreenPeppers.addEventListener('click', (e) => {
  state.greenPeppers = !state.greenPeppers
  renderEverything(e)
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
const btnSauce = document.getElementsByClassName('btn-sauce')[0];
btnSauce.addEventListener('click', (e) => {
  state.whiteSauce = !state.whiteSauce
  renderEverything(e)
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
const btnCrust = document.getElementsByClassName('btn-crust')[0];
btnCrust.addEventListener('click', (e) => {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything(e)
})