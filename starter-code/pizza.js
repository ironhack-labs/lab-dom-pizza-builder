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
  document.querySelectorAll('.mushroom').forEach(function($mush){
    if(state.mushrooms){
      $mush.style.visibility = "visible";
    }else{
      $mush.style.visibility = "hidden"
      
    }
  })
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($green){
    if (state.greenPeppers) {
      $green.style.visibility = "visible";
    }
    else {
      $green.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
    if(state.whiteSauce){
      let sauce = document.querySelector('.sauce');
      sauce.classList.add('sauce-white');
    }else{
      let sauce = document.querySelector('.sauce');
      sauce.classList.remove("sauce-white");

    }
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  if(state.glutenFreeCrust){
    let crust = document.querySelector('.crust');
    crust.classList.add('crust-gluten-free');
  }else{
    let crust = document.querySelector('.crust');
    crust.classList.remove("crust-gluten-free");

  }
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  if(state.pepperonni === true){
    document.querySelector('.btn-pepperonni').classList.add('active');
  }else{
    document.querySelector('.btn-pepperonni').classList.remove('active');
  }
  if(state.mushrooms === true){
    document.querySelector('.btn-mushrooms').classList.add('active');
  }else{
    document.querySelector('.btn-mushrooms').classList.remove('active');
  }
  if(state.greenPeppers === true){
    document.querySelector('.btn-green-peppers').classList.add('active');
  }else{
    document.querySelector('.btn-green-peppers').classList.remove('active');
  }
  if(state.whiteSauce === true){
    document.querySelector('.btn-sauce').classList.add('active');
  }else{
    document.querySelector('.btn-sauce').classList.remove('active');
  }
  if(state.crust === true){
    document.querySelector('.btn-crust').classList.add('active');
  }else{
    document.querySelector('.btn-crust').classList.remove('active');
  }
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  let total = 10;
  if(state.pepperonni){
    total +=1;
    let item = document.getElementById('pep');
    item.innerHTML='$1 pepperonni';
  }else{
    let item = document.getElementById('pep');
    item.innerHTML='';
  }
  if(state.mushrooms === true){
    total+=1;
    let item = document.getElementById('mush');
    item.innerHTML='$1 mushrooms';
  }
  else{
    let item = document.getElementById('mush');
    item.innerHTML='';
    }
  if(state.greenPeppers){
    total +=1;
    let item = document.getElementById('green');
    item.innerHTML='$1 green peppers'
  }
  else{
    let item = document.getElementById('green');
    item.innerHTML=''
    }
  if(state.whiteSauce){
    total += 3;
    let item = document.getElementById('sauce');
    item.innerHTML='$3 white sauce'
  }
  else{
    let item = document.getElementById('sauce');
    item.innerHTML=''
    }
  if(state.glutenFreeCrust){
    total +=5;
    let item = document.getElementById('crust');
    item.innerHTML='$5 gluten-free crust' 
   }
  else{
    let item = document.getElementById('crust');
    item.innerHTML='' 
    }
 document.querySelector('.price strong').innerHTML = `$${total}.00`
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
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
  document.querySelector('.btn.btn-sauce').onclick = function(){
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
  }
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
  document.querySelector('.btn.btn-crust').onclick = function(){
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
  }