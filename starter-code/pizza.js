// Write your Pizza Builder JavaScript in this file.

// Constants 
const basePrice = 10
const ingredients = {
  pepperonni: {
    name: 'Pepperonni',
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
}

// Initial value of the state (the state values can change over time)
const state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed

const renderPepperonni = () => {
  document.querySelectorAll('.pep').forEach(($pep) => {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  })
}

const renderMushrooms = () => {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(($mushroom) => {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

const renderGreenPeppers = () => {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(($pepper) => {
    if (state.greenPeppers) {
      $pepper.style.visibility = "visible";
    } else {
      $pepper.style.visibility = "hidden";
    }
  })
}

const renderWhiteSauce = () => {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(($theSauce) => {
    if (state.whiteSauce) {
      $theSauce.classList.add('sauce-white')
    } else {
      $theSauce.classList.remove('sauce-white')
    }
  })
}

const renderGlutenFreeCrust = () => {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(($theCrust) => {
    if (state.glutenFreeCrust) {
      $theCrust.classList.add('crust-gluten-free')
    } else {
      $theCrust.classList.remove('crust-gluten-free');
    }
  })
}

const renderButtons = () => {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    document.querySelectorAll('.btn').forEach(($theBtn) => {
      if ($theBtn.classList.contains('btn-pepperonni')) {
        if (state.pepperonni) {
          $theBtn.classList.add('active')
        } else {
          $theBtn.classList.remove('active')
        }
      } else if ($theBtn.classList.contains('btn-mushrooms')) {
        if (state.mushrooms) {
          $theBtn.classList.add('active')
        } else {
          $theBtn.classList.remove('active')
        }
      } else if ($theBtn.classList.contains('btn-green-peppers')) {
        if (state.greenPeppers) {
          $theBtn.classList.add('active')
        } else {
          $theBtn.classList.remove('active')
        }
      } else if ($theBtn.classList.contains('btn-sauce')) {
        if (state.whiteSauce) {
          $theBtn.classList.add('active')
        } else {
          $theBtn.classList.remove('active')
        }
      } else if ($theBtn.classList.contains('btn-crust')) {
        if (state.glutenFreeCrust) {
          $theBtn.classList.add('active')
        } else {
          $theBtn.classList.remove('active')
        }
      }
    })
   }

    const renderPrice = () => {
      // Iteration 4: change the HTML of `<aside class="panel price">`
      let total = basePrice;
      let listHtml = '';
      if (document.querySelector('.btn-pepperonni').classList.contains('active')){
        listHtml += '<li> $1 pepperonni </li>';
        total += 1;
      } if (document.querySelector('.btn-mushrooms').classList.contains('active')){
        listHtml += '<li> $1 mushrooms </li>';
        total += 1;
      } if (document.querySelector('.btn-green-peppers').classList.contains('active')){
        listHtml += '<li> $1 green peppers </li>';
        total += 1;
      } if (document.querySelector('.btn-sauce').classList.contains('active')){
        listHtml += '<li> $3 white sauce </li>';
        total += 3;
      } if (document.querySelector('.btn-crust').classList.contains('active')){
        listHtml += '<li> $5 gluten-free crust </li>';
        total += 5;
      } 
      let thePrice = `$${total}`;
      let ulElement = document.querySelector('.panel.price > ul');
      ulElement.innerHTML = listHtml;
      let strongElement = document.querySelector('.panel.price > strong');
      strongElement.innerHTML = thePrice;
   }

    const renderEverything = () => {
      renderPepperonni()
      renderMushrooms()
      renderGreenPeppers()
      renderWhiteSauce()
      renderGlutenFreeCrust()
      renderButtons()
      renderPrice()
    }
    
    renderEverything()

    // Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
    document.querySelector('.btn.btn-pepperonni').onclick = () => {
      state.pepperonni = !state.pepperonni
      renderEverything()
    }

    // Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
    document.querySelector('.btn.btn-mushrooms').onclick =  () => {
      state.mushrooms = !state.mushrooms
      renderEverything()
    }

    // Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
    document.querySelector('.btn.btn-green-peppers').onclick =  () => {
      state.greenPeppers = !state.greenPeppers
      renderEverything()
    }

    // Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
    document.querySelector('.btn.btn-sauce').onclick =  () => {
      state.whiteSauce = !state.whiteSauce
      renderEverything()
    }
    // Iteration 2: Add click event listener on `<button class="btn btn-crust">`
    document.querySelector('.btn.btn-crust').onclick = () => {
      state.glutenFreeCrust = !state.glutenFreeCrust
      renderEverything()
    }