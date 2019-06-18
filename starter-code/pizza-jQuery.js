$(document).ready(function(){

  var basePrice = 10;
  var condiments = [
    {name: '.peppPrice', price: 1},
    {name: '.mushPrice', price: 1},
    {name: '.greenPrice', price: 1},
    {name: '.saucePrice', price: 3},
    {name: '.crustPrice', price: 5}
  ];

  var state = {
    pepperonni: true,
    mushrooms: true,
    greenPeppers: true,
    whiteSauce: false,
    glutenFreeCrust: false
  } 

  let pepButton = $(".btn-pepperonni");
  let pepperButton = $(".btn-green-peppers");
  let mushroomButton = $(".btn-mushrooms");
  let sauseButton = $(".btn-sauce");
  let crustButton = $(".btn-crust");

  pepButton.click(function(){
    renderCart('pep', 'peppPrice', this);
  });

  pepperButton.click(function(){
    renderCart('green-pepper', 'greenPrice', this);
  });

  mushroomButton.click(function(){
    renderCart('mushroom', 'mushPrice', this);
  });

  sauseButton.click(function(){
    renderCart('sauce', 'saucePrice', this);
  });

  crustButton.click(function(){
    renderCart('crust', 'crustPrice', this, 'crust-gluten-free');
  });

  function changeVisibility(name){
    if($(name).css('display') === 'none'){
      $(name).css('display', 'block');
    }else{
      $(name).css('display', 'none');
    }
  }

  function addRemoveClass(name, nameClass){
    if($(name).hasClass(nameClass)){
      $(name).removeClass(nameClass);
    }else{
      $(name).addClass(nameClass);
    }
  }

  function renderCart(condiment, menuItem, button, nameClass){
    if(condiment !== 'crust'){
      changeVisibility($("."+condiment));
      addRemoveClass(button, 'active');
      updateCart("."+menuItem);
      cart(); 
    }else{
      addRemoveClass($('.'+condiment), nameClass);
      addRemoveClass(button, 'active');
      updateCart("."+menuItem);
      cart();
    }
  }

  function staterPizzaState(){
    pepButton.addClass('active');
    pepperButton.addClass('active');
    mushroomButton.addClass('active');
    addRemoveClass($('.crust'), 'crust-gluten-free');
    updateCart('.saucePrice');
    updateCart('.crustPrice');
  }

  function updateCart(name){
    changeVisibility($(name));
  }

  function cart(){
    let condiments = $(".cost:visible");
    let prices = [];
    
    condiments.each(function(i){
      prices.push(condiments[i].value);
    });

    let grandTotal = prices.reduce((price, accumulator)=>{
      return price + accumulator;
    });

    $(".total").text(`$${grandTotal + basePrice}`);

  }

  staterPizzaState();
  updateCart();
  cart();

});