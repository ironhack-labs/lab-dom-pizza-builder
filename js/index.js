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
  const mushroomNode = document.querySelectorAll(".mushroom")
    mushroomNode.forEach((eachMushromm) => {
      if (state.mushrooms) {
        eachMushromm.style.visibility = 'visible';
      } else {
        eachMushromm.style.visibility = 'hidden';
      }
    })
  }
  
  function renderGreenPeppers() {
        // Iteration 1: set the visibility of `<section class="green-pepper">`
        const greenPepperNode = document.querySelectorAll('.green-pepper')

          greenPepperNode.forEach((eachgreen) => {
            if (state.greenPeppers) {
              eachgreen.style.visibility = 'visible'
            } else {
              eachgreen.style.visibility = 'hidden'
            }
          })
        }
      

        function renderWhiteSauce() {
          // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
          const sauceNode = document.querySelector('.sauce')
          const sauceButtonNode = document.querySelector('.btn.btn-sauce')

            if (state.whiteSauce) {
              sauceNode.classList.add("sauce-white")
            } else {
              sauceNode.classList.remove("sauce-white")
            }
            sauceButtonNode.addEventListener('click', () => {
              state.whiteSauce = !state.whiteSauce
            })
          }
          

        function renderGlutenFreeCrust() {
          // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
          const crustNode = document.querySelector(".crust")
          const crustButtonNode = document.querySelector('.btn.btn-crust')

          if (state.glutenFreeCrust) {
            crustNode.classList.add("crust-gluten-free")
          } else {
            crustNode.classList.remove("crust-gluten-free")
          }
          crustButtonNode.addEventListener('click', () => {
            state.glutenFreeCrust = !state.glutenFreeCrust
          })
       
        }

        function renderButtons() {
          // Iteration 3: add/remove the class "active" of each `<button class="btn">`
          const crustButtonNode = document.querySelector('.btn.btn-crust')
          const sauceButtonNode = document.querySelector('.btn.btn-sauce')
          const greenPepperButtonNode = document.querySelector('.btn.btn-green-peppers')
          const mushroomButtonNode = document.querySelector('.btn.btn-mushrooms')
          const pepperoniButtonNode = document. querySelector('.btn.btn-pepperoni')

          if (state.glutenFreeCrust) {
            crustButtonNode.classList.add('active');
          } else {
            crustButtonNode.classList.remove('active');
          }
        
          if (state.whiteSauce) {
            sauceButtonNode.classList.add('active');
          } else {
            sauceButtonNode.classList.remove('active');
          }
        
          if (state.greenPeppers) {
            greenPepperButtonNode.classList.add('active');
          } else {
            greenPepperButtonNode.classList.remove('active');
          }
        
          if (state.mushrooms) {
            mushroomButtonNode.classList.add('active');
          } else {
            mushroomButtonNode.classList.remove('active');
          }
        
          if (state.pepperoni) {
            pepperoniButtonNode.classList.add('active');
          } else {
            pepperoniButtonNode.classList.remove('active');
          }
        }

        function renderPrice() {
          // Iteration 4: change the HTML of `<aside class="panel price">`

  const pricePanel = document.querySelector('.panel.price ul');
  const totalPriceElement = document.querySelector('.panel.price strong');

  
  let totalPrice = basePrice;

 
  pricePanel.innerHTML = '';

  
  if (state.pepperoni) {
    pricePanel.innerHTML += `<li>${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
    totalPrice += ingredients.pepperoni.price;
  }
  if (state.mushrooms) {
    pricePanel.innerHTML += `<li>${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    totalPrice += ingredients.mushrooms.price;
  }
  if (state.greenPeppers) {
    pricePanel.innerHTML += `<li>${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    totalPrice += ingredients.greenPeppers.price;
  }
  if (state.whiteSauce) {
    pricePanel.innerHTML += `<li>${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    totalPrice += ingredients.whiteSauce.price;
  }
  if (state.glutenFreeCrust) {
    pricePanel.innerHTML += `<li>${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    totalPrice += ingredients.glutenFreeCrust.price;
  }

  
  totalPriceElement.textContent = `$${totalPrice}`;
}


        renderEverything()

        // Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
        document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
          state.pepperoni = !state.pepperoni
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