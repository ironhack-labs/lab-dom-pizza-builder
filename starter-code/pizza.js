// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1, state: true },
  mushrooms: { name: 'Mushrooms', price: 1, state: true },
  greenPeppers: { name: 'Green Peppers', price: 1, state: true },
  whiteSauce: { name: 'White sauce', price: 3, state: true },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5, state: true }
}



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
  document.querySelectorAll('.pep').forEach(function ($pep) {
    if (ingredients.pepperonni.state) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function ($mushroom) {
    if (ingredients.mushrooms.state) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function ($greenPepper) {
    if (ingredients.greenPeppers.state) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function ($sauce) {
    if (ingredients.whiteSauce.state) {
      $sauce.style.visibility = "visible";
    }
    else {
      $sauce.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function ($crust) {
    if (ingredients.glutenFreeCrust.state) {
      $crust.style.visibility = "visible";
    }
    else {
      $crust.style.visibility = "hidden";
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let underlign = document.querySelectorAll('.btn');
  let i=0;
  for (let key in ingredients) {
      if (ingredients[key].state) {
        underlign[i].classList.add ("active");
      }
      else {
        underlign[i].classList.remove ("active");
      }
      i+=1;
  }
}








function renderPrice() {
  let price = 10;
  for (let key in ingredients) {
    if (ingredients[key].state) {
      price += ingredients[key].price;
    }
  }
  document.getElementById("final-price").innerHTML = "$" + price;

  const ingredientList = [];
  const priceList = [];
  for (let key in ingredients) {
    if (ingredients[key].state) {
      ingredientList.push(key);
      priceList.push(ingredients[key].price);
    }
  }

  const list = document.getElementById("price-list");
  list.innerHTML = "";
  for (i=0; i<priceList.length;i++){
    const li = document.createElement("li")
    li.textContent = "$" + priceList[i] + " " + ingredientList[i];
    list.appendChild(li)
}
  





  // const selectedIngredients = document.getElementsByClassName("priceList");
  // let i=0;
  // for (let key in ingredients) {
  //   if (!ingredients[key].state) {
  //     selectedIngredients.parentNode.removeChild(i)
  //     i+=1;
  //   }
  // }

  
  // const ingredientsList = document.getElementsByClassName("price")
  // console.log(ingredientsList);
  
  

  // Iteration 4: change the HTML of `<aside class="panel price">`
}












renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () {
  ingredients.pepperonni.state = !ingredients.pepperonni.state
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function () {
  ingredients.mushrooms.state = !ingredients.mushrooms.state
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function () {
  ingredients.greenPeppers.state = !ingredients.greenPeppers.state
  renderEverything()
}


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').onclick = function () {
  ingredients.whiteSauce.state = !ingredients.whiteSauce.state
  renderEverything()
}


// Iteration 2: Add click event listener on `<button class="btn btn-crust">` 

document.querySelector('.btn.btn-crust').onclick = function () {
  ingredients.glutenFreeCrust.state = !ingredients.glutenFreeCrust.state
  renderEverything();
}