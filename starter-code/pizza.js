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
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenpepper){
    if (state.greenPeppers) {
      $greenpepper.style.visibility = "visible";
    }
    else {
      $greenpepper.style.visibility = "hidden";
    }
  })
  
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($sauce){
    let sauceElem = document.getElementsByClassName('sauce');

    if (state.whiteSauce) {
    //  sauceElem[0].setAttribute('class', 'sauce sauce-white');
    sauceElem[0].className = 'sauce sauce-white';
    }
    else {
      sauceElem[0].classList.remove('sauce-white');
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($crust){
    let crustElem = document.getElementsByClassName('crust');

    if (state.glutenFreeCrust) {
    //  sauceElem[0].setAttribute('class', 'sauce sauce-white');
    crustElem[0].className = 'crust crust-gluten-free';
    }
    else {
      crustElem[0].classList.remove('crust-gluten-free');
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepElem = document.getElementsByClassName('btn-pepperonni');
  if(state.pepperonni){
   pepElem[0].className = 'btn btn-pepperonni active'

  }else{
   pepElem[0].classList.remove('active');
  }

  let mushroomsElem = document.getElementsByClassName('btn-mushrooms');
  if(state.mushrooms){
    mushroomsElem[0].className = 'btn btn-mushrooms active'

  }else{
    mushroomsElem[0].classList.remove('active');
  }

  let greenpepperElem = document.getElementsByClassName('btn-green-peppers');
  if(state.greenPeppers){
    greenpepperElem[0].className = 'btn btn-green-peppers active'

  }else{
    greenpepperElem[0].classList.remove('active');
  }

  let sauceElem = document.getElementsByClassName('btn-sauce');
  if(state.whiteSauce){
    sauceElem[0].className = 'btn btn-sauce active'

  }else{
    sauceElem[0].classList.remove('active');
  }

  let crustElem = document.getElementsByClassName('btn-crust');
  if(state.glutenFreeCrust){
    crustElem[0].className = 'btn btn-crust active'

  }else{
    crustElem[0].classList.remove('active');
  }
}



function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let tagUl = document.getElementsByTagName('ul');
  tagUl[1].innerHTML='';
  let valorFinal = 10;
  if(state.pepperonni){
    valorFinal += ingredients.pepperonni.price;
    let tagPepperonni = document.createElement('li')
    tagPepperonni.innerHTML = '$1 Pepperonni'
    tagUl[1].appendChild(tagPepperonni);
  }

  if(state.mushrooms){
    valorFinal += ingredients.mushrooms.price;
    let tagMushrooms = document.createElement('li')
    tagMushrooms.innerHTML = '$1 Mushrooms'
    tagUl[1].appendChild(tagMushrooms);
  }  

  if(state.greenPeppers){
    valorFinal += ingredients.greenPeppers.price;
    let tagGreenPeppers = document.createElement('li')
    tagGreenPeppers.innerHTML = '$1 Green Peppers'
    tagUl[1].appendChild(tagGreenPeppers);
  } 

  if(state.whiteSauce){
    valorFinal += ingredients.whiteSauce.price;
    let tagWhiteSauce = document.createElement('li')
    tagWhiteSauce.innerHTML = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`
    tagUl[1].appendChild(tagWhiteSauce);
  } 

  if(state.glutenFreeCrust){
    valorFinal += ingredients.glutenFreeCrust.price;
    let tagCrust = document.createElement('li')
    tagCrust.innerHTML = '$5 Gluten Free Crust'
    tagUl[1].appendChild(tagCrust);
  } 
  let tagStrong = document.getElementsByTagName('strong');
  tagStrong[0].innerHTML = `$${valorFinal}`;
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
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