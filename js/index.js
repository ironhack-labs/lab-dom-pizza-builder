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
  document.querySelectorAll('.green-pepper').forEach(greenPepper => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible';
    } else {
      greenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  /*const $body = document.querySelector('.sauce.sauce.white')
  let sauce = document.querySelector('sauce-white')
  if(state.whiteSauce){
    sauce.removeAttribute('id')
  }else if(!state.whiteSauce){
    paragraph.setAttribute('class', 'sauce-white');
  }*/
  /*document.querySelectorAll('.sauce-white').forEach(sauce => {
    if (state.whiteSauce) {
      sauce.style.visibility = 'visible';
    } else {
      sauce.style.visibility = 'hidden';
    }
  });*/
  document.querySelectorAll('.sauce').forEach(sauce=> {
    if(state.whiteSauce){
      sauce.classList.add('sauce-white')
    }else{
      sauce.classList.remove('sauce-white')
    }
  })

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(gfCrust=> {
    if(state.glutenFreeCrust){
      gfCrust.classList.add('crust-gluten-free')
    }else{
      gfCrust.classList.remove('crust-gluten-free')
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  /*Must find a way to shorten this
    || btn.classList.contains('btn-mushrooms') 
    | btn.classList.contains('btn-green-peppers') || btn.classList.contains('btn-sauce') || btn.classList.contains('btn-crust')){
      if(btn.class)
  */
  document.querySelectorAll('.btn').forEach(btn => {
    if(btn.classList.contains('btn-pepperoni')){
      if(state.pepperoni){
        btn.classList.add('active')
      }else{
        btn.classList.remove('active')
      }
    }else if(btn.classList.contains('btn-mushrooms')){
      if(state.mushrooms){
        btn.classList.add('active')
      }else{
        btn.classList.remove('active')
      }
    }else if(btn.classList.contains('btn-green-peppers')){
      if(state.greenPeppers){
        btn.classList.add('active')
      }else{
        btn.classList.remove('active')
      }
    }else if(btn.classList.contains('btn-sauce')){
      if(state.whiteSauce){
        btn.classList.add('active')
      }else{
        btn.classList.remove('active')
      }
    }if(btn.classList.contains('btn-crust')){
      if(state.glutenFreeCrust){
        btn.classList.add('active')
      }else{
        btn.classList.remove('active')
      }
    }
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
 /* //const $parent = document.getElementsByTagName('aside')
  document.querySelectorAll('btn').forEach(btn =>{
    if(btn.classList.contains('btn-pepperoni active')){
      const $newIngredient = document.createElement('li')
      $newIngredient.innerText = `+ ${ingredients.pepperoni.name} ${ingredients.pepperoni.price}`
      //let text = document.createTextNode(`+ ${ingredients.pepperoni.name} ${ingredients.pepperoni.price}`)
      const $priceList = document.querySelectorAll('#priceList')
      $priceList.appendChild($newIngredient)
    }
    
  })*/
  let tPrice = basePrice
  let $list = document.querySelector('aside.panel.price ul')
  $list.innerHTML = ""
  for (let ingredient in ingredients) {
    if (state[ingredient]) {
      tPrice += ingredients[ingredient].price
      $list.innerHTML += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name.toLowerCase()}</li>`
    }
  }
  document.querySelector('aside.panel.price strong').innerHTML = "$" + tPrice
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