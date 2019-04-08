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


function getTotal(){
  let sum=10;
  let prices = ''
  for(let key in state){
    var i = Object.keys(state).indexOf(key) + 1
    if (state[key]){
      //console.log('key',key, 'state[key]',state[key])
      console.log('we have ',key, i)
      //basePrice
      // console.log("------------", ingredients[key].price)
      prices+=`<li>${ingredients[key].name}</li>`
      sum+=ingredients[key].price
      $(`.price ul li:nth-child(${i})`).css("display", "list-item")
    } else {
      $(`.price ul li:nth-child(${i})`).css("display", "none")
    }
  }console.log(sum, prices)
 return sum;
}
// ======================another option================================

// function renderPrice() {
//   var total = 10; 
//   let panel = ''
//   console.log(' ')
//   for(let i in state){ //Loop through the state 
//     if(state[i]){ //if this is true i.e; we are eating this item 
//       total+=ingredients[i].price; //add this price to total 
//       panel += `<li>$${ingredients[i].price} ${i}</li>` //add this food to our html panel
//     }
//   }
//   $('.price.panel ul').html(panel) //replace panel 
//   $('.price.panel strong').html('$'+total) //replace price 
// }

// $('.btn').click(function(){
//   $(this).toggleClass('active')
// })

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()
  renderButtons()
  getTotal()

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
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
})
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
//   document.querySelectorAll('.sauce').forEach(function($whiteSauce){
//     if (state.whiteSauce) {
//       $whiteSauce.style.visibility = "visible";
//     }
//     else {
//       $whiteSauce.style.visibility = "hidden";
//     }
// })
if(!state.whiteSauce)
{
  $(".sauce").removeClass("sauce-white")
} else 
{
  $(".sauce").addClass("sauce-white")
}
}
// if($(".sauce").hasClass("sauce-white")){
//   $(".sauce").removeClass("sauce-white")
// }else {
//   $(".sauce").addClass("sauce-white")
// }
// }


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
//   document.querySelectorAll('.crust').forEach(function($crust){
//     if (state.glutenFreeCrust) {
//       $crust.style.visibility = "visible";
//     }
//     else {
//       $crust.style.visibility = "hidden";
//     }
// })
// if($(".crust").hasClass("crust-gluten-free")){
//   $(".crust").removeClass("crust-gluten-free")
// }else {
//   $(".crust").addClass("crust-gluten-free")
// }
// }
if(!state.glutenFreeCrust)
{
  $(".crust").removeClass("crust-gluten-free")
}else {
  $(".crust").addClass("crust-gluten-free")
}
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
$('.btn').click(function(){
  $(this).toggleClass('active')
})
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
document.querySelector('strong').innerText = '$' +getTotal()

}


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