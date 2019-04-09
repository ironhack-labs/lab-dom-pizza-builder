var basePrice = 10;

var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  $(".pep, .pep-cost").toggle(state.pepperonni);
}

function renderMushrooms() {
  $(".mushroom, .mushroom-cost").toggle(state.mushrooms);
}

function renderGreenPeppers() {
  $(".green-pepper, .green-pepper-cost").toggle(state.greenPeppers);
}

function renderWhiteSauce() {
  $(".sauce").toggleClass("sauce-white");
  $(".white-sauce-cost").toggle(state.whiteSauce);
}

function renderGlutenFreeCrust() {
  $(".crust").toggleClass("crust-gluten-free");
  $(".gluten-free-crust-cost").toggle(state.glutenFreeCrust);
}

function renderButtons() {
  if (state.pepperonni) {
    $(".btn-pepperonni").removeClass("active");
  }

  if (state.mushrooms) {
    $(".btn-mushrooms").removeClass("active");
  }

  if (state.greenPeppers) {
    $(".btn-green-peppers").removeClass("active");
  }

  $(".btn").click(function() {
    $(this).toggleClass("active");
  });
}

function renderPrice() {
  var total = basePrice;

  for (var key in state) {
    var value = state[key];

    if (value === true) {
      total += ingredients[key].price;
    }
  }

  $(".total-price").text(`$${total}`);
}

$(".btn-pepperonni").click(function() {
  state.pepperonni = !state.pepperonni;
  renderPepperonni();
  renderPrice();
});

$(".btn-mushrooms").click(function() {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
  renderPrice();
});

$(".btn-green-peppers").click(function() {
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();
  renderPrice();
});

$(".btn-sauce").click(function() {
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
  renderPrice();
});

$(".btn-crust").click(function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
  renderPrice();
});

renderEverything();
