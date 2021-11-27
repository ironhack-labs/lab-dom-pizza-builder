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

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((mush) => {
    /* state.mushrooms ? mush.style.visibility = 'true' : mush.style.visibility = 'hidden'; */
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((pepper) => {
    /* state.mushrooms ? mush.style.visibility = 'true' : mush.style.visibility = 'hidden'; */
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  })

}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce.sauce-white").forEach((sauce) => {
    /* state.mushrooms ? mush.style.visibility = 'true' : mush.style.visibility = 'hidden'; */
    if (state.whiteSauce) {
      sauce.style.visibility = 'visible';
    } else {
      sauce.style.visibility = 'hidden';
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach((crust) => {
    /* state.mushrooms ? mush.style.visibility = 'true' : mush.style.visibility = 'hidden'; */
    if (state.glutenFreeCrust) {
      crust.style.visibility = 'visible';
    } else {
      crust.style.visibility = 'hidden';
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
/*   document.querySelectorAll(".btn").forEach( btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active")
    })
  }) */

  if (state.pepperoni) {
    document.querySelector(".btn.btn-pepperoni").classList.add("active")
  } else {
    document.querySelector(".btn.btn-pepperoni").classList.remove("active")
  }

  if (state.mushrooms) {
    document.querySelector(".btn.btn-mushrooms").classList.add("active")
  } else {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active")
  }

  if (state.greenPeppers) {
    document.querySelector(".btn.btn-green-peppers").classList.add("active")
  } else {
    document.querySelector(".btn.btn-green-peppers").classList.remove("active")
  }

  if (state.whiteSauce) {
    document.querySelector(".btn.btn-sauce").classList.add("active")
  } else {
    document.querySelector(".btn.btn-sauce").classList.remove("active")
  }

  if (state.glutenFreeCrust) {
    document.querySelector(".btn.btn-crust").classList.add("active")
  } else {
    document.querySelector(".btn.btn-crust").classList.remove("active")
  }

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const ingredientsList = document.querySelector(".panel.price ul")
  const totalPrice = document.querySelector(".panel.price strong")
  let priceValue = 0
  ingredientsList.innerHTML = ''
  totalPrice.innerHTML = '$'


  console.log(ingredientsList)
  for (const ing in state) {
    console.log(state[ing])

    if (state[ing]) { 
      ingredientsList.innerHTML += `<li>$${ingredients[ing].price} ${ing}</li>`
      
      priceValue += ingredients[ing].price
      totalPrice.innerHTML = `$${priceValue}`
    }
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  //state.pepperoni = !state.pepperoni;
  //state.pepperoni ? false : true
  console.log(state)
  if (state.pepperoni) {
    state.pepperoni = false
  }
  else {
    state.pepperoni = true
  }
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener("click", function () {
  state.mushrooms = !state.mushrooms;
  //console.log(state.mushrooms = !state.mushrooms)
  renderEverything();
})

document.querySelector('.btn.btn-green-peppers').addEventListener("click", function () {
  state.greenPeppers = !state.greenPeppers;
  //console.log(state.mushrooms = !state.mushrooms)
  renderEverything();
})

document.querySelector('.btn.btn-sauce').addEventListener("click", function () {
  state.whiteSauce = !state.whiteSauce;
  //console.log(state.mushrooms = !state.mushrooms)
  renderEverything();
})

document.querySelector('.btn.btn-crust').addEventListener("click", function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  //console.log(state.mushrooms = !state.mushrooms)
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
