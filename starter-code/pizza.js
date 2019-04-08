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
  renderPrice()
}
function renderPepperonni() {
  document.querySelectorAll('.pep ').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";

    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="mushroom">`
}
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  
}

function renderWhiteSauce() {
if (state.whiteSauce) {
$(".sauce").removeClass("sauce-white");
} else {
  $(".sauce").addClass("sauce-white");
  }
}


function renderGlutenFreeCrust() {

  //if ($(".crust").hasClass("crust-gluten-free")) {
        if (state.glutenFreeCrust) {
    $(".crust").removeClass("crust-gluten-free");
    } else  {
      $(".crust").addClass("crust-gluten-free");
    }
}

function renderButtons() {
  $(`.btn`).click(function() {
    $(this).toggleClass(`active`)
  })
  
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}


// function getTotal(){
  function renderPrice() {
  let sum=basePrice;
  let prices = ''
  for(let key in state){
    if (state[key]){
      //console.log('key',key, 'state[key]',state[key])
      console.log('we have ',key)
      //basePrice
      console.log(ingredients[key].price)
      prices+=`<li>${ingredients[key].name}</li>`
      sum+=ingredients[key].price
    }
    document.querySelectorAll(".total-price")[0].innerHTML = "$" + sum;
    console.log("Sum is "+sum)
  }}

  // ==== Kenneths Function ====
  // function renderPrice() {

  //   let total = 10;
  //   $(`aside li:visible`).each(function() {
  //     // let price = Number($(this).text().split(' ‘)[0].replace(‘$’, ‘’) )
  //     let price = Number(this.innerText[1]);
  //     total += price;
  //   });
  //   $(`strong`)[0].innerText = `$` + total;
  //   }


  // $("aside li:visible").each(function())
  // $(`strong`)[0].innerText=`$` + sum;
  // console.log("Sum is " +sum)


//$(`aside)
  // Iteration 4: change the HTML of `<aside class="panel price">`
// }
renderEverything()
renderButtons()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}
document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`