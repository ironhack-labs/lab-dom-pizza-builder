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
  document.querySelectorAll(".mushroom").forEach(function($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function($greenPeppers) {
    if (state.greenPeppers) {
      $greenPeppers.style.visibility = "visible";
    } else {
      $greenPeppers.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll(".sauce").forEach(function($sauce) {
    if (state.whiteSauce) {
      $sauce.classList.add("sauce-white");
    } else {
      $sauce.classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll(".crust").forEach(function($gfc) {
    if (state.glutenFreeCrust) {
      $gfc.classList.add("crust-gluten-free");
      // $gfc.style.visibility = "visible";
    } else {
      $gfc.classList.remove("crust-gluten-free");
      // $gfc.style.visibility = "hidden";
    }
  });
}

function renderButtons() {
  document.querySelectorAll(".btn-pepperonni").forEach(function($btn) {
    if (state.pepperonni) {
      $btn.classList.add("active");
    } else {
      $btn.classList.remove("active");
    }
  });
  document.querySelectorAll(".btn-mushrooms").forEach(function($btn) {
    if (state.mushrooms === true) {
      $btn.classList.add("active");
    } else {
      $btn.classList.remove("active");
    }
  });
  document.querySelectorAll(".btn-green-peppers").forEach(function($btn) {
    if (state.greenPeppers) {
      $btn.classList.add("active");
    } else {
      $btn.classList.remove("active");
    }
  });
  document.querySelectorAll(".btn-sauce").forEach(function($btn) {
    if (state.whiteSauce) {
      $btn.classList.add("active");
    } else {
      $btn.classList.remove("active");
    }
  });
  document.querySelectorAll(".btn-crust").forEach(function($btn) {
    if (state.glutenFreeCrust) {
      $btn.classList.add("active");
    } else {
      $btn.classList.remove("active");
    }
  });
}

function renderPrice() {
  let sum = 10;
  document.querySelectorAll(".btn-pepperonni").forEach(function(price) {
    if (state.pepperonni) {
      sum += 1;
    }
  });
  document.querySelectorAll(".btn-mushrooms").forEach(function(price) {
    if (state.mushrooms) {
      sum += 1;
    }
    // document.querySelectorAll(".price li")[1].style.display = "none";
  });
  document.querySelectorAll(".btn-green-peppers").forEach(function(price) {
    if (state.greenPeppers) {
      sum += 1;
    }
  });
  document.querySelectorAll(".btn-sauce").forEach(function(price) {
    if (state.whiteSauce) {
      sum += 3;
    }
  });
  document.querySelectorAll(".btn-crust").forEach(function(price) {
    if (state.glutenFreeCrust) {
      sum += 5;
    }
  });
  console.log(sum);

  // Iteration 4: change the HTML of `<aside class="panel price">`
  document.querySelector(".panel strong").innerHTML = "$" + sum;
  // priceText = "400";

  const priceItems = document.querySelectorAll(".price li");
  console.log(priceItems[0]);
  Object.keys(state).map(function(key, index) {
    if (state[key]) {
      priceItems[index].style.display = "block";
      // console.log(document.querySelectorAll(".price li").hidden);
      return priceItems[index];
    }
    // console.log(state[key]);
    // console.log(document.querySelectorAll(".price li").hidden);
    priceItems[index].style.display = "none";
    return priceItems[index];
  });
  return priceItems;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`

document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
