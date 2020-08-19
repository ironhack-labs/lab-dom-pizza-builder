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
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    whiteSauce = document.querySelector("sauce-white").classList.add("sauce-white");
  } else {
    whiteSauce = document.querySelector("sauce-white").classList.remove("sauce-white");
  }



  function renderGlutenFreeCrust() {
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    if (state.glutenFreeCrust) {
      glutenFreeCrust = document.querySelector("crust").classList.add("crust-gluten-free");
    } else {
      glutenFreeCrust = document.querySelector("crust").classList.remove("crust-gluten-free");
    }
  }

  function renderButtons() {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    if (state.pepperoni) {
      pepButton = document.querySelector('.btn.btn-pepperoni').classList.add('active');
    } else {
      PepButton = document.querySelector('.btn.btn-pepperoni').classList.remove('active');
    }
    if (state.mushroom) {
      mushButton = document.querySelector('.btn.btn-mushrooms').classList.add('active');
    } else {
      mushButton = document.querySelector('.btn.btn-mushrooms').classList.remove('active');
    }
    if (state.greenPeppers) {
      greenButton = document.querySelector('.btn.btn-green-peppers').classList.add('active');
    } else {
      greenButton = document.querySelector('.btn.btn-green-peppers').classList.remove('active');
    }
    if (state.whiteSauce) {
      sauceButton = document.querySelector('.btn.btn-sauce').classList.add('active');
    } else {
      sauceButton = document.querySelector('.btn.btn-sauce').classList.remove('active');
    }
    if (state.glutenFreeCrust) {
      crustButton = document.querySelector('.btn.btn-crust').classList.add('active');
    } else {
      crustButton = document.querySelector('btn.btn-crust').classList.remove('active');
    }
  }

  function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
    let list = '';
    let price = basePrice;
    for (let ingredient in state) {
      //console.log (ingredients);
      if (state[ingredient]) {
        //console.log (state[ingredient]);
        list += `<li>$ ${ingredients[ingredient].price} ${ingredients[ingredient].name} </li>`
        price += ingredients[ingredient].price
        //console.log(ingredients[ingredient].price);
      }
    }
    document.querySelector('.panel.price ul').innerHTML = list;
    document.querySelector('.panel.price strong').innerText = $$ {
      price
    };
    //console.log(list);
  }


  renderEverything();

  // Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
  document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });
  document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });
  document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

  document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
    state.whiteSauce = !state.whiteSauce;
    //console.log('this changes the state,',state.whiteSauce);
    renderEverything();
  });

  //alternatively sytax can be like this
  // document.querySelector('.btn.btn-pepperoni').onclick = function()  {
  //   state.pepperoni = !state.pepperoni;
  //   renderEverything();
  // };

  // Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

  // Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

  // Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

  // Iteration 2: Add click event listener on `<button class="btn btn-crust">`