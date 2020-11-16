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
  glutenFreeCrust: false,
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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll(".sauce").forEach((whiteSauce) => {
    if (state.whiteSauce) {
      document.querySelector(".sauce").classList.add("sauce-white");
    } else {
      document.querySelector(".sauce").classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }
}


function renderButtons() {

  if (state.pepperoni) {
    document.querySelector(".btn.btn-pepperoni").classList.add("active");
  } else {
    document.querySelector(".btn.btn-pepperoni").classList.remove("active");
  }

  if (state.mushrooms) {
    document.querySelector(".btn.btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active");
  }

  if (state.greenPeppers) {
    document.querySelector(".btn.btn-green-peppers").classList.add("active");
  } else {
    document.querySelector(".btn.btn-green-peppers").classList.remove("active");
  }

  if (state.whiteSauce) {
    document.querySelector(".btn.btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn.btn-sauce").classList.remove("active");
  }

  if (state.glutenFreeCrust) {
    document.querySelector(".btn.btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn.btn-crust").classList.remove("active");
  }
}

function renderPrice() {

  // Had a plausible solution with a let price + the same list as the renderButtons order
  // but couldn't get it to work even after 1H30 of trying and comparing with others.
  //   let print = "";
  //   let totalPrice = 10;
  //   if (state.pepperoni) {
  //     print += <li> $${ingredients.pepperoni.price} ${ingredients.pepperoni.name} </li> ;
  //     totalPrice += 1;
  //   }
  //   if (state.mushrooms) {
  //     print += <li> $${ingredients.mushrooms.price} ${ingredients.mushrooms.name} </li> ;
  //     totalPrice += 1;
  //   }
  //   if (state.greenPeppers) {
  //     print += <li> $${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name} </li> ;
  //     totalPrice += 1;
  //   }
  //   if (state.whiteSauce) {
  //     print += <li> $${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name} </li> ;
  //     totalPrice += 3;
  //   }
  //   if (state.glutenFreeCrust) {
  //     print += <li> $${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name} </li> ;
  //     totalPrice += 5;
  //   }
  //   document.querySelector(".panel.price ul").innerHTML = print;
  //   document.querySelector(".panel.price strong").innerText = $ ${totalPrice};
  // }
}

renderEverything();

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

document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
