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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(oneSauce => {
    if(state.whiteSauce) {
      oneSauce.setAttribute("class", "sauce");
    } else {
      oneSauce.setAttribute("class", "sauce sauce-white");
    }  
  });
  // if (!state.whiteSauce) {
  //   document.getElementsByClassName("sauce")[0].classList.remove ("sauce-white")
  // } else {
  //   document.getElementsByClassName("sauce")[0].classList.add("sauce-white")
  // }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(oneCrust => {
    if(state.glutenFreeCrust) {
      oneCrust.setAttribute("class", "crust");
    } else {
      oneCrust.setAttribute("class", "crust crust-gluten-free");
    }  
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // document.getElementsByClassName("btn").toggle("active");
  if (state.pepperoni) {
    document.getElementsByClassName("btn btn-pepperoni") [0].classList.add("active")    
  } else {
    document.getElementsByClassName("btn btn-pepperoni")[0].classList.remove("active")
  }
  if (state.mushrooms) {
    document.getElementsByClassName("btn btn-mushrooms") [0].classList.add("active")    
  } else {
    document.getElementsByClassName("btn btn-mushrooms")[0].classList.remove("active")
  }
  if (state.greenPeppers) {
    document.getElementsByClassName("btn btn-green-peppers") [0].classList.add("active")    
  } else {
    document.getElementsByClassName("btn btn-green-peppers")[0].classList.remove("active")
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let priceList = document.querySelector(".panel.price ul")
  price.innerHTML = ""

  let totalPriceEl = docuemnt.querySelector(".panel.price strong")
  let totalPrice = 10;

  if (state.pepperoni) {
    let listItem = document.createElement("li")
    listItem.innerText = `${ingredients.pepperoni.price} Pepperoni`
    priceList.appendChild(listItem)
    totalPrice += ingredients.pepperoni.price;
  }
  if (state.mushrooms) {
    let listItem = document.createElement("li")
    listItem.innerText = `${ingredients.mushrooms.price} Mushrooms`
    priceList.appendChild(listItem)
    totalPrice += ingredients.mushrooms.price;
  }
  if (state.greenPeppers) {
    let listItem = document.createElement("li")
    listItem.innerText = `${ingredients.greenPeppers.price} Gree Peppers`;
    priceList.appendChild(listItem)
    totalPrice += ingredients.greenPeppers.price;
  }
  if (state.whiteSauce) {
    let listItem = document.createElement("li")
    listItem.innerText = `${ingredients.whiteSauce.price} White Sauce`
    priceList.appendChild(listItem)
    totalPrice += ingredients.whiteSauce.price;
  }
  if (state.glutenFreeCrust) {
    let listItem = document.createElement("li")
    listItem.innerText = `${ingredients.glutenFreeCrust.price} Gluten Free Crust`;
    priceList.appendChild(listItem)
    totalPrice += ingredients.glutenFreeCrust.price;
  }

  totalPriceEl.innerText = totalPrice
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
  renderWhiteSauce();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
});

//Iteration 3: Make the buttons active or not 

// document.querySelector('.btn.btn-crust').addEventListener('click', () => {
//   state.glutenFreeCrust = !state.glutenFreeCrust;
//   renderButtons();
// });
renderButtons()
renderPrice()