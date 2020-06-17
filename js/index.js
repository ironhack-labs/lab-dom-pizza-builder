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
  whiteSauce: true,
  glutenFreeCrust: true
};



// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(pep => {
    if (state.greenPeppers) {
      pep.style.visibility = 'visible';
    } else {
      pep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  let sauce= document.querySelector('.sauce')
  if(state.whiteSauce){
    sauce.classList.remove('sauce-white')
  } else { 
    sauce.classList.add('sauce-white')
  }

}

// add/remove the class "crust-gluten-free"
function renderGlutenFreeCrust() {
  let crust= document.querySelector('.crust')
  if(state.glutenFreeCrust){
    crust.classList.remove('crust-gluten-free')
  } else { 
    crust.classList.add('crust-gluten-free')
  }
}

//Render current prices
function renderPrice(){
  //turns object to array
  let test=Object.keys(state).map(function(key){
    return [key, state[key]];
  });
  //empty strings for price and HTML to be placed/removed
  let li=''
  let total=0

  for(i=0;i<test.length;i++){
    if(test[i][1]==true){
      li+=`<li>$${ingredients[test[i][0]].price} ${ingredients[test[i][0]].name}</li>`
      total+=ingredients[test[i][0]].price
    }
  }//end for
  document.querySelector('.price ul').innerHTML=li
  document.querySelector('.price strong').innerText=total
}//end function


//Buttons
const pepBtn=document.querySelector('.btn.btn-pepperoni')
const mushBtn=document.querySelector('.btn.btn-mushrooms')
const pprBtn=document.querySelector('.btn.btn-green-peppers')
const sceBtn=document.querySelector('.btn.btn-sauce')
const cstBtn=document.querySelector('.btn.btn-crust')


// BTN event listeners
pepBtn.addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  pepBtn.classList.toggle('active')
  renderEverything();
});

//Mushrooms
mushBtn.addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  mushBtn.classList.toggle('active')
  renderEverything();
});

// Peppers
pprBtn.addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  pprBtn.classList.toggle('active')
  renderEverything();
});

//Sauce
sceBtn.addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  sceBtn.classList.toggle('active')
  renderEverything();
});

//Crust
cstBtn.addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  cstBtn.classList.toggle('active')
  renderEverything();
});