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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const pizza_section = document.querySelector('.sauce');
  if (state.whiteSauce) {
    pizza_section.classList.add('sauce-white')
  } else {
    pizza_section.classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust_section = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crust_section.classList.add('crust-gluten-free')
  } else {
    crust_section.classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  const list_of_button = document.querySelectorAll('button')
  console.log(list_of_button)
  for (let i = 0; i < list_of_button.length; i++) {
    let ele_class = list_of_button[i].classList;
    let button_type = ele_class[1]
    if (state[button_type] === true) {
      list_of_button[i].classList.add('active')
    } else {
      list_of_button[i].classList.remove('active')
    }
    
    }
  
    // BABESHKATA :3
  // const buttonPep = document.querySelector('.btn-pepperoni');
  // if (state.pepperoni) {
  //   buttonPep.classList.add('active')
  // } else {
  //   buttonPep.classList.remove('active')
  // }
  // const buttonMush = document.querySelector('.btn-mushrooms');
  // if (state.mushrooms) {
  //   buttonMush.classList.add('active')
  // } else {
  //   buttonMush.classList.remove('active')
  // }

  // const buttonGp = document.querySelector('.btn-green-peppers');
  // if (state.greenPeppers) {
  //   buttonGp.classList.add('active')
  // } else {
  //   buttonGp.classList.remove('active')
  // }

  // const buttonSauce = document.querySelector('.btn-sauce');
  // if (state.whiteSauce) {
  //   buttonSauce.classList.add('active')
  // } else {
  //   buttonSauce.classList.remove('active')
  // }

  // const buttonCrust = document.querySelector('.btn-crust');
  // if (state.glutenFreeCrust) {
  //   buttonCrust.classList.add('active')
  // } else {
  //   buttonCrust.classList.remove('active')
  // }
  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let ttl_sum = basePrice;
  const price_panel = document.querySelector('.panel.price');
  const list = price_panel.querySelector('ul');
  const sum_text = price_panel.querySelector('strong');

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  for (let key in state) {
    if (state[key] === true) {
      let new_li = document.createElement('li');
      let inner_text = `$${ingredients[key].price} ${ingredients[key].name}`;
      new_li.innerText = inner_text;
      ttl_sum += ingredients[key].price
      list.appendChild(new_li)
    }
  }

  price_panel.querySelector('strong').innerText = `$${ttl_sum}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});



// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click',function(){
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click',function(){
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function(){
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})

