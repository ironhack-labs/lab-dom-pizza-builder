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
  document.querySelectorAll('.mushroom').forEach(mush => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(green => {
    if (state.greenPeppers) {
      green.style.visibility = 'visible';
    } else {
      green.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  //console.log(document.querySelector('.sauce').classList);
  
    if (state.whiteSauce) {
      document.querySelector('.sauce').classList.remove("sauce-white") ;
    } else {
      document.querySelector('.sauce').classList.add("sauce-white") ;
    }
  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  //document.querySelector('.crust').classList.toggle("crust-gluten-free");
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.remove("crust-gluten-free") ;
  } else {
    document.querySelector('.crust').classList.add("crust-gluten-free") ;
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
const pepBtn = document.querySelector('.btn.btn-pepperoni');
const mushBtn = document.querySelector(".btn-mushrooms");
const greenBtn = document.querySelector(".btn-green-peppers");
const whiteBtn = document.querySelector(".btn-sauce");
const crustBtn = document.querySelector(".btn-crust");

!state.pepperoni? pepBtn.classList.add("active"): pepBtn.classList.remove("active");
!state.mushrooms? mushBtn.classList.add("active"): mushBtn.classList.remove("active");
!state.greenPeppers? greenBtn.classList.add("active"): greenBtn.classList.remove("active");
!state.whiteSauce? whiteBtn.classList.add("active"): whiteBtn.classList.remove("active");
!state.glutenFreeCrust? crustBtn.classList.add("active"): crustBtn.classList.remove("active");
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`


  const lista = document.querySelector(".panel.price ul");
  lista.innerHTML="";
  let total = 10;
  for(let key in state){
     if(state[key]){
      let precio =  ingredients[key].price;
      let ing = key;
      const element = document.createElement("li");
      element.innerText =`$ ${precio} ${key}`;
      lista.appendChild(element);
      total += precio;
    }
      
  }
  if(total > 10)document.querySelector(".panel strong").innerText = `$ ${total}`;
  else document.querySelector(".panel strong").innerText = "";

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