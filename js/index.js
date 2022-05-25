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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  console.log("works yaeh")
  document.querySelectorAll('.green-pepper').forEach((oneGP) => {
    if (state.greenPeppers) {
      oneGP.style.visibility = 'visible';
    } else {
      oneGP.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  console.log("works")
  if (state.whiteSauce) {
    document.querySelector('.sauce-white').style.visibility = 'visible';
  } else {
    document.querySelector('.sauce-white').style.visibility = 'hidden';
  }
}


function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //he intentado encontrar en el css que es lo que se activa y toquetearlo
  //a ver si consigo entender mejor lo que pasa, y no cambia nada! me gustaría saber
  //todo lo que pasa en este lab, pero supongo que solo importan las iteraciones por ahora
  const peperoniBtn = document.querySelector('.btn.btn-pepperoni') 
  if (state.pepperoni) {
    peperoniBtn.classList.add('active')
  } else {
    peperoniBtn.classList.remove('active')
  }

  const mushroomBtn = document.querySelector('.btn.btn-mushrooms')
  if (state.mushrooms) {
    mushroomBtn.classList.add('active')
  } else {
    mushroomBtn.classList.remove('active')
  }

  const greenPepperBtn = document.querySelector('.btn.btn-green-peppers')
  if (state.greenPeppers) {
    greenPepperBtn.classList.add('active')
  } else {
    greenPepperBtn.classList.remove('active')
  }

  const sauceBtn = document.querySelector('.btn.btn-sauce')
  if (state.whiteSauce) {
    sauceBtn.classList.add('active')
  } else {
    sauceBtn.classList.remove('active')
  }

  const crustBtn = document.querySelector('.btn.btn-crust')
  if (state.glutenFreeCrust) {
    crustBtn.classList.add('active')
  } else {
    crustBtn.classList.remove('active')
  }
}

function renderPrice() {
 // Iteration 4: change the HTML of `<aside class="panel price">`
//   const priceTotal = document.querySelector('aside.panel.price strong');
//   const listOfPrices = Array.from(document.querySelectorAll('aside>ul>li'));
//   console.log(listOfPrices)
//   const onlyNumbers = listOfPrices.map(element =>
//   element.innerText.split(" ")[0].split('')[1]
// );
// console.log(onlyNumbers);
// conseguí los números en un array y podría acceder a las posiciones para
//usarlo, pero es complicarme mas la vida
//vuelvo al plan original de borrar la lista e ir añadiendo. 
const priceIngredients = document.querySelector('aside.panel.price ul');
  priceIngredients.innerHTML = '';

  const priceTotal = document.querySelector('aside.panel.price strong');

  let pricePepperoni, priceMushroom, pricePepper, priceWhiteSauce, priceCrust;

  if (
    document.querySelector('.btn-pepperoni.active')
  ) {
    pricePepperoni = ingredients.pepperoni.price;
    const pricePepLi = document.createElement('li');
    pricePepLi.innerText = `$${pricePepperoni} pepperoni`;
    document.querySelector('.panel.price ul').append(pricePepLi);
  } else {
    pricePepperoni = 0;
  }

  if (
    document.querySelector('.btn-mushrooms.active')
  ) {
    priceMushroom = ingredients.mushrooms.price;
    const priceMushLi = document.createElement('li');
    priceMushLi.innerText = `$${priceMushroom} mushrooms`;
    document.querySelector('.panel.price ul').append(priceMushLi);
  } else {
    priceMushroom = 0;
  }

  if (
    document
      .querySelector('.btn-green-peppers.active')
  ) {
    pricePepper = ingredients.greenPeppers.price;
    const priceGreenPepLi = document.createElement('li');
    priceGreenPepLi.innerText = `$${pricePepper} green peppers`;
    document.querySelector('.panel.price ul').append(priceGreenPepLi);
  } else {
    pricePepper = 0;
  }

  if (document.querySelector('.btn-sauce.active')) {
    priceWhiteSauce = ingredients.whiteSauce.price;
    const priceWhiteSauceLi = document.createElement('li');
    priceWhiteSauceLi.innerText = `$${priceWhiteSauce} white sauce`;
    document.querySelector('.panel.price ul').append(priceWhiteSauceLi);
  } else {
    priceWhiteSauce = 0;
  };

  if (document.querySelector('.btn-crust.active')) {
    priceCrust = ingredients.glutenFreeCrust.price;
    const priceCrustLi = document.createElement('li');
    priceCrustLi.innerText = `$${priceCrust} gluten-free crust`;
    document.querySelector('.panel.price ul').append(priceCrustLi);
  } else {
    priceCrust = 0;
  }

  let allThePrices = basePrice + pricePepperoni + priceMushroom +  pricePepper +  priceWhiteSauce +  priceCrust;
  if (allThePrices < 11){
    priceTotal.innerText = 'Put something on it bambino! Non hai fame? '
} else if (allThePrices <16){
    priceTotal.innerText = '$' + allThePrices +  ' Approfittare!' ; 
}else if(allThePrices < 20){
  priceTotal.innerText = '$' + allThePrices +  ' Now this is a good pizza!' ; 
} else{
  priceTotal.innerText = '$' + allThePrices +  ' Mamma mia! cazzo!' ; 
}
}//igual no me pasa los test, pero funciona, así que un mensaje adicional//




renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
  document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;

  renderEverything();

});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});