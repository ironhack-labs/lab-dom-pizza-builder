// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
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
  document.querySelectorAll('.pep').forEach(function ($pep) {
    state.pepperonni ? $pep.style.visibility = "visible" : $pep.style.visibility = "hidden";
  })
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function ($mushroom) {
    state.mushrooms ? $mushroom.style.visibility = "visible" : $mushroom.style.visibility = "hidden";
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function ($gp) {
    state.greenPeppers ? $gp.style.visibility = "visible" : $gp.style.visibility = "hidden";
  })
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(function ($sauce) {
    state.whiteSauce ? $sauce.classList.add("sauce-white") : $sauce.classList.remove("sauce-white")
  })
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach(function ($gluten) {
    state.glutenFreeCrust ? $gluten.classList.add("crust-gluten-free") : $gluten.classList.remove("crust-gluten-free")
  })
}

function renderButtons() {
  let btnPepperonni = document.querySelector('.btn-pepperonni')
  let btnMushrooms = document.querySelector('.btn-mushrooms')
  let btnGreenPeppers = document.querySelector('.btn-green-peppers')
  let btnglutenFreeCrust = document.querySelector('.btn-crust')
  let btnwhiteSauce = document.querySelector('.btn-sauce')

  state.pepperonni ? btnPepperonni.classList.add("active") : btnPepperonni.classList.remove("active");
  state.mushrooms ? btnMushrooms.classList.add("active") : btnMushrooms.classList.remove("active");
  state.greenPeppers ? btnGreenPeppers.classList.add("active") : btnGreenPeppers.classList.remove("active");
  state.glutenFreeCrust ? btnglutenFreeCrust.classList.add("active") : btnglutenFreeCrust.classList.remove("active");
  state.whiteSauce ? btnwhiteSauce.classList.add("active") : btnwhiteSauce.classList.remove("active");
}




function renderPrice() {

  let pepLi = document.querySelectorAll('aside ul li')[0]
  let musLi = document.querySelectorAll('aside ul li')[1]
  let greLi = document.querySelectorAll('aside ul li')[2]
  let whiLi = document.querySelectorAll('aside ul li')[3]
  let gluLi = document.querySelectorAll('aside ul li')[4]


  state.pepperonni ? pepLi.style.display = "block" : pepLi.style.display = "none";
  state.mushrooms ? musLi.style.display = "block" : musLi.style.display = "none";
  state.greenPeppers ? greLi.style.display = "block" : greLi.style.display = "none";
  state.glutenFreeCrust ? gluLi.style.display = "block" : gluLi.style.display = "none";
  state.whiteSauce ? whiLi.style.display = "block" : whiLi.style.display = "none";

  let pepFinPrice = ingredients.pepperonni.price * state.pepperonni
  let musFinprice = ingredients.mushrooms.price * state.mushrooms
  let greFinPrice = ingredients.greenPeppers.price * state.greenPeppers
  let whiFinPrice = ingredients.whiteSauce.price * state.whiteSauce
  let gluFinPrice = ingredients.glutenFreeCrust.price * state.glutenFreeCrust

  console.log(ingredients.glutenFreeCrust.price)

  let finalPrice = basePrice + pepFinPrice + musFinprice + greFinPrice + whiFinPrice + gluFinPrice

  document.querySelector("strong").innerHTML = `$${finalPrice}`
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  console.log("status btn crust " + state.glutenFreeCrust)
  renderEverything()
}