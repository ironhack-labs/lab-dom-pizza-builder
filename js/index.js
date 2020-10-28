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
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const target = document.querySelector('.sauce-white')
    if (state.whiteSauce) {
      target.style.visibility = 'visible';
    } else {
      target.style.visibility = 'hidden';
    }
  };


function renderGlutenFreeCrust() {
  const target = document.querySelector('.crust')
    if (state.glutenFreeCrust) {
      target.classList.add('crust-gluten-free')
    } else {
      target.classList.remove('crust-gluten-free')
    }
  };

function renderButtons() {
  const target = document.getElementsByClassName('btn')
  const targetArr = [...target]

  
  targetArr.forEach((button)=>{
    button.onclick = ()=>{
        if(button.classList.contains('active')){
          button.classList.remove('active')
        } else {
          button.classList.add('active')
        }
      }
  })
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let listHtml = ''
  let totalPrice = 10
  if(state.pepperoni){
    listHtml += `<li> $${ingredients.pepperoni.price} ${ingredients.pepperoni.name} </li> `
    totalPrice += 1
  }
  if(state.mushrooms){
    listHtml = listHtml + `<li> $${ingredients.mushrooms.price} ${ingredients.mushrooms.name} </li> `
    totalPrice += 1
  }
  if(state.greenPeppers){
    listHtml = listHtml + `<li> $${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name} </li> `
    totalPrice += 1
  }
  if(state.whiteSauce){
    listHtml = listHtml + `<li> $${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name} </li> `
    totalPrice += 3
  }
  if(state.glutenFreeCrust){
    listHtml = listHtml + `<li> $${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name} </li> `
    totalPrice += 5
  }
  document.querySelector('.panel.price ul').innerHTML = listHtml
  document.querySelector('.panel.price strong').innerText = `$ ${totalPrice}`


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