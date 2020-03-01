// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: 'pepperoni',
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
};

// Initial value of the state (the state values can change over time)
let state = {
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
  document.querySelectorAll('.pep').forEach($pep => {
    if (state.pepperoni) {
      $pep.style.visibility = 'visible';
    } else {
      $pep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach($mushroom => {
    if (state.mushrooms) {
      $mushroom.style.visibility = 'visible';
    } else {
      $mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach($green => {
    if (state.greenPeppers) {
      $green.style.visibility = 'visible';
    } else {
      $green.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach($green => {
    if (state.whiteSauce) {
      document.querySelectorAll('.sauce')[0].classList.add('sauce-white')
    } else {
      document.querySelectorAll('.sauce')[0].classList.remove('sauce-white')
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach($green => {
    if (state.glutenFreeCrust) {
      document.querySelectorAll('.crust')[0].classList.add('crust-gluten-free')
    } else {
      document.querySelectorAll('.crust')[0].classList.remove('crust-gluten-free')
    }
  });
}

function renderButtons() {
  // Pepperoni Button
  document.querySelectorAll('.btn.btn-pepperoni').forEach(btn => {
    if (state.pepperoni) {
      btn.classList.add('active')
      console.log('working')
    } else {
      btn.classList.remove('active')
      console.log('working')
    }
  })
  // Mushroom Button
  document.querySelectorAll('.btn.btn-mushrooms').forEach(btn => {
    if (state.mushrooms) {
      btn.classList.add('active')
      console.log('working')
    } else {
      btn.classList.remove('active')
      console.log('working')
    }
  })
  // Green peppers Button
  document.querySelectorAll('.btn.btn-green-peppers').forEach(btn => {
    if (state.greenPeppers) {
      btn.classList.add('active')
    } else {
      btn.classList.remove('active')
    }
  })
  // white sauce Button
  document.querySelectorAll('.btn.btn-sauce').forEach(btn => {
    if (state.whiteSauce) {
      btn.classList.add('active')
    } else {
      btn.classList.remove('active')
    }
  })
  //gluten free crustButton
  document.querySelectorAll('.btn.btn-crust').forEach(btn => {
    if (state.glutenFreeCrust) {
      btn.classList.add('active')
    } else {
      btn.classList.remove('active')
    }
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let priceList = document.querySelector('.panel.price ul')
  priceList.innerHTML = ""
  let totalPriceEl = document.querySelector('.panel.price strong')
  let totalPrice = 10
  if (state.pepperoni) {
    let listItem = document.createElement('li')
    listItem.innerText = `€${ingredients.pepperoni.price} Pepperoni`
    priceList.appendChild(listItem)
    totalPrice += ingredients.pepperoni.price
  }
  if (state.mushrooms) {
    let listItem = document.createElement('li')
    listItem.innerText = `€${ingredients.mushrooms.price} Mushrooms`
    priceList.appendChild(listItem)
    totalPrice += ingredients.mushrooms.price
  }
  // ...
  totalPriceEl.innerText = totalPrice
}



renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').onclick = () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};