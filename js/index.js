// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 },
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
  document.querySelectorAll('.sauce').forEach(whiteSauceElement => {
    if(state.whiteSauce) {
      whiteSauceElement.classList.add('sauce-white');
    } else {
      whiteSauceElement.classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  //Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(freeCrustElement => {
    if (state.glutenFreeCrust) {
      freeCrustElement.classList.add('crust-gluten-free');
    } else {
      freeCrustElement.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  //Iteration 3: add/remove the class "active" of each <button class="btn">
  let buttons = document.querySelectorAll(".btn").forEach((element) => {
    element.onclick = () => {
      if (element.classList.contains("active")) {
        element.classList.remove("active");
      } else {
        element.classList.add("active");
      }
    };
  });
}

//   const pepperoniButton = document.querySelector('.btn-pepperoni');
//   const mushroomButton = document.querySelector('.btn-mushrooms');
//   const greenPepperButton = document.querySelector('.btn-green-peppers');
//   const sauceButton = document.querySelector('.btn-sauce');
//   const crustButton = document.querySelector('.btn-crust');

//   if (state.pepperoni) {
//     pepperoniButton.setAttribute('class', 'btn btn-pepperoni active');
//   } else {
//     pepperoniButton.setAttribute('class', 'btn btn-pepperoni');
//   }
//   if (state.mushrooms) {
//     mushroomButton.setAttribute('class', 'btn btn-mushrooms active');
//   } else {
//     mushroomButton.setAttribute('class', 'btn btn-mushrooms');
//   }
//   if (state.greenPeppers) {
//     greenPepperButton.setAttribute('class', 'btn btn-green-peppers active');
//   } else {
//     greenPepperButton.setAttribute('class', 'btn btn-green-peppers');
//   }
//   if (!state.sauceButton) {
//     sauceButton.setAttribute('class', 'btn btn-sauce active');
//   } else {
//     sauceButton.setAttribute('class', 'btn btn-sauce');
//   }
//   if (!state.crustButton) {
//     crustButton.setAttribute('class', 'btn btn-crust active');
//   } else {
//     crustButton.setAttribute('class', 'btn btn-crust');
//   }
// }

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
//  <!-- Price -->
//  <aside class="panel price">
//  <h2>Your pizza's price</h2>

//  <b>$10 cheese pizza</b>
//  <ul>
//    <li>$1 pepperoni</li>
//    <li>$1 mushrooms</li>
//    <li>$1 green peppers</li>
//    <li>$3 white sauce</li>
//    <li>$5 gluten-free crust</li>
//  </ul>
//  <strong>$21</strong>
// </aside>
// <!-- End Price -->

let li = document.querySelectorAll(".price ul li")[0];
  let pepPrice = 0;
  if (state.pepperoni) {
    li.style.visibility = "visible";
    pepPrice = Number(li.innerHTML[1]); 
  } else {
    li.style.visibility = "hidden";
  }

  li = document.querySelectorAll(".price ul li")[1];
  let mushroomPrice = 0;
  if (state.mushrooms) {
    li.style.visibility = "visible";
    mushroomPrice = Number(li.innerHTML[1]);
  } else {
    li.style.visibility = "hidden";
  }

  li = document.querySelectorAll(".price ul li")[2];
  let greenPepPrice = 0;

  if (state.greenPeppers) {
    li.style.visibility = "visible";
    greenPepPrice = Number(li.innerHTML[1]);
  } else {
    li.style.visibility = "hidden";
  }

  li = document.querySelectorAll(".price ul li")[3];
  let whiteSaucePrice = 0;
  if (state.whiteSauce) {
    li.style.visibility = "visible";
    whiteSaucePrice = Number(li.innerHTML[1]);
  } else {
    li.style.visibility = "hidden";
  }

  li = document.querySelectorAll(".price ul li")[4];
  let crustPrice = 0;
  if (state.glutenFreeCrust) {
    li.style.visibility = "visible";
    crustPrice = Number(li.innerHTML[1]);
  } else {
    li.style.visibility = "hidden";
  }
  let price = document.querySelector("strong");
  let totalPrice = 10 + pepPrice + mushroomPrice + greenPepPrice + whiteSaucePrice + crustPrice;
  price.innerHTML = `$ ${totalPrice}`;
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