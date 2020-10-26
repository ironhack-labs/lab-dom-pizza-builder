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

  document.querySelectorAll('.green-pepper').forEach(oneGP => {
    if (state.greenPeppers) {
      oneGP.style.visibility = 'visible';
    } else {
      oneGP.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(oneS => {
    if (state.whiteSauce) {
      oneS.classList.add ("sauce-white");
    } else {
      oneS.classList.remove ("sauce-white");
    }
  });


}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(oneC => {
    if (state.glutenFreeCrust) {
      oneC.classList.add ("crust-gluten-free");
    } else {
      oneC.classList.remove ("crust-gluten-free");
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
 
  if (state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').classList.add("active");
   } else {
    document.querySelector('.btn.btn-pepperoni').classList.remove("active");
   }
  
   if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.add("active");
   } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove("active");
   }
  
   if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.add("active");
   } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove("active");
   }
  
   if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.add("active");
   } else {
    document.querySelector('.btn.btn-sauce').classList.remove("active");
   }
  
   if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.add("active");
   } else {
    document.querySelector('.btn.btn-crust').classList.remove("active");
   }
           
 
  // document.querySelectorAll('.btn').forEach(buttonChange => {
  //   console.log(buttonChange)
  // if (state.glutenFreeCrust){
  //   console.log('skdjf')
  //   buttonChange.classList.add ("active");
  // }else{
  //   // btn.btn.glutenFreeCrust.classList.remove ("active");
  // }})
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  document.querySelector('.toppings').innerHTML= '';
  let htmlBuilder = '';
  let pizzaPrice = 10;

  if (state.pepperoni) {
    htmlBuilder = htmlBuilder + "<li>$1 pepperoni 🐷</li>";
    pizzaPrice = pizzaPrice + 1;
   } 
   if (state.mushrooms) {
    htmlBuilder = htmlBuilder + "<li>$1 Mushrooms 🍄</li>";
    pizzaPrice = pizzaPrice + 1;
  }  if (state.greenPeppers) {
    htmlBuilder = htmlBuilder + "<li>$1 Green Peppers</li>";
    pizzaPrice = pizzaPrice + 1;
   } 
     if (state.whiteSauce) {
    htmlBuilder = htmlBuilder + "<li>$3 White Sauce</li>";
    pizzaPrice = pizzaPrice + 3;
   } 
    if (state.glutenFreeCrust) {
    htmlBuilder = htmlBuilder + "<li>$5 Gluten Free base 🙄</li>";
    pizzaPrice = pizzaPrice + 5;
   } 
   document.querySelector('.toppings').innerHTML= htmlBuilder;
   document.querySelector('.priceTotal').innerText = `€ ${pizzaPrice}.00`
}



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
