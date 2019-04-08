// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();


}

function renderPepperonni() {
  $(".btn-pepperonni").on("click", function() {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $("aside li:nth-child(1)").toggle();
    renderPrice();
  });
}

function renderMushrooms() {
  $(".btn-mushrooms").on("click", function() {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $("aside li:nth-child(2)").toggle();
    renderPrice();
  });

  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  $(".btn-green-peppers").on("click", function() {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $("aside li:nth-child(3)").toggle();
    renderPrice();
  });

  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  $(".btn-sauce").on("click", function() {
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $("aside li:nth-child(4)").toggle();
    renderPrice();
  });
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  $(".btn-crust").on("click", function() {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $("aside li:nth-child(5)").toggle();
    renderPrice();
  });
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderPrice() {

  let total = 10;
  $("aside li:visible").each(function() {
    // let price = Number($(this).text().split(' ')[0].replace('$', '') )
    let price = Number(this.innerText[1]);
    total += price;
  });
  $("strong")[0].innerText = '$' + total;
}

renderEverything();

