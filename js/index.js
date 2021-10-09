// Write your Pizza Builder JavaScript in this file.


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

//The visibility property allows the author to show or hide an element. It is similar to the display property. However, the difference is that if you set display:none, it hides the entire element, while visibility:hidden means that the contents of the element will be invisible, but the element stays in its original position and size.



function renderPepperoni() {

  const pepLocal = document.querySelectorAll('.pep')

  pepLocal.forEach((peppy) => {
    if (state.pepperoni) {
      peppy.style.visibility = 'visible';
    } else {
      peppy.style.visibility = 'hidden';
    }
  })
}

function renderMushrooms() {

  const mushLocal = document.querySelectorAll('.mushroom')

  mushLocal.forEach((mush) => {
    if(state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  })
}


function renderGreenPeppers() {
  
  const greenLocal = document.querySelectorAll('.green-pepper')

  greenLocal.forEach((green) => {
    if(state.greenPeppers) {
      green.style.visibility = 'visible';
    } else {
      green.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {

  const sauceLocal=document.querySelector('.sauce')
  
  if (state.whiteSauce) {
    sauceLocal.classList.add('sauce-white')
  }
  else {
    sauceLocal.classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {

  const crustLocal=document.querySelector('.crust')
  
  if (state.glutenFreeCrust) {
    crustLocal.classList.add('crust-gluten-free')
  }
  else {
    crustLocal.classList.remove('crust-gluten-free')
  }
}


function renderButtons() {

const btnPepperonni= document.querySelector('.btn.btn-pepperoni')
const btnMushrooms = document.querySelector('.btn.btn-mushrooms')
const btnGreenpeppers = document.querySelector('.btn.btn-green-peppers')
const btnSauce = document.querySelector('.btn.btn-sauce')
const btnGluten = document.querySelector('.btn.btn-crust')


 if(state.pepperoni) {
  btnPepperonni.classList.add('active')
} 
else {
  btnPepperonni.classList.remove('active')
}

if(state.mushrooms){
  btnMushrooms.classList.add('active')
 } 
 else {
  btnMushrooms.classList.remove('active')
 } 

if(state.greenPeppers) {
  btnGreenpeppers.classList.add('active')
}else {
  btnGreenpeppers.classList.remove('active')
}

if(state.whiteSauce) {
  btnSauce.classList.add('active')
}else {
  btnSauce.classList.remove('active')
}

 if(state.glutenFreeCrust) {
  btnGluten.classList.add('active')
 } else {
  btnGluten.classList.remove('active')
}

}

function renderPrice() {
  
  let elementsPizza = []

  // new array with added elements of our pizza
  for(let status in state) {
    if(state[status] === true) {
      elementsPizza.push(status)
    }
  }
  
//clean the html
  var parent = document.querySelector('.panel.price ul')
  
  parent.innerHTML=''

  // add elements

  let totalPrice = 0

  for(let element of elementsPizza) {

    // where to put my new element
    var child = document.createElement("li")

    //content of my elemet

    child.innerText = `$${ingredients[element].price} ${ingredients[element].name}`

    parent.appendChild(child)

    totalPrice += ingredients[element].price

  }

  const totalDisplay= totalPrice+10

  document.querySelector('strong').innerText = `$${totalDisplay}`

  }

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  
  renderEverything()

})



// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  
  renderEverything()
})


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  
  renderEverything()
})