// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
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
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = "visible";
    } else {
      onePepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const clickedWhiteSauce = document.querySelector(".sauce");
  if (state.whiteSauce) {
    clickedWhiteSauce.classList.add("sauce-white");
  } else {
    clickedWhiteSauce.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const clickedCrust = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    clickedCrust.classList.add("crust-gluten-free");
  } else {
    clickedCrust.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // const buttons = document.querySelectorAll(".btn");
  // const button = document.querySelector(".btn");

  buttons = document.querySelectorAll('.btn');
  function handleClick(evt) {
    const button = evt.target;
    button.classList.toggle("active")
  }
  buttons.forEach((button) => {
    button.onclick = handleClick;
  })

  // for (let i in state) {
  //   buttons.forEach((button) => {
  //     console.log("Button > " + button);
  //     console.log("Buttons > " + buttons);
  //     console.log(typeof i);
  //     if (state[i]) {
  //       button.classList.add("active");
  //     } else {
  //       button.classList.remove("active");
  //     }
  //   });
  // }

  // Buttons.forEach((button) => {
  //   for (let i in state) {
  //     console.log(state[i])
  //     if (state[i]) {
  //       button.classList.add("active");
  //     } else {
  //       button.classList.remove("active");
  //     }
  //   }
  // });
}

// state.forEach((states) => {
//   if (states === true){
//     button.classList.remove("active");
//   } else {
//     button.classList.add("active");
//   }
// })

// if (state.button) {
//   button.classList.remove("active");
// } else {
//   button.classList.add("active");
// }

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let topping = "";
  let price = 10;

  for (let i in state) {
    if (state[i]) {
      topping += `<li>$ ${ingredients[i].price} ${ingredients[i].name} </li>`;
      price += ingredients[i].price;
    }
  }
  document.querySelector(".panel.price ul").innerHTML = topping;
  document.querySelector(".panel.price strong").innerText = `$${price}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
