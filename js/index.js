// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
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
  glutenFreeCrust: true,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons(event);
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
  var sauce = document.querySelector('.sauce, .sauce-white');
    if (state.whiteSauce) {
      sauce.className = 'sauce sauce-white';
    } else {
      sauce.className = 'sauce';
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  var crust = document.querySelector('.crust, .crust-gluten-free');
  if (state.glutenFreeCrust) {
    crust.className = 'crust crust-gluten-free';
  } else {
    crust.className = 'crust';
  }
//  ---------------- otra forma----------  
//    var crust = document.querySelector('.crust');
//   if (!state.glutenFreeCrust) {
//     crust.classList.remove('crust-gluten-free');
//   } else {
//     crust.classList.add('crust-gluten-free');
// }
}

function renderButtons(event) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (event) {
    const target= event.currentTarget;
    if(target.classList.contains('active')) {
      target.classList.remove('active');
    } else {
      target.classList.add('active')
    }
  }
}

function renderPrice() {
  // no se que pasa, algo esta roto aca abajo y si descomento la funcion renderButtons no funciona
  
  
//   let listaItem = document.querySelector('.panel.price ul')
//   let bigPrice = document.querySelector('.panel. price strong');
//   let totalPizza = basePrice;
//   listaItem.textContent = "";
//   for (let item in ingredients) {
//      if (state[item]) {
//        let newItem = document.createElemen('li');
//        newItem.textContent = `$ ${ingredients[item].price} ${ingradients[item].name}`;
//        listaItem.appendChild(newItem);
//        totalPizza += ingredients[item].price; 
//     }  
//   }
//   bigPrice.textContent = totalPizza;

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
