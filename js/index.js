// Write your Pizza Builder JavaScript in this file.
//codigo escalable; Escribir código escalable significa que si se le presentan nuevos
//requisitos, en cuánto cambio, puede adaptarse a ese requisito. Cuanto menores son las
//líneas requeridas, más escalable es el código
// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: "pepperoni",
    price: 1,
  },
  mushrooms: {
    name: "Mushrooms",
    price: 1,
  },
  greenPeppers: {
    name: "Green Peppers",
    price: 1,
  },
  whiteSauce: {
    name: "White sauce",
    price: 3,
  },
  glutenFreeCrust: {
    name: "Gluten-free crust",
    price: 5,
  },
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
function renderEverything(event) {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons(event);
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
  document
    .querySelectorAll(".green-pepper")
    .forEach(function (onePepper) {
      onePepper.style.visibility = state.greenPeppers
        ? "visible"
        : "hidden";
    });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  let sauce = document.querySelector(".sauce");
  /*  console.log(document.querySelector(".sauce"));
  console.log(document.querySelectorAll(".sauce.sauce-white")); */

  if (state.whiteSauce) {
    sauce.classList.add("sauce-white");
  } else {
    sauce.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  //Para empezar con el button pulsado, la única solución que he encontrado es borrar la clase active de los dos buttons

  let glutenFree = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    glutenFree.classList.add("crust-gluten-free");
  } else {
    glutenFree.classList.remove("crust-gluten-free");
  }
}

function renderButtons(event) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //Para empezar con el button pulsado, la única solución que he encontrado es borrar la clase active de los dos buttons
  if (event) {
    const target = event.currentTarget;

    if (target.classList.contains("active")) {
      target.classList.remove("active");
    } else {
      target.classList.add("active");
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let names = [];

  //For in:
  /* var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Salida:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3" */
  for (el in state) {
    names.push(el);
  }
  let sumTotal = 0;
  document.querySelectorAll(".panel.price li").forEach((li, i) => {
    if (state[names[i]]) {
      sumTotal += ingredients[names[i]].price;
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
  /* const totalHtml = document.querySelector("aside.panel ul + strong"); */

  const totalHtml = document.querySelector(".panel.price strong");
  console.log(totalHtml);

  totalHtml.innerHTML = `$ ${sumTotal + basePrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector(".btn.btn-pepperoni")
  .addEventListener("click", () => {
    state.pepperoni = !state.pepperoni;
    renderEverything(event);
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector(".btn.btn-mushrooms")
  .addEventListener("click", () => {
    state.mushrooms = !state.mushrooms;
    renderEverything(event);
  });
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything(event);
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document
  .querySelector(".btn.btn-sauce")
  .addEventListener("click", () => {
    state.whiteSauce = !state.whiteSauce;
    renderEverything(event);
  });
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document
  .querySelector(".btn.btn-crust")
  .addEventListener("click", () => {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything(event);
  });
