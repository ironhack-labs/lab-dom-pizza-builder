// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach($mush => {
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    } else {
      $mush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach($gpep => {
    if (state.greenPeppers) {
      $gpep.style.visibility = "visible";
    } else {
      $gpep.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauce.classList.add("sauce-white");
  } else {
    sauce.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free");
  } else {
    crust.classList.remove("crust-gluten-free");
  }
}

/* 
----------------- unclear why these don't do the job ----------------------
function renderButtons(e) {
  if (e == undefined) {
    return undefined;
  }
  console.log("executed");
  if (e.classList.contains("active")) {
    e.classList.remove("active");
  } else {
    e.classList.add("active");
  }
} 

let buttons = document.querySelectorAll(".btn");
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  console.log("hello");
  console.log(`${buttons[i]}`);
  buttons[i].onclick = function(e) {
    console.log("change of element active");
    if (e.classList.contains("active")) {
      e.classList.remove("active");
    } else {
      e.classList.add("active");
    }
  };
} 

*/
let buttons = document.querySelectorAll(".btn");
function renderButtons() {
  let index = 0;
  for (var property in state) {
    if (state[property]) {
      buttons[index].classList.add("active");
    } else {
      buttons[index].classList.remove("active");
    }
    index++;
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  /* Display the list of all items selected
  Display the total price */
  let priceList = document.querySelector(".panel.price ul");
  let priceListPrices = priceList.querySelectorAll("li");
  let finalPrice = document.querySelector("strong");
  basePrice = 10;
  finalPrice.innerHTML = `$ ${basePrice}`;

  if (state.pepperonni) {
    priceListPrices[0].style.visibility = "visible";
    basePrice += ingredients.pepperonni.price;
  } else {
    priceListPrices[0].style.visibility = "hidden";
  }
  if (state.mushrooms) {
    priceListPrices[1].style.visibility = "visible";
    basePrice += ingredients.mushrooms.price;
  } else {
    priceListPrices[1].style.visibility = "hidden";
  }
  if (state.greenPeppers) {
    priceListPrices[2].style.visibility = "visible";
    basePrice += ingredients.greenPeppers.price;
  } else {
    priceListPrices[2].style.visibility = "hidden";
  }
  if (state.whiteSauce) {
    priceListPrices[3].style.visibility = "visible";
    basePrice += ingredients.whiteSauce.price;
  } else {
    priceListPrices[3].style.visibility = "hidden";
  }
  if (state.glutenFreeCrust) {
    priceListPrices[4].style.visibility = "visible";
    basePrice += ingredients.glutenFreeCrust.price;
  } else {
    priceListPrices[4].style.visibility = "hidden";
  }

  finalPrice.innerHTML = `$ ${basePrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = e => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
