// Write your Pizza Builder JavaScript in this file.

// Constants
var ingredients = [
  { name: "Pepperonni", price: 1, class: ".pep", button: "btn-pepperonni" },
  { name: "Mushrooms", price: 1, class: ".mushroom", button: "btn-mushrooms" },
  {
    name: "Green Peppers",
    price: 1,
    class: ".green-pepper",
    button: "btn-green-peppers"
  },
  {
    name: "White sauce",
    price: 3,
    class: ".sauce",
    button: "btn-sauce",
    extraclass: "sauce-white"
  },
  {
    name: "Gluten-free crust",
    price: 5,
    class: ".crust",
    button: "btn-crust",
    extraclass: "crust-gluten-free"
  }
];

ingredients.forEach(e => (e.state = true));

function render(ingredient) {
  !ingredient.extraclass
    ? document
        .querySelectorAll(ingredient.class)
        .forEach($ing =>
          ingredient.state
            ? ($ing.style.visibility = "visible")
            : ($ing.style.visibility = "hidden")
        )
    : document
        .querySelectorAll(ingredient.class)
        .forEach($ing =>
          ingredient.state
            ? $ing.classList.add(ingredient.extraclass)
            : $ing.classList.remove(ingredient.extraclass)
        );
}

function renderButtons() {
  let btnList = document.getElementsByClassName("btn");
  [...btnList].map((a, i) =>
    ingredients[i].state
      ? a.classList.add("active")
      : a.classList.remove("active")
  );
}

function renderEverything() {
  ingredients.forEach(e => render(e));
  renderButtons();
  renderPrice();
}
function renderPrice() {
  let priceList = document.getElementsByClassName("list");
  [...priceList].map((a, i) =>
    ingredients[i].state
      ? (a.style.display = "block")
      : (a.style.display = "none")
  );

  let finalPrice = ingredients.reduce((a, b) => a + b.price * b.state, 10);
  document.querySelector("strong").innerHTML = `$${finalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
function toClick(ingredient) {
  document.querySelector(".btn." + ingredient.button).onclick = function() {
    ingredient.state = !ingredient.state;
    renderEverything();
  };
}

ingredients.forEach(e => toClick(e));