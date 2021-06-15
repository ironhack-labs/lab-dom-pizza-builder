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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) =>{
   if(state.mushrooms){
     oneMushroom.style.visibility = 'visible';
   }else{
     oneMushroom.style.visibility = 'hidden';
   }
});
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) =>{
    if(state.greePepper){
      oneGreenPepper.style.visibility = 'visible';
    }else{
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach((sauce) =>{
    if(state.whiteSauce){
      sauce.classList.add("sauce-white");
    }else{
      sauce.classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((crust) =>{
    if(state.glutenFreeCrust){
      crust.classList.add("crust-gluten-free");
    }else{
      crust.classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {
  document.querySelectorAll('.btn-pepperoni').forEach((isActive) =>{
    if(state.pepperoni){
      isActive.classList.add('active');
    }else{
      isActive.classList.remove('active');
    }
  });

  document.querySelectorAll('.btn-green-peppers').forEach((isActive) =>{
    if(state.pgreenPeppers){
      isActive.classList.add('active');
    }else{
      isActive.classList.remove('active');
    }
  });

  document.querySelectorAll('.btn-white-sauce').forEach((isActive) =>{
    if(state.whiteSauce){
      isActive.classList.add('active');
    }else{
      isActive.classList.remove('active');
    }
  });

  document.querySelectorAll('.btn-crust').forEach((isActive) =>{
    if(state.wglutenFreeCrust){
      isActive.classList.add('active');
    }else{
      isActive.classList.remove('active');
    }
  });
}

function renderPrice() {
  let price = 10;

  const list = document.querySelector('body > aside > ul');
  list.innerHTML = '';
  const totalPrice = document.querySelector('body > aside > stronger');
  if(state.pepperoni){
    list.innerHTML += '<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.names}</li>';
    price += ingredients.pepperoni.price;
  }
  if(state.mushrooms){
    list.innerHTML += '<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.names}</li>';
    price += ingredients.mushrooms.price;
 }
  if(state.greenPeppers){
  list.innerHTML += '<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.names}</li>';
  price += ingredients.greenPeppers.price;
  }
  if(state.whiteSauce){
    list.innerHTML += '<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.names}</li>';
    price += ingredients.whiteSauce.price;
  }
  if(state.glutenFreeCrust){
    list.innerHTML += '<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.names}</li>';
    price += ingredients.glutenFreeCrust.price;
  }
  totalPrice.innerHTML = '$${price}';

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('clicks', function (){
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn.btn-green-peppers').addEventListener('clicks', function (){
  state.mushrooms = !state.greenPeppers;
  renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('clicks', function (){
  state.mushrooms = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('clicks', function (){
  state.mushrooms = !state.glutenFreeCrust;
  renderEverything();
});
}
