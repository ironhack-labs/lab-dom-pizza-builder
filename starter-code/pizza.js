// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1, id: "pep" },
  mushrooms: { name: 'Mushrooms', price: 1, id: "mushroom" },
  greenPeppers: { name: 'Green Peppers', price: 1, id: "green-pepper" },
  whiteSauce: { name: 'White sauce', price: 3000, id: "sauce" },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5, id: "crust" }
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {

  renderIngredient("pepperonni");
  renderIngredient("mushrooms");
  renderIngredient("greenPeppers")

  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

addEventListeners();
renderEverything()

// All functions we need are below //

function renderIngredient(ingredient) {

  document.querySelectorAll("." + ingredients[ingredient].id).forEach($iterator => state[ingredient] ? $iterator.style.visibility = "visible" : $iterator.style.visibility = "hidden");

}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(function ($sauce) {
    if (state.whiteSauce) {
      $sauce.classList.add('sauce-white');
    }
    else {
      $sauce.classList.remove('sauce-white');
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function ($crust) {
    if (state.glutenFreeCrust) {
      $crust.classList.add('crust-gluten-free');
    }
    else {
      $crust.classList.remove('crust-gluten-free');
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {

  document.getElementById("ingredients").innerHTML = "";
  amount = 10;

  for (let item in ingredients) {

    (state[item]) ? addChildToIngredients(item) : removeChildFromIngredients(item);
    amount += + (Boolean(state[item])) * +(ingredients[item].price);
  }

  document.getElementById("sum").innerHTML = "$ " + amount;

}

function removeChildFromIngredients(child) {

  ItemToRemove = document.getElementById(child);
  if (ItemToRemove) document.getElementById("ingredients").removeChild(ItemToRemove);

}

function addChildToIngredients(child) {

  newItem = document.createElement("li");
  newItem.id = child;
  newItem.innerHTML = "$" + ingredients[child].price + " " + ingredients[child].name;
  document.getElementById("ingredients").appendChild(newItem);

}


function addEventListeners() {

  for (item in state) {
    console.log(item)
    document.querySelector('.btn.btn-' + ingredients[item].id).onclick = actionOnButton.bind(item)
  }

  function actionOnButton(e) {

    e.target.classList.toggle("active");
    state[this] = !state[this]
    renderEverything()
  }
}
