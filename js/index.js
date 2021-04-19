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
    if (state.mush) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}
  


function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach(oneGrPep => {
    if (state.greenPep) {
      oneGrPep.style.visibility = 'visible';
    } else {
      oneGrPep.style.visibility = 'hidden';
    }
  });
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
const whiteSauce = document.querySelector(".sauce")
console.log(whiteSauce);
whiteSauce.classList.toggle("sauce-white");

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
const crust1 = document.querySelector(".crust")
console.log(crust1);
crust1.classList.toggle("crust-gluten-free");
}

function renderButtons(evt) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

/*const buttons = document.querySelectorForAll(".panel controls")
console.log(buttons);
buttons.classList.toggle("active");*/
//test:
/*const buttons = evt.target;
console.log(buttons);
buttons.classList.toggle("is-active")

renderButtons.forEach((buttons, i) => {
const div = document.createElement("div");
div.className = "buttons";
const markup = ``?
}*/

const active1 = document.querySelectorAll(".btn");
console.log(active1);
if ( state.pepperoni === true) {
  document.querySelector (".btn-pepperoni").classList.add("active");
  } else {
    document.querySelector(".btn-pepperoni");
  }

if (state.mush === true) {
  document.querySelector (".btn-mushrooms").classList.add("active");
  } else {
  document.querySelector(".btn-mushrooms");
  }

if (state.greenPep === true) {
  document.querySelector ("btn-green-peppers").classList.add("active");
  } else {
  document.querySelector(".btn-green-peppers");
  }

if (state.sauce === true) {
  document.querySelector (".btn-sauce").classList.add("active");
 } else {
   document.querySelector (".btn-sauce");
 }

 if (state.crust1 === true){
   document.querySelector(".btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn-crust");
  }
}

//true means that the client choosed the ingredient 

function renderPrice() {
//Iteration 4: change the HTML of `<aside class="panel price">`

//1. displays the list of all items selected

//test:
const items = document.getElementsByClassName("panel price");
const list = document.getElementById("list-price");
items.forEach((price) => {
  list.innerHTML += `<li>" 
  <aside>${price} </aside> 
  <h2> Your pizza's price</h2>
  </li>"`;
console.log(list);
});


/*test
const display = function (itemList){
for ( let prop in itemList){
  document.getElementById("panel price-pizza").innerHTML += "<li>" + prop + "</li>";
  console.log(display);
}
return renderPrice();
}*/

/*const list = document.querySelector("panel price");
/console.log(list);
if (state.price === true) {
  document.querySelector (".price");
}
} */
/*test:
/const listOfItems = document.queryElementsByClassName("panel price");
/const listOfList = document.querySelectorByTagName("panel price li");}}*/



//2. displays the total price 
/*test:
document.querySelectorAll('.panel price').forEach(price => {
  if (state.price) {
    price.style.visibility = 'visible';
  } else {
    price.style.visibility = 'hidden';
  }
});*/


/* document.querySelector('.panel price').addEventListener('click', () => {
  state.totalPrice = !state.totalPrice;
  renderEverything();
});
}*/

}





 

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mush = !state.mush;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPep = !state.greenPep;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.sauce = !state.sauce;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.crust1 = !state.crust1;
  renderEverything();
});
