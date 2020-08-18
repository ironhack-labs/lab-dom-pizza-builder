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

// Iteration 1:

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
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
    document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
      if (state.greenPeppers) {
        oneGreenPepper.style.visibility = 'visible';
      } else {
        oneGreenPepper.style.visibility = 'hidden';
      }
    });
  }

function renderWhiteSauce() {
    document.querySelectorAll('.sauce-white').forEach(oneWhiteSauce => {
      if (!state.whiteSauce) {
        oneWhiteSauce.style.visibility = 'visible';
      } else {
        oneWhiteSauce.style.visibility = 'hidden';
      }
    });
  }

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust-gluten-free').forEach(oneGlutenFreeCrust => {
    if (!state.glutenFreeCrust) {
      oneGlutenFreeCrust.style.visibility = 'visible';
    } else {
      oneGlutenFreeCrust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  
  if (state.pepperoni) {
    document.querySelector('.btn-pepperoni').classList.add('active');
  } else {
    document.querySelector('.btn-pepperoni').classList.remove('active');
  }

  if (state.mushrooms) {
    document.querySelector('.btn-mushrooms').classList.add('active');
  } else {
    document.querySelector('.btn-mushrooms').classList.remove('active');
  }

  if (state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.add('active');
  } else {
    document.querySelector('.btn-green-peppers').classList.remove('active');
  }

  if (state.whiteSauce) {
    document.querySelector('.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn-sauce').classList.remove('active');
  }

  if (state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn-crust').classList.remove('active');
  }

}

function renderPrice() {
  document.querySelector(".price ul").innerHTML = "";
  let newText = "";
  let sum = basePrice;
  for (const element in state) {
    if (state[element]) {
      console.log("this is the state", state);
      console.log("this is ingredients", ingredients);
      sum += ingredients[element].price;
      newText += `<li>$${ingredients[element].price} ${ingredients[element].name}  </li>`;
    }
  }
  document.querySelector("strong").innerText = `$${sum}`;
  document.querySelector(".price ul").innerHTML = newText;
}

  // Iteration 4: change the HTML of `<aside class="panel price">

renderEverything();

// Iteration 1: 

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

// Iteration 2: 

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});