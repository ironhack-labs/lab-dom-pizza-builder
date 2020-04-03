// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: 'pepperoni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
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

  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });

  // const mushrooms = document.querySelectorAll('.mushroom');
  // for (let i = 0; i<mushrooms.length; i++) {
  //   if (state.mushrooms) {
  //     mushrooms[i].style.visibility = 'visible';
  //   } else {
  //     mushrooms[i].style.visibility = 'hidden';
  //   }
  // }

}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach(oneGreen => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = 'visible';
    } else {
      oneGreen.style.visibility = 'hidden';
    }
  });

}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  // console.log(state.whiteSauce)
  // const section = document.querySelectorAll(".sauce");

  // console.log(section)
  // if (!state.whiteSauce) {section.innerhtml += `<div class= "sauce-white"></div>`}
  // else {section.innerhtml -= `<div class= "sauce-white"></div>`}

  const section = document.querySelector(".sauce");

  if (state.whiteSauce) {
    section.classList.add("sauce-white");
  } else {
    section.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  const sectionCrust = document.querySelector(".crust");

  if (state.glutenFreeCrust) {
    sectionCrust.classList.add("crust-gluten-free");
  } else {
    sectionCrust.classList.remove("crust-gluten-free");
  }

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  document.querySelectorAll(".btn").forEach(button => {
    if (button.className.includes("pepperoni")) {
      if (state.pepperoni) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    } else if (button.className.includes("mushrooms")) {
      if (state.mushrooms) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    } else if (button.className.includes("green-peppers")) {
      if (state.greenPeppers) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    } else if (button.className.includes("sauce")) {
      if (state.whiteSauce) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    } else if (button.className.includes("crust")) {
      if (state.glutenFreeCrust) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let panelBtn = document.querySelectorAll("btn");
  let totalPrice = subPrice
  panelBtn.forEach(ingredient => {
    if (panelBtn.classList.includes("active")) {
      if (panelBtn.classList.includes("btn-pepperoni")) {
        document.querySelector(".price ul").innerHTML += `<li>$ ${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
        subPrice += ingredients.pepperoni.price;
      } else if (panelBtn.classList.includes("btn-mushrooms")) {
        document.querySelector(".price ul").innerHTML += `<li>$ ${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
        subPrice += ingredients.mushrooms.price;
      } else if (panelBtn.classList.includes("btn-green-peppers")) {
        document.querySelector(".price ul").innerHTML += `<li>$ ${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
        subPrice += ingredients.greenPeppers.price;
      } else if (panelBtn.classList.includes("btn-sauce")) {
        document.querySelector(".price ul").innerHTML += `<li>$ ${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
        subPrice += ingredients.whiteSauce.price;
      } else if (panelBtn.classList.includes("btn-crust")) {
        document.querySelector(".price ul").innerHTML += `<li>$ ${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
        subPrice += ingredients.glutenFreeCrust.price;
      }
    }
  });

  document.querySelector(".panel strong").innertText = `$${totalPrice}`

}

renderEverything();




// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").onclick = function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});