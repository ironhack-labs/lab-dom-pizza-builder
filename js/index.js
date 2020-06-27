// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
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
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
      document.querySelector(".btn.btn-pepperoni").classList.add('active');
    } else {
      onePep.style.visibility = "hidden";
      document.querySelector(".btn.btn-pepperoni").classList.remove('active');
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
      document.querySelector(".btn.btn-mushrooms").classList.add('active');
    } else {
      oneMush.style.visibility = "hidden";
      document.querySelector(".btn.btn-mushrooms").classList.remove('active');
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((onePep) => {
    if (state.greenPeppers) {
      onePep.style.visibility = "visible";
      document.querySelector(".btn-green-peppers").classList.add('active');
    } else {
      onePep.style.visibility = "hidden";
      document.querySelector(".btn-green-peppers").classList.remove('active');
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceLayer = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauceLayer.classList.add("sauce-white");
    document.querySelector(".btn-sauce").classList.add('active');
  } else {
    sauceLayer.classList.remove("sauce-white");
    document.querySelector(".btn-sauce").classList.remove('active');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustLayer = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crustLayer.classList.add("crust-gluten-free");
    document.querySelector(".btn-crust").classList.add('active');
  } else {
    crustLayer.classList.remove("crust-gluten-free");
    document.querySelector(".btn-crust").classList.remove('active');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceHtmlArray = document.querySelectorAll('.price>ul>li');
  const totalHtmlPrice = document.querySelector('.price > strong');
  let totalPizzaPrice = basePrice;
  //console.log(totalPrice);
  
if (state.pepperoni) {
  priceHtmlArray[0].style.display = "block";
  totalPizzaPrice += ingredients.pepperoni.price;} 
  else priceHtmlArray[0].style.display = "none";

  if (state.mushrooms) {
    priceHtmlArray[1].style.display = "block";
    totalPizzaPrice += ingredients.mushrooms.price;} 
    else priceHtmlArray[1].style.display = "none";  

    if (state.greenPeppers) {
      priceHtmlArray[2].style.display = "block";
      totalPizzaPrice += ingredients.greenPeppers.price;} 
      else priceHtmlArray[2].style.display = "none";    

      if (state.whiteSauce) {
        priceHtmlArray[3].style.display = "block";
        totalPizzaPrice += ingredients.whiteSauce.price;} 
        else priceHtmlArray[3].style.display = "none";  

        if (state.glutenFreeCrust) {
          priceHtmlArray[4].style.display = "block";
          totalPizzaPrice += ingredients.glutenFreeCrust.price;} 
          else priceHtmlArray[4].style.display = "none";         
  
  totalHtmlPrice.innerHTML = "Total: $"+totalPizzaPrice.toString();

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn-green-peppers").addEventListener("click", () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
