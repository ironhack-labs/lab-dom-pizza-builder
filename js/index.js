// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
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
  document.querySelectorAll('.mushroom').forEach(function (oneMushroom){
    // console.log(oneMushroom)
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function (onePepper) {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function (whiteSauce) {
    if (state.whiteSauce) {
      whiteSauce.classList.add('sauce-white')
    } else {
      whiteSauce.classList.remove('sauce-white')
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function (crust) {
    if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free')
    } else {
      crust.classList.remove('crust-gluten-free')
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn-pepperoni').forEach(function (button) {
    if (state.pepperoni) {
      button.classList.add ('active')
    } else {
      button.classList.remove ('active')
    }
  })

  document.querySelectorAll('.btn-mushrooms').forEach(function (button) {
    if (state.mushrooms) {
      button.classList.add ('active')
    } else {
      button.classList.remove ('active')
    }
  })

  document.querySelectorAll('.btn-green-peppers').forEach(function (button) {
    if (state.greenPeppers) {
      button.classList.add ('active')
    } else {
      button.classList.remove ('active')
    }
  })

  document.querySelectorAll('.btn-sauce').forEach(function (button) {
    if (state.whiteSauce) {
      button.classList.add ('active')
    } else {
      button.classList.remove ('active')
    }
  })

  document.querySelectorAll('.btn-crust').forEach(function (button) {
    if (state.glutenFreeCrust) {
      button.classList.add ('active')
    } else {
      button.classList.remove ('active')
    }
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // document.querySelectorAll('.panel.price ul li').forEach(function (name) {
  //   console.log(name)
  // })

  document.querySelectorAll('.panel.price ul').forEach(function (priceText) {
    priceText.innerHTML = '';
  });
  document.querySelectorAll('.panel.price strong').forEach(function (priceText) {
    priceText.innerHTML = '';
  });
  
  let total = 10;
  for (let ingredient in state) {
    // console.log (state[ingredient])

    if (state[ingredient]) {
      let createLi = document.createElement('li')
      let priceDescription = document.createTextNode(`$${ingredients[ingredient].price} ${ingredients[ingredient].name}`)

      createLi.appendChild(priceDescription);
      
      document.querySelector('.panel.price>ul').appendChild(createLi);    
      total += ingredients[ingredient].price;
    }

  }

  let addTotal = document.createTextNode(`$${total}`);
  document.querySelector('.panel.price>strong').append(addTotal) 
}
renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function (){
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})