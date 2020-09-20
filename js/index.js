// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'mushrooms', price: 1 },
  greenPeppers: { name: 'green peppers', price: 1 },
  whiteSauce: { name: 'white sauce', price: 3 },
  glutenFreeCrust: { name: 'gluten-free crust', price: 5 }
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
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  // document.querySelectorAll('.sauce').forEach(souse => {
  //  if (state.whiteSauce) {
  //    souse.classList.add("sauce-white");
  //  } else {
  //    souse.classList.remove("sauce-white");
  //  }
  // });


  let sause = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sause.classList.add("sauce-white");
  } else {
    sause.classList.remove("sauce-white");
  }


}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  //   document.querySelectorAll('.crust').forEach(theCrust => {
  //     if (state.glutenFreeCrust) {
  //       theCrust.classList.add("crust-gluten-free");
  //     } else {
  //       theCrust.classList.remove("crust-gluten-free");
  //     }
  //   });
  // }

  let theCrust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    theCrust.classList.add("crust-gluten-free");
  } else {
    theCrust.classList.remove("crust-gluten-free");
  }
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.mushrooms) {
    document.querySelector(".btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn-mushrooms").classList.remove("active");
  }

  if (state.pepperoni) {
    document.querySelector(".btn-pepperoni").classList.add("active");
  } else {
    document.querySelector(".btn-pepperoni").classList.remove("active");
  }

  if (state.greenPeppers) {
    document.querySelector(".btn-green-peppers").classList.add("active");
  } else {
    document.querySelector(".btn-green-peppers").classList.remove("active");
  }


  if (!state.whiteSauce) {
    document.querySelector(".btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn-sauce").classList.remove("active");
  }


  if (!state.glutenFreeCrust) {
    document.querySelector(".btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn-crust").classList.remove("active");
  }


}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let pizzaPrice = 10;

  if (state.pepperoni) {
    pizzaPrice += ingredients.pepperoni.price;
  }

  if (state.mushrooms) {
    pizzaPrice += ingredients.mushrooms.price;
  }

  if (state.greenPeppers) {
    pizzaPrice += ingredients.greenPeppers.price;
  }


  if (state.whiteSauce) {
    pizzaPrice += ingredients.whiteSauce.price;
  }


  if (state.glutenFreeCrust) {
    pizzaPrice += ingredients.glutenFreeCrust.price;
  }

  document.querySelector("strong").innerHTML = "$" + pizzaPrice;



  if (!state.pepperoni) {
    document.querySelector(".peperoniClass").remove(); // css, dot before class name
  } else if (!document.querySelector(".peperoniClass")) {
    const newLi = document.createElement("li");
    newLi.classList.add("peperoniClass"); // we are creating new html element, class without dot
    newLi.innerText = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`;
    document.querySelector(".panel.price ul").appendChild(newLi); // css, dot before class name
  }

  if (!state.mushrooms) {
    document.querySelector(".mushroomsClass").remove();
  } else if (!document.querySelector(".mushroomsClass")) {
    const newLi = document.createElement("li"); // scopes! this block of code doesn't see the code in the block above, zou can use sama variable name
    newLi.classList.add("mushroomsClass");
    newLi.innerText = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`;
    document.querySelector(".panel.price ul").appendChild(newLi);
  }

  if (!state.greenPeppers) {
    document.querySelector(".greenPepClass").remove();
  } else if (!document.querySelector(".greenPepClass")) {
    const newLi = document.createElement("li");
    newLi.classList.add("greenPepClass");
    newLi.innerText = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`;
    document.querySelector(".panel.price ul").appendChild(newLi);
  }

  if (!state.whiteSauce) {
    document.querySelector(".whiteSauceClass").remove();
  } else if (!document.querySelector(".whiteSauceClass")) {
    const newLi = document.createElement("li");
    newLi.classList.add("whiteSauceClass");
    newLi.innerText = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`;
    document.querySelector(".panel.price ul").appendChild(newLi);
  }

  if (!state.glutenFreeCrust) {
    document.querySelector(".glutenClass").remove();
  } else if (!document.querySelector(".glutenClass")) {
    const newLi = document.createElement("li"); // crate a new element
    newLi.classList.add("glutenClass"); // give this element an html class
    newLi.innerText = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`; // ad content to the element
    document.querySelector(".panel.price ul").appendChild(newLi); // add the element to the DOM 

  }

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
