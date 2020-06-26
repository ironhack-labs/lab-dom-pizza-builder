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
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    state.mushrooms ? mushroom.style.visibility = 'visible' : mushroom.style.visibility = 'hidden';
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    state.greenPeppers? pepper.style.visibility = 'visible' : pepper.style.visibility = 'hidden'
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce =  document.querySelector('.sauce');
  state.whiteSauce ? sauce.classList.add('sauce-white') : sauce.classList.remove('sauce-white')
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const glutenFree = document.querySelector('.crust')
  state.glutenFreeCrust ? glutenFree.classList.add('crust-gluten-free') : glutenFree.classList.remove('crust-gluten-free')
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    state.pepperoni ? document.querySelector('.btn.btn-pepperoni').classList.add('active') : document.querySelector('.btn.btn-pepperoni').classList.remove('active')
    state.mushrooms ?  document.querySelector('.btn.btn-mushrooms').classList.add('active') : document.querySelector('.btn.btn-mushrooms').classList.remove('active')
    state.greenPeppers ?  document.querySelector('.btn.btn-green-peppers').classList.add('active') : document.querySelector('.btn.btn-green-peppers').classList.remove('active')
    state.whiteSauce ?  document.querySelector('.btn.btn-sauce').classList.add('active') : document.querySelector('.btn.btn-sauce').classList.remove('active')
    state.glutenFreeCrust ?  document.querySelector('.btn.btn-crust').classList.add('active') : document.querySelector('.btn.btn-crust').classList.remove('active')


  //at first I tried to add an event listener to the button so that the class would toggle when the user clicks it but then I realized the HTML has the class set to active for all the elements, therefore I need to check the state of each one

  // document.querySelectorAll('.btn').forEach(button =>  {
  //   button.addEventListener('click', (event)=>{
  //     if(button.classList.includes('active')) event.target = button.classList.toggle('active');
  //   })
  // })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let pizzaPrice = 10;
	const priceList = document.querySelector(".panel.price ul");
  const liElements = document.querySelectorAll(".panel.price ul li");
  const priceElement = document.querySelector(".panel.price strong");
	liElements.forEach((li) => {li.style.display = "none";}); //first, hide all the li elements by default

  for (let topping in state) {
    for (let ingredient in ingredients) {
      if (state[topping] && ingredient === topping) { //if the state object property value is true and the property matches the property on the ingredients object... 
        let targetLi = [...liElements].filter((li) => {
          return li.innerText.includes(ingredients[ingredient].name.toLowerCase()); //filter the <li>'s where the ingredients.name matches the text of the li
        });
        targetLi.forEach((li) => {priceList.appendChild(li); li.style.display = "block" //"unhide" the elements that were returned from the filter function
        pizzaPrice += Number(li.innerText.slice(1,2))}); 
      }
    }
    priceElement.innerText = `$${pizzaPrice}`;
  }
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
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', ()=>{
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})