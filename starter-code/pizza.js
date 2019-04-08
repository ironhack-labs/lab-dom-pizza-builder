// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}



// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: false,
  mushrooms: false,
  greenPeppers: false,
  whiteSauce: false,
  glutenFreeCrust: false
}

if (state.pepperonni == false){
  ingredients.pepperonni.price = 0
} else {
  ingredients.pepperonni.price = 1
}

if (state.mushrooms == false){
  ingredients.mushrooms.price = 0
} else {
  ingredients.mushrooms.price = 1
}

if (state.greenPeppers == false){
  ingredients.greenPeppers.price = 0
} else {
  ingredients.greenPeppers.price = 1
}

if (state.whiteSauce == false){
  ingredients.whiteSauce.price = 0
} else {
  ingredients.whiteSauce.price = 3
}

if (state.glutenFreeCrust == false){
  ingredients.glutenFreeCrust.price = 0
} else {
  ingredients.glutenFreeCrust.price = 5
}



// let priceSum = 10

// if (state.pepperonni == false) {

//   priceSum = priceSum + 1
// }


// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderPrice()
}

function renderPepperonni() {


  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
      console.log(ingredients.pepperonni.price)
      renderPrice()
    }
    else {
      $pep.style.visibility = "hidden";
      console.log(0)

      renderPrice()


    }
  })
  let price = document.querySelector('.price.panel strong');
  console.log(price)
  let pInit = 10;
  if ( state.pepperonni) {
    document.querySelector('.panel.price ul li:nth-child(1)').style.display='block';
    pPepperoni = 1;
    pInit = pInit + pPepperoni;
    renderPrice()

  } else {
    document.querySelector('.panel.price ul li:nth-child(1)').style.display='none';
    renderPrice()

  }
  }

// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushroom) {
      $mushroom.style.visibility = "visible";
      console.log(ingredients.mushrooms.price)
      renderPrice()


    }
    else {
      $mushroom.style.visibility = "hidden";
      console.log(0)
      renderPrice()

    }
  })
  let price = document.querySelector('.price.panel');
  let pInit = 10;
  if ( state.mushroom) {
    document.querySelector('.panel.price ul li:nth-child(2)').style.display='block';
    pMushroom = 1;
    pInit = pInit + pMushroom;
  } else {
    document.querySelector('.panel.price ul li:nth-child(2)').style.display='none';
  }
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenPepper) {
      $greenPepper.style.visibility = "visible";
      console.log(ingredients.greenPeppers.price)
      renderPrice()

    }
    else {
      $greenPepper.style.visibility = "hidden";
      console.log(0)
      renderPrice()

    }
  })
  let price = document.querySelector('.price.panel');
  let pInit = 10;
  if ( state.greenPepper) {
    document.querySelector('.panel.price ul li:nth-child(3)').style.display='block';
    pGreenPepper = 1;
    pInit = pInit + pGreenPepper;
  } else {
    document.querySelector('.panel.price ul li:nth-child(3)').style.display='none';
  }
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  console.log($('.sauce'))
    if ($('.sauce').hasClass('sauce-white')) {
      $('.sauce').removeClass('sauce-white');
      console.log(0)
      renderPrice()

    }
    else {
      $('.sauce').addClass('sauce-white');
      console.log(ingredients.whiteSauce.price)
      renderPrice()

    }
    let price = document.querySelector('.price.panel');
  let pInit = 10;
  if ( state.sauceWhite) {
    document.querySelector('.panel.price ul li:nth-child(4)').style.display='block';
    pSauceWhite = 3;
    pInit = pInit + pSauceWhite;
  } else {
    document.querySelector('.panel.price ul li:nth-child(4)').style.display='none';
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  // $('.gluten-free-crust')
  console.log($('.crust'))
    if ($('.crust').hasClass('crust-gluten-free')) {
      $('.crust').removeClass('crust-gluten-free');
      console.log(0)
      renderPrice()

    }
    else {
      $('.crust').addClass('crust-gluten-free');
      console.log(ingredients.glutenFreeCrust.price)
      renderPrice()

    }
    let price = document.querySelector('.price.panel strong');
  let pInit = 10;
  if ( state.glutenFreeCrust) {
    document.querySelector('.panel.price ul li:nth-child(5)').style.display='block';
    pGlutenFreeCrust = 5;
    pInit = pInit + pGlutenFreeCrust;
  } else {
    document.querySelector('.panel.price ul li:nth-child(5)').style.display='none';
    
 
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  $('.btn').click(function(e){
    $(this).toggleClass('active')
  })
}

function renderPrice() {

  let ingredientPrice = 0

  if(state.pepperonni == true){
    ingredientPrice = ingredientPrice + 1
  }


  if(state.mushroom == true){
    ingredientPrice = ingredientPrice + 1
  }


  if(state.greenPepper == true){
    ingredientPrice = ingredientPrice + 1
  }

  if(state.sauceWhite == true){
    ingredientPrice = ingredientPrice + 3
  }

  if(state.glutenFreeCrust == true){
    ingredientPrice = ingredientPrice + 5
  }


  // $('strong').replaceWith(basePrice + ingredientPrice);
  $('strong').replaceWith(`<strong>$ ${basePrice + ingredientPrice}<strong>`);


  console.log("renderPrice is being called")
  // console.log(basePrice + ingredientPrice)
  console.log(ingredientPrice)

 
  /*let total = priceSum;
  let tag = document.querySelector('aside.panel.price.ul');
  tag.innerHTML = '';

    /*if(state[i]){
     total += ingredients[i].price;
      tag.innerHTML += `<li>${ingredients[i].price} ${ingredients[i].name.toLowerCase()}</li>`
   }
    document.querySelector('aside.panel.price.ul').innerHTML = '$' + total;  
*/
  //}
 
  // Iteration 4: change the HTML of `<aside class="panel price">`
    /*$("#panelPrice").click(function(){
        $("#panelPrice").value($(this).value());
})*/
}


renderEverything()
renderButtons()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderPepperonni()
  renderPrice()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushroom = !state.mushroom
  renderMushrooms()
  renderPrice()

}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPepper = !state.greenPepper
  renderGreenPeppers()
  renderPrice()

}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.sauceWhite = !state.sauceWhite
  renderWhiteSauce()
  renderPrice()

}

//Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderGlutenFreeCrust()
  renderPrice()

}
