// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};
document
  .querySelector("body > aside")
  .removeChild(document.querySelector("body > aside > ul"));
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
  document.querySelectorAll(".pep").forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
      document.querySelector(".btn-pepperoni").classList.remove("active");
    } else {
      onePep.style.visibility = "hidden";
      document.querySelector(".btn-pepperoni").classList.add("active");
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach(oneMushrooms => {
    if (state.mushrooms) {
      oneMushrooms.style.visibility = "visible";
      document.querySelector(".btn-mushrooms").classList.remove("active");
    } else {
      oneMushrooms.style.visibility = "hidden";
      document.querySelector(".btn-mushrooms").classList.add("active");
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(oneGrepep => {
    if (state.greenPeppers) {
      oneGrepep.style.visibility = "visible";
      document.querySelector(".btn-green-peppers").classList.remove("active");
    } else {
      oneGrepep.style.visibility = "hidden";
      document.querySelector(".btn-green-peppers").classList.add("active");
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll(".sauce").forEach(oneSau => {
    if (state.whiteSauce) {
      oneSau.classList.add("sauce-white");
      document.querySelector(".btn-sauce").classList.remove("active");
      // const sauprice = document.createElement("li");
      // sauprice.innerHTML = "$3 white sauce";
      // const parent = document.querySelector("body > aside > ul");
      // parent.appendChild(sautprice);
    } else {
      oneSau.classList.remove("sauce-white");
      document.querySelector(".btn-sauce").classList.add("active");
      // document
      //   .querySelector("body > aside > ul")
      //   .removeChild(
      //     document.querySelector("body > aside > ul > li:nth-child(4)")
      //   );
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll(".crust").forEach(oneGlu => {
    if (state.glutenFreeCrust) {
      oneGlu.classList.remove("crust-gluten-free");
      document.querySelector(".btn-crust").classList.remove("active");

      // const crutprice = document.createElement("li");
      // crutprice.innerHTML = "$5 gluten-free crust";
      // const parent = document.querySelector("body > aside > ul");
      // parent.appendChild(crutprice);
    } else {
      oneGlu.classList.add("crust-gluten-free");
      document.querySelector(".btn-crust").classList.add("active");
      // document
      //   .querySelector("body > aside > ul")
      //   .removeChild(
      //     document.querySelector("body > aside > ul > li:nth-child(5)")
      //   );
    }
  });
}

function renderButtons() {
  //   var obj = { first: 'someVal' };
  // obj[Object.keys(obj)[0]];
}

function renderPrice() {
  // document.querySelector("body > aside > ul > li:nth-child(3)").innerHTML =
  //   "markus is tired";
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // removeChild, appendChild, createElement("li")
}

renderEverything();

document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", () => {
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
