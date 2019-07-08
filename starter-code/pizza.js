// Write your Pizza Builder JavaScript in this file.

window.onload = function(){
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

// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
 document.querySelectorAll('.mushroom').forEach(function($mushrooms){
   if (state.mushrooms) {
     $mushrooms.style.visibility = "visible";
   }
   else {
     $mushrooms.style.visibility = "hidden";
   }
 })

}

 // Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
 document.querySelectorAll('.green-pepper').forEach(function($greenPeppers){
   if (state.greenPeppers) {
     $greenPeppers.style.visibility = "visible";
   }
   else {
     $greenPeppers.style.visibility = "hidden";
   }
 })

}

function renderWhiteSauce() {
 // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
let sauceStuff = document.querySelector(`.sauce`);
if(!state.whiteSauce){
    sauceStuff.classList.remove(`sauce-white`);
} else {
    sauceStuff.classList.add(`sauce-white`);
}
}

function renderGlutenFreeCrust() {
 // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
 let glutenStuff = document.querySelector(`.crust`);
 if(!state.glutenFreeCrust){
   glutenStuff.classList.remove(`crust-gluten-free`);
 }
 else {
   glutenStuff.classList.add(`crust-gluten-free`);
 }

}

function renderButtons() {
 // Iteration 3: add/remove the class "active" of each `<button class="btn">`
 let pushPep = document.querySelector(`.btn.btn-pepperonni`);
 let pushMush = document.querySelector(`.btn.btn-mushrooms`);
 let pushGreen = document.querySelector(`.btn.btn-green-peppers`);
 let pushWhite = document.querySelector(`.btn.btn-sauce`);
 let pushGluten = document.querySelector(`.btn.btn-crust`);

 // checks state
 if(!state.pepperonni){
   pushPep.classList.remove(`active`);
 } else {
   pushPep.classList.add(`active`);
 }

 if(!state.mushrooms){
  pushMush.classList.remove(`active`);
} else {
  pushMush.classList.add(`active`);
}

if(!state.greenPeppers){
  pushGreen.classList.remove(`active`);
} else {
  pushGreen.classList.add(`active`);
}

if(!state.whiteSauce){
  pushWhite.classList.remove(`active`);
} else {
  pushWhite.classList.add(`active`);
}

if(!state.glutenFreeCrust){
  pushGluten.classList.remove(`active`);
} else {
  pushGluten.classList.add(`active`);
}

}

function renderPrice() {
 // Iteration 4: change the HTML of `<aside class="panel price">`
    let finalprice = basePrice;
    console.log(`renderPrice()`);
    let testing = document.querySelector(`.price ul`);
    console.log(testing);
    testing.innerHTML = ``;
    if(state.pepperonni){
      $(`.price ul`).append(`<li>$1 pepperonni</li>`);
      finalprice += 1;
    }
    if(state.mushrooms){
      $(`.price ul`).append(`<li>$1 mushrooms</li>`);
      finalprice += 1;
    }
    if(state.greenPeppers){
      $(`.price ul`).append(`<li>$1 green peppers</li>`);
      finalprice += 1;
    }
    if(state.whiteSauce){
      $(`.price ul`).append(`<li>$3 white suace</li>`);
      finalprice += 3;
    }
    if(state.glutenFreeCrust){
      $(`.price ul`).append(`<li>$5 gluten free crust</li>`);
      finalprice += 5;
    }

    let pizzaPrice = document.querySelector(`.price strong`);
    pizzaPrice.innerHTML = `$` + finalprice;
}


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
 state.pepperonni = !state.pepperonni
 renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
$(".btn.btn-mushrooms").click(function(){
 state.mushrooms = !state.mushrooms;
 renderEverything()
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
$(".btn.btn-green-peppers").click(function(){
  console.log(`green pepper click even listenter function invoked!`)
 state.greenPeppers = !state.greenPeppers;
 renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
$('.btn.btn-sauce').click(function(){
  state.whiteSauce = !state.whiteSauce;
  console.log('white button event listener working');
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
$(".btn.btn-crust").click(function(){
  console.log(`gluten button working`);
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});


}