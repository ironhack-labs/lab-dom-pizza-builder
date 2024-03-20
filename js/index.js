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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onegreenPepper) => {
    if (state.greenPeppers) {
      onegreenPepper.style.visibility = 'visible';
    } else {
      onegreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
// document.querySelector(".sauce.sauce-white")
  const sauce = document.querySelector(".sauce.sauce-white")
  if(state.whiteSauce){
  sauce.style.visbility = ' visible'; 
  }else {
    sauce.style.visibilty = 'hidden';
  }
};

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const freeGluten = document.querySelector(".crust.crust-gluten-free")
  if(state.glutenFreeCrust){
    freeGluten.style.visbility = ' visible'; 
  }else {
    freeGluten.style.visibilty = 'hidden';
  }
}

function renderButtons() {
  const buttons = document.querySelectorAll(".btn.active");
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.remove('active');
        });
    });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
    const pricePanel = document.querySelector(".panel.price");
    const totalPrice = Object.values(state).reduce((total, isSelected, index) => {
        if (isSelected) {
            return total + ingredients[Object.keys(state)[index]].price;
        } else {
            return total;
        }
    }, basePrice);
  
    const selectedItems = Object.keys(state).filter(key => state[key]).map(key => ingredients[key].name);
    const itemList = selectedItems.join(", ");
  
    pricePanel.innerHTML = `
        <h2>Price</h2>
        <ul>
            <li>Base price: $${basePrice.toFixed(2)}</li>
            <li>Selected items: ${itemList}</li>
            <li>Total price: $${totalPrice.toFixed(2)}</li>
        </ul>
    `;
  

}



// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

    
