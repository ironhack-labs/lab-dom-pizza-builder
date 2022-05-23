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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  if (!state.whiteSauce) {
    document.querySelector('.sauce').classList.remove('sauce-white'); 
  } else {
    document.querySelector('.sauce').classList.add('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  if (!state.glutenFreeCrust) {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.add('crust-gluten-free')
  }
}

function renderButtons() {
 
  const pepBtn = document.querySelector('.btn.btn-pepperoni') 
  if (state.pepperoni) {
    pepBtn.classList.add('active')
  } else {
    pepBtn.classList.remove('active')
  }
  
  const mushBtn = document.querySelector('.btn.btn-mushrooms')
  if (state.mushrooms) {
    mushBtn.classList.add('active')
  } else {
    mushBtn.classList.remove('active')
  }
  
  const greenBtn = document.querySelector('.btn.btn-green-peppers')
  if (state.greenPeppers) {
    greenBtn.classList.add('active')
  } else {
    greenBtn.classList.remove('active')
  }

  const whtScBtn = document.querySelector('.btn.btn-sauce')
  if (state.whiteSauce) {
    whtScBtn.classList.add('active')
  } else {
    whtScBtn.classList.remove('active')
  }

  const glutBtn = document.querySelector('.btn.btn-crust')
  if (state.glutenFreeCrust) {
    glutBtn.classList.add('active')
  } else {
    glutBtn.classList.remove('active')
  }
}

function renderPrice() {
  
  document.querySelector('aside.panel.price ul').innerHTML = '';
  let pricePep, priceMush, priceGreenPep, priceSauce, priceCrust;
  const priceTotal = document.querySelector('aside.panel.price strong')

  if (state.pepperoni) {
    pricePep = ingredients.pepperoni.price;
    const pepperoniLi = document.createElement('li');
      pepperoniLi.innerText = `$${pricePep} pepperoni`;
      document.querySelector('.panel.price ul').append(pepperoniLi);
      console.log(pricePep)
  } else {
    pricePep = 0
  }

  if (state.mushrooms) {
    priceMush = ingredients.mushrooms.price
    const mushroomLi = document.createElement('li')
    mushroomLi.innerText = `$${priceMush} mushrooms`
    document.querySelector('.panel.price ul').append(mushroomLi)
    console.log(priceMush)
  } else {
    priceMush = 0
  }

  if (state.greenPeppers) {
    priceGreenPep = ingredients.greenPeppers.price
    const greenPeppersLi = document.createElement('li')
    greenPeppersLi.innerText = `$${priceGreenPep} green peppers`
    document.querySelector('.panel.price ul').append(greenPeppersLi)
    console.log(priceGreenPep)
  } else {
    priceGreenPep = 0
  }

  if (state.whiteSauce) {
    priceSauce = ingredients.whiteSauce.price
    const whiteSauceLi = document.createElement('li')
    whiteSauceLi.innerText = `$${priceSauce} white sauce`
    document.querySelector('.panel.price ul').append(whiteSauceLi)
    console.log(priceSauce)
  } else {
    priceSauce = 0
  }

  if (state.glutenFreeCrust) {
    priceCrust = ingredients.glutenFreeCrust.price
    const glutenFreeLi = document.createElement('li')
    glutenFreeLi.innerText = `$${priceCrust} gluten-free crust`
    document.querySelector('.panel.price ul').append(glutenFreeLi)
    console.log(priceCrust)
  } else {
    priceCrust = 0
  }
  
  let priceCal = basePrice + pricePep + priceMush + priceGreenPep + priceSauce + priceCrust
  priceTotal.innerText = "$" + priceCal

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;

  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
