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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });

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
  document.querySelectorAll('.sauce-white').forEach(oneSauce => {
    if (state.whiteSauce) {
      oneSauce.style.visibility = 'visible';
    } else {
      oneSauce.style.visibility = 'hidden';
    }
  }); 
}
  

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust-gluten-free').forEach(oneGluten => {
    if (state.glutenFreeCrust) {
      oneGluten.style.visibility = 'visible';
    } else {
      oneGluten.style.visibility = 'hidden';
    }
  }); 
}
  
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn-mushrooms').forEach(item => {
        if (state.mushrooms) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
      
      document.querySelectorAll('.btn-pepperoni').forEach(item => {
        if (state.pepperoni) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      }); 

      document.querySelectorAll('.btn-green-peppers').forEach(item => {
        if (state.greenPeppers) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      }); 

      document.querySelectorAll('.btn-sauce').forEach(item => {
        if (state.whiteSauce) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      }); 

      document.querySelectorAll('.btn-crust').forEach(item => {
        if (state.glutenFreeCrust) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      }); 

    }


function renderPrice() {
    let oldList = document.querySelectorAll('ul')[1];
    oldList.innerHTML = "";

    let count = document.querySelectorAll('strong')[0];
    count.innerHTML = 10;

    if (state.pepperoni) {
      count += ingredients.pepperoni.price
      oldList.innerHTML += "<li>$1 pepperoni</li>";
    } 
    
    if (state.mushrooms) {
      oldList.innerHTML += "<li>$1 mushrooms</li>";
    }

    if (state.greenPeppers) {
      oldList.innerHTML += "<li>$1 green peppers</li>";
    }

    if (state.whiteSauce) {
      oldList.innerHTML += "<li>$3 white sauce</li>";
    }

    if (state.glutenFreeCrust) {
      oldList.innerHTML += "<li>$5 gluten-free crust</li>";
    }
  }; 


renderEverything();
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
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
