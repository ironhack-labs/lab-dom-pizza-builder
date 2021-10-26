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
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}
function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
    document.querySelectorAll('.mushroom').forEach((oneMus) => {
    if (state.mushrooms) {
      oneMus.style.visibility = 'visible';
    } else {
      oneMus.style.visibility = 'hidden';
    }
  });
}
function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach((oneGPep) => {
    if (state.greenPeppers) {
      oneGPep.style.visibility = 'visible';
    } else {
      oneGPep.style.visibility = 'hidden';
    }
  });
}
function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
 document.querySelectorAll('.sauce').forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.classList.add("sauce-white")
    } else {
      sauce.classList.remove("sauce-white")
    }
  });
}
console.log

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((crust) => {
    if (state.glutenFreeCrust) {
      crust.classList.add("crust-gluten-free")
    } else {
      crust.classList.remove("crust-gluten-free")
    }
  });
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
   
    if (state.pepperoni) {
      document.querySelector(".btn-pepperoni").classList.add("active")
    } else {
      document.querySelector(".btn-pepperoni").classList.remove("active")

    }
    if (state.mushrooms) {
      document.querySelector(".btn-mushrooms").classList.add("active")
    } else {
      document.querySelector(".btn-mushrooms").classList.remove("active")
    }
    if (state.greenPeppers) {
      document.querySelector(".btn-green-peppers").classList.add("active")
    } else {
      document.querySelector(".btn-green-peppers").classList.remove("active")
    }
    if (state.whiteSauce) {
      document.querySelector(".btn-sauce").classList.add("active")
    } else {
      document.querySelector(".btn-sauce").classList.remove("active")
    }
    if (state.glutenFreeCrust) {
      document.querySelector(".btn-crust").classList.add("active")
    } else {
      document.querySelector(".btn-crust").classList.remove("active")
    }
  }

/* Iteration 4: Ingredients and prices
On the right side of the pizza builder, there is a price section.
Write the function renderPrice() that:
Displays the list of all items selected
Displays the total price.
function addToTheList() {
        var u = document.getElementById("input1").value;
        document.getElementById("list").innerHTML += ("<li>" + u + "</li>");
      }
*/

function renderPrice() {
  document.querySelector(".panel.price>ul").innerHTML = "";
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //Total Cost begins with 10 cause of the pizza
  let totalCost = basePrice;
  //create a 2 dimensional array with the state ["pepperoni",true] 
  const arr =  Object.entries(state)
  let sistatiko
  //console.log(arr)
  for(let i = 0; i<arr.length; i++){
    if(arr[i][1] === true){
      sistatiko = ""
      sistatiko+="$"+ingredients[arr[i][0]].price + " " + ingredients[arr[i][0]].name
     // console.log(sistatiko)
      totalCost = totalCost + ingredients[arr[i][0]].price
      console.log(totalCost)
      var node = document.createElement('li');
      node.appendChild(document.createTextNode(sistatiko));
 
      document.querySelector('.panel.price>ul').appendChild(node);
      document.querySelector('.panel.price strong').totalCost;
    }
  }
  

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
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
 document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`