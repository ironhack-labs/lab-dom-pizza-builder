(function() {
  // Write your Pizza Builder JavaScript in this file.

  // Constants
  var basePrice = 10;
  var ingredients = {
    pepperonni: { name: "Pepperonni", price: 1 },
    mushrooms: { name: "Mushrooms", price: 1 },
    greenPeppers: { name: "Green Peppers", price: 1 },
    whiteSauce: { name: "White sauce", price: 3 },
    glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
  };

  // Initial value of the state (the state values can change over time)
  var state = {
    pepperonni: true,
    mushrooms: true,
    greenPeppers: true,
    whiteSauce: false,
    glutenFreeCrust: false
  };

  // This function takes care of rendering the pizza based on the state
  // This function is triggered once at the begining and everytime the state is changed
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
    document.querySelectorAll(".pep").forEach(function($pep) {
      if (state.pepperonni) {
        $pep.style.visibility = "visible";
      } else {
        $pep.style.visibility = "hidden";
      }
    });
  }

  function renderMushrooms() {
    // Iteration 1: set the visibility of `<section class="mushroom">`
    document.querySelectorAll(".mushroom").forEach(function($mushroom) {
      if (state.mushrooms) {
        $mushroom.style.visibility = "visible";
      } else {
        $mushroom.style.visibility = "hidden";
      }
    });
  }

  function renderGreenPeppers() {
    // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll(".green-pepper").forEach(function($greenpepper) {
      if (state.greenPeppers) {
        $greenpepper.style.visibility = "visible";
      } else {
        $greenpepper.style.visibility = "hidden";
      }
    });
  }

  function renderWhiteSauce() {
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    // document.querySelector(".sauce").classList.toggle("sauce-white");
    if (state.whiteSauce) {
      document.querySelector(".sauce").classList.add("sauce-white");
    } else {
      document.querySelector(".sauce").classList.remove("sauce-white");
    }
  }

  function renderGlutenFreeCrust() {
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    if (state.glutenFreeCrust) {
      document.querySelector(".crust").classList.add("crust-gluten-free");
    } else {
      document.querySelector(".crust").classList.remove("crust-gluten-free");
    }
  }

  // function simpleCallBack(evt) {
  //   evt.target.classList.toggle("active");
  // }

  // function buttonAction(evt) {
  //   const target = evt.target || evt.srcElement;
  //   target.classList.toggle("active");
  // }

  function renderButtons() {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    // document.querySelectorAll(".btn").forEach(function(element) {
    //   if (element.classList.contains("active")) {
    //     element.classList.remove("active");
    //   }
    //   element.onclick = simpleCallBack;
    // });
    // element.classList.toggle("active");
    // const btns = document.querySelectorAll(".btn");
    // for (let i = 0; i < btns.length; i++) {
    //   btns[i].onclick = buttonAction;
    // }
    if (state.pepperonni) {
      document.querySelector(".btn-pepperonni").classList.add("active");
    } else {
      document.querySelector(".btn-pepperonni").classList.remove("active");
    }
    if (state.mushrooms) {
      document.querySelector(".btn-mushrooms").classList.add("active");
    } else {
      document.querySelector(".btn-mushrooms").classList.remove("active");
    }
    if (state.greenPeppers) {
      document.querySelector(".btn-green-peppers").classList.add("active");
    } else {
      document.querySelector(".btn-green-peppers").classList.remove("active");
    }
    if (state.whiteSauce) {
      document.querySelector(".btn-sauce").classList.add("active");
    } else {
      document.querySelector(".btn-sauce").classList.remove("active");
    }
    if (state.glutenFreeCrust) {
      document.querySelector(".btn-crust").classList.add("active");
    } else {
      document.querySelector(".btn-crust").classList.remove("active");
    }
  }

  function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`

    // const pepe =
    if (
      document.querySelector(".btn-pepperonni").classList.contains("active")
    ) {
      document.querySelector(".pep-price").innerHTML = "$1 pepperonni";
    } else {
      document.querySelector(".pep-price").innerHTML = " ";
    }
    if (document.querySelector(".btn-mushrooms").classList.contains("active")) {
      document.querySelector(".mush-price").style.visibility = "visible";
    } else {
      document.querySelector(".mush-price").style.visibility = "hidden";
    }
    if (
      document.querySelector(".btn-green-peppers").classList.contains("active")
    ) {
      document.querySelector(".greenpep-price").style.visibility = "visible";
    } else {
      document.querySelector(".greenpep-price").style.visibility = "hidden";
    }
    if (document.querySelector(".btn-sauce").classList.contains("active")) {
      document.querySelector(".sauce-price").style.visibility = "visible";
    } else {
      document.querySelector(".sauce-price").style.visibility = "hidden";
    }
    if (document.querySelector(".btn-crust").classList.contains("active")) {
      document.querySelector(".crust-price").style.visibility = "visible";
    } else {
      document.querySelector(".crust-price").style.visibility = "hidden";
    }
  }

  renderEverything();

  // Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
  document.querySelector(".btn.btn-pepperonni").onclick = function() {
    state.pepperonni = !state.pepperonni;
    renderEverything();
  };

  // Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
  document.querySelector(".btn.btn-mushrooms").onclick = function() {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  };

  // Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
  document.querySelector(".btn.btn-green-peppers").onclick = function() {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  };

  // Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
  document.querySelector(".btn.btn-sauce").onclick = function() {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
  };

  // Iteration 2: Add click event listener on `<button class="btn btn-crust">`
  document.querySelector(".btn.btn-crust").onclick = function() {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
  };

  // window.addEventListener("DOMContentLoaded", renderEverything);
})();
