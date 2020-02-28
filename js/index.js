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
  document.querySelectorAll('.pep').forEach($pep => {
    if (state.pepperoni) {
      $pep.style.visibility = 'visible';
    } else {
      $pep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach($mushroom => {
    if (state.mushrooms) {
      $mushroom.style.visibility = 'visible';
    } else {
      $mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach($green => {
    if (state.greenPeppers) {
      $green.style.visibility = 'visible';
    } else {
      $green.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  if (!state.whiteSauce) {
    document.getElementsByClassName("sauce")[0].classList.remove("sauce-white")
  } else {
    document.getElementsByClassName("sauce")[0].classList.add("sauce-white")
  }
} 

function renderGlutenFreeCrust() {
  if (!state.glutenFreeCrust) {
    document.getElementsByClassName("crust")[0].classList.remove("crust-gluten-free")
  } else {
    document.getElementsByClassName("crust")[0].classList.add("crust-gluten-free")
  }
}

function renderButtons() {

   if (state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').classList.remove("active")
   } else {
    document.querySelector('.btn.btn-pepperoni').classList.add("active")
   }

   if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.remove("active")
   } else {
    document.querySelector('.btn.btn-mushrooms').classList.add("active")
   }

   if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.remove("active")
   } else {
    document.querySelector('.btn.btn-green-peppers').classList.add("active")
   }

   if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.remove("active")
   } else {
    document.querySelector('.btn.btn-sauce').classList.add("active")
   }

   if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.remove("active")
   } else {
    document.querySelector('.btn.btn-crust').classList.add("active")
   }

}

let pepPrice = document.querySelectorAll(".panel.price ul li")[0]
let mushPrice = document.querySelectorAll(".panel.price ul li")[1]
let gpPrice = document.querySelectorAll(".panel.price ul li")[2]
let wsPrice = document.querySelectorAll(".panel.price ul li")[3]
let gfcPrice = document.querySelectorAll(".panel.price ul li")[4]


function renderPrice() {

     let priceNum = 10

    if (!state.pepperoni) {
      priceNum += 0

      pepPrice.remove()
    } else {
      priceNum++
      document.querySelector(".panel.price ul").appendChild(pepPrice)
    }

    if (!state.mushrooms) {
      priceNum += 0
      mushPrice.remove()
    } else {
      priceNum++
      document.querySelector(".panel.price ul").appendChild(mushPrice)
    }

    if (!state.greenPeppers) {
      priceNum += 0
      gpPrice.remove()
    } else {
      priceNum++
      document.querySelector(".panel.price ul").appendChild(gpPrice)
    }

    if (state.whiteSauce) {
      priceNum += 3
      document.querySelector(".panel.price ul").appendChild(wsPrice)
    } else {
      priceNum += 0
      wsPrice.remove()
    }

    if (state.glutenFreeCrust) {
      priceNum += 5
      document.querySelector(".panel.price ul").appendChild(gfcPrice)
    } else {
      priceNum += 0
      gfcPrice.remove()
    }

   document.querySelector(".panel.price strong").innerText = "$" + priceNum
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').onclick = () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.getElementsByClassName("btn btn-sauce")[0].onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.getElementsByClassName("btn btn-crust")[0].onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}