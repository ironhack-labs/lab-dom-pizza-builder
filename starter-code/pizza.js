// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

const ingredients = [
{name:"pepperonni", price: 1, active: true},
{name:"mushrooms", price: 1, active: true},
{name:"green peppers", price: 1, active: true},
{name:"white sauce", price: 3, active: true},
{name:"gluten-free crust", price: 5, active: true}
]
  
function theIngredientsList(){
  let listedPrices = $('aside.price > ul');

  listedPrices.empty();
  let total = 10;
  ingredients.forEach(oneIngredient => {
    if(oneIngredient.active){
      let newIng = $('<li></li>');
      newIng.html(`$${oneIngredient.price} ${oneIngredient.name}`)
      listedPrices.append(newIng);
      total += oneIngredient.price;
    }
  });
  $('#cart').html("$"+total);
}  


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
let pepperonniButton = $('.btn-pepperonni');
pepperonniButton.click(function(){
  $('.pep').toggle();
  $('.btn-pepperonni').toggleClass('active');
  ingredients[0].active = !ingredients[0].active;
})

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
let mushroomButton = $('.btn-mushrooms');
mushroomButton.click(function(){
  $('.mushroom').toggle();
  $('.btn-mushrooms').toggleClass('active');
  ingredients[1].active = !ingredients[1].active;
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
let greenPepperButton = $('.btn-green-peppers');
greenPepperButton.click(function(){
  $('.green-pepper').toggle();
  $('.btn-green-peppers').toggleClass('active');
  ingredients[2].active = !ingredients[2].active;
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
let whiteSauceButton = $('.btn-sauce');
whiteSauceButton.click(function(){
  $('.sauce').toggleClass('sauce-white');
  $('.btn-sauce').toggleClass('active');
  ingredients[3].active = !ingredients[3].active;
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
let glutenCrustButtton = $('.btn-crust');
glutenCrustButtton.click(function(){
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  ingredients[4].active = !ingredients[4].active;
})

//Iteration 3: Add active click event.
$('.btn').click(function() {
  theIngredientsList();
})

})