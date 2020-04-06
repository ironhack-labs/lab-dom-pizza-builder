// ACCEDER à la valeur qu'on veut, (let key in |cat ou cat2| n'est pas pris en compte)
// Car les keys ont le même nom, donc on peut accéder à n'importe quelle value
// avec n'importe lequel des keys précisé (avec key1 on peut accéder à value2)

// const cat = {name : "Julie"}
// const cat2 = {name : "Roberta"}

// cat.name = "julie"
// cat["name"] = "julie"

// for (let key in cat) {
//   console.log(key)     // name
// }

// for (let key in cat) {
//   console.log(cat2);          // Roberta
// }

// for (let key in cat2) {
//   console.log(cat2[key]);          // Roberta
// }



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
  document.querySelectorAll(".mushroom").forEach(function(element) {
    if (state.mushrooms) {
      element.style.visibility = 'visible';
    } else {
      element.style.visibility = 'hidden';
    }
  });
}


  // Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function(element) {
    if (state.greenPeppers) {
      element.style.visibility = 'visible';
    } else {
      element.style.visibility = 'hidden';
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector(".sauce").classList.add("sauce-white");
  } else {
    document.querySelector(".sauce").classList.remove("sauce-white");
  }
  // let sauce = document.querySelector('.sauce');
  // state.whiteSauce ? sauce.classList.add('sauce-white') : sauce.classList.remove('sauce-white');
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }
  // let crusty = document.querySelector(".crust");
  // state.glutenFreeCrust ? crusty.classList.add("crust-gluten-free") : crusty.classList.remove("crust-gluten-free");
}


// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {

  if(state.glutenFreeCrust){
    document.querySelector(".btn.btn-crust").classList.add('active')
  }else{
    document.querySelector(".btn.btn-crust").classList.remove('active')
  };  
  if(state.whiteSauce){
    document.querySelector(".btn.btn-sauce").classList.add('active')
  }else{
    document.querySelector(".btn.btn-sauce").classList.remove('active')
  };
  if(state.pepperoni){
    document.querySelector(".btn-pepperoni").classList.add('active')
  }else{
    document.querySelector(".btn-pepperoni").classList.remove('active')
    };
  if(state.mushrooms){
    document.querySelector(".btn.btn-mushrooms").classList.add('active')
  }else{
    document.querySelector(".btn.btn-mushrooms").classList.remove('active')
    };
  if(state.greenPeppers){
    document.querySelector(".btn.btn-green-peppers").classList.add('active')
  }else{
    document.querySelector(".btn.btn-green-peppers").classList.remove('active')
    }; 
  }


//   document.querySelectorAll(".btn").forEach(function (button) {

//     if (button.className.includes("pepperoni")) {       // className représente TOUTES les classes d'un élément
//       if (state.pepperoni) {                            // Par exemple : element.className = "" supprimera toutes les classes de l'élément
//         button.classList.add("active");
//       } else {
//         button.classList.remove("active");
//       }
//     } else if (button.className.includes("mushrooms")) {
//       if (state.mushrooms) {
//         button.classList.add("active");
//       } else {
//         button.classList.remove("active");
//       }
//     } else if (button.className.includes("green-peppers")) {
//       if (state.greenPeppers) {
//         button.classList.add("active");
//       } else {
//         button.classList.remove("active");
//       }
//     } else if (button.className.includes("sauce")) {
//       if (state.whiteSauce) {
//         button.classList.add("active");
//       } else {
//         button.classList.remove("active");
//       }
//     } else if (button.className.includes("crust")) {
//       if (state.glutenFreeCrust) {
//         button.classList.add("active");
//       } else {
//         button.classList.remove("active");
//       }
//   }
// });

        // const currentButtonIngredient = button.getAttribute("data-ingredient");
        // for (let ingredient in state) {
        //   if (state[ingredient] && currentButtonIngredient === ingredient) {
        //     button.classList.add("active");
        //   } else if (!state[ingredient] && currentButtonIngredient === ingredient) {
        //     button.classList.remove("active");
        // }
  
  // });
// }

// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  const list = document.querySelector(".panel.price ul");  // Sélectionner les <li> avec le prix
  let listItem = "";
  let totalPrice = basePrice;     // Prix indiqué au début
  for (let in key in state) {
    if (state[key]) {
      console.log(ingredients[key]) // On peut accéder aux values des ingredients car ils ont la même key que state
      listItem += '<li> $ ${ingredients[key].price} ${ingredients[key].name</li>';
      totalPrice += ingredients[key].price;
    }
  }
  list.innerHTML = listItems;   // <ul> <li>$1 pepperoni</li> donc ajoute les items
  document.querySelector(".panel.price strong").textContent = `$ ${totalPrice}`;

  renderEverything();
}



// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', (function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}));

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});