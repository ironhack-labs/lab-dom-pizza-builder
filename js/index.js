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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  let sauce = document.querySelector('.sauce-white')
  if (state.whiteSauce) {
    sauce.style.visibility = 'visible';
  } else {
    sauce.style.visibility = 'hidden';
  }
}

function renderGlutenFreeCrust() {
  let crust = document.querySelector('.crust')
  console.log(crust)
  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free");
  } else {
    crust.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // var currentEventTarget = event.currentTarget;
  //   if (currentEventTarget.classList.contains("Active")) {
  //     currentEventTarget.classList.remove('Active')
  //     currentEventTarget.classList.add('Inactive')
  //   } else {
  //       currentEventTarget.classList.remove('Inactive')
  //       currentEventTarget.classList.add('Active')
  //   }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
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
let crustButton = document.querySelector('.btn.btn-crust')
crustButton.addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})

document.querySelectorAll('button').forEach((button) => {

  button.onclick = (event) => {
    var currentEventTarget = event.currentTarget;
    if (currentEventTarget.classList.contains("active")) {
      currentEventTarget.classList.remove('active')
      currentEventTarget.classList.add('Inactive')
    } else {
      currentEventTarget.classList.remove('Inactive')
      currentEventTarget.classList.add('active')
    }
  }

})



function renderPrice() {
  let total = 10
  if (state.pepperoni === true) {
    document.querySelector('#pepperoni').style.visibility = 'visible';
    total += 1
  } else {
    document.querySelector('#pepperoni').style.visibility = 'hidden'
}
if (state.mushrooms === true) {
  document.querySelector('#mushrooms').style.visibility = 'visible';
  total += 1
} else {
  document.querySelector('#mushrooms').style.visibility = 'hidden'
}
if (state.greenPeppers === true) {
  document.querySelector('#greenPeps').style.visibility = 'visible';
  total += 1
} else {
  document.querySelector('#greenPeps').style.visibility = 'hidden'
}
if (state.whiteSauce  === true) {
  document.querySelector('#whiteSauce').style.visibility = 'hidden';

} else {
  document.querySelector('#whiteSauce').style.visibility = 'visible'
  total += 3
}
if (state.glutenFreeCrust === true) {
  document.querySelector('#glutenFree').style.visibility = 'hidden';

} else {
  document.querySelector('#glutenFree').style.visibility = 'visible'
  total += 5
}

document.querySelector('#total').innerText = total

}