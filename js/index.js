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
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if(state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePepp => {
    if(state.greenPeppers) {
      onePepp.style.visibility = 'visible';
    } else {
      onePepp.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Add/remove the class "sauce-white" of `<section class="sauce">`
  if (!state.whiteSauce) {
    document.querySelector('.sauce').classList.remove('sauce-white');
  } else {
    document.querySelector('.sauce').classList.add('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (!state.glutenFreeCrust) {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  }
}

function renderButtons() {
  // Add/remove the class "active" of each `<button class="btn">`
   if (state.pepperoni) {
      document.querySelector(".btn-pepperoni").classList.add("active");
  } else {
      document.querySelector(".btn-pepperoni").classList.remove("active");
  };

  if (state.mushrooms) {
      document.querySelector(".btn-mushrooms").classList.add("active");
  } else {
      document.querySelector(".btn-mushrooms").classList.remove("active");
  };

  if (state.greenPeppers) {
      document.querySelector(".btn-green-peppers").classList.add("active");
  } else {
      document.querySelector(".btn-green-peppers").classList.remove("active");
  };

  if (state.whiteSauce) {
      document.querySelector(".btn-sauce").classList.add("active");
  } else {
      document.querySelector(".btn-sauce").classList.remove("active");
  };

  if (state.glutenFreeCrust) {
      document.querySelector(".btn-crust").classList.add("active");
  } else {
      document.querySelector(".btn-crust").classList.remove("active");
  };
};

function renderPrice() {
  // Change the HTML of `<aside class="panel price">`
  // Errase all the items form the list
  document.querySelector('.price ul').innerHTML = '';

  // Variables to add an item to the list and update the final price
  let newListItem = '';
  let sum = basePrice;

  // Loop in the object state, if key = true, add the text and the price to the variables 
  for (let pizzaTopping in state) {
    if (state[pizzaTopping]) {
      const pizzaElement = ingredients[pizzaTopping]
      newListItem += `<li>$ ${pizzaElement.price} ${pizzaElement.name}</li>`
      sum += pizzaElement.price;
    }
  }

  // Update the base price and the items of the ul with the variables created
  document.querySelector('strong').innerText = `$${sum}`
  document.querySelector('.price ul').innerHTML = newListItem;
}

renderEverything();

// Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () =>{
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})