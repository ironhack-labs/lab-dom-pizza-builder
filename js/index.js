document.addEventListener('DOMContentLoaded', () => {
  console.log('Clock script loaded');


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', (event) => {
  state.pepperoni = !state.pepperoni;
  actualStatus = state.pepperoni
  renderEverything(event);
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', (event) => {
  state.mushrooms = !state.mushrooms;
  actualStatus = state.mushrooms
  renderEverything(event);
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', (event) => {
  state.greenPeppers = !state.greenPeppers;
  actualStatus = state.greenPeppers
  renderEverything(event);
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', (event) => {
  state.whiteSauce = !state.whiteSauce;
  actualStatus = state.whiteSauce
  renderEverything(event);
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', (event) => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything(event);
});

renderEverything();

});

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
function renderEverything(event) {
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
    const buttons =  document.querySelectorAll('.btn')

    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });


}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((greenPeppers) => {
    if (state.greenPeppers) {
      greenPeppers.style.visibility = 'visible';
    } else {
      greenPeppers.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((sauce) => {
    if (!state.whiteSauce) {
      sauce.classList.remove('sauce-white')       
    } else {
      sauce.classList.add('sauce-white')       
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((crust) => {
    if (!state.glutenFreeCrust) {
      crust.classList.remove('crust-gluten-free')       
    } else {
      crust.classList.add('crust-gluten-free')      
    }
  });
}

function renderButtons() {
  const buttons =  document.querySelectorAll('.btn').forEach((button, index, buttons) => {
    button.onclick = function(){
      button.classList.toggle("active")
    }
  })

// function renderButtons() {
//   const buttons =  document.querySelectorAll('.btn').forEach((button, index, buttons) => {
//     //console.log(button.classList.contains("active"))
//     //console.log(index)
//     //console.log(button)
//     //console.log(buttons[index])
//     button.addEventListener('click', (event) => {
//       if (event.currentTarget.classList.contains("active")){
//         event.currentTarget.classList.remove("active")
//         console.log(index)
//       } else if (event.currentTarget.classList.contains("active") === false) {
//         event.currentTarget.classList.add("active")
//       }
//     });
//   })

  // for (let i=0; i< buttons.length; i++) {
  //   buttons[i].addEventListener('click', (event) => {
  //     if (buttons[i].classList.contains('active')) {
  //       buttons[i].classList.toggle('active')
  //     } else {
  //       buttons[i].classList.toggle('active')
  //     }
  //   });
  // }

//   for (let i=0; i< buttons.length; i++) {
//     buttons[i].addEventListener('click', (event) => {
//       if (event.target.classList.contains('active')) {
//         // buttons[i].classList.contains('active')
//         // buttons[i].classList.toggle('active')
//         // setInterval(renderButtons, 1000);
//         clickedItem = event.target.classList.contains('active')
//         event.target.classList.toggle('active')
//         console.log ("hola " + clickedItem + i)
//         return true
//       }  else {
//         clickedItem = event.target.classList.contains('active')
//         event.target.classList.toggle('active')
//         console.log ("hola " + clickedItem + i)
//       }
//       // else {
//       //   buttons[i].classList.toggle('active')
//       //   setInterval(renderButtons, 1000);
//       // }
//     });
//   }
// }

/*
for (let i=0; i< buttons.length; i++) {
  buttons[i].addEventListener('click', (event) => {

    buttons[i].classList.remove('active')
    console.log(event)
    console.log(event.currentTarget.classList.toggle('active'))
    console.log(event.currentTarget.classList)
  }, false);
}
*/

}
function renderPrice() {
  const listOfPrices = document.querySelectorAll("li.price")
  let valuePeperoni =   ingredients.pepperoni.price
  let valueMushrooms =   ingredients.mushrooms.price
  let valuePeppers = ingredients.greenPeppers.price
  let valueSauce = ingredients.whiteSauce.price
  let valueCrust =  ingredients.glutenFreeCrust.price

  if (state.pepperoni){
    listOfPrices[0].classList.add('sum-prices')
  }  if (!state.pepperoni){
    listOfPrices[0].classList.remove('sum-prices')
    valuePeperoni = 0
  }  if (state.mushrooms){
    listOfPrices[1].classList.add('sum-prices')
  }  if (!state.mushrooms){
    listOfPrices[1].classList.remove('sum-prices')
    valueMushrooms = 0
  }  if (state.greenPeppers){
    listOfPrices[2].classList.add('sum-prices')
  }  if (!state.greenPeppers){
    listOfPrices[2].classList.remove('sum-prices')
    valuePeppers = 0
  }  if (state.whiteSauce === true){
    listOfPrices[3].classList.add('sum-prices')
  }  if (state.whiteSauce === false){
    listOfPrices[3].classList.remove('sum-prices')
    valueSauce = 0
  }  if (state.glutenFreeCrust === true){
    listOfPrices[4].classList.add('sum-prices')
  }  if (state.glutenFreeCrust === false){
    listOfPrices[4].classList.remove('sum-prices')
    valueCrust = 0
  }   
  const totalValue = basePrice + valuePeperoni + valueMushrooms + valuePeppers + valueSauce + valueCrust
  const totalPizza = document.querySelector(".panel strong span")
  totalPizza.innerText = String(totalValue) 
}


