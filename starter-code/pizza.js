//Function that add or remove elements of the pizza.
function toggleElement(className, toggleClass){
  let list = document.querySelectorAll(className)
  list.forEach(function(element){
    element.classList.toggle(toggleClass);
  });
}
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White Sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free Crust', price: 5}
}
//Function that render price in the panel according of the button clicked
function renderPrice(button) {
  let list = document.querySelector('.panel.price');
  let idTotal = document.querySelector('#total');
  let priceTotal = parseInt(idTotal.innerText.split('$')[1]);
  let name, price, idName;

    //switch name, price and id
    switch(true){
      case button.classList.contains("btn-pepperonni"):
        name = ingredients.pepperonni.name;
        price = ingredients.pepperonni.price;
        idName = 'pepperonni';
      break;
      case button.classList.contains("btn-mushrooms"):
        name = ingredients.mushrooms.name;
        price = ingredients.mushrooms.price;
        idName = 'mushrooms';
      break;
      case button.classList.contains("btn-green-peppers"):
        name = ingredients.greenPeppers.name;
        price = ingredients.greenPeppers.price;
        idName = 'green-peppers';
      break;
      case button.classList.contains("btn-sauce"):
        name = ingredients.whiteSauce.name;
        price = ingredients.whiteSauce.price;
        idName = 'white-sauce';
      break;
      case button.classList.contains("btn-crust"):
        name = ingredients.glutenFreeCrust.name;
        price = ingredients.glutenFreeCrust.price;
        idName = 'gluten-free-crust';
      break;
    }

    //This part deletes or inserts if button is active or not.
    if(button.classList.contains('active')){
        let li = document.createElement('li');
        li.setAttribute('id',idName);
        li.innerText = `$${price} ${name}`
        list.querySelector('ul').appendChild(li);
        priceTotal += price
        idTotal.innerText = `$${priceTotal}`;
    }
    else{

        let prices = list.querySelectorAll('li');
      
        prices.forEach(function(element){
          if(element.id == idName){
            element.remove();
            priceTotal -= price;
            idTotal.innerText = `$${priceTotal}`;
          }
        });
    }
 }


// buttons that call the interactions.
let pepperonniButton = document.querySelector('.btn-pepperonni');
  pepperonniButton.onclick = function() {
    pepperonniButton.classList.toggle('active');
    toggleElement('.pep', 'hidden');
    renderPrice(pepperonniButton);
}

let mushroomsButton = document.querySelector('.btn-mushrooms');
  mushroomsButton.onclick = function(){
    mushroomsButton.classList.toggle('active');
    toggleElement('.mushroom', 'hidden');
    renderPrice(mushroomsButton);
}

let peppersButton = document.querySelector('.btn-green-peppers');
  peppersButton.onclick = function(){
    peppersButton.classList.toggle('active');
    toggleElement('.green-pepper', 'hidden');
    renderPrice(peppersButton);
}

let sauceButton = document.querySelector('.btn-sauce');
  sauceButton.onclick = function(){
    sauceButton.classList.toggle('active');
    toggleElement('.sauce', 'sauce-white');
    renderPrice(sauceButton);
}

let crustButton = document.querySelector('.btn-crust');
  crustButton.onclick = function(){
    crustButton.classList.toggle('active');
    toggleElement('.crust', 'crust-gluten-free');
    renderPrice(crustButton);
}
