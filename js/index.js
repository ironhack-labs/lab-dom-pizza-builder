// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

const totalPrice = [basePrice, ingredients.pepperoni.price, ingredients.mushrooms.price, ingredients.greenPeppers.price]

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

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';

    } else {
      onePep.style.visibility = 'hidden';

    }
  });
  

}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
      
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((oneSauce) => {
    if (state.whiteSauce) {
      oneSauce.style.visibility = 'visible';
    } else {
      oneSauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('#massa').forEach((oneCrust) => {
    if (state.glutenFreeCrust) {
      document.querySelector('#massa').setAttribute('class','crust crust-gluten-free')
    } else {
      document.querySelector('#massa').setAttribute('class','crust')
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  document.querySelector('#total-price').innerHTML=`<strong> $${totalPrice.reduce((acumulator,price)=>acumulator+price,0)}</strong>`


}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function (event) {
  state.pepperoni = !state.pepperoni;
  const pepperoniPrice = ingredients.pepperoni.price
  state.pepperoni? totalPrice.push(pepperoniPrice) : totalPrice.includes(pepperoniPrice)? totalPrice.splice(totalPrice.indexOf(pepperoniPrice), 1) : null

  switch (event.target.className) {
   case 'btn btn-pepperoni active':
     event.target.className = 'btn btn-pepperoni'
     document.querySelector('#pepperoni-list').style='display:none'
     break
   case 'btn btn-pepperoni':
    event.target.className = 'btn btn-pepperoni active'
    document.querySelector('#pepperoni-list').style='display:block'
    break
  }
   renderEverything();
   console.log(totalPrice)

});



document.querySelector('.btn.btn-mushrooms').addEventListener('click', function (event) {
  state.mushrooms = !state.mushrooms;
  const mushroomsPrice = ingredients.mushrooms.price
  state.mushrooms? totalPrice.push(mushroomsPrice) : totalPrice.includes(mushroomsPrice)? totalPrice.splice(totalPrice.indexOf(mushroomsPrice), 1) : null
   
  switch (event.target.className) {
    case 'btn btn-mushrooms active':
      event.target.className = 'btn btn-mushrooms'
      document.querySelector('#mushroom-list').style='display:none'
      break
    case 'btn btn-mushrooms':
     event.target.className = 'btn btn-mushrooms active'
     document.querySelector('#mushroom-list').style='display:block'
     break
   }
  renderEverything();
     console.log(totalPrice)

});

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function (event) {
  state.greenPeppers = !state.greenPeppers;
  const greenPeppersPrice = ingredients.greenPeppers.price
  state.greenPeppers? totalPrice.push(greenPeppersPrice) : totalPrice.includes(greenPeppersPrice)? totalPrice.splice(totalPrice.indexOf(greenPeppersPrice), 1) : null

  switch (event.target.className) {
    case 'btn btn-green-peppers active':
      event.target.className = 'btn btn-green-peppers'
      document.querySelector('#pepper-list').style='display:none'
      break
    case 'btn btn-green-peppers':
     event.target.className = 'btn btn-green-peppers active'
     document.querySelector('#pepper-list').style='display:block'

     break
   }
  renderEverything();
  console.log(totalPrice)

});

document.querySelector('.btn.btn-sauce').addEventListener('click', function (event) {
  state.whiteSauce = !state.whiteSauce;
  const saucePrice = ingredients.whiteSauce.price
  state.whiteSauce? totalPrice.push(saucePrice) : totalPrice.includes(saucePrice)? totalPrice.splice(totalPrice.indexOf(saucePrice), 1) : null

  switch (event.target.className) {
    case 'btn btn-sauce active':
      event.target.className = 'btn btn-sauce'
      document.querySelector('#sauce-list').style='display:none'

      break
    case 'btn btn-sauce':
     event.target.className = 'btn btn-sauce active'
     document.querySelector('#sauce-list').style='display:block'

     break
   }
  renderEverything();
  console.log(totalPrice)

});

document.querySelector('.btn.btn-crust').addEventListener('click', function (event) {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  const crustPrice = ingredients.glutenFreeCrust.price
  state.glutenFreeCrust? totalPrice.push(crustPrice) : totalPrice.includes(crustPrice)? totalPrice.splice(totalPrice.indexOf(crustPrice), 1) : null

  switch (event.target.className) {
    case 'btn btn-crust active':
      event.target.className = 'btn btn-crust'
      document.querySelector('#crust-list').style='display:none'

      break
    case 'btn btn-crust':
     event.target.className = 'btn btn-crust active'
     document.querySelector('#crust-list').style='display:block'

     break
   }
  renderEverything();
  console.log(totalPrice)

});


