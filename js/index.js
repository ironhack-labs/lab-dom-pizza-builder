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
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });

}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach(oneGreen => {
    if (state.greenPeppers) {
      
      oneGreen.style.visibility = 'visible';
    } else {
      oneGreen.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

    let sauce = document.querySelector('.sauce');
    if (state.whiteSauce) {
      
      sauce.setAttribute('class','sauce sauce-white');
      
    } else {
      sauce.setAttribute('class','sauce');
    }
  };


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  let crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    
    crust.setAttribute('class','crust crust-gluten-free');
    
  } else {
    crust.setAttribute('class','crust');
  }
};


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  
  let totalPrice = basePrice;

  let btnPep = document.querySelector('.btn-pepperoni');
  if (state.pepperoni) {
    
    btnPep.setAttribute('class','btn btn-pepperoni active');
    totalPrice += ingredients.pepperoni.price;

    let pricePep = document.querySelector('.price ul li');
    pricePep = pricePep.textContent;
    pricePep.innerText = pricePep;
    

    
  } else {
    btnPep.setAttribute('class','btn btn-pepperoni');
  
  }

  let btnMush = document.querySelector('.btn-mushrooms');
  if (state.mushrooms) {
    
    btnMush.setAttribute('class','btn btn-mushrooms active');
    totalPrice += ingredients.mushrooms.price;
  
  } else {
    btnMush.setAttribute('class','btn btn-mushrooms');
  }

  let btnGreen = document.querySelector('.btn-green-peppers');
  if (state.greenPeppers) {
    
    btnGreen.setAttribute('class','btn btn-green-peppers active');
    totalPrice += ingredients.greenPeppers.price;
  
  } else {
    btnGreen.setAttribute('class','btn btn-green-peppers');
  }

  let btnSauce = document.querySelector('.btn-sauce');
  if (state.whiteSauce) {
    
    btnSauce.setAttribute('class','btn btn-sauce active');
    totalPrice += ingredients.whiteSauce.price;
    
  } else {
    btnSauce.setAttribute('class','btn btn-sauce');
  }

  let btnCrust = document.querySelector('.btn-crust');
  if (state.glutenFreeCrust) {
    
    btnCrust.setAttribute('class','btn btn-crust active');
    totalPrice += ingredients.glutenFreeCrust.price;
    
  } else {
    btnCrust.setAttribute('class','btn btn-crust');
  }

  let priceTotal = document.querySelector('.crust');

  console.log(priceTotal);

}



function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  const price = document.querySelector('.price strong' );
  price.innerText = '$'+ basePrice;

  console.log(price);


}

renderEverything();
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = ('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn-green-peppers').onclick = ('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').onclick = ('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').onclick = ('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});