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
  document.querySelectorAll(".mushroom").forEach(function(m) {
    if (state.mushrooms) {
      m.style.visibility = "visible";
    } else {
      m.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function(green) {
    if (state.greenPeppers) {
      green.style.visibility = "visible";
    } else {
      green.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  const whiteSauce = document.querySelector(".sauce");
  // whiteSauce.classList.toggle(".sauce-white");
  if (state.whiteSauce) {
    whiteSauce.classList.add("sauce-white");
  } else {
    whiteSauce.classList.remove("sauce-white");
  }

  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  const glutenFree = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    glutenFree.classList.add("crust-gluten-free");
  } else {
    glutenFree.classList.remove("crust-gluten-free");
  }
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // const pepIf = document.querySelector("button.btn-pepperonni");
  /*   const mushIf = document.querySelector("button.btn-mushrooms");
  const greenIf = document.querySelector("button.btn-green-peppers");
  const whiteIf = document.querySelector("button.btn-sauce");
  const crustIf = document.querySelector("button.btn-crust"); */
  if (state.pepperonni) {
    document.querySelector("button.btn-pepperonni").classList.add("active");
  } else {
    document.querySelector("button.btn-pepperonni").classList.remove("active");
  }
  if (state.mushrooms) {
    document.querySelector("button.btn-mushrooms").classList.add("active");
  } else {
    document.querySelector("button.btn-mushrooms").classList.remove("active");
  }
  if (state.greenPeppers) {
    document.querySelector("button.btn-green-peppers").classList.add("active");
  } else {
    document
      .querySelector("button.btn-green-peppers")
      .classList.remove("active");
  }
  if (state.whiteSauce) {
    document.querySelector("button.btn-sauce").classList.add("active");
  } else {
    document.querySelector("button.btn-sauce").classList.remove("active");
  }
  if (state.glutenFreeCrust) {
    document.querySelector("button.btn-crust").classList.add("active");
  } else {
    document.querySelector("button.btn-crust").classList.remove("active");
  }
  /*  const buttonActivation = document.querySelector(".active");

  buttonActivation.classList.toggle("active");

  /*   document.querySelector(".btn.btn-crust").onclick = function() {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
  }; */
}

/* 
basePrice = 10

var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};




<b>$10 cheese pizza</b>
      <ul>
        <li>$1 pepperonni</li>
        <li>$1 mushrooms</li>
        <li>$1 green peppers</li>
        <li>$3 white sauce</li>
        <li>$5 gluten-free crust</li>
      </ul>
      <strong>$21</strong>

*/

// function renderPrice() {}

/* function renderList() {
  const parent = document.querySelectorAll(".price ul li");
  let string = "";
  for (const element in state) {
    if (state[element]) {
      string += [element].name;
    }
    document.querySelectorAll("price ul li").innerText = `$${string}`;
  }
} */

function renderPrice() {
  document.querySelector(".price ul").innerHTML = "";
  let newText = "";
  let sum = 10;
  for (const element in state) {
    if (state[element]) {
      sum += ingredients[element].price;
      newText += `<li>$${ingredients[element].price} ${
        ingredients[element].name
      }  </li>`;
    }
  }
  document.querySelector("strong").innerText = `$${sum}`;
  document.querySelector(".price ul").innerHTML = newText;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms;
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

/* function toggle(event) {
  const targetElement = event.currentTarget;
  targetElement.classList.toggle(`${event}`);
}
 */

/* 
 document.querySelector('.btn.active').onclick = function() {

 } *
 document.querySelector(".btn.active").onclick = function(element) {
    element.classList() = !state.glutenFreeCrust;
    renderEverything();
  }; */
