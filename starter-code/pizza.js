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
  document.querySelectorAll('.mushroom').forEach(function($mush){
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    }
    else {
      $mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($pepper){
    if (state.greenPeppers) {
      $pepper.style.visibility = "visible";
    }
    else {
      $pepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white')
  }
  else {
    document.querySelector('.sauce').classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free')
  }
  else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let btnPepperonni=document.querySelector('.btn-pepperonni').classList  
  let btnMushrooms=document.querySelector('.btn-mushrooms').classList  
  let btnGreenPeppers=document.querySelector('.btn-green-peppers').classList  
  let btnSauce=document.querySelector('.btn-sauce').classList  
  let btnCrust=document.querySelector('.btn-crust').classList  
  
  if(state.pepperonni)
  btnPepperonni.add('active')
  else
  btnPepperonni.remove('active')

  if(state.mushrooms)
  btnMushrooms.add('active')
  else
  btnMushrooms.remove('active')

  if(state.greenPeppers)
  btnGreenPeppers.add('active')
  else
  btnGreenPeppers.remove('active')

  if(state.whiteSauce)
  btnSauce.add('active')
  else
  btnSauce.remove('active')

  if(state.glutenFreeCrust)
  btnCrust.add('active')
  else
  btnCrust.remove('active')
}

/*
Aqui buscando manera de reducir el codigo de arriba. En proceso...
  const btns = document.querySelectorAll('.btn')
  let btnList=[]
  btns.forEach((b)=>{
  btnList.push(b)
  })
 console.log( btnList[0].classList)
*/

/*
const lis = document.querySelectorAll('.price>ul')
  lis.forEach((li)=>li.remove()) 

  */
  /* Probando para llegar al elemento del precio final en la iteracion 4...
  let price = document.querySelector('.price>strong')
  let arr=price.textContent
  arr=arr.shift()
  console.log(arr      )
*/

function renderPrice() {
// Iteration 4: change the HTML of `<aside class="panel price">`
 const ul=document.querySelector('.price>ul')    
 let suma=basePrice //precio base
 let index=0;

//borra toda la lista por deafult
  ul.innerHTML=''

//imprime solo los elementos activos en la lista 

//version 2.0 mejorada 
Object.values(state).forEach(element=>{
  if (element){
    let precio=Object.values(Object.values(ingredients))[index].price;
    let name=Object.values(Object.values(ingredients))[index].name;

    const node = document.createElement('li')
    node.innerText=`$${precio} `+name.toLowerCase()
    ul.appendChild(node)

    suma+=Object.values(Object.values(ingredients))[index].price;  
  }
  index++;
})

/*
 Version 1.0 mucho codigo!!!!!! pero tambien funciona

  if(state.pepperonni){
  const node = document.createElement('li')
  node.innerText=`$${ingredients.pepperonni.price} `+ingredients.pepperonni.name.toLowerCase()
  ul.appendChild(node)
  suma+=ingredients.pepperonni.price
  }
  */

  /*
  if(state.mushrooms){
  const node = document.createElement('li')
  node.innerText=`$${ingredients.mushrooms.price} `+ingredients.mushrooms.name.toLowerCase()
  ul.appendChild(node)
  suma+=ingredients.mushrooms.price
  }
  
  if(state.greenPeppers){
  const node = document.createElement('li')
  node.innerText=`$${ingredients.greenPeppers.price} `+ingredients.greenPeppers.name.toLowerCase()
  ul.appendChild(node)
  suma+=ingredients.greenPeppers.price
  }
  
  if(state.whiteSauce){
  const node = document.createElement('li')
  node.innerText=`$${ingredients.whiteSauce.price} `+ingredients.whiteSauce.name.toLowerCase()
  ul.appendChild(node)
  suma+=ingredients.whiteSauce.price
  }

  if(state.glutenFreeCrust){
  const node = document.createElement('li')
  node.innerText=`$${ingredients.glutenFreeCrust.price} `+ingredients.glutenFreeCrust.name.toLowerCase()
  ul.appendChild(node)
  suma+=ingredients.glutenFreeCrust.price
  }
 */

  //Para imprimir el precio final...
  let price = document.querySelector('.price>strong')
  price.innerText=`$${suma}`
  
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