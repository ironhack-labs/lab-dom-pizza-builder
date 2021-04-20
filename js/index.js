//Write your Pizza Builder JavaScript in this file.
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
  document.querySelectorAll('.mushroom').forEach(oneMus => {
    if (state.mushrooms) {
      oneMus.style.visibility = 'visible'
    } else {
      oneMus.style.visibility = 'hidden'
    }
  });
}
function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePep => {
    if (state.greenPeppers){
      onePep.style.visibility = 'visible'
    } else {
      onePep.style.visibility = 'hidden'
    }
  })
}
function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(sau =>{
    if (state.whiteSauce){
      sau.classList.add('sauce-white')
    } else {
      sau.classList.remove('sauce-white')
    }
  })
}
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(cru =>{
    if (state.glutenFreeCrust){
      cru.classList.add('crust-gluten-free')
    } else {
      cru.classList.remove('crust-gluten-free')
    }
  })
}
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni){
    document.querySelector('.btn.btn-pepperoni').classList.add('active')
  } else {
    document.querySelector('.btn.btn-pepperoni').classList.remove('active')
  }
  if (state.mushrooms){
    document.querySelector('.btn.btn-mushrooms').classList.add('active')
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active')
  }
  if (state.greenPeppers){
    document.querySelector('.btn.btn-green-peppers').classList.add('active')
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active')
  }
  if (state.whiteSauce){
    document.querySelector('.btn.btn-sauce').classList.add('active')
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove('active')
  }
  if (state.glutenFreeCrust){
    document.querySelector('.btn.btn-crust').classList.add('active')
  } else {
    document.querySelector('.btn.btn-crust').classList.remove('active')
  }
}
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let pricePep = 0
  let priceMush = 0
  let priceGreen = 0
  let priceWhite = 0
  let priceGluten = 0
  const panel = document.querySelector('.panel.price') 
  const list = panel.querySelectorAll('li')
  const listArr = [...list]
  const total = panel.querySelector(`strong`)
  if (!state.pepperoni){
    pricePep = 0
    listArr[0].innerText = ''
    listArr[0].style.display = 'none'
    } else {
    pricePep = ingredients.pepperoni.price
    listArr[0].innerText = `$${ingredients.pepperoni.price} pepperoni`
    listArr[0].style.display = 'block'
  }
  if (!state.mushrooms){
    priceMush = 0
    listArr[1].innerText = ''
    listArr[1].style.display = 'none'
    } else {
      priceMush = ingredients.mushrooms.price
    listArr[1].innerText = `$${ingredients.mushrooms.price} mushrooms`
    listArr[1].style.display = 'block'
  }
  if (!state.greenPeppers){
    priceGreen = 0
    listArr[2].innerText = ''
    listArr[2].style.display = 'none'
    } else {
    priceGreen = ingredients.greenPeppers.price
    listArr[2].innerText = `$${ingredients.greenPeppers.price} green peppers`
    listArr[2].style.display = 'block'
  }
  if (!state.whiteSauce){
    priceWhite = 0
    listArr[3].innerText = ''
    listArr[3].style.display = 'none'
    } else {
    priceWhite = ingredients.whiteSauce.price
    listArr[3].innerText = `$${ingredients.whiteSauce.price} white sauce`
    listArr[3].style.display = 'block'
  }
  if (!state.glutenFreeCrust){
    priceGluten = 0
    listArr[4].innerText = ''
    listArr[4].style.display = 'none'
    } else {
    priceGluten = ingredients.glutenFreeCrust.price
    listArr[4].innerText = `$${ingredients.glutenFreeCrust.price} gluten-free crust`
    listArr[4].style.display = 'block'
  }
  total.innerText = `$${basePrice+pricePep+priceMush+priceGreen+priceWhite+priceGluten}`
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
  renderEverything()
})
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything()
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything()
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything()
})