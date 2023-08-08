// Write your Pizza Builder JavaScript in this file.

// Buttons Selectors
const btnPepperoni = document.querySelector(".btn-pepperoni");
const btnMushrooms = document.querySelector(".btn-mushrooms");
const btnGreenPeppers = document.querySelector(".btn-green-peppers");
const btnWhiteSauce = document.querySelector(".btn-sauce");
const btnGlutenCrust = document.querySelector(".btn-crust");

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

function renderPepperoni() 
{
  let pepperoni = document.querySelectorAll('.pep');

  pepperoni.forEach((onePep) => 
  {
    state.pepperoni ?  onePep.style.visibility = "visible" : onePep.style.visibility = "hidden";
  });
}

function renderMushrooms() 
{
  let mushrooms = document.querySelectorAll(".mushroom");

  for(let el of mushrooms)
  {
    state.mushrooms ? el.style.visibility = "visible" : el.style.visibility = "hidden";
  }
}

function renderGreenPeppers() 
{
  let greenPepers = document.querySelectorAll(".green-pepper");

  greenPepers.forEach((el) => 
  {
    state.greenPeppers ? el.style.visibility = "visible" : el.style.visibility = "hidden";
  })
}

function renderWhiteSauce() 
{
  let sauce = document.querySelector(".sauce");

  sauce.classList.toggle("sauce-white");
}

function renderGlutenFreeCrust() 
{
  let crust = document.querySelector(".crust");

  crust.classList.toggle("crust-gluten-free");
}

function renderButtons()
{
  state.pepperoni ? btnPepperoni.classList.add("active") : btnPepperoni.classList.remove("active")
  state.mushrooms ? btnMushrooms.classList.add("active") : btnMushrooms.classList.remove("active")
  state.greenPeppers ? btnGreenPeppers.classList.add("active") : btnGreenPeppers.classList.remove("active")
  state.whiteSauce ? btnWhiteSauce.classList.add("active") : btnWhiteSauce.classList.remove("active")
  state.glutenFreeCrust ? btnGlutenCrust.classList.add("active") : btnGlutenCrust.classList.remove("active")
}

function renderPrice() 
{
  const priceClass = document.querySelector(".price");

  const pepperoniElement = priceClass.children[2].children[0];
  const mushroomsElement = priceClass.children[2].children[1];
  const greenPeppersElement = priceClass.children[2].children[2];
  const sauceElement = priceClass.children[2].children[3];
  const crustElement = priceClass.children[2].children[4];
  const priceElement = priceClass.children[3]

  const pepperoniPrice= Number(pepperoniElement.textContent.slice(1, 2));
  const mushroomPrice= Number(mushroomsElement.textContent.slice(1, 2));
  const greenPepersPrice= Number(greenPeppersElement.textContent.slice(1, 2));
  const saucePrice= Number(sauceElement.textContent.slice(1, 2));
  const crustPrice= Number(crustElement.textContent.slice(1, 2));
  let price = 10;

  if(state.pepperoni)
  {
    pepperoniElement.style.display = "block";

    price += pepperoniPrice;
  }
  else
  {
    pepperoniElement.style.display = "none";
  }

  if(state.mushrooms)
  {
    mushroomsElement.style.display = "block";

    price += mushroomPrice;
  }
  else
  {
    mushroomsElement.style.display = "none";
  }

  if(state.greenPeppers)
  {
    greenPeppersElement.style.display = "block";
    
    price += greenPepersPrice;
  }
  else
  {
    greenPeppersElement.style.display = "none"
  }

  if(state.whiteSauce)
  {
    sauceElement.style.display = "block";

    price += saucePrice;
  }
  else
  {
    sauceElement.style.display = "none";
  }

  if(state.glutenFreeCrust)
  {
    crustElement.style.display = "block";
    
    price += crustPrice;
  }
  else
  {
    crustElement.style.display = "none";
  }

  priceElement.textContent = `$${price}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
btnPepperoni.addEventListener('click', function() 
{
  state.pepperoni = !state.pepperoni;
  renderPepperoni();
  renderButtons();
  renderPrice();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
btnMushrooms.addEventListener("click", function()
{
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
  renderButtons();
  renderPrice();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
btnGreenPeppers.addEventListener("click", function()
{
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();
  renderButtons();
  renderPrice();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
btnWhiteSauce.addEventListener("click", function()
{
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
  renderButtons();
  renderPrice();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
btnGlutenCrust.addEventListener("click", function()
{
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
})