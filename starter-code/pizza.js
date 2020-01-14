// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
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
  document.querySelectorAll(".pep").forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function($greenPeppers) {
    if (state.greenPeppers) {
      $greenPeppers.style.visibility = "visible";
    } else {
      $greenPeppers.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  // document.querySelectorAll(".sauce").forEach(function(whiteSauce) {
  //   item.onclick = toggle(".sauce-white");
  // });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // document.querySelector(".btn").onclick = function() {
  //   const buttonChange = document.querySelector(".btn");
  //   console.log(buttonChange);
  //   buttonChange.classList.toggle("active");
  //   renderEverything();


  document.querySelector(".btn-crust").onclick = function() {
    const buttonCrust = document.querySelector(".btn-crust");
    console.log(buttonCrust);
    buttonCrust.classList.toggle("active");
     renderEverything();

     document.querySelector(".btn-sauce").onclick = function() {
      const buttonSauce = document.querySelector(".btn-sauce");
      console.log(buttonSauce);
      buttonSauce.classList.toggle("active");
       renderEverything();

       document.querySelector(".btn-green-peppers").onclick = function() {
        const buttonGp = document.querySelector(".btn-green-peppers");
        console.log(buttonGp);
        buttonGp.classList.toggle("active");
         renderEverything();



         document.querySelector(".btn-mushrooms").onclick = function() {
          const buttonMr = document.querySelector(".btn-mushrooms");
          console.log(buttonMr);
          buttonChange.classList.toggle("active");
           renderEverything();

           document.querySelector(".btn-pepperonni").onclick = function() {
            const buttonPepp = document.querySelector(".btn-pepperonni");
            console.log(buttonPepp);
            buttonPepp.classList.toggle("active");
             renderEverything();


  // };
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  console.log("hello");
  let ul = document.querySelector(".price ul");

  ul.innerHTML = "";
  document.querySelectorAll(".btn").forEach(function(button, index) {
    let keyArr = Object.keys(state); //

    if (state[keyArr[index]]) {
      console.log("its active");
      console.log(ingredients[keyArr[index]].name);
      let li = document.createElement("li");
      li.innerHTML = ingredients[keyArr[index]].name;

      ul.appendChild(li);
    }

    console.log(ul);
  });
}

renderEverything();

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
  const saucy = document.querySelector(".sauce");
  console.log(saucy);
  saucy.classList.toggle("sauce-white");
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function() {
  const crustChange = document.querySelector(".pizzaCrust");
  console.log(crustChange);
  crustChange.classList.toggle("crust-gluten-free");
  renderEverything();
};
