// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 },
};

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}
function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = 'visible';
    } else {
      $pep.style.visibility = 'hidden';
    }
  });
}
function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mush) {
    if (state.mushrooms) {
      $mush.style.visibility = 'visible';
    } else {
      $mush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($gpep) {
    if (state.greenPeppers) {
      $gpep.style.visibility = 'visible';
    } else {
      $gpep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(function($sauceW) {
    if (state.sauceWhite) {
      $sauceW.style.visibility = 'visible';
    } else {
      $sauceW.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach(function($gluten) {
    if (state.glutenFreeCrust) {
      $gluten.style.visibility = 'visible';
    } else {
      $gluten.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

let sum = 13;
let totalPrice = document.querySelector('.price strong');

let priceList = document.querySelectorAll('.price ul li');
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  for (let i = 0; i < priceList.length; i++) {
    let currentPrice = priceList[i].innerHTML.substr(1, 1);
    console.log('Output for: renderPrice -> currentPrice', currentPrice);
  }
}
renderPrice();
let buttons = document.querySelectorAll('.btn');
// let crustDiv = document.querySelector('#pizza .crust');
// let ifClassExists = crustDiv.innerHTML.includes('crust-gluten-free');
// let glutenClasses = crustDiv.classList;
// if (glutenClasses.contains('crust-gluten-free')) {
//   glutenClasses.remove('crust-gluten-free');
// } else {
//   glutenClasses.add('crust-gluten-free');
// }
// let currentList;
// for (let i = 0; i < priceList.length; i++) {
//   currentList = priceList[i];
// }

buttons.forEach((button, i) => {
  // let elemClasses = button.getAttribute('class');
  // let checkIfButtonActive = elemClasses.includes('active');

  let oneButton = buttons[i].getAttribute('class').includes('active');
  if (!oneButton) priceList[i].style.visibility = 'hidden';
  let currentPrice = priceList[i].innerHTML.substr(1, 1);

  button.addEventListener('click', e => {
    let buttonsClassList = e.target.classList;

    if (buttonsClassList.contains('active')) {
      sum -= Number(currentPrice);
      totalPrice.innerHTML = sum;
    } else {
      sum += Number(currentPrice);
      console.log('Output for: sum', sum);
      totalPrice.innerHTML = sum;
    }

    if (buttonsClassList.contains('active')) {
      buttonsClassList.remove('active');
    } else {
      buttonsClassList.add('active');
    }
    for (let i = 0; i < buttonsClassList.length; i++) {
      let currentClass = buttonsClassList[i];

      priceList.forEach(el => {
        let text = el.innerHTML;

        if (currentClass === 'btn-pepperonni' && text == '$1 pepperonni') {
          if (!state.pepperonni) {
            el.style.visibility = 'visible';
          } else {
            el.style.visibility = 'hidden';
          }
        } else if (currentClass === 'btn-mushrooms' && text == '$1 mushrooms') {
          if (!state.mushrooms) {
            el.style.visibility = 'visible';
          } else {
            el.style.visibility = 'hidden';
          }
        } else if (
          currentClass === 'btn-green-peppers' &&
          text == '$1 green peppers'
        ) {
          if (!state.greenPeppers) {
            el.style.visibility = 'visible';
          } else {
            el.style.visibility = 'hidden';
          }
        } else if (currentClass === 'btn-sauce' && text == '$3 white sauce') {
          let sauceSection = document.querySelector('#pizza .sauce');
          let sauceClasses = sauceSection.classList;
          if (!state.whiteSauce && !sauceClasses.contains('sauce-white')) {
            sauceClasses.add('sauce-white');
            console.log('add: sauceClasses', sauceClasses);
            el.style.visibility = 'visible';
          } else {
            sauceClasses.remove('sauce-white');
            console.log('remove: sauceClasses', sauceClasses);
            el.style.visibility = 'hidden';
          }
        } else if (
          currentClass === 'btn-crust' &&
          text == '$5 gluten-free crust'
        ) {
          let crustSection = document.querySelector('#pizza .crust');
          let glutenClasses = crustSection.classList;
          if (
            !state.glutenFreeCrust &&
            !glutenClasses.contains('crust-gluten-free')
          ) {
            glutenClasses.add('crust-gluten-free');
            el.style.visibility = 'visible';
          } else {
            glutenClasses.remove('crust-gluten-free');
            el.style.visibility = 'hidden';
          }
        }
      });
    }
  });
});

// // -------my methods library--------------------
// for (let i = 0; i < buttons.length; i++) {
//   let currentList = buttons[i];
// }

//----------------
// var myNodeList = document.querySelectorAll('li');
// forEach(myNodeList, function (index, value) {
//   console.log(index, value); // passes index + value back!
// });
//--------------------------------------
// var divs = document.querySelectorAll('div');

// [].forEach.call(divs, function(div) {
//   // do whatever
//   div.style.color = "red";
// });
//-------------------------------------
// function callPrice(e) {
//   console.log(e);
// }
// callPrice();
// // ---------------------------------------------

// renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderPepperonni();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.sauceWhite = !state.sauceWhite;
  renderWhiteSauce();
};
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
};
