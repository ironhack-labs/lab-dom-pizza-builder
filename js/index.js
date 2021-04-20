// Write your Pizza Builder JavaScript in this file.
// Constants
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
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};
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
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}
function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  };
}
function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  };
}
function renderButtons() {
  const {
    pepperoni,
    mushrooms,
    greenPeppers,
    whiteSauce,
    glutenFreeCrust: crust
  } = state;
  document.querySelectorAll('.btn').forEach(onePep => {
        switch (onePep.textContent) {
          case 'pepperoni':
            pepperoni ? onePep.classList.add('active') : onePep.classList.remove('active');
            break;
          case 'Mushrooms':
            mushrooms ? onePep.classList.add('active') : onePep.classList.remove('active');
            break;
          case 'Green peppers':
            greenPeppers ? onePep.classList.add('active') : onePep.classList.remove('active');
            break;
          case 'White sauce':
            whiteSauce ? onePep.classList.add('active') : onePep.classList.remove('active');
            break;
          case 'Gluten-free crust':
            crust ? onePep.classList.add('active') : onePep.classList.remove('active');
            break;
        }
      });
    }
      function renderPrice() {
        let totalPrice = basePrice;
        let priceList = document.querySelector(".price ul");
        priceList.innerHTML = "";
        if (state.pepperoni) {
          const pep = document.createElement("li");
          pep.innerText = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`
          priceList.append(pep);
          totalPrice += ingredients.pepperoni.price;
        }
        if (state.mushrooms) {
          const mush = document.createElement("li");
          mush.innerText = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`;
          priceList.append(mush);
          totalPrice += ingredients.mushrooms.price;
        }
        if (state.greenPeppers) {
          const pepper = document.createElement("li");
          pepper.innerText = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`;
          priceList.append(pepper);
          totalPrice += ingredients.greenPeppers.price;
        }
        if (state.whiteSauce) {
          const sauce = document.createElement("li");
          sauce.innerText = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`;
          priceList.append(sauce);
          totalPrice += ingredients.whiteSauce.price;
        }
        if (state.glutenFreeCrust) {
          const crust = document.createElement("li");
          crust.innerText = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`;
          priceList.append(crust);
          totalPrice += ingredients.glutenFreeCrust.price;
        }
        let totalPriceRender = document.querySelector(".price strong");
        totalPriceRender;
        totalPriceRender.innerText = `$${totalPrice}`;
      }
      renderEverything();
      document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
        state.pepperoni = !state.pepperoni;
        renderEverything();
      });
      document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
        state.mushrooms = !state.mushrooms;
        renderEverything();
      });
      document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
        state.greenPeppers = !state.greenPeppers;
        renderEverything();
      });
      document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
        state.whiteSauce = !state.whiteSauce;
        renderEverything();
      });
      document.querySelector('.btn.btn-crust').addEventListener('click', () => {
        state.glutenFreeCrust = !state.glutenFreeCrust;
        renderEverything();
      });