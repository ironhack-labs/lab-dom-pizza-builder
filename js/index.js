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
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
        oneGreenPep.style.visibility = 'visible';
    } else {
        oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
  document.querySelector('.sauce').classList.add('sauce-white');
  } else if (!state.whiteSauce) {
    document.querySelector('.sauce').classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
    } else if (!state.glutenFreeCrust) {
      document.querySelector('.crust').classList.remove('crust-gluten-free');
    }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (!state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  } else { document.querySelector('.btn.btn-sauce').classList.add('active'); }
  if (!state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.remove('active');
  } else { document.querySelector('.btn.btn-crust').classList.add('active'); }
  if (state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').classList.add('active');
  } else { document.querySelector('.btn.btn-pepperoni').classList.remove('active'); }
  if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
  } else { document.querySelector('.btn.btn-mushrooms').classList.remove('active'); }
  if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.add('active');
  } else { document.querySelector('.btn.btn-green-peppers').classList.remove('active'); }
 
}
  
function renderPrice() {


  
  /*
  const list = document.querySelector('aside.panel.price ul li');
  const pepLi = list[0];
  const mushLi = list[1];
  const greenPepLi = list[2];
  const whiteSauceLi = list[3];
  const crustLi = list[4];

  state.pepperoni ? pepLi.style.display = "block" : pepLi.style.display = "none";
  state.mushrooms ? mushLi.style.display = "block" : mushLi.style.display = "none";
  state.greenPeppers ? greenPepLi.style.display = "block" : greenPepLi.style.display = "none";
  state.whiteSauce ? whiteSauceLi.style.display = "none" : whiteSauceLi.style.display = "block";
  state.glutenFreeCrust ? crustLi.style.display = "none" : crustLi.style.display = "block";
  */




  
  // Iteration 4: change the HTML of `<aside class="panel price">`
    if (!state.pepperoni) {
      if (document.querySelector('.panel.price ul li:nth-child(1)').style.display === "block") {
        document.querySelector('.panel.price ul li:nth-child(1)').style.display = "none";
      } 
    } else {
      document.querySelector('.panel.price ul li:nth-child(1)').style.display = "block";
    }

    if (!state.mushrooms) {
      if (document.querySelector('.panel.price ul li:nth-child(2)').style.display === "block") {
        document.querySelector('.panel.price ul li:nth-child(2)').style.display = "none";
      } 
    } else {
      document.querySelector('.panel.price ul li:nth-child(2)').style.display = "block";
    }

    if (!state.greenPeppers) {
      if (document.querySelector('.panel.price ul li:nth-child(3)').style.display === "block") {
        document.querySelector('.panel.price ul li:nth-child(3)').style.display = "none";
      } 
    } else {
      document.querySelector('.panel.price ul li:nth-child(3)').style.display = "block";
    }

    if (state.whiteSauce) {
      if (document.querySelector('.panel.price ul li:nth-child(4)').style.display === "none") {
        document.querySelector('.panel.price ul li:nth-child(4)').style.display = "block";
      } 
    } else {
      document.querySelector('.panel.price ul li:nth-child(4)').style.display = "none";
    }

    if (state.glutenFreeCrust) {
      if (document.querySelector('.panel.price ul li:nth-child(5)').style.display === "none") {
        document.querySelector('.panel.price ul li:nth-child(5)').style.display = "block";
      } 
    } else {
      document.querySelector('.panel.price ul li:nth-child(5)').style.display = "none";
    }
  //  document.querySelector('.panel.price strong').textContent = `$ ${basePrice}`

  let pepFinalPrice = ingredients.pepperoni.price * state.pepperoni;
  let mushFinalPrice =  ingredients.mushrooms.price * state.mushrooms;
  let greenPepFinalPrice =  ingredients.greenPeppers.price * state.greenPeppers;
  let whiteSauceFinalPrice =  ingredients.whiteSauce.price * state.whiteSauce;
  let crustFinalPrice = ingredients.glutenFreeCrust.price * state.glutenFreeCrust;
  
  let finalPrice = basePrice + pepFinalPrice + mushFinalPrice +  greenPepFinalPrice + whiteSauceFinalPrice + crustFinalPrice;
  document.querySelector('.panel.price strong').textContent = `$ ${finalPrice}`
  

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