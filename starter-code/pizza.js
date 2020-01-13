// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', className: 'pep', price: 1, state:true},
  mushrooms: {name: 'Mushrooms', className: 'mushroom', price: 1, state:true},
  greenPeppers: {name: 'Green Peppers', className: 'green-pepper', price: 1, state:true},
  whiteSauce: {name: 'White sauce', className: 'sauce', price: 3, state:false},
  glutenFreeCrust: {name: 'Gluten-free crust', className: 'crust', price: 5, state:false}
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderProducts(['pepperonni','mushrooms','greenPeppers'])
  renderSpecials(['whiteSauce','glutenFreeCrust'])
  renderButtons()
  renderPrice()
}

function renderProducts(products) {
  products.forEach((prod) => {
    document.querySelectorAll('.' + ingredients[prod].className).forEach(function(el){
      el.style.visibility = !!ingredients[prod].state ? "visible" : "hidden";
    })
  })
}

function renderSpecials(specials) {
  specials.forEach((special) => {
    let el = document.querySelector('.' + ingredients[special].className )
    if (!!ingredients[special].state) { el.classList.add("special") }
    else { el.classList.remove("special") }
  })
}

// Render buttons mirroring the ingredients object
function renderButtons() {
  for (ingredient in ingredients) {
    let btn = document.getElementById('btn-' + ingredient);
    if ( !!ingredients[ingredient].state ) { btn.classList.remove('active') } else { btn.classList.add('active') }
  }
}

// Render price list based on active elements in the ingredients object
function renderPrice() {

  let total = basePrice;

  for (ingredient in ingredients) {

    let li = document.getElementById('price-' + ingredient);
    let product = ingredients[ingredient];

    if ( !!product.state ) {
      li.style.display = "block";
      total += product.price
    } else {
      li.style.display = "none";
    }

  }

  document.getElementById('price-total').innerHTML = '$' + total;

}

// Event listener on top level panel control
document.querySelector('.panel.controls').onclick = function(e) {
  if ( e.target.tagName !== "BUTTON" ) { return } // only interested in <button>
  let ingredientName = e.target.id.split("-")[1]; // ie: btn-(pepperonni) <- ingredient name
  ingredients[ingredientName].state = !ingredients[ingredientName].state;
  renderEverything();
}

// Initial Call
renderEverything()
