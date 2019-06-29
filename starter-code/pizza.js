// Write your Pizza Builder JavaScript in this file.

// Constants 
let basePrice = 10
let ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
let state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()
}

function renderPepperonni() {
 let pepperonniBtn = $('.btn-pepperonni');
 let pepperonni = $('.pep');
 pepperonniBtn.click(function(){
   pepperonni.toggle();
   state.pepperonni = !state.pepperonni;
   pepperonniBtn.toggleClass('active');
   $('.item-price').eq(0).toggle()
   let total;
    if(state.pepperonni){
      total = (parseInt($('#total-price').text().substr(1)) + ingredients.pepperonni.price);
    } else{
      total = (parseInt($('#total-price').text().substr(1)) - ingredients.pepperonni.price);
    }
    $('#total-price').text(`$${total}`)
 
  
 })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  let mushroomBtn = $('.btn-mushrooms');
  let mushrooms = $('.mushroom');
  mushroomBtn.click(function(){
    mushrooms.toggle();
    state.mushrooms = !state.mushrooms;
    console.log(state.mushrooms)
    mushroomBtn.toggleClass('active');
    $('.item-price').eq(1).toggle()
    let total;
    if(state.mushrooms){
      total = (parseInt($('#total-price').text().substr(1)) + ingredients.mushrooms.price);
    } else{
      total = (parseInt($('#total-price').text().substr(1)) - ingredients.mushrooms.price);
    }
    $('#total-price').text(`$${total}`)
    
  })


}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  let greenPepperBtn = $('.btn-green-peppers');
  let greenPeppers = $('.green-pepper');
  greenPepperBtn.click(function(){
    greenPeppers.toggle();
    state.greenPeppers = !state.greenPeppers ;
    greenPepperBtn.toggleClass('active');
    $('.item-price').eq(2).toggle()
    let total;
    if(state.greenPeppers){
      total = (parseInt($('#total-price').text().substr(1)) + ingredients.greenPeppers.price);
    } else{
      total = (parseInt($('#total-price').text().substr(1)) - ingredients.greenPeppers.price);
    }
    $('#total-price').text(`$${total}`)
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauceBtn = $('.btn-sauce');
  let sauce = $('.sauce')
  sauceBtn.click(function(){
    sauce.toggleClass('sauce-white');
    state.whiteSauce = !state.whiteSauce;
    sauceBtn.toggleClass('active')
    $('.item-price').eq(3).toggle()
    let total;
    if(!state.whiteSauce){
      total = (parseInt($('#total-price').text().substr(1)) + ingredients.whiteSauce.price);
    } else{
      total = (parseInt($('#total-price').text().substr(1)) - ingredients.whiteSauce.price);
    }
    $('#total-price').text(`$${total}`)
    
    
  })

}
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustBtn = $('.btn-crust');
  let crust = $('.crust');
  crustBtn.click(function(){
    crust.toggleClass('crust-gluten-free');
    state.glutenFreeCrust = !state.glutenFreeCrust ;
    crustBtn.toggleClass('active');
    $('.item-price').eq(4).toggle()
    let total;
    if(!state.glutenFreeCrust){
      total = (parseInt($('#total-price').text().substr(1)) + ingredients.glutenFreeCrust.price);
    } else{
      total = (parseInt($('#total-price').text().substr(1)) - ingredients.glutenFreeCrust.price);
    }
    $('#total-price').text(`$${total}`)
   
  })
 
}


renderEverything()

