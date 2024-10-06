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
const classSauce = document.querySelector(".sauce");
const classGluten = document.querySelector(".crust");
const buttons = document.querySelectorAll(".btn");


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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    console.log(oneMushroom)
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  classSauce.classList.toggle("sauce-white", state.whiteSauce);
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  classGluten.classList.toggle("crust-gluten-free", state.glutenFreeCrust);
}

function renderButtons() {
  buttons.forEach(button => {
    // Comprobamos las clases específicas para cada botón
    if (button.classList.contains('btn-pepperoni')) {
      button.classList.toggle('active', state.pepperoni);
    }
    if (button.classList.contains('btn-mushrooms')) {
      button.classList.toggle('active', state.mushrooms);
    }
    if (button.classList.contains('btn-green-peppers')) {
      button.classList.toggle('active', state.greenPeppers);
    }
    if (button.classList.contains('btn-sauce')) {
      button.classList.toggle('active', state.whiteSauce);
    }
    if (button.classList.contains('btn-crust')) {
      button.classList.toggle('active', state.glutenFreeCrust);
    }
  });
}







function renderPrice() {
  let totalPrice = basePrice;

  const priceItems = document.querySelectorAll('.panel.price ul li');


  totalPrice += Object.keys(state).reduce((acc, ingredient, index) => {
    if (state[ingredient]) {
      priceItems[index].style.display = 'list-item';

      return acc + ingredients[ingredient].price;
    }else{
      priceItems[index].style.display= 'none';
    }
    return acc;
  }, 0);

  // 4. Actualizamos el precio total en el DOM
  document.querySelector('.panel.price strong').textContent = `$${totalPrice}`;
}



renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
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
document.querySelector('.btn.btn-sauce').addEventListener('click',() => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything()
});
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything()
})
