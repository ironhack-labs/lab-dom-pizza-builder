let basePrice = 10;
let ingredients = {
  pepperoni: { name: "Pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

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
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((oneGreen) => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = "visible";
    } else {
      oneGreen.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  document.querySelector(".sauce").classList.toggle("sauce-white");
}

function renderGlutenFreeCrust() {
  document.querySelector(".crust").classList.toggle("crust-gluten-free");
}

 function renderPrice() {
   document.querySelector(".panel-price")
   let priceul
   let total
   
  
}

document.querySelector(".btn.btn-pepperoni").addEventListener("click", (evt) => {
  evt.target.classList.toggle("active")
  state.pepperoni = !state.pepperoni;
  renderPepperoni();
});

document.querySelector(".btn.btn-mushrooms").addEventListener("click", (evt) => {
  evt.target.classList.toggle("active")
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
});

document.querySelector(".btn.btn-green-peppers").addEventListener("click", (evt) => {
  evt.target.classList.toggle("active")
    state.greenPeppers = !state.greenPeppers;
    renderGreenPeppers();
  });

document.querySelector(".btn.btn-sauce").addEventListener("click", (evt) => {
    evt.target.classList.toggle("active")
    state.whiteSauce === false;
    renderWhiteSauce();
  }
);

document.querySelector(".btn.btn-crust").addEventListener("click", (evt) => {
  if (!state.glutenFreeCrust) {
    evt.target.classList.toggle("active")
    state.glutenFreeCrust === true;
    renderGlutenFreeCrust();
  }
});


