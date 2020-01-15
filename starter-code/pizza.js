// Write your Pizza Builder JavaScript in this file.

// Constants 

var basePrice = 10 ;
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1, state: true},
  mushrooms: {name: 'Mushrooms', price: 1, state: true},
  greenPeppers: {name: 'Green Peppers', price: 1, state: true},
  whiteSauce: {name: 'White sauce', price: 3, state: false},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5, state: false}
} ;


// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni() ;
  renderMushrooms() ;
  renderGreenPeppers() ;
  renderWhiteSauce() ;
  renderGlutenFreeCrust() ;
  // renderButtons() -- not done, integrated this into the render of each ingredient ;
  renderPrice() ;
} 

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (ingredients.pepperonni.state) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  }) ;
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function(mushrooms){
    if (ingredients.mushrooms.state) {
      mushrooms.style.visibility = "visible";
    }
    else {
      mushrooms.style.visibility = "hidden";
    }
  }) ;
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function(greenPeppers){
    if (ingredients.greenPeppers.state) {
      greenPeppers.style.visibility = "visible";
    }
    else {
      greenPeppers.style.visibility = "hidden";
    }
  }) ;
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauceClass = document.querySelector('.sauce').classList ;
  console.log("sauce classes ", sauceClass);
  
  if (ingredients.whiteSauce.state) {
      sauceClass.add('sauce-white') ;
      console.log("coucou")
  } else {
    sauceClass.remove('sauce-white')
    console.log("je suis dans le else") ;
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustClass = document.querySelector('.crust').classList ;
  console.log("croûte classes ", crustClass);
  ingredients.glutenFreeCrust.state ? crustClass.add('crust-gluten-free') :crustClass.remove('crust-gluten-free') ;
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //pepperoni

  //mushroom

  //greenpeppers

  //sauce

  //crust
}


renderEverything() ;

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  ingredients.pepperonni.state = !ingredients.pepperonni.state ;
  let pepClass = document.querySelector('.btn.btn-pepperonni').classList ;
  ingredients.pepperonni.state ? pepClass.add('active') : pepClass.remove('active') ;
  renderEverything() ;
} ;

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
 ingredients.mushrooms.state = !ingredients.mushrooms.state ;
 let mushClass = document.querySelector('.btn.btn-mushrooms').classList ;
  ingredients.mushrooms.state ? mushClass.add('active') : mushClass.remove('active') ;
  renderEverything() ;
} ;


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function () {
  // console.log("poivrons ", ingredients.greenPeppers.state) ;
  ingredients.greenPeppers.state = !ingredients.greenPeppers.state ;
  let peppersClass = document.querySelector('.btn.btn-green-peppers').classList ;
    ingredients.greenPeppers.state ? peppersClass.add('active') : peppersClass.remove('active');
  renderEverything() ;
} ;


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function () {
  ingredients.whiteSauce.state = !ingredients.whiteSauce.state ;
  let sauceClass = document.querySelector('.btn.btn-sauce').classList ;
  ingredients.whiteSauce.state ? sauceClass.add('active') : sauceClass.remove('active') ;

  renderEverything() ;
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function () {
  ingredients.glutenFreeCrust.state = !ingredients.glutenFreeCrust.state ;
  let crustClass = document.querySelector('.btn.btn-crust').classList ;
  ingredients.glutenFreeCrust.state ? crustClass.add('active') : crustClass.remove('active') ;
  renderEverything() ;
}

