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
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
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
    $('.pep').each(function(pep) {
        if(state.pepperonni) {
            $pep.style.visibility = "visible";
            $(this).css({visibility : "visible"});
        } else {
            $(this).css({ visibility : "hidden"});
        }
        });
    }
    
function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  $(".mushroom").each(function(mushroom) {
    if (state.mushrooms) {
      $(this).css({ visibility: "visible" });
    } else {
      $(this).css({ visibility: "hidden" });
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  $(".green-pepper").each(function(pepper) {
    if (state.greenPeppers) {
      $(this).css({ visibility: "visible" });
    } else {
      $(this).css({ visibility: "hidden" });
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  $(".sauce").each(function(sauce) {
    if (!state.whiteSauce) {
      $(this).removeClass("sauce-white");
    } else {
      $(this).addClass("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  $(".crust").each(function(crust) {
    if (!state.glutenFreeCrust) {
      $(this).removeClass("crust-gluten-free");
    } else {
      $(this).addClass("crust-gluten-free");
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperonni) {
    $(".btn-pepperonni").addClass("active");
  } else {
    $(".btn-pepperonni").removeClass("active");
  }
  if (state.mushrooms) {
    $(".btn-mushrooms").addClass("active");
  } else {
    $(".btn-mushrooms").removeClass("active");
  }
  if (state.greenPeppers) {
    $(".btn-green-peppers").addClass("active");
  } else {
    $(".btn-green-peppers").removeClass("active");
  }
  if (state.whiteSauce) {
    $(".btn-sauce").addClass("active");
  } else {
    $(".btn-sauce").removeClass("active");
  }
  if (state.glutenFreeCrust) {
    $(".btn-crust").addClass("active");
  } else {
    $(".btn-crust").removeClass("active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  console.log($(".price li"));

  //CLEARS LIST
  $(".price li").remove();
  let totalPrice = 10;

  if (state.pepperonni) {
    $(".price ul").append(`<li>$1 pepperonni</li>`);
    totalPrice += 1;
  }
  if (state.mushrooms) {
    $(".price ul").append(`<li>$1 mushrooms</li>`);
    totalPrice += 1;
  }
  if (state.greenPeppers) {
    $(".price ul").append(`<li>$1 green peppers</li>`);
    totalPrice += 1;
  }
  if (state.whiteSauce) {
    $(".price ul").append(`<li>$3 white sauce</li>`);
    totalPrice += 3;
  }
  if (state.glutenFreeCrust) {
    $(".price ul").append(`<li>$5 gluten free crust</li>`);
    totalPrice += 5;
  }

  $(".price strong")[0].innerHTML = "$" + totalPrice;
}


// renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
    state.pepperonni = !state.pepperonni;
    renderEverything();
  };
  // Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
  document.querySelector(".btn.btn-mushrooms").onclick = function() {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  };

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector(".btn.btn-green-peppers").onclick = function() {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  };
  // Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
  document.querySelector(".btn.btn-sauce").onclick = function() {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
  };
  // Iteration 2: Add click event listener on `<button class="btn btn-crust">`
  document.querySelector(".btn.btn-crust").onclick = function() {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
  };  