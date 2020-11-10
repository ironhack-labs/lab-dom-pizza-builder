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
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(sauce => {
    if (state.whiteSauce) {
      sauce.className = 'sauce sauce-white';
    } else {
      sauce.className = 'sauce';
    }
  });
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(crust => {
    if (state.glutenFreeCrust) {
      crust.className = 'crust crust-gluten-free'
    } else {
      crust.className = 'crust'
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  document.querySelectorAll('.btn-pepperoni').forEach(btn => {
    if (state.pepperoni) {
      btn.className = 'btn btn-pepperoni active'} else {btn.className = 'btn btn-pepperoni'}
  })
  document.querySelectorAll('.btn-mushrooms').forEach(btn => {
    if (state.mushrooms) {
      btn.className = 'btn btn-mushrooms active'} else {btn.className = 'btn btn-mushrooms'}
  })
  document.querySelectorAll('.btn-green-peppers').forEach(btn => {
    if (state.greenPeppers) {
      btn.className = 'btn btn-green-peppers active'} else {btn.className = 'btn btn-green-peppers'}
  })
  document.querySelectorAll('.btn-sauce').forEach(btn => {
    if (state.whiteSauce) {
      btn.className = 'btn btn-sauce active'} else {btn.className = 'btn btn-sauce'}
  })
  document.querySelectorAll('.btn-crust').forEach(btn => {
    if (state.glutenFreeCrust) {
      btn.className = 'btn btn-crust active'} else {btn.className = 'btn btn-crust'}
  })

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
    basePrice = 10
    const price = document.querySelectorAll('.price')
    const priceArr = [...price]
    const child = priceArr[0].children
    const childArr = [...child]
    const listItem = childArr[2].children
    const listItemArr = [...listItem]
    const list = listItemArr.map(item => {
      return item.innerText
    })

    const strong = document.getElementsByTagName('strong')
    const strongArr = [...strong]
    if(state.pepperoni){
      basePrice += ingredients.pepperoni.price
      listItemArr[0].classList.remove('visibility')
    }else if(!state.pepperoni){
      listItemArr[0].classList.add('visibility')
    }
    if(state.mushrooms){
      basePrice += ingredients.mushrooms.price
      listItemArr[1].classList.remove('visibility')
    }else if(!state.mushrooms)
      listItemArr[1].classList.add('visibility')
    if(state.greenPeppers){
      basePrice += ingredients.greenPeppers.price
      listItemArr[2].classList.remove('visibility')
    }else if(!state.greenPeppers){
      listItemArr[2].classList.add('visibility')
    }
    if(state.whiteSauce){
      basePrice += ingredients.whiteSauce.price
      listItemArr[3].classList.remove('visibility')
    }else if(!state.whiteSauce){
      listItemArr[3].classList.add('visibility')
    }
    if(state.glutenFreeCrust){
      basePrice += ingredients.glutenFreeCrust.price
      listItemArr[4].classList.remove('visibility')
    }else if(!state.gluttenFreecrust){
      listItemArr[4].classList.add('visibility')
    }
    strongArr[0].innerText = basePrice    



  

}




renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
