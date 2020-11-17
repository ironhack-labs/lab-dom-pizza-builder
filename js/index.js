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
  // renderPrice();
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
// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
    document.querySelectorAll('.mushroom').forEach(oneMush => {
      if (state.mushrooms) {
        oneMush.style.visibility = 'visible';
      } else {
        oneMush.style.visibility = 'hidden';
      }
    });
  }

// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

const sauceWhite = document.querySelector('.sauce-white');
const sauceToChange = document.querySelector('.sauce');

function renderWhiteSauce() { 
 sauceToChange.classList.toggle("sauce-white");
};



// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
const freeGluten = document.querySelector ('.crust-gluten-free');
const crustToChange = document.querySelector('.crust');

function renderGlutenFreeCrust() {
  crustToChange.classList.toggle("crust-gluten-free");
  
};


// Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons(){
  const anyBtn = document.querySelectorAll('.btn');
  for (var i=0; i<anyBtn.length; i++) {
    anyBtn[i].addEventListener("click", pleaseWork);
    console.log(typeof anyBtn);
    };
};

function pleaseWork (e) {
  e.target.classList.toggle("active"); 
};


// Iteration 4: change the HTML of `<aside class="panel price">`

// function renderPrice() {

//   // below I fetched all the elements I might need
//   const panelPrice = document.getElementsByTagName("aside"); 
//   const strongTag = document.querySelectorAll(".panel price:last-child"); 
//   const liList = document.querySelectorAll(".panel price ul > li");
//   // consoled.log all the consts, they work (do not display null)
  
//   //below I am trying to add a lign with the according ingredients when the addEvtListener is triggered
//  liList.innerHTML += `<li> $ ${ingredients[i].price + " " + ingredients[i]}  </li>`; 

//   // for the totalPrice, I have to dynamically add the price of every selected ingredients
//   // knowing that basePrice is the initial value and that ingredients is an object and not an array

//   let ingredientsArray = Object.values(ingredients);
//   // console.log(ingredientsArray);

//   let totalPrice = ingredientsArray.reduce(function(acc, curr, index){
//     return acc += curr[index].price;
//   }, basePrice);

// // below, I put the equal sign to replace this line by the current Total price
// return strongTag.innerHTML = `<strong> $ ${totalPrice} </strong>`; 
// }

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderPepperoni();
  //renderPrice();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
  //renderPrice();
});


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();
  //renderPrice();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce; 
  renderWhiteSauce();
  //renderPrice();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust; 
  // bouton fonctionne console.log("toto");
  renderGlutenFreeCrust();
  //renderPrice();
});



