// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {
    name: 'Pepperonni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
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
    } else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function ($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function ($greenPepper) {
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    } else {
      $greenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function ($whiteSauce) {
    if (state.whiteSauce) {
      $whiteSauce.style.visibility = "hidden";
    } else {
      $whiteSauce.style.visibility = "visible";
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function ($glutenFreeCrust) {
    if (state.glutenFreeCrust) {
      $glutenFreeCrust.style.visibility = "hidden";
    } else {
      $glutenFreeCrust.style.visibility = "visible";
    }
  })
}



//Iteration 3

function renderButtons() {
  if (state.pepperonni === true) {
    document.querySelector('.btn.btn-pepperonni').classList.add("active");
  } else {
    document.querySelector('.btn.btn-pepperonni').classList.remove("active");
  };
  if (state.mushroom === true) {
    document.querySelector('.btn.btn-mushrooms').classList.add("active");
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove("active");
  };
  if (state.greenPeppers === true) {
    document.querySelector('.btn.btn-green-peppers').classList.add("active");
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove("active");
  };
  if (state.whiteSauce === true) {
    document.querySelector('.btn.btn-sauce').classList.add("active");
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove("active");
  };
  if (state.glutenFreeCrust === true) {
    document.querySelector('.btn.btn-crust').classList.add("active");
  } else {
    document.querySelector('.btn.btn-crust').classList.remove("active");
  };
}


// Iteration 4: change the HTML of `<aside class="panel price">`


function renderPrice() {

  const actifIng = Object.keys(ingredients)
  // console.log(actifIng)

  let sum = basePrice;

  actifIng.forEach(function (item) {
    if (state[item] === true) {
      sum += ingredients[item].price;
      console.log(item);
    }
  })

  myList = document.querySelector("body > aside > ul");
  myList.innerHTML = "";

  if (state.pepperonni) {
    ingredientList("pepperonni")
  }

  if (state.mushrooms) {
    ingredientList("mushrooms")
  }

  if (state.greenPeppers) {
    ingredientList("greenPeppers")
  }

  if (state.whiteSauce) {
    ingredientList("whiteSauce")
  }

  if (state.glutenFreeCrust) {
    ingredientList("glutenFreeCrust")
  }


  function ingredientList(ing) {
    let ingredientLi = document.createElement("li");
    ingredientLi.innerHTML = "$" + ingredients[ing].price + " " + ingredients[ing].name.toLowerCase();
    myList.appendChild(ingredientLi);
  }



  document.querySelector("body > aside > strong").innerHTML = "$" + sum;
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
  renderEverything()
}