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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  // const sauceAux = document.querySelector('.sauce');
  
  // This is how it's done without the toggle, and inside this function

  // if (state.whiteSauce) {
  //   sauceAux.classList.add('sauce-white');
  // } else {
  //   sauceAux.classList.remove('sauce-white');
  // }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  // const crustAux = document.querySelector('.crust');
  
  // This is how it's done without the toggle, and inside this function

  // if (state.glutenFreeCrust) {
  //   crustAux.classList.add('crust-gluten-free');
  // } else {
  //   crustAux.classList.remove('crust-gluten-free');
  // }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  //Easier but non scalable way

  // if (state.pepperoni) {
  //   document.querySelector('.btn-pepperoni').classList.add('active');
  // } else {
  //   document.querySelector('.btn-pepperoni').classList.remove('active');
  // }
  // if (state.mushrooms) {
  //   document.querySelector('.btn-mushrooms').classList.add('active');
  // } else {
  //   document.querySelector('.btn-mushrooms').classList.remove('active');
  // }
  // if (state.greenPeppers) {
  //   document.querySelector('.btn-green-peppers').classList.add('active');
  // } else {
  //   document.querySelector('.btn-green-peppers').classList.remove('active');
  // }
  // if (state.whiteSauce) {
  //   document.querySelector('.btn-sauce').classList.add('active');
  // } else {
  //   document.querySelector('.btn-sauce').classList.remove('active');
  // }
  // if (state.glutenFreeCrust) {
  //   document.querySelector('.btn-crust').classList.add('active');
  // } else {
  //   document.querySelector('.btn-crust').classList.remove('active');
  // }

  // More difficult but scalable

  ///Create a glossary to translate .js to .html
  const ingredientClasses = {
    pepperoni: "pepperoni",
    mushrooms: "mushrooms",
    greenPeppers: "green-peppers",
    whiteSauce: "sauce",
    glutenFreeCrust: "crust"
  };

  ///For loop in state, with that access glossary and if state = true add, else remove
  for (let ingr in state) {
    const elem = ingredientClasses[ingr];
    if (state[ingr]) {
      document.querySelector(`.btn-${elem}`).classList.add('active');
    } else {
      document.querySelector(`.btn-${elem}`).classList.remove('active');
    }
  }

}

function renderPrice() {
  // // Iteration 4: change the HTML of `<aside class="panel price">` 

  //Erase everything from <ul> in .html

  document.querySelector('.price ul').innerHTML = '';
  
  //Create new variables to be changing everytime
  let newText = '';
  let sum = basePrice;

  //For loop state of ingredients, and if key = true, add the text and the price 
  for (let ingr in state) {
    if (state[ingr]) {
      const elem = ingredients[ingr]
      newText += `<li>$${elem.price} ${elem.name}</li>`
      sum += elem.price;
    }
  }

  //Update price and the <ul> tag with new variables
  document.querySelector('strong').innerText = `$${sum}`
  document.querySelector('.price ul').innerHTML = newText;


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
  //Because whenever I click the renderEverything command executes
  //I have to put the toggle here so it doesn't toggle everytime I click sth else
  const sauceAux = document.querySelector('.sauce');
  sauceAux.classList.toggle('sauce-white');
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
  //Because whenever I click the renderEverything command executes
  //I have to put the toggle here so it doesn't toggle everytime I click sth else
  const crustAux = document.querySelector('.crust');
  crustAux.classList.toggle('crust-gluten-free');
});
