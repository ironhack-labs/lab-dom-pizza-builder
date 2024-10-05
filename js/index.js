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
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach(pepper => {
      if (state.greenPeppers) {
        pepper.style.visibility = 'visible';
      } else {
        pepper.style.visibility = 'hidden';
      }
    });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceElement = document.querySelector('.sauce');

  if (state.whiteSauce) {
    sauceElement.classList.add('sauce-white');  // Añade la clase si whiteSauce es true
  } else {
    sauceElement.classList.remove('sauce-white');  // Remueve la clase si whiteSauce es false
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustElement = document.querySelector('.crust');

  if (state.glutenFreeCrust) {
    crustElement.classList.add('crust-gluten-free');  // Añade la clase si glutenFreeCrust es true
  } else {
    crustElement.classList.remove('crust-gluten-free');  // Remueve la clase si glutenFreeCrust es false
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btnPepperoni = document.querySelector('.btn-pepperoni');
  const btnMushrooms = document.querySelector('.btn-mushrooms');
  const btnGreenPeppers = document.querySelector('.btn-green-peppers');
  const btnWhiteSauce = document.querySelector('.btn-sauce');
  const btnGlutenFreeCrust = document.querySelector('.btn-crust');

  // Actualizar la clase active para cada botón según el estado

  // Botón de pepperoni
  if (state.pepperoni) {
    btnPepperoni.classList.add('active');
  } else {
    btnPepperoni.classList.remove('active');
  }

  // Botón de mushrooms
  if (state.mushrooms) {
    btnMushrooms.classList.add('active');
  } else {
    btnMushrooms.classList.remove('active');
  }

  // Botón de green peppers
  if (state.greenPeppers) {
    btnGreenPeppers.classList.add('active');
  } else {
    btnGreenPeppers.classList.remove('active');
  }

  // Botón de salsa blanca
  if (state.whiteSauce) {
    btnWhiteSauce.classList.add('active');
  } else {
    btnWhiteSauce.classList.remove('active');
  }

  // Botón de base sin gluten
  if (state.glutenFreeCrust) {
    btnGlutenFreeCrust.classList.add('active');
  } else {
    btnGlutenFreeCrust.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = 10;  // Precio base de la pizza sin ingredientes (asumamos que es $10)
  const priceList = document.querySelector('.panel.price ul');  // Lista de ingredientes
  const totalPriceElement = document.querySelector('.panel.price strong');  // Elemento donde se muestra el precio total

  // Limpiamos la lista de ingredientes
  priceList.innerHTML = '';

  // Iteramos sobre cada ingrediente en el objeto ingredients
  for (let ingredientKey in ingredients) {
    if (state[ingredientKey]) {
      // Si el ingrediente está activado, lo añadimos a la lista y sumamos su precio
      priceList.innerHTML += `<li>$${ingredients[ingredientKey].price} ${ingredients[ingredientKey].name}</li>`;
      totalPrice += ingredients[ingredientKey].price;
    }
  }

  // Actualizamos el precio total
  totalPriceElement.textContent = `$${totalPrice}`;
}
renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
// Botón de mushrooms
document.querySelector('.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms; // Cambia el estado de mushrooms
  renderEverything();                 // Renderiza de nuevo
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
// Botón de green peppers
document.querySelector('.btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers; // Cambia el estado de green peppers
  renderEverything();                       // Renderiza de nuevo
};


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
// Botón de salsa blanca
document.querySelector('.btn-sauce').onclick = () => {
  state.whiteSauce = !state.whiteSauce;  // Cambia el estado de la salsa blanca
  renderEverything();                    // Renderiza de nuevo la pizza
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
// Botón de base sin gluten
document.querySelector('.btn-crust').onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;  // Cambia el estado de la base sin gluten
  renderEverything();                              // Renderiza de nuevo la pizza
};
