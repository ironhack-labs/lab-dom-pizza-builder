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
  greenPeppers: false,
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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {

    if (state.mushrooms) {

      oneMushroom.style.visibility = 'visible';
    } else {

      oneMushroom.style.visibility = 'hidden'
    }

  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach((onePepper) => {

    if (state.greenPeppers) {

      onePepper.style.visibility = 'visible'

    } else {

      onePepper.style.visibility = 'hidden'
    }


  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  document.querySelectorAll('.sauce').forEach((sauce) => {

    if (state.whiteSauce) {

      sauce.classList.add('sauce-white')

    } else {

      sauce.classList.remove('sauce-white')

    }

  });


}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((crust) => {

    if (state.glutenFreeCrust) {

      crust.classList.add('crust-gluten-free')
    } else {

      crust.classList.remove('crust-gluten-free')
    }

  })
}

const classes = {

  pepperoni: '.btn-pepperoni',
  mushrooms: '.btn-mushrooms',
  greenPeppers: '.btn-green-peppers',
  whiteSauce: '.btn-sauce',
  glutenFreeCrust: '.btn-crust'

}


function renderButtons() {
  // if (state.pepperoni === true) {
  //   document.querySelector('.btn-pepperoni').classList.add('active')
  // } else {
  //   document.querySelector('.btn-pepperoni').classList.remove('active')
  // };
  // if (state.mushrooms === true) {
  //   document.querySelector('.btn-mushrooms').classList.add('active')
  // } else {
  //   document.querySelector('.btn-mushrooms').classList.remove('active')
  // };
  // if (state.greenPeppers === true) {
  //   document.querySelector('.btn-green-peppers').classList.add('active')
  // } else {
  //   document.querySelector('.btn-green-peppers').classList.remove('active')
  // };
  // if (state.whiteSauce === true) {
  //   document.querySelector('.btn-sauce').classList.add('active')
  // } else {
  //   document.querySelector('.btn-sauce').classList.remove('active')
  // };
  // if (state.glutenFreeCrust === true) {
  //   document.querySelector('.btn-crust').classList.add('active')
  // } else {
  //   document.querySelector('.btn-crust').classList.remove('active')
  // }

  for (let ingredient in state) {

    console.log(classes[ingredient])

    // const button = document.querySelector(classes[ingredient])

    if (state[ingredient]) {

      document.querySelector(classes[ingredient]).classList.add('active')

    } else {

      document.querySelector(classes[ingredient]).classList.remove('active')

    }
  }
};


function renderPrice() {
  // declare empty price list and total price variables

  let priceList = ''

  //set total price to init value of baseprice declared at the start

  let totalPrice = basePrice

  for (let item in state) {
    if (state[item] === true) {
      priceList += `<li>$ ${ingredients[item].price} ${ingredients[item].name}</li>`
      totalPrice += ingredients[item].price
    }
  }

  // //finally set the list to the equal of the priceList
  // document.querySelector('.panel .price ul') += priceList

  document.querySelector('.panel.price ul').innerHTML = priceList
  document.querySelector('.panel.price strong').innerHTML = '$' + totalPrice


}

console.log(renderPrice())

renderEverything();

// Iteration 1: Example of a click event listener on `< button class="btn btn-pepperoni" > `
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `< button class="btn btn-mushrooms" > `
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})
// Iteration 1: Add click event listener on `< button class="btn btn-green-peppers" > `
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {

  state.greenPeppers = !state.greenPeppers;
  renderEverything();

})

// Iteration 2: Add click event listener on `< button class="btn btn-sauce" > `
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {

  state.whiteSauce = !state.whiteSauce;
  renderEverything();

})

// Iteration 2: Add click event listener on `< button class="btn btn-crust" > `

document.querySelector('.btn.btn-crust').addEventListener('click', function () {

  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything();
})
