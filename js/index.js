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
  let price = 0;
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
      price = 1;
    } else {
      onePep.style.visibility = 'hidden';
      price = 0;
    }
  });
  // renderPrice()
  return price;
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`

  let price = 0
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
      price = 1;

    } else {
      oneMush.style.visibility = 'hidden';
      price = 0;
    }
  });
  
  // renderPrice()
  return price;
}


function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  let price = 0;
  document.querySelectorAll('.green-pepper').forEach(greenPep => {
    if (state.greenPeppers) {
      greenPep.style.visibility = 'visible';
      price = 1;
    } else {
      greenPep.style.visibility = 'hidden';
      price = 0;
    }
  });
  // renderPrice()
  return price;
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let price = 0;
  let sauce  = document.querySelector('.sauce');
    if (state.whiteSauce) {
      sauce.classList.add("sauce-white");
      let price = 3;
    } else {
      sauce.classList.remove("sauce-white");
      let price = 0;
    }
    // renderPrice()
    return price;
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    let price = 0;
    let glutenFree = document.querySelector('.crust');
      if (state.glutenFreeCrust) {
        glutenFree.classList.add("crust-gluten-free");
        price = 5;
      } else {
        glutenFree.classList.remove("crust-gluten-free");
        price = 0;
      }
      // renderPrice()
      return price;

  }

  function renderButtons() {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    let buttons = document.querySelectorAll('.btn')  
    console.log(buttons)  
    let currentValues = Object.values(state) 
    console.log(currentValues)  
    for (let i = 0; i < currentValues.length; i++) { 
      if (currentValues[i] === false) 
      { buttons[i].classList.remove('active');   } 
      else { buttons[i].classList.add('active');  }}

  }
  



function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let cheezePizza = 10;
  let pricePep = renderPepperoni();
  let priceMush = renderMushrooms();
  let priceGreenPep = renderGreenPeppers();
  let priceGlutenFree = renderGlutenFreeCrust();
  let priceWhiteSauce = renderWhiteSauce();
 

 let total = cheezePizza + pricePep + priceMush + priceGreenPep + priceGlutenFree + priceWhiteSauce;
 let priceTotalPlaceholder = document.querySelector(".price strong");
 priceTotalPlaceholder.innerHTML = total + "$";
 console.log(priceTotalPlaceholder);

 let listEl = [...document.querySelectorAll('.price li')];
  console.log(listEl);
  
  
  const trueArray = Object.values(state);
  
   
   for ( i = 0 ; i < trueArray.length; i++) {
    if (trueArray[i]) { listEl[i].style.display = 'block';}
    else
    ( listEl[i].style.display= 'none');
  }

 return priceTotalPlaceholder;
}

renderEverything();


// let ulPlace = document.querySelector(".price ul");
// let newLi = document.createElement("li");
// ulPlace.appendChild(newLi);
// if (priceMush !== 0) {
//     newLi.innerHTML = "$"+ priceMush + "mushrooms";

// }
// else {
//   ulPlace.removeChild(newLi);
// }


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
});

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

