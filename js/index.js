// Write your Pizza Builder JavaScript in this file.

// Constants

const basePrice = 10;             // Guardamos en una constante el precio base.
const ingredients = {             // ingredients es un objeto que tiene unas propiedades y el valor de cada propiedad es un objeto que a su vez tiene dos keys (name y price).
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)

const state = {           // Esta variable indica el estado de cada propiedad del objeto ingredients.
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed

function renderEverything() {       // Con esta función llamamos a todas las funciones que aparecen posteriormente.
  renderPepperoni(); 
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {  
  document.querySelectorAll('.pep').forEach((onePep) => {  // Accedemos a todos los elementos que tengan la clase .pep (es decir, todos los pepperonis) y les hacemos un forEach para iterar sobre ellos.
    if (state.pepperoni) {                                 // Indicamos que si el estado del pepperoni es true.
      onePep.style.visibility = 'visible';                 // Queremos que la visibilidad del elemento de turno (el pepperoni) sea visible (es decir, que se vea).
    } else {                                               // Si no (es decir, si el estado del pepperoni es false).
      onePep.style.visibility = 'hidden';                  // Queremos que la visibilidad del elemento de turno (el pepperoni) sea hidden (es decir, que no se vea).
    }
  });
}

function renderMushrooms() {                               // El procedimiento es el mismo que con el pepperoni.
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {                            // El procedimiento es el mismo que con el pepperoni.
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {                              // El procedimiento es el mismo que con el pepperoni.
  document.querySelectorAll('.sauce-white').forEach((oneSauceWhite) => {
    if (state.whiteSauce) {
      oneSauceWhite.style.visibility = 'visible';
    } else {
      oneSauceWhite.style.visibility = 'hidden';
    }
  });

}

function renderGlutenFreeCrust() {  
  const crustBase = document.querySelector('.crust');     // Accedemos al elemento de HTML que tiene la clase .crust (es decir, estamos accediendo al elemento de la masa).

    if (state.glutenFreeCrust) {                          // Indicamos que si el estado de glutenFreeCrust es true (que por defecto aparece como false).
      crustBase.classList.add('crust-gluten-free');       // Le añadimos la clase .crust-gluten-free. (De esta manera, cuando pulsamos en el botón de añadir crust gluten free, aparece la corteza sin gluten).
    } else {                                              // Si no, es decir, si el state de glutenFreeCrust es falso.
      crustBase.classList.remove('crust-gluten-free');    // Le quitamos la clase .crust-gluten-free (como por defecto esta clase tiene estado false, nos aparece sin la corteza de sin gluten hasta que pulsamos el botón).
    }
  }


function renderButtons() {
  const allButtons = document.querySelectorAll(".btn");  // Accedemos a todos los elementos botón en el HTML.
  Array.from(allButtons).forEach((button) => {           // Convertimos todos esos elementos en un array e iteramos por él con un forEach().
    const buttonText = button.innerText;                 // Creamos una variable que equivalga al contenido de texto de cada uno de los elementos de botón.
    const key = Object.keys(ingredients).find(key => {   // Creamos una variable llamada key y con Object.keys(ingredients) hacemos un array de todas las keys del objeto ingredients (es decir, [pepperoni, mushrooms, greenPeppers etc.]).
      return ingredients[key].name === buttonText;       // En esta línea de código, en "ingredients[key]" la palabra key que va entre corchetes equivale a si ahí estuviera la palabra pepperoni, mushroom, greenPeppers etc.
                                                         // Le pasamos la función .find() y le indicamos que cuando el value que está dentro de la key name de cada una de las propiedades de ingredients (pepperoni, mushroom etc.) coincida con el contenido de texto del botón nos lo devuelva.
                                                         // Es decir ingredients[pepperoni, mushroom, greenPepper, etc].name equivaldrá a un string que será "pepperoni" "Mushrooms" "Green peppers" (dependiendo de la propiedad que sea en cada momento). Y cada uno de estos strings coincide con el contenido de texto que hay en cada uno de los botones ("pepperoni" "Mushrooms", "Green peppers") 
    })
    const ingredientState = state[key];                  // Ahora creamos una variable que guarde el estado de cada una de las propiedades del objeto state. De nuevo aquí [key] equivale a si ahí estuviera pepperoni, mushrooms, greenPeppers etc.
    if (ingredientState) {                               // Indicamos que si el estado de la propiedad es true:
      button.classList.add("active");                    // Nos añada a cada elemento botón la clase .active. (Con esta clase el botón aparece como si estuviera pulsado).
    } else {                                             // Si no (es decir, si el estado de la propiedad es false):
      button.classList.remove("active");                 // Indicamos que queremos quitar la clase .active de cada elemento botón. (Si el botón no tiene esta clase, aparece como si no estuviera pulsado).
    }                                                    // Las propiedades que tienen estado true por defecto cuando abrimos el index son pepperoni, mushrooms y greenPeppers, por eso al abrir la página sus botones aparecen pulsados. Mientras que las propiedades que por defecto tienen estado false son whiteSauce y glutenFreeCrust, por eso al abrir la página sus botones aparecen sin pulsar.
  })                                                     // Como en los addEventListener de abajo hemos indicado que en cada click cambie el estado de la propiedad, si hacemos click en por ejemplo el botón de pepperoni que por defecto tiene estado true y aparece como si el botón estuviera pulsado, al hacer click su estado pasará a false y por lo tanto el botón aparecerá como si estuviera sin pulsar. Con whiteSauce y glutenFreeCrust ocurre lo mismo pero al revés, primero su estado es false y al pulsar se convierte en true.
  
}

function renderPrice() {
   const priceUl = document.querySelector('aside.price ul');  // Creamos una variable y guardamos el elemento unordered list del HTML (este elemento equivale a la lista que aparece arriba a la dcha en el index).
  priceUl.innerHTML = '';                                     // Al poner que innerHTML equivale a un string vacío, estamos eliminando todos los elementos HTML que haya en ese momento, por lo tanto en esta línea lo que hacemos es quitar todos los elementos HTML que tenga dentro el elemento unordered list <ul>.

  const activeIngredients = Object.keys(state).filter(( key ) => {  // Creamos una variable y en ella con Object.keys creamos un array de las keys del objeto state (es decir [pepperoni, mushrooms, greenPeppers, etc]) y a ese array le hacemos un filter.
    return state[key] === true;                                     // Indicamos que queremos que el filter nos devuelva un array sólo con las keys cuyo estado sea true.
  })
  let price = basePrice;                                            // Creamos una variable que equivalga al precio base (aparece al inicio del código).
  activeIngredients.forEach( (key) => {                             // Al array que creamos anteriormente (el de .filter) le hacemos un forEach e iteramos por él.
    const value = ingredients[key];                                 // Creamos una variable que guarde cada propiedad del objeto de ingredients (es decir, pepperoni, mushrooms, etc).
    price += value.price;                                           // Al price (que es el precio base) le sumamos value.price (aquí lo que le estamos sumando es el valor que tiene guardado la key price de cada una de las propiedades del objeto de ingredients) es decir, por ejemplo aquí: <whiteSauce: { name: 'White sauce', price: 3 }> lo que estamos sumando es el número 3.
    const priceItem = document.createElement('li');                 // Creamos un elemento <li> en el DOM y lo guardamos en una variable.
    priceItem.textContent = `$${value.price} ${value.name}`         // Indicamos que el contenido de texto que queremos que tenga el elemento <li> que acabamos de crear sea el símbolo del dólar y el valor de la key price de value (recordamos que value equivale a las propiedades de ingredients: pepperoni, mushroom, etc) y el valor del nombre de la key value. Es decir esto equivaldría por ejemplo a < $1 pepperoni >.
    priceUl.appendChild(priceItem);                                 // Adjuntamos los elementos de lista <li> al elemento de lista padre <ul>.
  } )
  const priceElement = document.querySelector('aside.price strong') // Aquí accedemos al contenido de HTML que equivale al número grande que aparece al final de la lista cuando abrimos el index. Por defecto cuando abrimos aparece $13.
  priceElement.textContent = `$${price}`;                           // Indicamos que el contenido de texto de ese elemento sea símbolo del dolar y price (a price íbamos sumándole todos los valores de price de cada propiedad del objeto ingredients).
 
                                                                    // Como en las líneas 113 y 114 hemos indicado que hiciera un filter al array y sólo nos devolviese los ingredientes que tuvieran como estado true, todas las operaciones de sumar el precio y de añadir el ingrediente y su precio a la lista, sólo se realizarán si ese ingrediente tiene valor true. (Por eso ocurren cuando el botón del ingrediente en cuestión está pulsado).
 
  
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () { // Aquí indicamos que cuando hagamos click en cada botón cambie el estado de la propiedad del ingrediente de true a false y viceversa y llamamos a la función renderEverything()
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});