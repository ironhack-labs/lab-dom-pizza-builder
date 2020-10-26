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
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
;    }
  })
}

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce.sauce-white')
  if (state.whiteSauce) {
    sauce.style.visibility = 'visible';
  } else {
    sauce.style.visibility = 'hidden';
  }
}



function renderGlutenFreeCrust() {
  const gluten = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    gluten.classList.remove('crust-gluten-free');
  } else {
    gluten.classList.add('crust-gluten-free')
  }
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

    const btnPepperoni = document.querySelector('.btn.btn-pepperoni')
    if (!state.pepperoni) {
      btnPepperoni.classList.remove('active')
    } else {
      btnPepperoni.classList.add('active')
    }
    const btnMushrooms = document.querySelector('.btn.btn-mushrooms')
    if (!state.mushrooms) {
      btnMushrooms.classList.remove('active')
    } else {
      btnMushrooms.classList.add('active')
    }
    btnGreenPeppers = document.querySelector('.btn.btn-green-peppers')
    if (!state.greenPeppers) {
      btnGreenPeppers.classList.remove('active')
    } else {
      btnGreenPeppers.classList.add('active')
    }
    btnWhiteSauce = document.querySelector('.btn.btn-sauce')
    if (!state.whiteSauce) {
      btnWhiteSauce.classList.remove('active')
    } else {
      btnWhiteSauce.classList.add('active')
    }
    btnGlutenFree = document.querySelector('.btn.btn-crust')
    if (!state.glutenFreeCrust) {
      btnGlutenFree.classList.remove('active')
    } else {
      btnGlutenFree.classList.add('active')
    }
  }

  function createIngredientLi(text){
    var li = document.createElement('li')
    li.innerText = text
    return li;
  }


function renderPrice() {
  
  const priceList = document.querySelector('.price ul')

  const totalPrice = document.querySelector('.price strong')

 
  
  var child = priceList.lastElementChild;  
  while (child) { 
      priceList.removeChild(child); 
      child = priceList.lastElementChild; 
  } 

  let acumulado = 0

  if (state.pepperoni) {
      priceList.appendChild(createIngredientLi("$" + ingredients.pepperoni.price + " " + ingredients.pepperoni.name))
      acumulado += ingredients.pepperoni.price
  }

  if (state.mushrooms) {
    priceList.appendChild(createIngredientLi("$" + ingredients.mushrooms.price + " " + ingredients.mushrooms.name))
    acumulado += ingredients.mushrooms.price
  }
  if (state.greenPeppers) {
    priceList.appendChild(createIngredientLi("$" + ingredients.greenPeppers.price + " " + ingredients.greenPeppers.name))
    acumulado += ingredients.greenPeppers.price
  }
  if (state.whiteSauce) {
    priceList.appendChild(createIngredientLi("$" + ingredients.whiteSauce.price + " " + ingredients.whiteSauce.name))
    acumulado += ingredients.whiteSauce.price
  }
  if (state.glutenFreeCrust) {
    priceList.appendChild(createIngredientLi("$" + ingredients.glutenFreeCrust.price + " " + ingredients.glutenFreeCrust.name))
    acumulado += ingredients.glutenFreeCrust.price

  }
 
  totalPrice.innerText = "$" + (basePrice + acumulado)

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
