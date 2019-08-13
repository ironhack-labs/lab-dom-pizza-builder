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
  console.log("click mushroom")
  document.querySelectorAll('.mushroom').forEach(function($mushroom) {
    if(state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}


// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($greenPeppers) {
    if(state.greenPeppers) {
      $greenPeppers.style.visibility = "visible";
    }
    else {
      $greenPeppers.style.visibility = "hidden";
    }
  })
}

 // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(function(ws) {

    if(state.whiteSauce) {
      ws.classList.remove("sauce-white")
      console.log("il y a de la white sauce")
    }
    else {
      ws.classList.add("sauce-white");
      console.log("il y a pas de la white sauce")
    }
  })
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  console.log("heeeeeere");
  
  document.querySelectorAll('.crust').forEach(function(gf) {
    console.log(gf, state)
    if(state.glutenFreeCrust) {
     gf.classList.remove("crust-gluten-free")
  }
  else {
     gf.classList.add("crust-gluten-free")
  }
 })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  for (let ingredient in state) {
    if (state.hasOwnProperty(ingredient)) {
       console.log(ingredient);
       console.log(state[ingredient]);

       if (ingredient === "pepperonni" && state[ingredient] === true) {
         document.querySelector(".btn.btn-pepperonni").classList.add("active");
       } else if (ingredient === "pepperonni" && state[ingredient] !== true) {
        document.querySelector(".btn.btn-pepperonni").classList.remove("active");
       }

       if (ingredient === "mushrooms" && state[ingredient] === true) {
        document.querySelector(".btn.btn-mushrooms").classList.add("active");
      } else if (ingredient === "mushrooms" && state[ingredient] !== true) {
       document.querySelector(".btn.btn-mushrooms").classList.remove("active");
      }

      if (ingredient === "greenPeppers" && state[ingredient] === true) {
        document.querySelector(".btn.btn-green-peppers").classList.add("active");
      } else if (ingredient === "greenPeppers" && state[ingredient] !== true) {
       document.querySelector(".btn.btn-green-peppers").classList.remove("active");
      }

      if (ingredient === "whiteSauce" && state[ingredient] === true) {
        document.querySelector(".btn-sauce").classList.add("active");
      } else if (ingredient === "whiteSauce" && state[ingredient] !== true) {
       document.querySelector(".btn-sauce").classList.remove("active");
      }

      if (ingredient === "glutenFreeCrust" && state[ingredient] === true) {
        document.querySelector(".btn-crust").classList.add("active");
      } else if (ingredient === "glutenFreeCrust" && state[ingredient] !== true) {
       document.querySelector(".btn-crust").classList.remove("active");
      }
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let list = [...document.querySelectorAll('.panel.price ul li')]
  let total = document.querySelector('strong')
  let base = basePrice; 
  for (i in ingredients) {
    let name = ingredients[i].name.toLowerCase();
    let remove = list.filter(item => item.innerHTML.includes(name));
    if (state[i]) {
      base += ingredients[i].price;
      remove[0].style.visibility = "visible";
    } else {
      remove[0].style.visibility = "hidden";
    }
  }
  total.innerHTML = `$${base}`;
} 

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
const btnPepperoni = document.querySelector('.btn.btn-pepperonni')
btnPepperoni.onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
const btnMushroom = document.querySelector('.btn.btn-mushrooms')
console.log(btnMushroom)
btnMushroom.onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
const btnGreenPeppers = document.querySelector('.btn.btn-green-peppers')
console.log(btnGreenPeppers)
btnGreenPeppers.onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
const btnWhiteSauce = document.querySelector('.btn.btn-sauce')
console.log(btnWhiteSauce)
btnWhiteSauce.onclick = function() {
  state.whiteSauce = !state.whiteSauce
  console.log("ws activé")
  renderEverything()
}

//Iteration 2: Add click event listener on `<button class="btn btn-crust">`
const btnGlutenFreeCrust = document.querySelector('.btn.btn-crust')
console.log(btnGlutenFreeCrust)
btnGlutenFreeCrust.onclick = function() {
  
  state.glutenFreeCrust = !state.glutenFreeCrust
  console.log("ici", state.glutenFreeCrust)
  renderEverything()
}