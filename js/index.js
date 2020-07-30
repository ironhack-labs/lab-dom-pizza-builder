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
  // document.querySelectorAll('#item-pep').forEach(onePep => {
  //   console.log(onePep);
  //   if (state.pepperoni) {
  //     onePep.style.visibility = 'visible';
  //   } else {
  //     onePep.style.visibility = 'hidden';
  //   }
  // });  
  let itemPep = document.querySelectorAll('#item-pep');
  if (state.pepperoni) {
    itemPep[0].style.display = 'block';
  } else {
    itemPep[0].style.display = 'none';
  }  ;  
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

  let item = document.querySelectorAll('#item-mush');
  if (state.mushrooms) {
    item[0].style.display = 'block';
  } else {
    item[0].style.display = 'none';
  }  ;   

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

  let item = document.querySelectorAll('#item-peppers');
  if (state.greenPeppers) {
    item[0].style.display = 'block';
  } else {
    item[0].style.display = 'none';
  }  ;     
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(oneSauce => {
    if (state.whiteSauce) {
      oneSauce.style.visibility = 'visible';
    } else {
      oneSauce.style.visibility = 'hidden';
    }
  });  
  let item = document.querySelectorAll('#item-sauce');
  if (state.whiteSauce) {
    item[0].style.display = 'block';
  } else {
    item[0].style.display = 'none';
  }  ;  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(oneCrust => {
    if (state.glutenFreeCrust) {
      oneCrust.style.visibility = 'visible';
    } else {
      oneCrust.style.visibility = 'hidden';
    }
  });    
  let item = document.querySelectorAll('#item-gluten');
  if (state.glutenFreeCrust) {
    item[0].style.display = 'block';
  } else {
    item[0].style.display = 'none';
  }  ;    
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //let elementPep = document.getElementsByClassName("btn-pepperoni");
  let elementPep = document.querySelector(".btn-pepperoni");
  //console.log(elementPep);
  if (state.pepperoni){
    elementPep.classList.add("active");
  }else{
    elementPep.classList.remove("active");
  }

  let elementMus = document.querySelector(".btn-mushrooms");
  //console.log(elementMus);
  if (state.mushrooms){
    elementMus.classList.add("active");
  }else{
    elementMus.classList.remove("active");
  }  

  let elementGreen = document.querySelector(".btn-green-peppers");
  //console.log(elementMus);
  if (state.greenPeppers){
    elementGreen.classList.add("active");
  }else{
    elementGreen.classList.remove("active");
  }  

  let elementSauce = document.querySelector(".btn-sauce");
  //console.log(elementMus);
  if (state.whiteSauce){
    elementSauce.classList.add("active");
  }else{
    elementSauce.classList.remove("active");
  }  

  let elementCrust = document.querySelector(".btn-crust");
  //console.log(elementMus);
  if (state.glutenFreeCrust){
    elementCrust.classList.add("active");
  }else{
    elementCrust.classList.remove("active");
  }    
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let elementPrice = document.querySelector("#price span");
  let priceTotal = 10;
  if (state.pepperoni){
    priceTotal += 1;
  }
  if (state.mushrooms){
    priceTotal += 1;
  }
  if (state.greenPeppers){
    priceTotal += 1;
  }
  if (state.whiteSauce){
    priceTotal += 3;
  }
  if (state.glutenFreeCrust){
    priceTotal += 5;
  }

  //console.log(elementPrice.innerHTML);
  elementPrice.innerHTML = priceTotal;
  //console.log(priceTotal);
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
