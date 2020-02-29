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
  document.querySelectorAll('.pep').forEach($pep => {
    if (state.pepperoni) {
      $pep.style.visibility = 'visible';
    } else {
      $pep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach($mush => {
    if (state.mushrooms) {
      $mush.style.visibility = 'visible';
    } else {
      $mush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach($green => {
    if (state.greenPeppers) {
      $green.style.visibility = 'visible';
    } else {
      $green.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.getElementsByClassName('sauce')[0].classList
  if (state.whiteSauce) {
    sauce.remove('sauce-white');
  } else {
    sauce.add('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.getElementsByClassName('crust')[0].classList
  if (state.glutenFreeCrust) {
    crust.remove('crust-gluten-free');
  } else {
    crust.add('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  /*
  if (event.active) {
    remove
  } else {
    add
  }


if (document.querySelectorAll('.btn')[0].classList.contains('active') ) {
  document.getElementsByClassName('active')[0].classList.remove('active');
} else {
  document.getElementsByClassName('active')[0].classList.add('active');
}

*/

  /*
  let buttons = {
    pepper: {document.querySelectorAll('.btn')[0]},
    mushrooms: {document.querySelectorAll('.btn')[1]},
    green: {document.querySelectorAll('.btn')[2]},
    white: {document.querySelectorAll('.btn')[3]},
    crust: {document.querySelectorAll('.btn')[4]},
  };
  let state = {
    pepper: true,
    mushrooms: true,
    green: true,
    white: false,
    crust: false
  };

  if (state.forEach = true) {
    buttons.remove('.active');
  } else {
    buttons.add('.active')
  }
  */


  // one solution Hendrick
  if (state.pepperoni) {
    document.querySelector('.btn-pepperoni').classList.add('active')
  } else {
    document.querySelector('.btn-pepperoni').classList.remove('active')
  }

}



function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //tafel
  //document.querySelectorAll('aside li').forEach(function($priceThing) { $priceThing.style.visibility = 'hidden '})


  // one solution Hendrick
  let priceList = document.querySelector('.panel.price ul')
  priceList.innerHTML = ""
  if (state.pepperoni) {
    let listItem = document.createElement('li')
    listItem.innerText = `$${ ingredients.pepperoni.price } Pepperoni`
    priceList.appendChild(listItem)
  }
}




renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').onclick = () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}