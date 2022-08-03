// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
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

document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

//define button mushrooms
// add event listener on click + link with the function to run

// I create a variable that will store the btn-mushrooms
// I say that clicking will trigger the event linked to btn-mushroomr
//When buttonMushrooms clicked, run the function renderMushrooms
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden'
    }
  })
}


const buttonMushrooms = document.querySelector(".btn.btn-mushrooms")
buttonMushrooms.addEventListener("click", () => {
  // if state mushrooms is true => false vice versa
  state.mushrooms = !state.mushrooms;
  renderEverything()
})

// I declared the function rundermushrooms which have for purpose to check if mushroom is visible
// when I call the function renderMushroom, it target the selector mushrooms
// it check in any parameter that has as class mushrooms
// if visible return true otherwise return false


// Iteration 1: set the visibility of `<section class="mushroom">`

// I stored in the variable buttonGreenPepper the button linked to green peppers

const buttonGreenPeppers = document.querySelector('.btn-green-peppers')
// add the event listener that will be trigerred by clicking
buttonGreenPeppers.addEventListener("click", () => {
  // when clicking it turn it visible if not and vice versa
  // when it's done renderEverything
  state.greenPeppers = !state.greenPeppers;
  renderEverything()
})
// when clicked it will run the function renderGreenPeppers


// This function will check greenPeppers visibility 
// a condinional statement will check it, refering to the object.key (state.mushrooms)
// this function will take all selectors in greenpepper
// then it will check for each element if it is visible or not
// first i'll specify it is in the document, then all selector in green peper
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreen) => {
    // I will use the conditional statment to check if peppers is true or not according to the object state
    if (state.greenPeppers) {
      oneGreen.style.visibility = 'visible';
    } else {
      oneGreen.style.visibility = 'hidden';
    }
  })

}

// Iteration 1: set the visibility of `<section class="green-pepper">`
/****************************************************************** */
// **********************************************************************/

// FIX WHITE SAUCE ISSUE 
// *****************************
// ******************************
// *****************************
function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((oneSauce) => {
    if (state.whiteSauce) {
      // show white sauce
      //  add.state.oneSauce 

      oneSauce.classList.add("sauce-white");

    } else {
      oneSauce.classList.remove("sauce-white")
    }
  })
}

// const buttonSauce = document.querySelectorAll('.btn.btn-sauce')
// console.log(buttonSauce)
// error: instead of selecting sauce => select btn-sauce
document.querySelector('.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

/************************************************* */
/************************************************* */


// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((oneCrust) => {
    if (state.glutenFreeCrust) {
      oneCrust.classList.add("crust-gluten-free");
    } else {
      oneCrust.classList.remove("crust-gluten-free");
    }
  })
}

const buttonCrust = document.querySelector(".btn.btn-crust")
buttonCrust.addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything()
})

/****************************************** */
/***************************************** */
function renderButtons() {
  document.querySelectorAll('.btn.active').forEach((oneButton) => {
    if (oneButton.classList.contains("active")) {
      oneButton.classList.add("active");
    } else {
      oneButton.classList.remove("active");
    }
  })

}




const buttonActive = document.querySelectorAll(".btn")
buttonCrust.addEventListener("click", () => {
  renderButtons()
})




function renderPrice() {
  document.aside.innerHTML = "panel price";
  return ingredients

  // Iteration 4: change the HTML of `<aside class="panel price">`
  // I 
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`