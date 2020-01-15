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
  document.querySelectorAll('.pep').forEach(function ($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  })
}


// Iteration 1: set the visibility of `<section class="mushroom">`



function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function (mush) {
    if (state.mushrooms) {
      mush.style.visibility = "visible";
    } else {
      mush.style.visibility = "hidden";
    }
  })
}


// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function (gpeppers) {
    if (state.greenPeppers) {
      gpeppers.style.visibility = "visible";
    } else {
      gpeppers.style.visibility = "hidden";
    }
  })
}


function renderWhiteSauce() {
  sWhite = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sWhite.classList.add('sauce-white')
  } else {
    sWhite.classList.remove('sauce-white')
  }
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  let crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free')
  } else {
    crust.classList.remove('crust-gluten-free')
  }
}
// Iteration 3: add/remove the class "active" of each `<button class="btn">`


function renderButtons() {
  let but = document.querySelector('.controls');
  but.onclick = function (e) {
    e.target.classList.toggle('active')
  }
}


// Iteration 4: change the HTML of `<aside class="panel price">`
/*
let hhh = document.querySelectorAll('aside li');

hhh[0].id = 'PEPE';
hhh[1].id = "MUSH";
hhh[2].id = "GRENP";
hhh[3].id = "WHITES";
hhh[4].id = "GLUT";

let jjj = document.querySelector('aside ul');

jjj.id = "UL";
*/

function renderPrice() {
  var endPrice = 10;
  var list = document.querySelector("aside.panel.price ul");
  list.innerHTML = "";

  for (let ingredientKey in ingredients) {
     
    if (state[ingredientKey]) {
      endPrice += ingredients[ingredientKey].price;
      list.innerHTML += `<li>${ingredients[ingredientKey].price} ${ingredients[ingredientKey].name.toLowerCase()}</li>`;
    }
  }
  document.querySelector("aside.panel.price strong").innerHTML = "$" + endPrice;

}



// function renderPrice() {
//   let price = 10 ;
//   let ingList = document.querySelector("aside.panel.price ul");
//   ingList.innerHTML = "";
//     for (property in state) {
//       if (state[property]){ 
//           price += ingredients[property].price;
//         ingList.innerHTML += `<li>${ingredients[property].price} ${ingredients[property].name}`
//       } 
//       } document.getElementById("aside.panel.price strong").innerHTML = `${price}`;
//     }



// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}