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
  pepperonni: false,
  mushrooms: false,
  greenPeppers: false,
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


  document.querySelectorAll('.mushroom').forEach(function($mush){
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    }
    else {
      $mush.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($greenpep){
    if (state.greenPeppers) {
      $greenpep.style.visibility = "visible";
    }
    else {
      $greenpep.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce ').forEach(function($sauce){
    if (state.whiteSauce) {
      $sauce.style.visibility = "visible";
    }
    else {
      $sauce.style.visibility = "hidden";
    }
  })
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}


  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  function renderGlutenFreeCrust() {
    document.querySelectorAll('.crust crust-gluten-free').forEach(function($crus){
      if (state.glutenFreeCrust) {
        $crus.style.visibility = "visible";
      }
      else {
        $crus.style.visibility = "hidden";
      }
    })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
if (state.pepperonni === false) {
  document.querySelector('.btn.btn-pepperonni').classList.remove('active')
}else{
  document.querySelector('.btn.btn-pepperonni').classList.add('active')
}
if (state.mushrooms === false) {
  document.querySelector('.btn.btn-mushrooms').classList.remove('active')
}else{
  document.querySelector('.btn.btn-mushrooms').classList.add('active')
}
if (state.greenPeppers === false) {
  document.querySelector('.btn.btn-green-peppers').classList.remove('active')
}else{
  document.querySelector('.btn.btn-green-peppers').classList.add('active')
}

if (state.whiteSauce === false) {
  document.querySelector('.btn.btn-sauce').classList.remove('active')
}else{
  document.querySelector('.btn.btn-sauce').classList.add('active')
}

if (state.glutenFreeCrust === false) {
  document.querySelector('.btn.btn-crust').classList.remove('active')
}else{
  document.querySelector('.btn.btn-crust').classList.add('active')
}



}
function showall(ingrediente,cadena,estado,precio){

 

  let pricenumb = 0 ;
  let pricecymb = '$'; 

  let parentlist =   document.querySelector('.price ul');
  let appendlistchild = document.createElement('li');

if (estado == true) {

  appendlistchild.innerHTML = `$${cadena} ${ingrediente}  `;
  appendlistchild.className = precio;
  

  parentlist.appendChild(appendlistchild);


document.querySelector('.panel strong').innerHTML = dinero;
}


  
  if (estado == false) {
    document.querySelectorAll(`.${precio}`).forEach(function(a) {
      a.remove()
      pricenumb - cadena;
    
      document.querySelector('.panel strong').innerHTML = "";
    })
   
}
}

function renderPrice() {
  

  

  
 




}


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {

  state.pepperonni = !state.pepperonni
  showall(`pepperonni`,ingredients.pepperonni.price,state.pepperonni,'precio1');
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  showall(`mushrooms`,ingredients.mushrooms.price,state.mushrooms,'precio2');
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}



renderEverything();
