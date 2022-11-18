// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
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
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}
/* console.log(document.getElementsByClassName("mushroom")) //htmlcollection, forEach won't work
console.log(document.querySelectorAll('.mushroom')) // nodesList, forEach works */

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector(".sauce-white")
    if (state.whiteSauce) sauce.style.visibility = 'visible';
    if (!state.whiteSauce)  sauce.style.visibility = 'hidden';
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector(".crust-gluten-free")
    if (state.glutenFreeCrust) crust.style.visibility = 'visible';
    if (!state.glutenFreeCrust) crust.style.visibility = 'hidden';
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pep = document.getElementsByClassName("btn-pepperoni")[0]
  const mushroom =  document.getElementsByClassName("btn-mushrooms")[0]
  const pepper =  document.getElementsByClassName("btn-green-peppers")[0]
  const sauce = document.getElementsByClassName("btn-sauce")[0]
  const crust = document.getElementsByClassName("btn-crust")[0]
  
  if(pep.classList.contains("active") && !state.pepperoni) pep.classList.remove("active")
  if(!pep.classList.contains("active") && state.pepperoni) pep.classList.add("active")

  if(mushroom.classList.contains("active") && !state.mushrooms) mushroom.classList.remove("active")
  if(!mushroom.classList.contains("active") && state.mushrooms) mushroom.classList.add("active")

  if(pepper.classList.contains("active") && !state.greenPeppers) pepper.classList.remove("active")
  if(!pepper.classList.contains("active") && state.greenPeppers) pepper.classList.add("active")

  if(sauce.classList.contains("active") && !state.whiteSauce) sauce.classList.remove("active")
  if(!sauce.classList.contains("active") && state.whiteSauce) sauce.classList.add("active")

  if(crust.classList.contains("active") && !state.glutenFreeCrust) crust.classList.remove("active")
  if(!crust.classList.contains("active") && state.glutenFreeCrust) crust.classList.add("active")

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const extra = document.querySelectorAll(".price li")
  let pep = 0
  let mushroom = 0
  let pepper = 0
  let sauce =0
  let crust = 0

  if(state.pepperoni){
    extra[0].style.visibility = "visible"
    pep = 1
  }else{
    extra[0].style.visibility ="hidden"
    pep=0
  }

  if(state.mushrooms){
    extra[1].style.visibility = "visible"
    mushroom = 1
  }else{
    extra[1].style.visibility = "hidden"
    mushroom = 0
  }

  if(state.greenPeppers){
    extra[2].style.visibility = "visible"
    pepper = 1
  }else{
    extra[2].style.visibility = "hidden"
    pepper =0
  }

  if(state.whiteSauce){
    extra[3].style.visibility = "visible"
    sauce = 3
  }else{
    extra[3].style.visibility = "hidden"
    sauce=0
  }

  if(state.glutenFreeCrust){
    extra[4].style.visibility = "visible"
    crust = 5
  }else{
    extra[4].style.visibility = "hidden"
    crust = 0
  }

  let finalPrice = 10 + pep + mushroom + pepper + sauce + crust

  document.querySelector(".price strong").innerHTML = `$${finalPrice}`

}

renderEverything();


// delegat all events to one
document.addEventListener("click", clickListener)
function clickListener(event){
  const classes = event.target.classList
  if (!classes.contains("btn")) console.log("not a button")
  if(classes.contains("btn-pepperoni")) state.pepperoni = !state.pepperoni; //console.log("pepperoni:" + state.pepperoni)}
  if(classes.contains("btn-mushrooms")) state.mushrooms = !state.mushrooms; //console.log("mushroom:" + state.mushrooms)}
  if(classes.contains("btn-green-peppers")) state.greenPeppers = !state.greenPeppers; //console.log("green peppers:" + state.greenPeppers)}
  if(classes.contains("btn-sauce")) state.whiteSauce = !state.whiteSauce; //console.log("white sauce:" + state.whiteSauce)}
  if(classes.contains("btn-crust")) state.glutenFreeCrust = !state.glutenFreeCrust; //console.log("crust:" + state.glutenFreeCrust)}
  renderEverything()
}

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
/* document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});  */
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
