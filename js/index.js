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
  glutenFreeCrust: false,
  button: true
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
  renderPrice();}

//pepperoni
function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });}

//mushrooms
function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`

  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });}

//greenPeppers
//  green-pepper
function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePep => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });}

//whiteSauce
function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(oneSauce => {
    if (state.whiteSauce) {
      oneSauce.style.visibility = 'visible';
      document.getElementsByClassName("sauce")[0].classList.add("sauce-white")

    } else {
      oneSauce.style.visibility = 'hidden';
      document.getElementsByClassName("sauce")[0].classList.remove("sauce-white")
    }
  });}

//glutenFreeCrust
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(gluten => {
    if (state.glutenFreeCrust) {
      gluten.style.visibility = 'visible';
      document.getElementsByClassName("crust")[0].classList.add("crust-gluten-free")
    } else {
      gluten.style.visibility = 'hidden';
      document.getElementsByClassName("crust")[0].classList.remove("crust-gluten-free")
    }
  });}


//active /
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // un add/remove por cada boton que tenemos
  // vemos que al removerse la clase cambia la sombra del boton...

  if (state.pepperoni) {document.querySelector('.btn.btn-pepperoni').classList.remove("active")} 
  else                 {document.querySelector('.btn.btn-pepperoni').classList.add("active")}

  if (state.mushrooms) {document.querySelector('.btn.btn-mushrooms').classList.remove("active")} 
  else                 {document.querySelector('.btn.btn-mushrooms').classList.add("active")}

  if (state.greenPeppers) {document.querySelector('.btn.btn-green-peppers').classList.remove("active")} 
  else                    {document.querySelector('.btn.btn-green-peppers').classList.add("active") }

  if (state.whiteSauce) {document.querySelector('.btn.btn-sauce').classList.remove("active")} 
  else                  {document.querySelector('.btn.btn-sauce').classList.add("active")}

  if (state.glutenFreeCrust) {document.querySelector('.btn.btn-crust').classList.remove("active")} 
  else                       {document.querySelector('.btn.btn-crust').classList.add("active")}

}

let pepPrice = document.querySelector('.panel.price ul li')[0];
let mushPrice =document.querySelector('.panel.price ul li')[1];
let gpPrice = document.querySelector('.panel.price ul li')[2];
let wsPrice = document.querySelector('.panel.price ul li')[3];
let gfcPrice = document.querySelector('.panel.price ul li')[4];
let total = 0;


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // usamos append child para agregar a la lista el precio de cada cosa 

 
  let total = 10;

  // peperroni
  if (!state.pepperoni) {
    total += 0; 
      } 

    else {
      total++;
    
   } // agrega el precio a la lista


//mushrooms
  if (!state.mushrooms) {
    total+= 0;
     }

    else {
    total++ ;
   
   }


//green peppers
    if (!state.greenPeppers) {
      total+= 0;
       }
  
      else {
        total++  ;
     
     }
  


//white sauce 
    if (state.whiteSauce) {
      total += 3;
     
     }
        
        else {
        total+= 0 ;
        }

//glutenFreeCrust
    if (state.glutenFreeCrust) {
      total += 5;
    
      
    }

      else {
        total+= 0 ;
         }

      // cambiar el total total 
      document.querySelector(".panel.price strong").innerText = "$" + total
     

}





// Iteration 1:  click event listener on `<button class="btn btn-pepperoni">`
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

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});