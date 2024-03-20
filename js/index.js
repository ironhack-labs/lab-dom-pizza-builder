// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
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
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((oneMashroom) => {
    if (state.mushrooms)
      oneMashroom.style.visibility = `visible`;
    else
      oneMashroom.style.visibility = `hidden`;
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(oneGreenPepper => {
    if (state.greenPeppers)
      oneGreenPepper.style.visibility = "visible";
    else
      oneGreenPepper.style.visibility = "hidden";
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelector(".sauce").setAttribute("class", state.whiteSauce ? "sauce sauce-white" : "sauce");

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelector(".crust").setAttribute("class", state.glutenFreeCrust ? "crust crust-gluten-free" : "crust");
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll(".btn").forEach(oneBtn => {
    if (oneBtn.getAttribute("class").includes("pepperoni"))
      state.pepperoni ? oneBtn.setAttribute("class", "btn btn-pepperoni active") : oneBtn.setAttribute("class", "btn btn-pepperoni");
    if (oneBtn.getAttribute("class").includes("mushrooms"))
      state.mushrooms ? oneBtn.setAttribute("class", "btn btn-mushrooms active") : oneBtn.setAttribute("class", "btn btn-mushrooms");
    if (oneBtn.getAttribute("class").includes("peppers"))
      state.greenPeppers ? oneBtn.setAttribute("class", "btn btn-green-peppers active") : oneBtn.setAttribute("class", "btn btn-green-peppers");
    if (oneBtn.getAttribute("class").includes("sauce"))
      state.whiteSauce ? oneBtn.setAttribute("class", "btn btn-sauce active") : oneBtn.setAttribute("class", "btn btn-sauce");
    if (oneBtn.getAttribute("class").includes("crust"))
      state.glutenFreeCrust ? oneBtn.setAttribute("class", "btn btn-crust active") : oneBtn.setAttribute("class", "btn btn-crust");
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;
  const toppingList = document.querySelector(".panel.price").querySelector("ul");
  toppingList.innerHTML = "";
  for (const topping in state) {
    if (state[topping]) {
      if (!document.getElementById(topping)) {
        const addTopping = document.createElement("li");
        addTopping.innerText = `$${ingredients[topping].price} ${ingredients[topping].name}`;
        addTopping.setAttribute("id", topping);
        toppingList.appendChild(addTopping);
      }
      totalPrice += ingredients[topping].price;
    }
    else if (!state[topping] && document.getElementById(topping)) {
      toppingList.removeChild(document.getElementById(topping));
    }
  }
  document.querySelector("strong").innerHTML = `$${totalPrice}`;
}


renderEverything();

// Iteration 1: Example of a click event listener on `< button class="btn btn-pepperoni" > `
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `< button class="btn btn-mushrooms" > `
document.querySelector(".btn.btn-mushrooms").addEventListener("click", function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})
// Iteration 1: Add click event listener on `< button class="btn btn-green-peppers" > `
document.querySelector(".btn.btn-green-peppers").addEventListener("click", function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})
// Iteration 2: Add click event listener on `< button class="btn btn-sauce" > `
document.querySelector(".btn.btn-sauce").addEventListener("click", function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})
// Iteration 2: Add click event listener on `< button class="btn btn-crust" > `
document.querySelector(".btn.btn-crust").addEventListener("click", function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})