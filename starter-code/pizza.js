// Constants
  const basePrice = 10;
  const ingredients = {
    pepperonni: { name: "Pepperonni", price: 1 },
    mushrooms: { name: "Mushrooms", price: 1 },
    greenPeps: { name: "Green Peppers", price: 1 },
    wS: { name: "White sauce", price: 3 },//Si, esta es mi white sauce, por que no llamarla asi?
    glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
  };

// Initial value of the state (the state values can change over time)
  const state = {
    pepperonni: true,
    mushrooms: true,
    greenPeps: true,
    wS: true,
    glutenFreeCrust: false
  };

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
  const renderEverything = _ => {
    renderPepperonni();
    renderMushrooms();
    renderGreenPeps();
    renderWS();
    renderGlutenFreeCrust();
    renderButtons();
    renderPrice();
  };

  const renderPepperonni = _ =>
    $(".pep").each((_, $pep) => ($pep.style.visibility = state.pepperonni ? "visible" : "hidden"));

  const renderMushrooms = _ =>
    $(".mushroom").each((_, $mushrooms) => ($mushrooms.style.visibility = state.mushrooms ? "visible" : "hidden"));

  const renderGreenPeps = _ =>
    $(".green-pepper").each(
      (_, $greenPeps) => ($greenPeps.style.visibility = state.greenPeps ? "visible" : "hidden")
    );

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const renderWS = _ => $(".sauce")[state.wS ? "addClass" : "removeClass"]("sauce-white");

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const renderGlutenFreeCrust = _ => {
    $(".crust")[state.glutenFreeCrust ? "addClass" : "removeClass"]("crust-gluten-free");
  };

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const renderButtons = _ => $(".btn").click(e => $(e.target).toggleClass("active"));

// Iteration 4: change the HTML of `<aside class="panel price">`
  const renderPrice = _ => {
    const total = Object.keys(state).reduce(
      (acc, key) => {
        if (state[key]) {
          const { price, name } = ingredients[key];
          acc.totalPrice += price;
          acc.activeIngredients.push(`<li>$${price} ${name}</li>`);
        }
        return acc;
      },
      { totalPrice: basePrice, activeIngredients: [] }
    );
    $(".price ul").html(total.activeIngredients);
    $(".price strong").html(`$${total.totalPrice}`);
  };

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
  $(".btn-pepperonni").click(_ => {
    state.pepperonni = !state.pepperonni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
  $(".btn.btn-mushrooms").click(_ => {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
  $(".btn.btn-green-peppers").click(_ => {
    state.greenPeps = !state.greenPeps;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
  $(".btn.btn-sauce").click(_ => {
    state.wS = !state.wS;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
  $(".btn.btn-crust").click(_ => {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
  });
