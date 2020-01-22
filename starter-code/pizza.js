var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

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
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($greenPeppers){
    if (state.greenPeppers) {
      $greenPeppers.style.visibility = "visible";
    }
    else {
      $greenPeppers.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  const $sauceWhite = document.querySelector('.sauce')

    if (state.whiteSauce) {
      $sauceWhite.classList.add('sauce-white');
    }
    else {
      $sauceWhite.classList.remove('sauce-white');
    }
}

function renderGlutenFreeCrust() {
  const $glutenFreeCrust = document.querySelector('.crust')

  if (state.glutenFreeCrust) {
    $glutenFreeCrust.classList.add('crust-gluten-free');
  }
  else {
    $glutenFreeCrust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  document.querySelectorAll('.btn').forEach(function(buttons) {
    if (buttons.classList.contains('btn-pepperonni')) {
      if (state.pepperonni) 
        buttons.classList.add('active');
      else 
        buttons.classList.remove('active');
    }
    else if (buttons.classList.contains('btn-mushrooms')) {
      if (state.mushrooms)
        buttons.classList.add('active');
      else 
        buttons.classList.remove('active');
    }
    else if (buttons.classList.contains('btn-green-peppers')) {
      if (state.greenPeppers)
        buttons.classList.add('active');
      else
        buttons.classList.remove('active');
    }
    else if (buttons.classList.contains('btn-sauce')) {
      if (state.whiteSauce)
        buttons.classList.add('active');
      else 
        buttons.classList.remove('active');
    }
    else if (buttons.classList.contains('btn-crust')) {
      if (state.glutenFreeCrust)
        buttons.classList.add('active');
      else
        buttons.classList.remove('active');
    }
  })
}

function renderPrice() {
  const price = document.querySelector('.panel.price');
  const ul = price.querySelector('ul');
  let total = basePrice;
  ul.innerHTML = "";
  for(let position in ingredients){
    if (state[position]) {
      total += ingredients[position].price
      ul.innerHTML += `<li>+ $ ${ingredients[position].price} ${ingredients[position].name}</li>`
    }
  }
  document.querySelector('strong').innerHTML = `Total: $${total}` ;
}


renderEverything()

document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}