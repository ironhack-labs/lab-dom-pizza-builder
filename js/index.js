// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
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
  document.querySelectorAll(".mushroom").forEach(oneMush => {
    if(state.mushrooms){
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(onePep => {
    if(state.greenPeppers){
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  const sauce = document.querySelector(".sauce");
  if(state.whiteSauce){
    sauce.classList.add("sauce-white");
  } else {
    sauce.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector(".crust");
  if(state.glutenFreeCrust){
    crust.classList.add("crust-gluten-free");
  } else {
    crust.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  const buttons = document.querySelectorAll(".btn");
  // I just inversed the logic as I think the "active" format is more relevant when the topping is not active...
  if(!state.pepperoni){
    buttons[0].classList.add("active");
  } else {
    buttons[0].classList.remove("active");
  }

  if(!state.mushrooms){
    buttons[1].classList.add("active");
  } else {
    buttons[1].classList.remove("active");
  }

  if(!state.greenPeppers){
    buttons[2].classList.add("active");
  } else {
    buttons[2].classList.remove("active");
  }

  if(!state.whiteSauce){
    buttons[3].classList.add("active");
  } else {
    buttons[3].classList.remove("active");
  }

  if(!state.glutenFreeCrust){
    buttons[4].classList.add("active");
  } else {
    buttons[4].classList.remove("active");
  }
  
  
}

function renderPrice() {
  let totalPrice = 10;
  const pepLi = document.querySelector(".panel.price ul :first-child");
  const mushLi = document.querySelector(".panel.price ul :nth-child(2)");
  const greenPepLi = document.querySelector(".panel.price ul :nth-child(3)");
  const sauceLi = document.querySelector(".panel.price ul :nth-child(4)");
  const crustLi = document.querySelector(".panel.price ul :nth-child(5)");

  if(state.pepperoni){
    pepLi.style.display = "";
    totalPrice += ingredients.pepperoni.price;
  } else {
    pepLi.style.display = "none";
  }
  if(state.mushrooms){
    mushLi.style.display = "";
    totalPrice += ingredients.mushrooms.price;
  } else {
    mushLi.style.display = "none";
  }
  if(state.greenPeppers){
    greenPepLi.style.display = "";
    totalPrice += ingredients.greenPeppers.price;
  } else {
    greenPepLi.style.display = "none";
  }
  if(state.whiteSauce){
    sauceLi.style.display = "";
    totalPrice += ingredients.whiteSauce.price;
  } else {
    sauceLi.style.display = "none";
  }
  if(state.glutenFreeCrust){
    crustLi.style.display = "";
    totalPrice += ingredients.glutenFreeCrust.price;
  } else {
    crustLi.style.display = "none";
  }

  document.querySelector(".panel.price > :last-child").textContent = `$ ${totalPrice}`;
}

renderEverything();

document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector(".btn-mushrooms").onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

document.querySelector(".btn-green-peppers").onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}


document.querySelector(".btn-sauce").onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

document.querySelector(".btn-crust").onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}
