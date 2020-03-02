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
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  
  const $sauce = document.getElementsByClassName("sauce");

  if(!state.whiteSauce){
    //console.log("its false!");
    $sauce[0].classList.remove("sauce-white");
  } else {
    //console.log("nope, its true");
    $sauce[0].classList.add("sauce-white");
  }  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const $crust = document.getElementsByClassName("crust");

  if(!state.glutenFreeCrust){
    //console.log("its false!");
    $crust[0].classList.remove("crust-gluten-free");
  } else {
    //console.log("nope, its true");
    $crust[0].classList.add("crust-gluten-free");
  }  
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const $button = document.getElementsByClassName("btn");
  //console.log($button);

  // PEPPERONI
  if(state.pepperoni){
    //console.log("pepperoni btn is active");
    $button[0].classList.add("active");
  } else {
    //console.log("pepperoni btn NOT active");
    $button[0].classList.remove("active");
  }

  // MUSHROOMS
  if(state.mushrooms){
    $button[1].classList.add("active");
  } else {
    $button[1].classList.remove("active");
  }

  //GREEN-PEPPERS
  if(state.greenPeppers){
    $button[2].classList.add("active");
  } else {
    $button[2].classList.remove("active");
  }

  //WHITE-SAUCE
  if(state.whiteSauce){
    $button[3].classList.add("active");
  } else {
    $button[3].classList.remove("active");
  }

  //GLUTEN FREE CRUST
  if(state.glutenFreeCrust){
    $button[4].classList.add("active");
  } else {
    $button[4].classList.remove("active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const $list = document.getElementsByTagName("ul");
  const $newClassUl = $list[1].classList.add("prices");
  //console.log($list[1].childNodes[1]);
  console.log($newClassUl);

  // $list[1].forEach(liItem => {
  //   if (state.pepperoni){
  //     liItem.style.visibility = 'visible';
  //   } else {
  //     liItem.style.visibility = 'hidden';
  //   }
  // })

  // if(state.pepperoni){
  //   $list[1].childNodes[1]
  // }
  


  // document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
  //   if (state.greenPeppers) {
  //     oneGreenPepper.style.visibility = 'visible';
  //   } else {
  //     oneGreenPepper.style.visibility = 'hidden';
  //   }
  // });
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
