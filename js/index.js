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
  document.querySelectorAll(".mushroom").forEach(mush => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  }); 
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(green => {
    if (state.greenPeppers) {
     green.style.visibility = 'visible';
    } else {
     green.style.visibility = 'hidden';
    }
  }); 
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(salsa => {
    if (state.whiteSauce) {
     salsa.classList.add("sauce-white");
    } else {
      salsa.classList.remove("sauce-white");
    }
  }); 
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(pan => {
    if (state.glutenFreeCrust) {
     pan.classList.add("crust-gluten-free");
    } else {
      pan.classList.remove("crust-gluten-free");
    }
  }); 
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll(".btn").forEach(bn =>{
    if(bn.classList.contains("active")){
      bn.classList.remove("active");
    }else{
      bn.classList.add("active");
    }
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
    const $ul = document.querySelector("ul")
    const pepCost=document.querySelector(".pepCost");
    const mushroomCost=document.querySelector(".mushroomCost");
    const greenPepperCost=document.querySelector(".green-pepperCost")
    const sauceCost=document.querySelector(".sauceCost")
    const crustCost=document.querySelector(".crustCost")
    const cost=document.querySelector("strong");

    let total=10;

    document.querySelectorAll('.pep.one').forEach(onePep => {
      if (onePep.style.visibility === 'visible') {
       pepCost.style.visibility="visible";
       total+=1;
      } else if(onePep.style.visibility !== 'visible') {
        pepCost.style.visibility= 'hidden';
      }
    });

    document.querySelectorAll('.mushroom.one').forEach(mush => {
      if (mush.style.visibility === 'visible') {
       mushroomCost.style.visibility="visible"
       total+=1;
      } else if(mush.style.visibility !== 'visible') {
        mushroomCost.style.visibility= 'hidden';
      }
    });

    document.querySelectorAll('.green-pepper.one').forEach(green => {
      if (green.style.visibility === 'visible') {
       greenPepperCost.style.visibility="visible"
       total+=1;
      } else if(green.style.visibility !== 'visible') {
        greenPepperCost.style.visibility= 'hidden';
      }
    });

    document.querySelectorAll('.sauce').forEach(salsa=>{
      if (salsa.classList.contains("sauce-white")) {
        sauceCost.style.visibility="visible"
        total+=3
       } else if(!salsa.classList.contains("sauce-white")) {
         sauceCost.style.visibility= 'hidden';
       }
    })

    document.querySelectorAll('.crust').forEach(pan=>{
      if (pan.classList.contains("crust-gluten-free")) {
        crustCost.style.visibility="visible"
        total+=5
       } else if(!pan.classList.contains("crust-gluten-free")) {
         crustCost.style.visibility= 'hidden';
       }
    })
    
    cost.innerText=`$ ${total}`;
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click",()=>{
  state.mushrooms = !state.mushrooms;
  renderEverything();
})


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").addEventListener("click",()=>{
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click",()=>{
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click",()=>{
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})

