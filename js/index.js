// Write your Pizza Builder JavaScript in this file.
console.log('JS connected')
// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
document.querySelectorAll(".mushroom").forEach(oneMush =>{
  if(state.mushrooms){
    oneMush.style.visibility ="visible";
  }else{
    oneMush.style.visibility ="hidden";
  }
})

}
const $MushrmBttn = document.getElementbyClass("btn btn-mushrooms active")
$MushrmBttn.onClick = function {
 renderEverything.renderMushrooms()
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green").forEach(oneGreen =>{
    if(state.greenPeppers){
      oneGreen.style.visibility ="visible";
    }else{
      oneGreen.style.visibility ="hidden";
    }
}
const $PepperBttn = document.getElementbyClass("btn btn-green-peppers active")
$PepperBttn.onClick = function{
 renderEverything.renderGreenPeppers(){}
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
let $theSauce =document.getElementByClass("sauce sauce-white");
$theSauce.classlist.remove("sauce-white")

}

const $SauceBttn = document.getElementbyClass("btn btn-sauce active")
$SauceBttn.onClick = function{
 renderEverything.renderWhiteSauce(){}
 if (state.whiteSauce== false){
   return state.whitesSauce == true;
 }else{
   return state.whiteSauce == false;
 }
}




function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let $theCrust =document.getElementByClass("crust crust-gluten-free");
  $theSauce.classlist.remove("crust-gluten-free")


}
const $CrustBttn = document.getElementbyClass("btn btn-crust active")
$CrustBttn.onClick = function{
 renderEverything.renderGlutenFreeCrust(){};
 if (state.glutenFreeCrust== false){
  return state.glutenFreeCrust == true;
}else{
  return state.glutenFreeCrust == false;
}


}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
let $actRem = document.getElementsByClass(".panel controls" "button")
$actRem.classlist.remove("active")
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
let $priceList = documentquerySelectorAll(".panel price")
return $priceList

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
