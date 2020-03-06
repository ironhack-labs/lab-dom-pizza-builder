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
document.querySelectorAll('.mushroom').forEach(mush =>{
      if (state.mushrooms) {
    mush.style.visibility = 'visible';
  } else {
    mush.style.visibility = 'hidden';
  }
});

}
function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

document.querySelectorAll('.green-pepper').forEach(peppers =>{
    if (state.greenPeppers) {
  peppers.style.visibility = 'visible';
} else {
  peppers.style.visibility = 'hidden';
}
});

}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const getElementSauce = document.querySelector(".sauce");
  console.log(getElementSauce.classList.value);
  if(getElementSauce.classList.value === "sauce sauce-white"){
  getElementSauce.classList.value="sauce";
  }
  else{
    getElementSauce.classList.value="sauce sauce-white";
  }
  //console.log(getElementSauce);
  //getElementSauce.removeChild(".sauce-white");
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
const getGlutenFreeCrust = document.querySelector(".crust");
if(state.glutenFreeCrust)
getGlutenFreeCrust.className = "crust crust-gluten-free"
else{
  getGlutenFreeCrust.className = "crust"
}

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const activeElements = document.getElementsByClassName("btn");
  console.log(activeElements);
    if(state.pepperoni===true){
      activeElements[0].className= "btn btn-pepperoni active"
    }
    else{
      activeElements[0].className= "btn btn-pepperoni"
    }
    if(state.mushrooms===true){
      activeElements[1].className= "btn btn-mushrooms active"
    }
    else{
      activeElements[1].className= "btn btn-mushrooms"
    }
    if(state.greenPeppers===true){
      activeElements[2].className="btn btn-green-peppers active"
    }
    else{
      activeElements[2].className="btn btn-green-peppers"
    }
    if(state.whiteSauce===true){
      activeElements[3].className="btn btn-sauce active"
    }
    else{
      activeElements[3].className="btn btn-sauce"
    }
    if(state.glutenFreeCrust===true){
      activeElements[4].className="btn btn-crust active"
    }
    else{
      activeElements[4].className="btn btn-crust"
    }

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  /*    
  <aside class="panel price">
      <h2>Your pizza's price</h2>

      <b>$10 cheese pizza</b>
      <ul>
        <li>$1 pepperoni</li>
        <li>$1 mushrooms</li>
        <li>$1 green peppers</li>
        <li>$3 white sauce</li>
        <li>$5 gluten-free crust</li>
      </ul>
      <strong>$21</strong>
    </aside>
    */ 
   
    const $pizzaPrice =document.querySelector(".panel.price");
    $pizzaPrice.querySelector("ul").innerHTML = ""
    $pizzaPrice.querySelector("strong").innerHTML = ""
    let totalPrice=10;
    console.log($pizzaPrice)
    if(state.pepperoni){
      let $pepPrice= document.createElement("li");
      $pepPrice.innerHTML="$1 pepperoni";
      $pizzaPrice.querySelector("ul").appendChild($pepPrice);
      totalPrice+=1;
    }
    if(state.mushrooms){
      let $mushPrice= document.createElement("li");
      $mushPrice.innerHTML="$1 mushrooms";
      $pizzaPrice.querySelector("ul").appendChild($mushPrice);
      totalPrice+=1;
    }
    if(state.greenPeppers){
      let $peppersPrice= document.createElement("li");
      $peppersPrice.innerHTML="$1 greenPeppers";
      $pizzaPrice.querySelector("ul").appendChild($peppersPrice);
      totalPrice+=1;
    }
    if(state.whiteSauce){
      let $saucePrice= document.createElement("li");
      $saucePrice.innerHTML="$1 whiteSauce";
      $pizzaPrice.querySelector("ul").appendChild($saucePrice);
      totalPrice+=1;
    }
    if(state.glutenFreeCrust){
      let $crustPrice= document.createElement("li");
      $crustPrice.innerHTML="$1 glutenFreeCrust";
      $pizzaPrice.querySelector("ul").appendChild($crustPrice);
      totalPrice+=1;
    }
    $pizzaPrice.querySelector("strong").innerHTML = `$${totalPrice}`
    
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener("click", () =>{
  state.mushrooms= !state.mushrooms;
 renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener("click", () =>{
  state.greenPeppers= !state.greenPeppers;
 renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener("click", () =>{
  state.whiteSauce= !state.whiteSauce;
 renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener("click", () =>{
  state.glutenFreeCrust= !state.glutenFreeCrust;
 renderEverything();
});