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
  console.log(state);
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mush){
    if(state.mushrooms){
      $mush.style.visibility = "visible";
    } else {
      $mush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($green){
    if(state.greenPeppers){
      $green.style.visibility = "visible";
     
    } else {
      $green.style.visibility = "hidden";
      
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if(state.whiteSauce){
    document.querySelector('.sauce').classList.add('sauce-white');
  } else {document.querySelector('.sauce').classList.remove('sauce-white');

  }
  
  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  // let button = document.querySelectorAll('.green-pepper').forEach(function($green){
  
    if(state.glutenFreeCrust){
  document.querySelector('.crust').classList.add('crust-gluten-free');
  } else { document.querySelector('.crust').classList.remove('crust-gluten-free');}
}

function renderButtons() {
  //Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let item = '';
  let button = document.querySelectorAll('.btn').forEach(function($button){
  item = ($button.innerText).toLowerCase();
   
   if(item==='pepperonni'){
     if(!state.pepperonni){
      $button.classList.remove('active');
     } else {$button.classList.add('active');}
   }
  
  if(item==='mushrooms'){
    if(!state.mushrooms){
     $button.classList.remove('active');
    } else {$button.classList.add('active');}
  }

  if(item==='green peppers'){
    if(!state.greenPeppers){
     $button.classList.remove('active');
    } else {$button.classList.add('active');}
  }

  if(item==='white sauce'){
    if(!state.whiteSauce){
     $button.classList.remove('active');
    } else {$button.classList.add('active');}
  }

  if(item==='gluten-free crust'){
    if(!state.glutenFreeCrust){
     $button.classList.remove('active');
    } else {$button.classList.add('active');}
  }
 });

  

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let mainUl = document.querySelector('.priceUl');
  let priceTag = document.querySelector('strong');
  console.log(mainUl);
  const li = document.createElement('li');
  let price = 10;
  

  mainUl.innerHTML = '';
  priceTag.innerText = '';

  
  
  if(state.pepperonni){
    
    mainUl.innerHTML+='<li>$1 pepperonni</li>';  
    price +=1;
    
  } 

  if(state.mushrooms){
    mainUl.innerHTML+='<li>$1 mushrooms</li>';
    price+=1;
    
  } 

  if(state.greenPeppers){
    mainUl.innerHTML+='<li>$1 green peppers</li>';  
    price+=1;
  } 

  if(state.whiteSauce){
    mainUl.innerHTML+='<li>$3 White sauce</li>';
    price+=3;  
  } 

  if(state.glutenFreeCrust){
    mainUl.innerHTML+='<li>$5 Gluten-free crust</li>';
    price+=5;
    
  } 

  priceTag.innerText = `$${price}`;
  

  
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;

  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}