// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
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
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushroom) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })


}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach(function($gpepper){
    if (state.greenPeppers) {
      $gpepper.style.visibility = "visible";
    }
    else {
      $gpepper.style.visibility = "hidden";
    }
  })
  // function renderButtons(btn-green-peppers);
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(function($whiteSauce){
    if (state.whiteSauce === false) {
      $whiteSauce.style.visibility = "hidden";
    }
    else {
      $whiteSauce.style.visibility = "visible";
    }
  })

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  // document.querySelectorAll('.crust-gluten-free').forEach(function($glutenFree){
    if (state.glutenFreeCrust===true) {
      document.querySelector('.crust').classList.remove("crust-gluten-free");
    }
    else {
      document.querySelector('.crust').classList.add("crust-gluten-free");
  }
}

function renderButtons(btnClass) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // let $btn = document.querySelector('.btn-pepperoni')
let state2Btn = {
    pepperonni: true,
    mushrooms: true,
    greenPeppers: true,
    whiteSauce: false,
    glutenFreeCrust: false
}

  // for(let i = 0 ; i < state.length ; i++){
    
    if (state.pepperonni === true) {
      document.querySelector('.btn-pepperonni').classList.add("active");
    }
    else {
      document.querySelector('.btn-pepperonni').classList.remove("active");
    }

    if (state.mushroom === true) {
      document.querySelector('.btn-mushrooms').classList.add("active");
    }
    else {
      document.querySelector('.btn-mushrooms').classList.remove("active");
    }

    if (state.greenPeppers === true) {
      document.querySelector('.btn-green-peppers').classList.add("active");
    }
    else {
      document.querySelector('.btn-green-peppers').classList.remove("active");
    }

    if (state.whiteSauce === true) {
      document.querySelector('.btn-sauce').classList.add("active");
    }
    else {
      document.querySelector('.btn-sauce').classList.remove("active");
    }

    if (state.glutenFreeCrust === true) {
      document.querySelector('.btn-crust').classList.add("active");
    }
    else {
      document.querySelector('.btn-crust').classList.remove("active");
    }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
// for(){

//   if (state.pepperonni === true) {
//     document.querySelector('.btn-pepperonni').classList.add("active");

//   }
//   else {
//     document.querySelector('.btn-pepperonni').classList.remove("active");
//   }

// // }

//   var node = document.querySelector(".panel.price").querySelector(ul).;                 // Create a <li> node
//   var newListItem = document.createTextNode("+ $1 pepperonni");         // Create a text node
//   node.appendChild(textnode);                              // Append the text to <li>
//   document.getElementById("myList").appendChild(node); 



//   totalPrice = 10

//   function renderPrice() {
//     // Iteration 4: change the HTML of `<aside class="panel price">`
  
//     var totalPrice = basePrice
//     var $list = document.querySelector('aside.panel.price ul')
//     $list.innerHTML = ""
  
//     for (var ingredientKey in ingredients) {
//       if (state[ingredientKey]) {
//         totalPrice += ingredients[ingredientKey].price
//         $list.innerHTML += `<li>$${ingredients[ingredientKey].price} ${ingredients[ingredientKey].name.toLowerCase()}</li>`
//       }
//     }
//     document.querySelector('aside.panel.price strong').innerHTML = "$" + totalPrice

  
  // }

}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
let $btnPepper = document.querySelector('.btn.btn-pepperonni');
$btnPepper.onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

let $btnMush = document.querySelector('.btn.btn-mushrooms');
$btnMush.onclick = function() {
  state.mushroom = !state.mushroom
  renderEverything()
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// let $btnGpepper = document.querySelector('.btn.btn-green-peppers');

document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// let $btnSauce = document.querySelector("btn btn-sauce");
document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderWhiteSauce()
}



// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderGlutenFreeCrust()
}

