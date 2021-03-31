// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
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
  document.querySelectorAll(".pep").forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    };
  });
console.log (document.querySelectorAll(".mushroom"))
}
function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(onePep => {
    if (state.greenPeppers) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
  }});
console.log (document.querySelectorAll(".pepper"))
}

function renderWhiteSauce() {

  const sauce = document.querySelector(".sauce")
 console.log(sauce)
  if (state.whiteSauce) {
    sauce.classList.add("sauce-white")
   }
   else {
    sauce.classList.remove("sauce-white")
   
  console.log(sauce.classList)
  }

}
function renderGlutenFreeCrust() {
  const crust = document.querySelector(".crust")
  console.log(crust.classList)

  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free")
   }
   else {
    crust.classList.remove("crust-gluten-free")}
}

function renderButtons() {
  const pepperoniButton = document.querySelector(".btn.btn-pepperoni");
  const mushroomButton = document.querySelector(".btn.btn-mushrooms");
  const greenPeppersButton = document.querySelector(".btn.btn-green-peppers");
  const sauceButton = document.querySelector(".btn.btn-sauce");
  const crustButton = document.querySelector(".btn.btn-crust");

  if (state.pepperoni) {
    pepperoniButton.classList.add("active");
  } else {
    pepperoniButton.classList.remove("active");
  }

  if (state.mushrooms) {
    mushroomButton.classList.add("active");
  } else {
    mushroomButton.classList.remove("active");
  }

  if (state.greenPeppers) {
    greenPeppersButton.classList.add("active");
  } else {
    greenPeppersButton.classList.remove("active");
  }

  if (state.whiteSauce) {
    sauceButton.classList.add("active");
  } else {
    sauceButton.classList.remove("active");
  }

  if (state.glutenFreeCrust) {
    crustButton.classList.add("active");
  } else {
    crustButton.classList.remove("active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let list = '';
  let price = basePrice;
  for (let ingredient in state) {
    if (state[ingredient]) {
      list += `<li> $ ${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`;
      price += ingredients[ingredient].price;
    }
  }
  document.querySelector('.panel.price ul').innerHTML = list;
  document.querySelector('.panel.price strong').innerText = `$${price}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});


