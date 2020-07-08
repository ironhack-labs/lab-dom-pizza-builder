let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: 'pepperoni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
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

  /*Selecciono todos los elementos con clase mushroom y le paso un forEach con un argumento llamado "oneMush" para que
  si el estado de mushrooms es TRUE, haga que su visibilidad de estilo (style.visibility) sea visible
  Si es else (FALSE) que lo esconda. Está relacionado con el eventListener (LEER MÁS ABAJO)*/
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
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible'
    } else {
      oneGreenPepper.style.visibility = 'hidden'
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  /*Como solo hay un elemento con la clase "sauce" en el HTML, accedemos a él con el querySelector 
  y le decimos que si el estado del ingrediente whiteSauce es "TRUE", que añada una clase a la lista (.classList) con nombre 'sauce-white'
  y que si es false, que la quite*/
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white')
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white')
  }
};

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free')
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }
};

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  /*Esta invocación añade a los botones de los ingredientes una clase "active" o 
  se la quita dependiendo del estado*/
  if (state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').classList.add('active');
  } else {
    document.querySelector('.btn.btn-pepperoni').classList.remove('active');
  };
  if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  };
  if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.add('active');
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  };
  if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  };
  if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn.btn-crust').classList.remove('active');
  };
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  /*Declaro una variable (totalAmount) para que guarde el total de la pizza,
  que para empezar, es el valor de basePrice (10).
  Con otra variable (list) selecciono el elemento donde se enseñan los ingredientes
  base (pepperoni, mushrooms y green peppers) (elemento aside con clase "panel" y clase "price" y luego )
  y le sobreescribo para dejarlo en blanco con innerHTML.
  */
  let totalAmount = basePrice;
  let list = document.querySelector('aside.panel.price ul');
  list.innerHTML = "";

  /*Creo un for...in loop al que le paso un argumento inventado "ingredientsElement" de
  la lista de ingredients (linea 2) para así iterar sobre el estado de cada uno.
  Si el estado del ingrediente a iterar es TRUE, debe sumar su precio a la variable totalAmount (linea 147)
  que ya tiene un valor de 10.
  Después de que el ingrediente sea "TRUE" y se calcule su precio, se va a añadir (+=) un <li> 
  que haga referencia al precio del ingrediente iterado y luego diga su nombre (en minúscula porque ORTOGRAFÍA).
  */

  for (let ingredientElement in ingredients) {
    if (state[ingredientElement]) {
      totalAmount += ingredients[ingredientElement].price;
      list.innerHTML += `<li> $${ingredients[ingredientElement].price} ${ingredients[ingredientElement].name.toLowerCase()} </li>`
    }
  }

  /*Finalmente, selecciono el elemento donde se enseña el totalprice y lo sobreescribo con el
  innerHTML y le enseño el valor de totalAmount*/
  document.querySelector('aside.panel.price strong').innerHTML = `$ ${totalAmount}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

/*Seleccionamos todos los elementos con la clase btn + btn-mushrooms con document.querySelector y le añado un
eventListener que cuando se le haga click active una función que cambie el estado (true o false) con cada click
Luego invoca la función renderEverything() para refrescar el estilo del botón y todo lo demás*/
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

/* Seleccionamos los botones de la clase "btn" + "btn-sauce" 
y le añadimos un evento click que cambie el estado (TRUE/FALSE) con cada click
Luego invoca renderEverything que refresca todo*/
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})