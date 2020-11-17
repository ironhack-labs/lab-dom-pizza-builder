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
};

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility ='visible';
    } else {
      oneMushroom.style.visibility='hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if(state.greenPeppers) {
      onePepper.style.visibility = 'visible';
  } else {
      onePepper.style.visibility = 'hidden';
  }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(sauce => {
        if(state.whiteSauce){
          sauce.style.visibility ='visible';
        } else{
          sauce.style.visibility ='hidden';
        }
      });
    }

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach(crust => {
    if(state.glutenFreeCrust){
      crust.style.visibility = 'visible';
    } else {
      crust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach(btn => {
      btn.onclick = handleClick;
  });
}


function handleClick(evt){
    const clicked = evt.target;
    clicked.classList.toggle("active");
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
      const list = document.querySelectorAll('.price ul li');
      // console.log("here-->>",list);

      list.forEach(() => {
      state.pepperoni ? list[0].style.visibility = 'visible' : list[0].style.visibility = 'hidden';
      state.mushrooms ? list[1].style.visibility = 'visible' : list[1].style.visibility = 'hidden';
      state.greenPeppers ? list[2].style.visibility = 'visible' : list[2].style.visibility = 'hidden';
      state.whiteSauce ? list[3].style.visibility = 'visible' : list[3].style.visibility = 'hidden';
      state.glutenFreeCrust ? list[4].style.visibility = 'visible' : list[4].style.visibility = 'hidden';
          
    });

    // console.log("price", ingredients["pepperoni"]["price"]);
    let priceArr = [
                   ingredients["pepperoni"]["price"], 
                   ingredients["mushrooms"]["price"],
                   ingredients["greenPeppers"]["price"],
                   ingredients["whiteSauce"]["price"],
                   ingredients["glutenFreeCrust"]["price"]

    ]; 

      let sum = 10;
      state.pepperoni ? sum+=priceArr[0] : sum-=0;
      state.mushrooms ? sum+=priceArr[1] : sum-=0;
      state.greenPeppers ? sum+=priceArr[2] : sum-=0;
      state.whiteSauce ? sum+=priceArr[3] : sum-=0;
      state.glutenFreeCrust ? sum+=priceArr[4] : sum-=0;

    
          
    // console.log(priceArr);
    // console.log(sum);

      const newPrice = document.querySelector('strong');
      newPrice.textContent = "$"+sum;
      // console.log(newPrice);

  }    




renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click',() => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
