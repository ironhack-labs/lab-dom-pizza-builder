// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
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
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((oneMush) => {
    //console.log(state.mushrooms);
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      //console.log("mushrooom hidden");
      oneMush.style.visibility = "hidden";
    }
  });

  //Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((greenPep) => {
    if (state.greenPeppers) {
      greenPep.style.visibility = "visible";
    } else {
      greenPep.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  document.querySelectorAll(".sauce").forEach((sauceBlanc) => {
    if (state.whiteSauce) {
      
      sauceBlanc.classList.add("sauce-white");
    } else {
      sauceBlanc.classList.remove("sauce-white");
    }
  });
}
// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((crustNoGlut) => {
    if (state.glutenFreeCrust) {
      crustNoGlut.classList.add("crust-gluten-free");
    } else {
      crustNoGlut.classList.remove("crust-gluten-free");
    }
  });
}
// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderButtons() {
  document.querySelectorAll(".btn-pepperoni").forEach((button) => {
    if (state.pepperoni) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  
  document.querySelectorAll(".btn-mushrooms").forEach((button) => {
    if (state.mushrooms) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  document.querySelectorAll(".btn-green-peppers").forEach((button) => {
    if (state.greenPeppers) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  document.querySelectorAll(".btn-sauce").forEach((button) => {
    if (state.whiteSauce) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  document.querySelectorAll(".btn-crust").forEach((button) => {
    if (state.glutenFreeCrust) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });


 // document.querySelectorAll(".btn").forEach((button) => {
    
  //  if (button.classList.contains("active")) {
      //console.log("active--> remove");
   //   button.classList.remove("active");
     // console.log("removed", button.classList);
  //  } else {
      //console.log("removed--> add");
    //  button.classList.add("active");
     // console.log("added", button.classList);
  //  }
   
 // });

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
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

//// Iteration 3: add/remove the class "active" of each `<button class="btn">`
//Make the buttons active or not
//Currently, all buttons look the same, no matter if the option is activated or not. If you notice, all the buttons have an active class.
//<button class="btn btn-pepperoni active">Pepperoni</button>
//Write the logic for removing and adding the buttons' active class appropriately. Write the code in the function renderButtons().
