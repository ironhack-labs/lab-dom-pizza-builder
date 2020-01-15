// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1, state: true},
  mushrooms: {name: 'Mushrooms', price: 1, state: true},
  greenPeppers: {name: 'Green Peppers', price: 1, state: true},
  whiteSauce: {name: 'White sauce', price: 3, state:false},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5, state: false}
}

// Initial value of the state (the state values can change over time)
// var state = {
//   pepperonni: true,
//   mushrooms: true,
//   greenPeppers: true,
//   whiteSauce: false,
//   glutenFreeCrust: false
// }

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (ingredients.pepperonni.state) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`

  document.querySelectorAll('.mushroom').forEach(function(mushroom){
    if (ingredients.mushrooms.state){
      mushroom.style.visibility = "visible";
    }
    else {
      mushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach(function(greenPepper){
    if(ingredients.greenPeppers.state){
      greenPepper.style.visibility = "visible";
    }
    else {
      greenPepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function(sauce){
    if(ingredients.whiteSauce.state){
      sauce.classList.add('sauce-white');
    }
    else {
      sauce.classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function(crust){
    if(ingredients.glutenFreeCrust.state){
      crust.classList.add('crust-gluten-free');
    }
    else {
      crust.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (ingredients.pepperonni.state){
    document.querySelector('.btn.btn-pepperonni').classList.add('active');
  } else {
    document.querySelector('.btn.btn-pepperonni').classList.remove('active');
  }
  if (ingredients.mushrooms.state){
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  }
  if (ingredients.greenPeppers.state){
    document.querySelector('.btn.btn-green-peppers').classList.add('active');
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  }
  if (ingredients.whiteSauce.state){
    document.querySelector('.btn.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  }
  if (ingredients.glutenFreeCrust.state){
    document.querySelector('.btn.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn.btn-crust').classList.remove('active');
  }
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let target = document.querySelector('.panel.price ul');
  target.innerHTML = "";
  let totalPrice = document.querySelector('strong');
  let x = 10;

  if (ingredients.pepperonni.state){
    target.innerHTML += '<li>$1 pepperonni</li>';
    x +=1;
  }
  if (ingredients.mushrooms.state){
    target.innerHTML += '<li>$1 mushrooms</li>';
    x+=1;
  }
  if (ingredients.greenPeppers.state){
    target.innerHTML += '<li>$1 green peppers</li>';
    x+=1;
  }
  if (ingredients.whiteSauce.state){
    target.innerHTML += '<li>$3 white sauce</li>';
    x+=3;
  }
  if (ingredients.glutenFreeCrust.state){
    target.innerHTML += '<li>$5 gluten-free crust</li>';
    x+=5;
  }
  totalPrice.textContent = `$ ${x}`;
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  ingredients.pepperonni.state = !ingredients.pepperonni.state;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  ingredients.mushrooms.state = !ingredients.mushrooms.state;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  ingredients.greenPeppers.state = !ingredients.greenPeppers.state;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  ingredients.whiteSauce.state = !ingredients.whiteSauce.state;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  ingredients.glutenFreeCrust.state = !ingredients.glutenFreeCrust.state;
  renderEverything();
}