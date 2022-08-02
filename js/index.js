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
  document.querySelectorAll(".mushroom").forEach((oneMush) => { 
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
}


function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((oneGreen) => { 
      if (state.greenPeppers) {
        oneGreen.style.visibility = "visible";
      } else {
        oneGreen.style.visibility = "hidden";
      }
    });
  }

function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector(".sauce").classList.add('sauce-white')
  } else {
    document.querySelector(".sauce").classList.remove('sauce-white')
  }
  }

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
      document.querySelector(".crust").classList.add('crust-gluten-free')
    } else {
      document.querySelector(".crust").classList.remove('crust-gluten-free')
    }
    }

function renderButtons() {
  
  if (state.pepperoni) {
    document.querySelector(".btn-pepperoni").classList.add('active');
  } else {
    document.querySelector(".btn-pepperoni").classList.remove('active');
  }

  if (state.mushrooms) {
    document.querySelector(".btn-mushrooms").classList.add('active');
  } else {
    document.querySelector(".btn-mushrooms").classList.remove('active');
  }

  if (state.greenPeppers) {
    document.querySelector(".btn-green-peppers").classList.add('active');
  } else {
    document.querySelector(".btn-green-peppers").classList.remove('active');
  }

  if (state.whiteSauce) {
    document.querySelector(".btn-sauce").classList.add('active');
  } else {
    document.querySelector(".btn-sauce").classList.remove('active');
  }

  if (state.glutenFreeCrust) {
    document.querySelector(".btn-crust").classList.add('active');
  } else {
    document.querySelector(".btn-crust").classList.remove('active');
  }

}


function renderPrice() {
  let pricelist = document.querySelector(".price ul")
  pricelist.innerHTML = ""

  if (state.pepperoni) {
    pricelist.innerHTML += `<li>$1 pepperoni</li>`
  }
  if (state.mushrooms) {
    pricelist.innerHTML += `<li>$1 mushrooms</li>`
  }
  if (state.greenPeppers) {
    pricelist.innerHTML += `<li>$1 green peppers</li>`
  }
  if (state.whiteSauce) {
    pricelist.innerHTML += `<li>$3 white sauce</li>`
  }
  if (state.glutenFreeCrust) {
    pricelist.innerHTML += `<li>$5 gluten-free crust</li>`
  }
}



renderEverything() 


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});