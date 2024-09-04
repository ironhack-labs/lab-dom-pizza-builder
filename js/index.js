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
  document.querySelectorAll(".mushroom").forEach((section) => {
    state.mushrooms ? section.style.visibility = 'visible' : section.style.visibility = 'hidden';
  });

}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((section) => {
    state.greenPeppers ? section.style.visibility = 'visible' : section.style.visibility = 'hidden';
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  console.log(document.querySelector(".sauce").classList);
  document.querySelector("section.sauce").classList.toggle("sauce-white");
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelector(".crust").classList.toggle("crust-gluten-free");
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll("button.btn").forEach((button)=>{
    if(button.classList[1] === "btn-pepperoni") {
      if(state.pepperoni) button.classList.add("active");
      else button.classList.remove("active");
    }
    else if(button.classList[1] === "btn-mushrooms") {
      if(state.mushrooms) button.classList.add("active");
      else button.classList.remove("active");
    }
    else if(button.classList[1] === "btn-green-peppers") {
      if(state.greenPeppers) button.classList.add("active");
      else button.classList.remove("active");
    }
    else if(button.classList[1] === "btn-sauce") {
      if(state.whiteSauce) button.classList.add("active");
      else button.classList.remove("active");
    }
    else if(button.classList[1] === "btn-crust") {
      if(state.glutenFreeCrust) button.classList.add("active");
      else button.classList.remove("active");
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let asideNode = document.querySelector("aside");
  console.log(asideNode);
  let itemsNodeList = asideNode.querySelectorAll("ul li");

  let price = 10;
  itemsNodeList.forEach((item, index) => {
    let key = Object.keys(ingredients)[index];
    if(!state[key]) item.style.visibility = 'hidden';
    else {
      price += ingredients[key].price;
      item.style.visibility = 'visible';
    }
  });

  asideNode.querySelector("strong").innerText = "$" + price ;

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").addEventListener("click", () => {
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
