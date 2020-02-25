// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {
    name: 'Pepperonni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
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
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function (onePepperoni) {
    if (state.pepperonni) {
      onePepperoni.style.visibility = "visible";
    } else {
      onePepperoni.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function (oneMushroom) {
    if (state.mushrooms) {
      oneMushroom.style.visibility = "visible";
    } else {
      oneMushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function (onePepper) {
    if (state.greenPeppers) {
      onePepper.style.visibility = "visible";
    } else {
      onePepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
//   // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauce.setAttribute('class', 'sauce sauce-white');
  } 
  else {
    sauce.setAttribute('class', 'sauce');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crust.setAttribute('class', 'crust crust-gluten-free');
  } else {
    crust.setAttribute('class', 'crust');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let ingredient = "";
  let allButtons = document.querySelectorAll('.btn')
  allButtons.forEach(function (oneButton) {
    ingredient = (oneButton.innerText);

    if (ingredient === 'Pepperoni') {
      if (!state.pepperonni) {
        oneButton.classList.remove('active');
      } else {
        oneButton.classList.add('active')
      }
    }

    if (ingredient === 'Mushrooms') {
      if (!state.mushrooms) {
        oneButton.classList.remove('active');
      } else {
        oneButton.classList.add('active')
      }
    }

    if (ingredient === 'Green peppers') {
      if (!state.greenPeppers) {
        oneButton.classList.remove('active');
      } else {
        oneButton.classList.add('active')
      }
    }

    if (ingredient === 'White sauce') {
      if (!state.whiteSauce) {
        oneButton.classList.remove('active');
      } else {
        oneButton.classList.add('active')
      }
    }

    if (ingredient === 'Gluten-free crust') {
      if (!state.glutenFreeCrust) {
        oneButton.classList.remove('active');
      } else {
        oneButton.classList.add('active')
      }
    }
  })
}

// FOR EACH 
// var numbers = [65, 44, 12, 4];
// numbers.forEach(function(item, index, arr) {
//   arr[index] = item * 10)
// }

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = 10;
  let ul = document.querySelector('.priceList'); //ul
  ul.innerHTML = ""

  for (let item in state) {
    if (state[item]) {
      let priceItem = document.createElement("li") //li
      priceItem.innerHtml = (`$ ${ingredients[item].price} ${ingredients[item].name}`)
      ul.innerHTML += ul.innerHTML + priceItem.innerHTML
      total = total + ingredients[item].price
    }
  }
  document.querySelector('.Grand-Total').innerHTML = `$${total}`;
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () {
  state.pepperonni = !state.pepperonni;
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms;
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything()
}