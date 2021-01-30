// Completed with Gizem :)

// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
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
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(grnPep => {
    if (state.greenPeppers) {
      grnPep.style.visibility = "visible";
    } else {
      grnPep.style.visibility = "hidden";
    }
  });
};

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if(state.whiteSauce){
    let sauceysauce = document.querySelector(".sauce");
    sauceysauce.classList.remove("sauce-white");
  } else {
    let sauceysauce = document.querySelector(".sauce");
    sauceysauce.classList.add("sauce-white");
  };
};

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if(state.glutenFreeCrust){
    let glutfree = document.querySelector(".crust");
    glutfree.classList.remove("crust-gluten-free");
  } else {
    let glutfree = document.querySelector(".crust");
    glutfree.classList.add("crust-gluten-free");
  };
};

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(event){
    const thisButton = event.target;
      const isActive = thisButton.classList.contains('active')
      if (isActive == true){
        thisButton.classList.remove('active');
       } else {
        thisButton.classList.add('active');
       };
      }
      
  // const activeButton = document.querySelectorAll(".btn");
  // activeButton.forEach(button => {
  //   button.addEventListener("click", () => {
  //     button.classList.toggle("active");
  //   })
  // })

  // let buttons = document.querySelectorAll('.btn');
  // buttons.classList.toggle('active');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  document.querySelector(".panel.price").innerHTML = "<aside></aside>"

  // select the aside
  // in aside, create UL
  // if an ingredient is visible, create a new LI which displays name and price
  // calculate price of all ingredients
  // display price of all ingredients
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
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