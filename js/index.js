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

let state = {
  pepperoni: true,
  mushrooms: false,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true
};



function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

let buttonPepperoni = document.querySelector('.btn.btn-pepperoni')
buttonPepperoni.onclick = () => {
  state.pepperoni = !state.pepperoni;
  if (state.pepperoni) {
    buttonPepperoni.className = "btn btn-pepperoni active"
  } else {
    buttonPepperoni.className = "btn btn-pepperoni"
  }

  renderEverything();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden'
    }
  })
}

let buttonMush = document.querySelector('.btn.btn-mushrooms')
buttonMush.onclick = () => {
  state.mushrooms = !state.mushrooms;
  if (state.mushrooms) {
    buttonMush.className = "btn btn-mushrooms active"
  } else {
    buttonMush.className = "btn btn-mushrooms"
  }
  renderEverything();
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneShroom => {
    if (state.mushrooms) {
      oneShroom.style.visibility = 'visible';
    } else {
      oneShroom.style.visibility = 'hidden';
    }
  });
};


let buttonPepper = document.querySelector('.btn.btn-green-peppers')
buttonPepper.onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  if (state.greenPeppers) {
    buttonPepper.className = "btn btn-green-peppers active"
  } else {
    buttonPepper.className = "btn btn-green-peppers"
  }
  renderEverything();
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  })
}

let buttonSauce = document.querySelector('.btn.btn-sauce')
buttonSauce.onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  if (state.whiteSauce) {
    buttonSauce.className = "btn btn-sauce active"
  } else {
    buttonSauce.className = "btn btn-sauce"
  }
  renderEverything();
}

function renderWhiteSauce() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.sauce-white').forEach(topping => {
    if (state.whiteSauce) {
      topping.style.visibility = 'visible';
    } else {
      topping.style.visibility = 'hidden';
    }
  });
}

let buttonCrust = document.querySelector('.btn.btn-crust')
buttonCrust.onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  if (state.glutenFreeCrust) {
    buttonCrust.className = "btn btn-crust active"
  } else {
    buttonCrust.className = "btn btn-crust"
  }
  renderEverything();
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust-gluten-free').forEach(topping => {
    if (state.glutenFreeCrust) {
      topping.style.visibility = 'visible';
    } else {
      topping.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {

}

function renderPrice() {
  let list = '';
  let total = 10;
  for (let key in state) {
    if (state[key]) {
      total += ingredients[key].price;
      list += `<li>$${ingredients[key].price} ${ingredients[key].name}</li>`
      console.log(list);
    }
  }
  document.querySelector('.panel.price strong').innerHTML = `$` + total
  document.querySelector('.panel.price ul').innerHTML = list;

}


