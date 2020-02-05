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
  document.querySelectorAll(".mushroom").forEach(function($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function($greenPepper) {
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    } else {
      $greenPepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(function($sauce) {
    if (state.whiteSauce) {
      $sauce.style.visibility = "visible";
    } else {
      $sauce.style.visibility = "hidden";
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document
    .querySelectorAll(".crust-gluten-free")
    .forEach(function($crustGlutenFree) {
      if (state.glutenFreeCrust) {
        $crustGlutenFree.style.visibility = "visible";
      } else {
        $crustGlutenFree.style.visibility = "hidden";
      }
    });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll(".btn").forEach(button => {
    if (state.pepperonni) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
    if (state.mushrooms) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
    if (state.greenPeppers) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
    if (state.whiteSauce) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
    if (state.glutenFreeCrust) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
 
  let panelUl = document.querySelectorAll("#price--list")[0];
  let total = Number(document.querySelectorAll("#final--price")[0].innerText.split("$")[1]);
  let pepperonniPrice = document.createElement("li");
  let mushroomsPrice = document.createElement("li");
  let greenPeppersPrice = document.createElement("li");
  let whiteSaucePrice = document.createElement("li");
  let glutenFreeCrustPrice = document.createElement("li");
 
  total = basePrice;

  panelUl.innerText = ""; 
  if (state.pepperonni) {
    pepperonniPrice.innerText = `$1 pepperonni`;
    panelUl.appendChild(pepperonniPrice);
    total = total + ingredients.pepperonni.price;
  } else {
    pepperonniPrice.innerText = "";
    total = total;
  }

  if (state.mushrooms) {
    mushroomsPrice.innerText = `$1 mushrooms`;
    panelUl.appendChild(mushroomsPrice);
    total = total + ingredients.mushrooms.price;
  } else {
    mushroomsPrice.innerText = "";
    total = total;
  } 

  if (state.greenPeppers) {
    greenPeppersPrice.innerText= `$1 green peppers`;
    panelUl.appendChild(greenPeppersPrice);
    total = total + ingredients.greenPeppers.price;
  }  else {
    greenPeppersPrice.innerText = "";
    total = total;
  }

  if (state.whiteSauce) {
    whiteSaucePrice.innerText= `$3 white sauce`;
    panelUl.appendChild(whiteSaucePrice);
    total = total + ingredients.whiteSauce.price;
  }  else {
    whiteSaucePrice.innerText = "";
    total = total;
  }
  
  if (state.glutenFreeCrust) {
    glutenFreeCrustPrice.innerText= `$5 gluten-free crust`;
    panelUl.appendChild(glutenFreeCrustPrice);
    total = total + ingredients.glutenFreeCrust.price;
  }  else {
    glutenFreeCrustPrice.innerText = "";
    total=total;
  }

  let totalText = document.querySelectorAll("#final--price")[0]
  totalText.innerText = `$ ${total}`;
  console.log(total);
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};