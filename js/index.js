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
  glutenFreeCrust: fgalse
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
  document.querySelectorAll(".pep").forEach((onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

 // Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((element)) => {
    if (state.mushrooms){
      element.style.visibility = "visible";
    } else {
      element.style. = "hidden";
    }
  });


function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((element) => {
    if(state.greenPeppers){
      element.style.visibility = "visible";
    } else {
      element.style.visibility = "hidden";
    }
  });
  
// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  const sauce = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauce.classList.add("sauce-white");
  } else {
    sauce.classList.remove("sauce-white");
  }
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  const crust = document.querySelector(".crust");
  if (state.crust){
    crust.classList.add("crust-gluten-free");
  } else {
    crust.classList.remove("crust-gluten-free");
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  console.log("allBtn", allBtn);
  const btnPep = allBtn[0];
  const btnMush = allBtn[1];
  const btnGp = allBtn[2];
  const btnSauce = document.querySelector(".btn.btn-sauce");
  const btnCrust = document.querySelector(".btn.btn-crust");
  state.pepperoni ? btnPep.classList.add("active") : btnPep.classList.remove("active");
  state.mushrooms ? btnMush.classList.add("active") : btnMush.classList.remove("active");
  state.greenPeppers ? btnGp.classList.add("active") : btnGp.classList.remove("active");
  state.sauce ? btnSauce.classList.add("active") : btnSauce.classList.remove("active");
  state.crust ? btnCrust.classList.add("active") : btnCrust.classList.remove("active");
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const list = document.querySelectorAll(".panel.price li");
  const pepLi = list[0];
  const mushLi = list[1];
  const gPli = list[2];
  const whiteSauce = list[3];
  const gluenFreeLi = list[4];

  state.pepperoni ? pepLi.syle.display("block") : (pepLi.syle.display("none");
  state.mushrooms ? mushLi.syle.display("block") : (mushLi.syle.display("none");
  state.greenPeppers ? gPli.syle.display("block") : (gPli.syle.display("none");
  state.whiteSauce ? whiteSauceLi.syle.display("block") : (whiteSauceLi.syle.display("none");
  state.glutenFreeCrust
    ? (gluenFreeLi.style.display = "block")
    : (gluenFreeLi.style.display = "none");

  let pepFinPrice = ingredients.pepperoni.price * state.pepperoni;
  let musFinPrice = ingredients.mushrooms.price * state.mushrooms;
  let greFinPrice = ingredients.greenPeppers.price * state.greenPeppers;
  let whiFinPrice = ingredients.whiteSauce.price * state.whiteSauce;
  let gluFinPrice = ingredients.glutenFreeCrust.price * state.glutenFreeCrust;

  let finalPrice = basePrice + pepFinPrice + musFinPrice + greFinPrice + whiFinPrice + gluFinPrice;

  document.querySelector("aside.panel.price strong").innerText = `$ ${finalPrice}`

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").addEventListener("click,", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector(".btn.btn-green-peppers").onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`\

document.querySelector(".btn.btn-sauce").onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").onclick = () => {
  state.whiteSauce = !state.glutenFreeCrust;
  renderEverything();
};