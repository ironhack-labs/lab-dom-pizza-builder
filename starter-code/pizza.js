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
  
  document.querySelectorAll('.mushroom').forEach(function(mush){
    
    if(state.mushrooms){
      mush.style.visibility="visible";
    }
    else{
      mush.style.visibility="hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function(green){
    if(state.greenPeppers){
      green.style.visibility="visible"
    }

    else{
      green.style.visibility="hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function(sauce){
    if(state.whiteSauce){
      sauce.classList.remove("sauce-white")
    }

    else{
      sauce.classList.add("sauce-white")
    }
  })
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  document.querySelectorAll('.crust').forEach(function(crust){
    if(state.glutenFreeCrust){
      crust.classList.remove("crust-gluten-free")
    }

    else{
      crust.classList.add("crust-gluten-free")
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
document.querySelectorAll(".btn").forEach(function(btn){

  var classes=btn.className.split(" ");
  // console.log(classes);
  // var i = classes.indexOf("active");
  var name=classes[1];
  if(name==="btn-pepperonni"){
    if(state.pepperonni)  btn.classList.remove("active");
    else  btn.classList.add("active");
  }

 else if(name==="btn-mushrooms"){
    if(state.mushrooms)  btn.classList.remove("active");
    else  btn.classList.add("active");
  }

 else if(name==="btn-green-peppers"){
    if(state.greenPeppers)  btn.classList.remove("active");
    else  btn.classList.add("active");
  }

 else if(name==="btn-green-peppers"){
    if(state.greenPeppers)  btn.classList.remove("active");
    else  btn.classList.add("active");
  }


 else if(name==="btn-sauce"){
    if(state.whiteSauce)  btn.classList.remove("active");
    else  btn.classList.add("active");
  }

 else if(name==="btn-crust"){
    if(state.glutenFreeCrust)  btn.classList.remove("active");
    else  btn.classList.add("active");
  }
})


}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var price=document.querySelector(".price");
  console.log(price)
  //price.innerHTML='this is text'
  var newhtml="<h2>Your pizza's price</h2>\
                <b>$10 cheese pizza</b>\
                <ul>"
  
  var total=10;

  if(state.pepperonni) {
    console.log("pep")
     newhtml+="<li>$"+ingredients.pepperonni.price+" pepperonni</li>"
     total+=ingredients.pepperonni.price;
  }
  if(state.mushrooms){
    newhtml+="<li>$"+ingredients.mushrooms.price+" mushroom</li>"
    total+=ingredients.mushrooms.price;
  }
  if(state.greenPeppers){
    newhtml+="<li>$"+ingredients.greenPeppers.price+" green peppers</li>"
    total+=ingredients.greenPeppers.price;
  }
  if(state.whiteSauce){
    newhtml+="<li>$"+ingredients.whiteSauce.price+" white sauce</li>"
    total+=ingredients.whiteSauce.price;
  }
  if(state.glutenFreeCrust){
    newhtml+="<li>$"+ingredients.glutenFreeCrust.price+" gluten-free crust</li>"
    total+=ingredients.glutenFreeCrust.price;
  }

  var footer=`</ul>\
        <strong>$${total} </strong>`
      newhtml+=footer;
      console.log(newhtml)
      price.innerHTML=newhtml; 
}

// console.log(document.getElementsByClassName('price'))
// console.log(document.querySelector('.price'))
// // element = document.getElementsByClassName('price')
// element = document.querySelector('.price')
// element.innerHTML = "hello"
// // element[0].innerHTML = "this is a test"
// // console.log(element[0].innerHTML)
renderEverything()
;

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything();
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