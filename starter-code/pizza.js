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
  document.querySelectorAll('.mushroom').forEach(function ($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function ($greenpepper) {
    if (state.greenPeppers) {
      $greenpepper.style.visibility = "visible";
    }
    else {
      $greenpepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(function ($sauce) {
    if (state.whiteSauce) {
      $sauce.style.visibility = "visible";
    }
    else {
      $sauce.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach(function ($crust) {
    if (state.glutenFreeCrust) {
      $crust.style.visibility = "visible";
    }
    else {
      $crust.style.visibility = "hidden";
    }
  })
}

function renderButtons() {

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  if (state.pepperonni) {
    document.querySelector('.btn.btn-pepperonni').classList.add("active");
  } else {
    document.querySelector('.btn.btn-pepperonni').classList.remove("active");
  }
  if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.add("active");
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove("active");
  } if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.add("active");
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove("active");
  } if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.add("active");
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove("active");
  } if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.add("active");
  } else {
    document.querySelector('.btn.btn-crust').classList.remove("active");
  }


}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let sum = 0;
  document.querySelector(".price ul").innerHTML = "";
  let newString = ""
  for (let key in state) {
    if (state[key]) {
      newString += ` <li class="pepperonni"> ${ingredients[key].price}  ${ingredients[key].name}</li>`
      sum += ingredients[key].price;
    }
  }
  console.log(sum);
  document.querySelector(".price ul").innerHTML = newString;
  document.querySelector("strong").innerText = `$${sum + 10}`
}

// let sum = 0;
// const pepperonni = document.querySelector('.pepperonni');
// if (state.pepperonni) {
//   pepperonni.style.visibility = "visible";
//   sum = sum + 1;
// }
// else {
//   pepperonni.style.visibility = "hidden";
// }
// const mushrooms = document.querySelector('.mushrooms');
// if (state.mushrooms) {
//   mushrooms.style.visibility = "visible";
//   sum = sum + 1;
// }
// else {
//   mushrooms.style.visibility = "hidden";
// }
// const greenPeppers = document.querySelector('.greenPeppers');
// if (state.greenPeppers) {
//   greenPeppers.style.visibility = "visible";
//   sum = sum + 1;
// }
// else {
//   greenPeppers.style.visibility = "hidden";
// }
// const whiteSauce = document.querySelector('.whiteSauce');
// if (state.whiteSauce) {
//   whiteSauce.style.visibility = "visible";
//   sum = sum + 3;
// }
// else {
//   whiteSauce.style.visibility = "hidden";
// }
// const glutenFreeCrust = document.querySelector('.glutenFreeCrust');
// if (state.glutenFreeCrust) {
//   glutenFreeCrust.style.visibility = "visible";
//   sum = sum + 5;
// }
// else {
//   glutenFreeCrust.style.visibility = "hidden";
// }
// let total=0;




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
  renderEverything()
}
