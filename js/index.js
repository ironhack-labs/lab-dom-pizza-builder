// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 },
  spicySauce: { name: 'Spicy sauce', price: 0 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
  spicySauce: false
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
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  let salsa = document.querySelectorAll('.sauce')
  if (state.whiteSauce) {
    salsa[0].classList.add("sauce-white");
    salsa[0].style.visibility = 'visible';
  } else {
    salsa[0].classList.remove("sauce-white");
    salsa[0].style.visibility = 'visible';
  }
}

function renderGlutenFreeCrust() {
  let crusty = document.querySelectorAll('.crust')
  if (state.glutenFreeCrust) {
    crusty[0].classList.add("crust-gluten-free");
    crusty[0].style.visibility = 'visible';
  } else {
    crusty[0].classList.remove("crust-gluten-free");
    crusty[0].style.visibility = 'visible';
  }
}

function renderButtons() {
  // Iteration 3: remove active if not active
  let a = document.querySelector('.btn-pepperoni')
  state.pepperoni ? a.classList.add("active") :
                    a.classList.remove("active")
  let b = document.querySelector('.btn-mushrooms')
  state.mushrooms ? b.classList.add("active") :
                    b.classList.remove("active")
  let c = document.querySelector('.btn-green-peppers')
  state.greenPeppers ? c.classList.add("active") :
                       c.classList.remove("active")
  let d = document.querySelector('.btn-sauce')
  state.whiteSauce ? d.classList.add("active") :
                     d.classList.remove("active")
  let e = document.querySelector('.btn-crust')
  state.glutenFreeCrust ? e.classList.add("active") :
                          e.classList.remove("active")
  let f = document.querySelector('.btn-spicy')
  state.spicySauce ? f.classList.add("active") :
                     f.classList.remove("active")
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let ingredt = document.querySelectorAll(".panel.price li");
  let chosenIngredients = [...ingredt]
  base = document.querySelector(".panel.price b").innerText
  total = parseInt(base[1]+base[2])

  if (state.pepperoni) {
    total += 1;
    chosenIngredients[0].style.display = 'block'
  } else {
    chosenIngredients[0].style.display = 'none';
  }
  if (state.mushrooms) {
    total += 1;
    chosenIngredients[1].style.display = 'block'
  } else {
    chosenIngredients[1].style.display = 'none';
  }
  if (state.greenPeppers) {
    total += 1;
    chosenIngredients[2].style.display = 'block'
  } else {
    chosenIngredients[2].style.display = 'none';
  }
  if (state.whiteSauce) {
    total += 3;
    chosenIngredients[3].style.display = 'block'
  } else {
    chosenIngredients[3].style.display = 'none';
  }
  if (state.glutenFreeCrust) {
    total += 5;
    chosenIngredients[4].style.display = 'block'
  } else {
    chosenIngredients[4].style.display = 'none';
  }
  if (state.spicySauce) {
    total += 0;
    chosenIngredients[5].style.display = 'block'
  } else {
    chosenIngredients[5].style.display = 'none';
  }

  document.querySelector(".panel.price strong").innerText = `$${total}`

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

document.querySelector('.btn-spicy').addEventListener('click', () => {
  state.spicySauce = !state.spicySauce;
  renderEverything();
});

