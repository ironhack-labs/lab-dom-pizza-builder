// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 },
  total : { name: 'Total', price: 18}
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
function renderEverything(index) {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons(index);
  renderPrice(index);
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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  if (state.whiteSauce)
  {
    document.querySelector('.sauce').classList += ' sauce-white'
  }
  else
  {
    document.querySelector('.sauce').classList = 'sauce'
  }
}

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust)
  {
    document.querySelector('.crust').classList += ' crust-gluten-free'
  }
  else
  {
    document.querySelector('.crust').classList = 'crust'
  }
}

function renderButtons(index) {
  if(index != undefined)
    document.getElementsByClassName('btn')[index].classList.toggle('active')
}

function renderPrice(index) {
  if(index === undefined)
  {
    for(i=0;i<Object.entries(ingredients).length-1; i++)
    {
      renderPrice(i)
    }
    return
  }
  if(document.getElementsByClassName('btn')[index].className.includes('active'))
  {
    ingredients.total.price += Object.values(ingredients)[index].price
    document.querySelectorAll('.price ul li')[index].style.display = 'block'
  }
  else
  {
    ingredients.total.price -= Object.values(ingredients)[index].price
    document.querySelectorAll('.price ul li')[index].style.display = 'none'
  }
  document.querySelector('.price strong').innerText = `$${ingredients.total.price}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything(0);
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything(1);
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything(2);
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything(3);
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything(4);
});