// Write your Pizza Builder JavaScript in this file.

// Constants 
let basePrice = 10
let ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
let state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

const renderPepperonni = () => {
  document.querySelectorAll('.pep').forEach($pep => {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
};


const renderMushrooms = () => {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = "visible";
    } else {
      mushroom.style.visibility = "hidden";
    }
  });
};

const renderGreenPeppers = () => {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if(state.greenPeppers) {
      pepper.style.visibility = "visible";
    } else {
      pepper.style.visibility = "hidden";
    }
  });
};

console.log(document.querySelector('.sauce'))

const renderWhiteSauce = () => {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceElement = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauceElement.className = 'sauce sauce-white';
  } else {sauceElement.className = 'sauce'};
}

const renderGlutenFreeCrust = () => {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustElement = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crustElement.className = 'crust crust-gluten-free';
  } else {
    crustElement.className = 'crust';
  }
}

const renderButtons = () => {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // const buttons = document.querySelectorAll('.btn');
  const btnPepperonni = document.querySelector('.btn-pepperonni')
  if (state.pepperonni) {
    btnPepperonni.className = "btn btn-pepperonni active"
  } else {
    btnPepperonni.className = "btn btn-pepperonni"
  }

  const btnMushrooms = document.querySelector('.btn-mushrooms')
  if (state.mushrooms) {
    btnMushrooms.className = "btn btn-mushrooms active"
  } else {
    btnMushrooms.className = "btn btn-mushrooms"
  }

  const btnPeppers = document.querySelector('.btn-green-peppers')
  if (state.greenPeppers) {
    btnPeppers.className = "btn btn-green-peppers active"
  } else {
    btnPeppers.className = "btn btn-green-peppers"
  }

  const btnSauce = document.querySelector('.btn-sauce')
  if (state.whiteSauce) {
    btnSauce.className = "btn btn-sauce active"
  } else {
    btnSauce.className = "btn btn-sauce"
  }

  const btnCrust = document.querySelector('.btn-crust')
  if (state.glutenFreeCrust) {
    btnCrust.className = "btn btn-crust active"
  } else {
    btnCrust.className = "btn btn-crust"
  }
}

// console.log()

const renderPrice = () => {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const prices = document.querySelector('.panel.price').getElementsByTagName('li');
  let total = 10;

  if (state.pepperonni) {
    prices[0].style.display = 'block'
    total += ingredients.pepperonni.price
  } else {
    prices[0].style.display = 'none'
  }

  if (state.mushrooms) {
    prices[1].style.display = 'block'
    total += ingredients.mushrooms.price
  } else {
    prices[1].style.display = 'none'
  }

  if (state.greenPeppers) {
    prices[2].style.display = 'block'
    total += ingredients.greenPeppers.price
  } else {
    prices[2].style.display = 'none'
  }

  if (state.whiteSauce) {
    prices[3].style.display = 'block'
    total += ingredients.whiteSauce.price
  } else {
    prices[3].style.display = 'none'
  }

  if (state.glutenFreeCrust) {
    prices[4].style.display = 'block'
    total += ingredients.glutenFreeCrust.price
  } else {
    prices[4].style.display = 'none'
  }
  
  document.querySelector('strong').innerHTML = `$${total}`
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed

const renderEverything = () => {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()
  renderButtons()
  renderPrice()
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = () => {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
  document.querySelector('.btn.btn-green-peppers').onclick = () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  }


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}