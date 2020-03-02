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
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($peppers){
    if (state.greenPeppers) {
      $peppers.style.visibility = "visible";
    } else {
      $peppers.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(function ($sauce) {
    if (state.whiteSauce) {
      $sauce.className = 'sauce sauce-white';
    } else {
      $sauce.className = 'sauce';
    }
  })
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach(function ($crust) {
    if (state.glutenFreeCrust) {
      $crust.className = 'crust crust-gluten-free'
    } else {
      $crust.className = 'crust';
    }
    })
  }
  

// Jurgen's solution
function renderButtons() {
  let $buttons = document.querySelectorAll(".btn");
  for(let i=0; i <$buttons.length; i++){
    for(const ingredientKey in ingredients){
      if(ingredients [ingredientKey].name === $buttons[i].innerHTML){
        if(state[ingredientKey]){
          $buttons[i].classList.add("active");
        } else {
          $buttons[i].classList.remove("active");
        }
        break;
      }
    }
  }
}


// Miranda's solution
// if (state.pepperonni === true) {
//   document.querySelector('.btn.btn-pepperonni').classList.add('active')
// } else {
//   document.querySelector('.btn.btn-pepperonni').classList.remove('active')
// }

// if (state.mushrooms === true) {
//   document.querySelector('.btn.btn-mushrooms').classList.add('active')
// } else {
//   document.querySelector('.btn.btn-mushrooms').classList.remove('active')
// }

// if (state.greenPeppers === true) {
//   document.querySelector('.btn.btn-green-peppers').classList.add('active')
// } else {
//   document.querySelector('.btn.btn-green-peppers').classList.remove('active')
// }

// if (state.whiteSauce === false) {
//   document.querySelector('.btn.btn-sauce').classList.add('active')
// } else {
//   document.querySelector('.btn.btn-sauce').classList.remove('active')
// }

// if (state.glutenFreeCrust === false) {
//   document.querySelector('.btn.btn-crust').classList.add('active')
// } else {
//   document.querySelector('.btn.btn-crust').classList.remove('active')
// }
// }
 


// Jurgen's solution: incomplete: NEED TO BE CHECKED. CHECK SLACK!
function renderPrice() {
  let $asidePanel = document.querySelectorAll('.panel.price');
  let $ulPrices = $asidePanel.querySelector('ul');

  $ulPrices.innerHTML = "";
  let totalPrice = basePrice;
  for (const ingredient in state){
    if(state[ingredient]){
      let ingredientPrice =ingredients[ingredient].price;
      totalPrice += ingredientPrice;

      let $li = document.createElement("li");


      //something with append child
      $li.innerHTML = '${ingredients[ingredient].price} ${ingredients[ingredient].name}'



  $asidePanel =document.querySelector("panel.price")

  
  
    
      
      
      totalPrice += ingredients[ingredient].price;
    }
  }
  $asidePanel.querySelector("strong").innerHTML = '$' + totalPrice
}

renderEverything()


// attempt Miranda number two
//   function renderPrice() {
//     // Iteration 4: change the HTML of `<aside class="panel price">`
//     let total = 10;
//     const addedCostsElements = document.querySelector('.panel.price ul');
//     const totalPriceElement = document.querySelector('.panel.price strong');
//     let domString = '';
//     addedCostsElements.innerHTML = '';
  
//     if (state.pepperonni) {
//       total += ingredients.pepperonni.price;
//       domString += `<li>${ingredients.pepperonni.price} ${ingredients.pepperonni.name}</li>`
//     }

//   totalElement.innerText = '$' + total + ''
//   ulElement.insertAdjacentHTML("afterbegin", domString);
// }


// attempt Miranda number one
//   let addedPrice = document.querySelectorAll('.addedPrice');
//   let startPrice = document.querySelector('.startPrice');
//   let totalPrice = 0 
//   for (let i=0; i < addedPrice.length; i++) {
//     addedPrice[i].querySelectorAll('.addedPrice').innerHTML = updateSubtot (
//       addedPrice[i]
//     );
//     startPrice += updateSubtot(prodList[i]);
//   }
//   document.querySelector('.totalPrice').innerHTML = totalPrice
// }
// document.querySelectorAll('.btn').addEventListener('click', function(){
//   calcAll();
// })



  // Iteration 4: change the HTML of `<aside class="panel price">`




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
document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}