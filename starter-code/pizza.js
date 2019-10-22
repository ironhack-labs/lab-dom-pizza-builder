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
  document.querySelectorAll('.pep').forEach($pep => {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach($mush => {
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    } else {
      $mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach($gp => {
    if (state.greenPeppers) {
      $gp.style.visibility = "visible";
    } else {
      $gp.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  const sauceClass = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauceClass.classList.add("sauce-white");
  } else {
    sauceClass.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  const crustClass = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crustClass.classList.add("crust-gluten-free");
  } else {
    crustClass.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  if (state.pepperonni) {
    document.querySelector(".btn.btn-pepperonni").classList.add("active");
  } else {
    document.querySelector(".btn.btn-pepperonni").classList.remove("active");
  }
  if (state.mushrooms) {
    document.querySelector(".btn.btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active");
  }
  if (state.greenPeppers) {
    document.querySelector(".btn.btn-green-peppers").classList.add("active");
  } else {
    document.querySelector(".btn.btn-green-peppers").classList.remove("active");
  }
  if (state.whiteSauce) {
    document.querySelector(".btn.btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn.btn-sauce").classList.remove("active");
  }
  if (state.glutenFreeCrust) {
    document.querySelector(".btn.btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn.btn-crust").classList.remove("active");
  }
}




function renderPrice() {
  let pepLi = document.querySelector(".price li:nth-child(1)");
  let mushLi = document.querySelector(".price li:nth-child(2)");
  let greenLi = document.querySelector(".price li:nth-child(3)");
  let sauceLi = document.querySelector(".price li:nth-child(4)");
  let crustLi = document.querySelector(".price li:nth-child(5)");
  let totalPrice = basePrice;

  if (!state.pepperonni) {
    pepLi.style.display = 'none';
  } else {
    pepLi.style.display = 'block';
    totalPrice += 1;
  }
  if (!state.mushrooms) {
    mushLi.style.display = 'none';
  } else {
    mushLi.style.display = 'block';
    totalPrice += 1;
  }
  if (!state.greenPeppers) {
    greenLi.style.display = 'none';
  } else {
    greenLi.style.display = 'block';
    totalPrice += 1;
  }
  if (!state.whiteSauce) {
    sauceLi.style.display = 'none';
  } else {
    sauceLi.style.display = 'block';
    totalPrice += 3;
  }
  if (!state.glutenFreeCrust) {
    crustLi.style.display = 'none';
  } else {
    crustLi.style.display = 'block';
    totalPrice += 5;
  }
  document.querySelector('aside.panel.price strong').innerHTML = "$" + totalPrice;
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