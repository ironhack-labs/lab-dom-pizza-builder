const basePrice = 10;
let ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

let state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

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
  if(state.pepperonni){
    $(".pep").show();
  }else{
    $(".pep").hide();
  }
  
}

function renderMushrooms() {
  if(state.mushrooms){
    $(".mushroom").show();
  }else{
    $(".mushroom").hide();
  }
  
}

function renderGreenPeppers() {
  if(state.greenPeppers){
    $(".green-pepper").show();
  }else{
    $(".green-pepper").hide();
  }
  
}

function renderWhiteSauce() {
  if(state.whiteSauce){
    $(".sauce").addClass("sauce-white");
  }else{
    $(".sauce").removeClass("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  if(state.glutenFreeCrust){
    $(".crust").addClass("crust-gluten-free");
  }else{
    $(".crust").removeClass("crust-gluten-free");
  }
}

function renderButtons() {
  if(state.pepperonni){
    $(".btn-pepperonni").addClass("active");
  }else{
    $(".btn-pepperonni").removeClass("active");
  }
  if(state.mushrooms){
    $(".btn-mushrooms").addClass("active");
  }else{
    $(".btn-mushrooms").removeClass("active");
  }
  if(state.greenPeppers){
    $(".btn-green-peppers").addClass("active");
  }else{
    $(".btn-green-peppers").removeClass("active");
  }
  if(state.whiteSauce){
    $(".btn-sauce").addClass("active");
  }else{
    $(".btn-sauce").removeClass("active");
  }
  if(state.glutenFreeCrust){
    $(".btn-crust").addClass("active");
  }else{
    $(".btn-crust").removeClass("active");
  } 
}

function renderPrice() {
  let panelPrice = $(".price > ul");
  let total = basePrice;
  panelPrice.empty();
  if(state.pepperonni){
    panelPrice.append("<li>$1 pepperonni</li>");
    total+= ingredients.pepperonni.price; 
  }  
  if(state.mushrooms){
    panelPrice.append("<li>$1 mushrooms</li>");
    total+= ingredients.mushrooms.price;
  }
  if(state.greenPeppers){
    panelPrice.append("<li>$1 green peppers</li>");
    total+= ingredients.greenPeppers.price;
  }
  if(state.whiteSauce){
    panelPrice.append("<li>$3 white sauce</li>");
    total+= ingredients.whiteSauce.price;
  }
  if(state.glutenFreeCrust){
    panelPrice.append("<li>$5 gluten-free crust</li>");
    total+= ingredients.glutenFreeCrust.price;
  }
  $(".price > strong").text("$" + total)
}

renderEverything();

$('.btn-pepperonni').click ( function() {
    state.pepperonni = !state.pepperonni;
    renderEverything();
  }
)

$(".btn-mushrooms").click (
  function(){
    state.mushrooms = !state.mushrooms;
    renderEverything();
  }
)

$(".btn-green-peppers").click (
  function(){
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  }
)

$(".btn-sauce").click (
  function(){
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
  }
)

$(".btn-crust").click (
  function(){
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
  }
)