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


  // Iteration 1: set the visibility of `<section class="mushroom">`

  function renderMushrooms() {
    document.querySelectorAll('.cap,.stem').forEach(oneMush => {
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
  const el = document.querySelector('.sauce');
  // console.log(el);
    if (state.whiteSauce) {
        el.classList.add('sauce-white')
    } else {
        el.classList.remove('sauce-white')
    }
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustGlFree = document.querySelector('.crust');
    if (state.glutenFreeCrust) {
        crustGlFree.classList.add('crust-gluten-free')
    } else {
        crustGlFree.classList.remove('crust-gluten-free')
    }
}

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  function renderButtons() {
  const buttonPepperoni = document.querySelector('.btn-pepperoni');
  if (state.pepperoni) {
      buttonPepperoni.classList.add('active')
  } else {
      buttonPepperoni.classList.remove('active')
  }
  const buttonMushroom = document.querySelector('.btn-mushrooms');
  if (state.mushrooms) {
     buttonMushroom.classList.add('active')
  } else {
     buttonMushroom.classList.remove('active')
  }
  const buttonGreenPeppers = document.querySelector('.btn-green-peppers');
  if (state.greenPeppers) {
     buttonGreenPeppers.classList.add('active')
  } else {
     buttonGreenPeppers.classList.remove('active')
  }
  const buttonWhiteSauce = document.querySelector('.btn-sauce');
  if (state.whiteSauce) {
     buttonWhiteSauce.classList.add('active')
  } else {
     buttonWhiteSauce.classList.remove('active')
  }
  const buttonGlutenFree = document.querySelector('.btn-crust');
  if (state.glutenFreeCrust) {
     buttonGlutenFree.classList.add('active')
  } else {
     buttonGlutenFree.classList.remove('active')
  }
}


// Iteration 4: change the HTML of `<aside class="panel price">`

//if we click on button then name come on the list


function renderPrice() {
  const elem = document.querySelectorAll('.price > ul > li');
console.log(elem);
console.log(elem[0])

if (state.pepperoni == false) elem[0].style.display ='none'
else elem[0].style.display = 'block'

if (state.mushrooms == false) elem[1].style.display ='none'
else elem[1].style.display = 'block'

if (state.greenPeppers == false) elem[2].style.display ='none'
else elem[2].style.display = 'block'

if (state.whiteSauce == false) elem[3].style.display ='none'
else elem[3].style.display = 'block'

if (state.glutenFreeCrust == false) elem[4].style.display ='none'
else elem[4].style.display = 'block'

sum = basePrice + ingredients.pepperoni.price*state.pepperoni + ingredients.mushrooms.price*state.mushrooms + ingredients.greenPeppers.price*state.greenPeppers + ingredients.whiteSauce.price*state.whiteSauce + ingredients.glutenFreeCrust.price*state.glutenFreeCrust

console.log(sum)

const total = document.querySelector('.price > strong')
total.innerHTML = `$${sum}`


}

/*const prices = document.querySelectorAll('.panel price li').forEach(li =>{
    li.onclick = function(){
      console.log(li.innerHTML);
    };
  })
  */





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
document.querySelector('.btn.btn-sauce ').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  console.log(state.whiteSauce)
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust ').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  console.log(state.glutenFreeCrust);
  renderEverything();
});
