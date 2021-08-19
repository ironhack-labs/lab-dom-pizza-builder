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
  console.log(state);
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  const classFor = {
    pepperoni: '.btn-pepperoni',
    mushrooms: '.btn-mushrooms',
    greenPeppers: '.btn-green-peppers',
    whiteSauce: '.btn-sauce',
    glutenFreeCrust: '.btn-crust'
  }


  function renderButtons() {

    if (state.pepperonni) {
      document.querySelector('.btn-pepperoni').classList.add('active')
    } else {
      document.querySelector('.btn-pepperoni').classList.remove('active')
    }
    if (state.mushrooms) {
      document.querySelector('.btn-mushrooms').classList.add('active')
    } else {
      document.querySelector('.btn-mushrooms').classList.remove('active')
    }
    if (state.greenPeppers) {
      document.querySelector('.btn-green-peppers').classList.add('active')
    } else {
      document.querySelector('.btn-green-peppers').classList.remove('active')
    }
    if (state.whiteSauce) {
      document.querySelector('.btn-sauce').classList.add('active')
    } else {
      document.querySelector('.btn-sauce').classList.remove('active')
    }
    if (state.glutenFreeCrust) {
      document.querySelector('.btn-crust').classList.add('active')
    } else {
      document.querySelector('.btn-crust').classList.remove('active')
    }
  }

  function renderPrice() {
    let list = '';
    let price = basePrice;
    for (let ingredient in state) {
      console.log(ingredient);
      console.log(ingredients[ingredient])
      if (state[ingredient]) {
        list += `<li>$ ${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`
        price += ingredients[ingredient].price
      }
    }
    console.log('this is the price list: ', list);
    console.log('this is the total price', price);
  
    console.log(document.querySelector('.panel.price ul'))
    document.querySelector('.panel.price ul').innerHTML = list;
    document.querySelector('.panel.price strong').innerText = '$ ' + price;    

    
  }

function renderPepperoni() {
  console.log('all pep items:', document.querySelectorAll('.pep'));
  document.querySelectorAll('.pep').forEach((pep) => {
    if (state.pepperoni) {
      pep.style.visibility = 'visible';
    } else {
      pep.style.visibility = 'hidden';
    }
  })
}


function renderMushrooms() {
  console.log(document.querySelectorAll('.mushroom'));
  document.querySelectorAll('.mushroom').forEach((mush) => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  })
}
  // Iteration 1: set the visibility of `<section class="mushroom">`


function renderGreenPeppers(event) {
  document.querySelectorAll('.green-pepper').forEach((gp) => {
    if (state.greenPeppers) {
     gp.style.visibility = 'visible';
    } else {
      gp.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}
// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {

  const section = document.querySelector('.sauce');  
    if (state.whiteSauce) {
      section.classList.add('sauce-white');
    } else {
      section.classList.remove('sauce-white');
    }
  }

}

 function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const section = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    section.classList.add('crust-gluten-free');
  } else {
    section.classList.remove('crust-gluten-free');
  }
}



function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}  


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
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