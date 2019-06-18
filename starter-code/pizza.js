// Write your Pizza Builder JavaScript in this file.

// Constants 
let basePrice = 10
let ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
}

// Initial value of the state (the state values can change over time)
let state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true
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
  document.querySelectorAll('.mushroom').forEach(function ($mushrooms) {
    if (state.mushrooms) {
      $mushrooms.style.visibility = "visible";
    }
    else {
      $mushrooms.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function ($greenPeppers) {
    if (state.greenPeppers) {
      $greenPeppers.style.visibility = "visible";
    }
    else {
      $greenPeppers.style.visibility = "hidden";
    }
  })
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(function ($whiteSauce) {
    if (state.whiteSauce) {
      $whiteSauce.style.visibility = "visible";
    }
    else {
      $whiteSauce.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function ($glutenFreeCrust) {
    if (state.glutenFreeCrust) {
      $glutenFreeCrust.classList.remove("crust-gluten-free")
    }
    else {
      $glutenFreeCrust.classList.add('crust-gluten-free')
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn-pepperonni').forEach(x => {
    if (state.pepperonni) {
      x.classList.remove('active');
    } else {
      x.classList.add('active');
    }
  })

  document.querySelectorAll('.btn-mushrooms').forEach(x => {
    if (state.mushrooms) {
      x.classList.remove('active');
    } else {
      x.classList.add('active');
    }
  })

  document.querySelectorAll('.btn-green-peppers').forEach(x => {
    if (state.greenPeppers) {
      x.classList.remove('active');
    } else {
      x.classList.add('active');
    }
  })

  document.querySelectorAll('.btn-sauce').forEach(x => {
    if (state.whiteSauce) {
      x.classList.remove('active');
    } else {
      x.classList.add('active');
    }
  })

  document.querySelectorAll('.btn-crust').forEach(x => {
    if (state.glutenFreeCrust) {
      x.classList.remove('active');
    } else {
      x.classList.add('active');
    }
  })


}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let y = document.querySelectorAll('.panel.price ul li')
  let total = 21;
  let item = document.getElementsByTagName('strong');
  item[0].textContent = `$ ${total}`;

  if (!state.pepperonni) {
    y[0].style.display = 'none';
  } else {
    y[0].style.display = 'block';
  }

  if (!state.mushrooms) {
    y[1].style.display = 'none';
  } else {
    y[1].style.display = 'block';
  }

  if (!state.greenPeppers) {
    y[2].style.display = 'none';
  } else {
    y[2].style.display = 'block';
  }

  if (!state.whiteSauce) {
    y[3].style.display = 'none';
  } else {
    y[3].style.display = 'block';
  }

  if (!state.glutenFreeCrust) {
    y[4].style.display = 'none';
  } else {
    y[4].style.display = 'block';
  }


}


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