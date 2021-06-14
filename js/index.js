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
  document.querySelectorAll('.mushroom').forEach((onemushroom)=>{
    if (state.mushrooms) {
      onemushroom.style.visibility = 'visible';
    }else{
      onemushroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper)=>{
    if(state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    }else{
      onePepper.style.visibility = 'hidden';
    }
  })
}


//-------Iteration2: Sauce and Crust options--------------------------------

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  //state.whiteSauce = true;

  let whiteSauce = document.querySelector('.sauce');
  if(state.whiteSauce){
    whiteSauce.className += ' sauce-white';
  }else{
    whiteSauce.className = 'sauce';
  }  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust');
  if(state.glutenFreeCrust){
    crust.className += ' crust-gluten-free';
  }else{
    crust.className = 'crust';
  }
}

//.......Iteration3......................................................
// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  
// let buttons = document.querySelectorAll('button');

//   buttons.forEach(function(button){
//     if(button.classList.contains("active")){
//       button.classList.remove("active");
//     }else{
//       button.classList.add("active");
//     }
//   }) 
//..................................................
let pepperoniBtn = document.querySelector(".btn-pepperoni");
console.log(state.pepperoni);
  if(state.pepperoni===true){
    pepperoniBtn.classList.add("active");
  }else{
    pepperoniBtn.classList.remove("active");
  }
  //..............................
  let mushroomBtn = document.querySelector(".btn-mushrooms");
  if(state.mushrooms===true){
    mushroomBtn.classList.add("active");
  }else{
    mushroomBtn.classList.remove("active");
  }
  //................................
  let greenPeppersBtn = document.querySelector(".btn-green-peppers")
  if(state.greenPeppers===true){
    greenPeppersBtn.classList.add("active")
  }else{
    greenPeppersBtn.classList.remove("active")
  }
  //.................................
  let whiteSauceBtn = document.querySelector(".btn-sauce");
  if(state.whiteSauce===true){
    whiteSauceBtn.classList.add("active");
  }else{
    whiteSauceBtn.classList.remove("active");
  }
  //.................................
  let crustBtn = document.querySelector(".btn-crust");
  if(state.glutenFreeCrust===true){
    crustBtn.classList.add("active");
  }else{
    crustBtn.classList.remove("active");
  }
}  


//-----------Iteration4: Render Price---------------------------
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
let price = document.querySelector('.price ul');
price.innerHTML = '';

let total = 10;

let totalPrice = document.querySelector('.price strong');
totalPrice.innerHTML = '';

if(state.pepperoni===true){
  price.innerHTML += `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`
  totalPrice.innerHTML = total += ingredients.pepperoni.price;

}

if(state.mushrooms===true){
  price.innerHTML += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`
  totalPrice.innerHTML = total += ingredients.mushrooms.price;
}

if(state.greenPeppers===true){
  price.innerHTML += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`
  totalPrice.innerHTML = total += ingredients.greenPeppers.price;
}
  
if(state.whiteSauce===true){
  price.innerHTML += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`
  totalPrice.innerHTML = total += ingredients.whiteSauce.price;
}

if(state.glutenFreeCrust===true){
  price.innerHTML += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`
  totalPrice.innerHTML = total += ingredients.glutenFreeCrust.price;
} 
}

renderEverything();


//..............AddEventListener................................................

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  //event.target.className += 'active'; //qdo clicar precisa mudar nome da classe e adicionar active;
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click',function(){
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click',function(){
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})
  

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener('click',function(){
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener('click',function(){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
