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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePepp => {
    if (state.greenPeppers) {
      onePepp.style.visibility = 'visible';
    } else {
      onePepp.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(oneSau => {
    if (state.whiteSauce) {
      oneSau.style.visibility = 'visible';
    } else {
      oneSau.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(oneCrust => {
    if (state.glutenFreeCrust) {
      oneCrust.style.visibility = 'visible';
    } else {
      oneCrust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //Aqui estamos extrayendo todos los elementos con clase .btn:
  document.querySelectorAll('.btn').forEach(btn => {
    //console.dir(btn) se utiliza para sacar propiedad;
    //para vincular cada boton con el HTML creamos una id en cada boton, despues comprobamos con console.dir que tiene la propiedad. 
    const name = btn.id;
    // Creamos la constante para extraer cada id del boton que hemos creado.
    //iniciamos un condicional donde le indicamos que si el state es false, quite el active de la clase del boton en cuestion.
    if (state[name] === false) {
      btn.classList.remove("active")
      //para ello utiliza classlist donde le decimos que por cada boton consultado si encuentra 'active' la elimine, lo que hace que el boton se desactive.
    }
    else {
      btn.classList.add("active")
      //en el caso contrario que lo añada ya que si el estado es activo tiene que tener el 'active' en la clase del boton para que haga el efecto esperado.
    }
    //Es imporntante que todos los states esten originalmente en active para que no se rompa el código.
  })
}

function renderPrice() {
  let names = [];
  for(el in state) {
    names.push(el); 
  } 
  
  let sumTotal = 0;
  document.querySelectorAll('.liPrices li').forEach((li, i) => {
    
    if(state[names[i]]) {
      sumTotal += ingredients[names[i]].price;
      li.style.display='block';
    } else {
      li.style.display='none'
    } 
  })

  const totalHtml = document.querySelector('aside.panel ul + strong')
  totalHtml.innerHTML = `$ ${sumTotal+basePrice}`;

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
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