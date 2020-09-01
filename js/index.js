// Write your Pizza Builder JavaScript in this file.
//const shrooms = document.querySelectorAll(".mushroom");
const peppers = document.querySelectorAll(".green-pepper");
const sauce = document.querySelectorAll(".sauce");
const glutenFreeCrust =  document.querySelectorAll(".crust");
//const clicked = document.querySelectorAll(".btn");


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
  document.querySelectorAll(".mushroom").forEach(Shroom => {
    if (state.mushrooms) 
    {
      Shroom.style.visibility = 'visible';
    } else {
      Shroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  peppers.forEach(greenPepp => {
    if (state.greenPeppers) 
    {
      greenPepp.style.visibility = 'visible';
    } else {
      greenPepp.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  sauce.forEach(whiteSauce => {
    if (state.whiteSauce) 
    {
      whiteSauce.style.visibility = 'hidden';
    } else {
      whiteSauce.style.visibility = 'visible';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  glutenFreeCrust.forEach(glutenCrust => {
    if (state.glutenFreeCrust) 
    {
      glutenCrust.style.visibility = 'hidden';
    } else {
      glutenCrust.style.visibility = 'visible';
    }
  });
}


 function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    document.querySelectorAll(".btn").onclick = (evt) => {
      // console.log("wazaa"); 
      return evt.target.classList.toggle("active");
    }
 };

 // I don't get it, I will push it but I don't understand why it doesn't toggle the active class on .btn class tags



function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  
  let totalPrice = basePrice;
  let list = document.querySelector('aside.panel.price ul');
  list.innerHTML = '';

   for (let ingredient in ingredients) {
     if (state[ingredient]) {
       totalPrice += ingredients[ingredient].price;
       list.innerHTML += `<li> $ ${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`;
     }
     document.querySelector('.price strong').innerHTML =
       '$' + totalPrice;
   }

  // ingredients.topping.price
  //let basePrice = 10;
  //let ingredients = {
  //  pepperoni: { name: 'pepperoni', price: 1 },
    //mushrooms: { name: 'Mushrooms', price: 1 },
    //greenPeppers: { name: 'Green Peppers', price: 1 },
    //whiteSauce: { name: 'White sauce', price: 3 },
    //glutenFreeCrust: { name: 'Gluten-free crust', //price: 5 }
  //};

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

//document.querySelector('.btn').addEventListener('click', () => {;
//  evt.target.classList.toggle("active");
//  renderEverything();
//});

