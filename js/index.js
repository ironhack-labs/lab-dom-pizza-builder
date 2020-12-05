// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

console.log (Object.values(state))

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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
   document.querySelectorAll('.sauce').forEach(oneSauce => {
    if (state.whiteSauce) {
      oneSauce.classList.add("sauce-white")
    } else {
      oneSauce.classList.remove("sauce-white") 
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(oneCrust => {
    if (state.glutenFreeCrust) {
      oneCrust.classList.add("crust-gluten-free")
    } else {
      oneCrust.classList.remove("crust-gluten-free") 
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pepperButton = document.querySelector('.btn-pepperoni') 
  state.pepperoni ? pepperButton.classList.add('active') : pepperButton.classList.remove('active')

  const mushroomsButton = document.querySelector('.btn-mushrooms') 
  state.mushrooms ? mushroomsButton.classList.add('active') : mushroomsButton.classList.remove('active')

  const greenPButton = document.querySelector('.btn-green-peppers') 
  state.greenPeppers ? greenPButton.classList.add('active') : greenPButton.classList.remove('active')

  const sauceButton = document.querySelector('.btn-sauce') 
  state.whiteSauce ? sauceButton.classList.add('active') : sauceButton.classList.remove('active')

  const crustButton = document.querySelector('.btn-crust') 
  state.glutenFreeCrust ? crustButton.classList.add('active') : crustButton.classList.remove('active')
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let list = document.querySelector('.price ul')
  list.innerHTML = ''
  let totalPrice = basePrice
  const total = document.querySelector('.price strong')
  // if (state.pepperoni) {
  //   list.innerHTML += "<li>$1 pepperoni</li>"
  //   totalPrice += 1
  // }
  // if (state.mushrooms) {
  //   list.innerHTML += "<li>$1 mushroom</li>"
  //   totalPrice += 1
  // } 
  // if (state.greenPeppers) {
  //   list.innerHTML += "<li>$1 green peppers</li>"
  //   totalPrice += 1
  // }
  // if (state.whiteSauce) {
  //   list.innerHTML += "<li>$3 white sauce</li>"
  //   totalPrice += 3
  // }
  // if (state.glutenFreeCrust) {
  //   list.innerHTML += "<li>$5 gluten-free crust</li>"
  //   totalPrice += 5
  // }

  for (let ingredientsKey in ingredients) {
    //console.log(ingredientsKey)
    //console.log(ingredients[ingredientsKey].price)
    if (state[ingredientsKey]) {
      totalPrice += ingredients[ingredientsKey].price
      list.innerHTML += `<li>$${ingredients[ingredientsKey].price} ${ingredients[ingredientsKey].name}</li>`
    }
  }

  total.innerHTML = `$${totalPrice}`

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything()
})
