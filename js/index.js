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
  // renderButtons();
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

// Iteration 1.A
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

// Iteration 1.B
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onePepp => {
    if (state.greenPeppers) {
      onePepp.style.visibility = 'visible';
    } else {
      onePepp.style.visibility = 'hidden';
    }
  });
}

// Iteration 2.A
function renderWhiteSauce() {
  document.querySelector('.sauce').classList.toggle('sauce-white');
}

// Iteration 2.B
function renderGlutenFreeCrust() {
  document.querySelector('.crust').classList.toggle('crust-gluten-free');
}

// Iteration 3
// function renderButtons() {
  
//   const btnPep = document.querySelector('.btn-pepperoni');
//   if(state.pepperoni) {
//     btnPep.classList.add('active');
//   } else {
//     btnPep.classList.remove('active');
//   }
  
//   const btnMush = document.querySelector('.btn-mushrooms');
//   if(state.mushroom) {
//     btnMush.classList.add('active');
//   } else {
//     btnPep.classList.remove('active');
//   }

//   const btnPepp = document.querySelector('.btn-green-peppers');
//   if(state.peppers) {
//     btnPepp.classList.add('active');
//   } else {
//     btnPepp.classList.remove('active');
//   }

//   const btnWhiteSauce = document.querySelector('btn-sauce');
//   if(!state.whiteSauce) {
//     btnWhiteSauce.classList.add('active');
//   } else {
//     btnWhiteSauce.classList.remove('active');
//   }

//   const btnGlutenFreeCrust = document.querySelector('btn-crust');
//   if(!state.glutenFreeCrust) {
//     btnGlutenFreeCrust.classList.add('active');
//   } else {
//     btnGlutenFreeCrust.classList.remove('active');
//   }

//   const btns = document.querySelectorAll('.btn');
//   btns.forEach(function(btn) {
//     btn.onclick = renderButtons;
//   })

// }

 /*
function renderButtons() {
 if (state.pepperoni) {
    console.log("if");
    document.querySelector('.btn.btn-pepperoni').classList.remove('active');
  } else { 
    console.log("else");
    document.querySelector('.btn.btn-pepperoni').classList.add('active');
  }

  if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.add('active');

  } if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.add('active');
  }

  if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  } else {
    document.querySelector('.btn.btn-sauce').classList.add('active');
  }

  if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.remove('active');
  } else {
    document.querySelector('.btn.btn-crust').classList.add('active');
  }
} */

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

// liste des prix à faire par rapport au state
// if state.pepperoni // ou for toto in object.name loop
// acceder tout le temps au prix de base
// faire un calcule sur base price + ingrédient coché puis somme des 2 et après l'afficher 
// varible represente ul
//variable pour le total (+=)
// varibale pour le strong
// vider le ul
// loop for in si valeur clickée ou non on ajoute le prix 

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', (event) => {
  state.pepperoni = !state.pepperoni;
  event.target.classList.toggle("active");
  renderPepperoni();
  // renderButtons();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', (event) => {
  state.mushrooms = !state.mushrooms;
  event.target.classList.toggle("active");
  renderMushrooms();
  // renderButtons();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', (event) => {
  state.greenPeppers = !state.greenPeppers;
  event.target.classList.toggle("active");
  renderGreenPeppers();
  // renderButtons();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', (event) => {
  event.target.classList.toggle("active");
if(!state.whiteSauce) {
  renderWhiteSauce();
  // renderButtons();
}
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', (event) => {
  event.target.classList.toggle("active");
  if (!state.glutenFreeCrust) {
    renderGlutenFreeCrust();
    // renderButtons();
  }
  });