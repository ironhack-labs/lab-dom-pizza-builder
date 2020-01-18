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
 // Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
   
    if (state.mushrooms){
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    
    }
  })
  
  
}


  // Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($greenPeppers){
    if (state.greenPeppers){
      $greenPeppers.style.visibility = "visible";
    } 
    else {
      $greenPeppers.style.visibility = "hidden";
    }
  })
}
// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
 var a = document.querySelector('.sauce')
    if (state.whiteSauce){
      a.classList.add("sauce-white")
    }
    else {
      a.classList.remove("sauce-white");
    }
  }

 // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
 var a = document.querySelector('.crust')
   if (state.glutenFreeCrust){
    a.classList.add("crust-gluten-free")
   }
   else {
    a.classList.remove("crust-gluten-free");
   }
 }


  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  function renderButtons() {
    const buttonPep = document.querySelector(".btn-pepperonni");
    if (state.pepperonni) {
      buttonPep.classList.add("active")
    } else {
      buttonPep.classList.remove("active")
    }
    const buttonMush = document.querySelector(".btn-mushrooms");
    if (state.mushrooms) {
      buttonMush.classList.add("active")
    } else {
      buttonMush.classList.remove("active")
    }
    const buttonGp = document.querySelector(".btn-green-peppers");
    if (state.greenPeppers) {
      buttonGp.classList.add("active")
    } else {
      buttonGp.classList.remove("active")
    }
    const buttonSauce = document.querySelector(".btn-sauce")
    if (state.whiteSauce) {
      buttonSauce.classList.add("active")
    } else {
      buttonSauce.classList.remove("active")
    }
    const buttonCrust = document.querySelector(".btn-crust");
    if (state.glutenFreeCrust) {
      buttonCrust.classList.add("active")
    } else {
      buttonCrust.classList.remove("active")
    }
  }
    
    
    




  // function renderButtons() {
//  var b = document.getElementsByClassName('btn')
//  var c = Object.keys(state)
//   for (i=0; i<b.length; i++){
//     for (j=0; j<c.length; i++)
//     if (c[i]){
//       b[i].classList.add("active")
//     }
//      else {
//       b[i].classList.remove("active")
//      }

//     }
//   }
  


// for (i=0; i<b.length; i++){
  //   if (state.pepperonni){
  //     b[i].classList.add("active")
  //   }
  //    else {
  //     b[i].classList.remove("active")
  //    }

  //   }
  // }
 


//  var a = document.getElementById('pepBtn')
 
 
//  if (state.pepperonni){
//    a.classList.add("active")
//  }
//   else {
//     a.classList.remove("active")
//   }
  
 

//  }


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var itemList = document.getElementById("itemList");
  var totalPrice = document.getElementById("sumPrice");
  var newLi = document.createElement("li");
  var price = 10;

  itemList.innerHTML = "";

  if (state.pepperonni) {
    itemList.innerHTML += `<li>$1 pepperonni</li>`;
    price += ingredients.pepperonni.price;
  }

  if (state.mushrooms) {
    itemList.innerHTML += `<li>$1 mushrooms</li>`;
    price += ingredients.mushrooms.price;
  }

  if (state.greenPeppers) {
    itemList.innerHTML += `<li>$1 green peppers</li>`;
    price += ingredients.greenPeppers.price;
  }

  if (state.whiteSauce) {
    itemList.innerHTML += `<li>$3 white sauce</li>`;
    price += ingredients.whiteSauce.price;
  }

  if (state.glutenFreeCrust) {
    itemList.innerHTML += `<li>$5 gluten-free crust</li>`;
    price += ingredients.glutenFreeCrust.price;
  }

  totalPrice.innerHTML = `$${price}`;
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
  renderEverything();
}



// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function(){
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything();
}