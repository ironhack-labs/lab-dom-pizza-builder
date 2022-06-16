// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
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
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      // console.log(onePep)
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
  console.log(state.pepperoni)
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  let theMushroomLoop = document.querySelectorAll('.mushroom')
  // console.log(theMushroomLoop)
  for (let i = 0; i < theMushroomLoop.length; i++) {
    if (state.mushrooms) {
      theMushroomLoop[i].style.visibility = 'visible';
    } else {
      theMushroomLoop[i].style.visibility = 'hidden';
    }
  }
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(`.green-pepper`).forEach((Greenpepper) => {
    if (state.greenPeppers) {
      Greenpepper.style.visibility = 'visible';
    } else {
      Greenpepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauceLocal = document.querySelector(`.crust .sauce`)
  if (state.whiteSauce) {
    sauceLocal.setAttribute('class', "sauce sauce-white")
  } else {
    sauceLocal.setAttribute('class', `sauce`)
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustLocal = document.querySelector(`.crust`);
  if (state.glutenFreeCrust) {
    crustLocal.setAttribute(`class`, `crust crust-gluten-free`)
  } else {
    crustLocal.setAttribute('class', `crust`)
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const buttonArray = document.querySelectorAll('.btn');
  console.log(buttonArray)

  // let readUnique = buttonArray[0].className.split(' ')[1]
  // console.log(readUnique)
  // let theInnerText = buttonArray[2].innerHTML
  // console.log(theInnerText)
  for (let i = 0; i < buttonArray.length; i++) {
    let readUnique = buttonArray[i].className.split(' ')[1]
    // let readUniqueTotal = buttonArray[i].className
    // let theInnerText = buttonArray[i].innerHTML
    console.log(readUnique)
    if (i == 0) {
      let j = document.querySelector(`.${readUnique}`)
      console.log(j)
      if (state.pepperoni) {
        j.setAttribute('class', `btn btn-pepperoni active`)
      } else {
        j.setAttribute('class', `btn btn-pepperoni `)
      }
    }
    if (i == 1) {
      let j = document.querySelector(`.${readUnique}`)
      console.log(j)
      if (state.mushrooms) {
        j.setAttribute('class', `btn btn-mushrooms active`)
      } else {
        j.setAttribute('class', `btn btn-mushrooms`)
      }
    }
    if (i == 2) {
      let j = document.querySelector(`.${readUnique}`)
      console.log(j)
      if (state.greenPeppers) {
        j.setAttribute('class', `btn btn-green-peppers active`)
      } else {
        j.setAttribute('class', `btn btn-green-peppers`)
      }
    }
    if (i == 3) {
      let j = document.querySelector(`.${readUnique}`)
      console.log(j)
      if (state.whiteSauce) {
        j.setAttribute('class', `btn btn-sauce active`)
      } else {
        j.setAttribute('class', `btn btn-sauce `)
      }
    }
    if (i == 4) {
      let j = document.querySelector(`.${readUnique}`)
      console.log(j)
      if (state.glutenFreeCrust) {
        j.setAttribute('class', `btn btn-crust active`)
      } else {
        j.setAttribute('class', `btn btn-crust `)
      }
    }
  }
  // console.log(state.pepperoni)
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let pricePepperoni = document.querySelector(`.price-pep`);
  console.log(pricePepperoni)
  let priceMushrooms = document.querySelector(`.price-mushrooms`);
  let priceGreenPeps = document.querySelector(`.price-green-pep`);
  let priceSauce = document.querySelector(`.price-sauce`);
  let priceCrust = document.querySelector(`.price-crust`);
  let finalPrice = document.querySelector(`.final-price`)
  // console.log( finalPrice.innerHTML)
  let counter = 11
  if (state.pepperoni) {
    pricePepperoni.style.visibility = 'visible';
    // let add = Number(finalPrice.innerHTML)
    // let final = add + 1
    // finalPrice.innerHTML = final
    counter += 1
  } else {
    pricePepperoni.style.visibility = 'hidden';
    // let subtract = finalPrice.innerHTML
    // let ending = subtract - 1
    // finalPrice.innerHTML = ending
    counter -= 1
  }
  if (state.mushrooms) {
    priceMushrooms.style.visibility = 'visible';
    counter += 1
  } else {
    priceMushrooms.style.visibility = 'hidden';
    counter -= 1
  }
  if (state.greenPeppers) {
    priceGreenPeps.style.visibility = 'visible';
    counter += 1
  } else {
    priceGreenPeps.style.visibility = 'hidden';
    counter -= 1
  }
  if (state.whiteSauce) {
    priceSauce.style.visibility = 'visible';
    counter += 3
  } else {
    priceSauce.style.visibility = 'hidden';
    counter -= 3
  }
  if (state.glutenFreeCrust) {
    priceCrust.style.visibility = 'visible';
    counter += 5
  } else {
    priceCrust.style.visibility = 'hidden';
    counter -= 5
  }
  console.log(counter)
  finalPrice.innerHTML = 10 + (counter / 2)
  // if (state.pepperoni) {
  //     let add = Number(finalPrice.innerHTML)
  //     let final = add + 1
  //     finalPrice.innerHTML = final 
  //     if (state.mushrooms) 
  //   } else {
  //     let subtract = finalPrice.innerHTML
  //     let ending = subtract - 1
  //     finalPrice.innerHTML = ending
  //   }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
})
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
