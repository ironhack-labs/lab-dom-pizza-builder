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
  document.querySelectorAll('.green-pepper').forEach(onePep => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(onePep => {
    if (state.whiteSauce) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
      } else {
      document.querySelector('.crust').classList.remove('crust-gluten-free'); 
  }
  //add class crust-gluten-free to crust if btn clicked -> classList.add('crust-gluten-free)
  // else just crust  
}

function renderButtons() {
// Iteration 3: add/remove the class "active" of each `<button class="btn">
  if (state.pepperoni) {
    document.querySelector('.btn-pepperoni').classList.add('active');
      } else {
      document.querySelector('.btn-pepperoni').classList.remove('active'); 
    }
  
  if (state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.add('active');
      } else {
      document.querySelector('.btn-green-peppers').classList.remove('active'); 
    }

   if (state.mushrooms) {
      document.querySelector('.btn-mushrooms').classList.add('active');
        } else {
        document.querySelector('.btn-mushrooms').classList.remove('active'); 
      }
    
    if (state.whiteSauce) {
      document.querySelector('.btn-sauce').classList.add('active');
        } else {
        document.querySelector('.btn-sauce').classList.remove('active'); 
      }
    
    if (state.glutenFreeCrust) {
      document.querySelector('.btn-crust').classList.add('active');
        } else {
        document.querySelector('.btn-crust').classList.remove('active'); 
      }

}

//=====DELETE BELOW LATER =======
// console.log(aside.innerText)
    // <!-- Price -->
    // <aside class="panel price">
    //   <h2>Your pizza's price</h2>

    //   <b>$10 cheese pizza</b>
    //   <ul>
    //     <li>$1 pepperoni</li>
    //     <li>$1 mushrooms</li>
    //     <li>$1 green peppers</li>
    //     <li>$3 white sauce</li>
    //     <li>$5 gluten-free crust</li>
    //   </ul>
    //   <strong>$21</strong>
    // </aside>

// // Constants
// let basePrice = 10;
// let ingredients = {
//   pepperoni: { name: 'pepperoni', price: 1 },
//   mushrooms: { name: 'Mushrooms', price: 1 },
//   greenPeppers: { name: 'Green Peppers', price: 1 },
//   whiteSauce: { name: 'White sauce', price: 3 },
//   glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
// };

// // Initial value of the state (the state values can change over time)
// let state = {
//   pepperoni: true,
//   mushrooms: true,
//   greenPeppers: true,
//   whiteSauce: false,
//   glutenFreeCrust: false
// };


//=== DELETE ABOVE LATER ==== 

//-----------------------------------------------------------------------------------
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  const priceAll = document.getElementsByClassName('price');
  const pricePerTop = priceAll.appendChild ('price');
  console.log(priceAll)

  document.querySelector('price.ul')
  // for in loop for states, if active then create an li list
// );
}

//clear it to empty
// const = empty version
// then add if active
// 

  // if (state.pepperoni) {
  //   pricePerTop.innerHTML += `<li>{$1 pepperoni}</li>` && price.strong += 1
  //   document.querySelector('strong') += 
  // }

  // } else {
    // pricePerTop.innerHTML -= `<li>{$1 pepperoni}</li>`
  // }
  // console.log(pricePerTop.innerHTML)
  
  // todo = togglePrice ;

  // //how to:
  // if the state is active => add text and update price
  // if inactive => remove/update price
  // prices should be toggled


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
