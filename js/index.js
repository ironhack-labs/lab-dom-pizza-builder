// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
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
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(whiteSauce => {
    if (state.whiteSauce) {
      whiteSauce.style.visibility = 'visible';
    } else {
      whiteSauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach(glutenFreeCrust => {
    if (state.glutenFreeCrust) {
      glutenFreeCrust.style.visibility = 'visible';
    } else {
      glutenFreeCrust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let $pepBtn = document.getElementsByClassName('btn-pepperoni');
  if (state.pepperoni === false) {
    $pepBtn[0].classList.remove('active')
    // console.log($pepBtn[0])
  } else {
    $pepBtn[0].classList.add('active')
    // console.log($pepBtn[0])
  }

  let $mushBtn = document.getElementsByClassName('btn-mushrooms');
   if (state.mushrooms === false) {
     $mushBtn[0].classList.remove('active')
   } else {
     $mushBtn[0].classList.add('active')
   }
  
  let $greenPepBtn = document.getElementsByClassName('btn-green-peppers');
  if (state.greenPeppers === false) {
    $greenPepBtn[0].classList.remove('active')
  } else {
    $greenPepBtn[0].classList.add('active')
  }

  let $sauceBtn = document.getElementsByClassName('btn-sauce');
  if (state.whiteSauce === false) {
    $sauceBtn[0].classList.remove('active')
  } else {
    $sauceBtn[0].classList.add('active')
  }

  let $crustBtn = document.getElementsByClassName('btn-crust');
  if (state.glutenFreeCrust === false) {
    $crustBtn[0].classList.remove('active')
    // $crustBtn[0].style.backgroundColor = 'black';
  } else {
    $crustBtn[0].classList.add('active')
    // $crustBtn[0].style.backgroundColor = '#e0d5cf';
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let $list = document.querySelector('.price ul')
  $list.innerHTML = ''
  let $price = document.querySelector('.price strong')
  let priceCounter = 0;
  for (let topping in state) {
    if (state[topping]){
      priceCounter += ingredients[topping].price;
      let $item = document.createElement('li');
      $item.innerHTML = `$${ingredients[topping].price} ${ingredients[topping].name}`
      $list.appendChild($item)
    }
    $price.innerHTML = (`$ ${priceCounter}`)
  }
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
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});