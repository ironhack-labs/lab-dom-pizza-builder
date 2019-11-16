// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
    pepperonni: { name: 'Pepperonni', price: 1 },
    mushrooms: { name: 'Mushrooms', price: 1 },
    greenPeppers: { name: 'Green Peppers', price: 1 },
    whiteSauce: { name: 'White sauce', price: 3 },
    glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
}
var Total = basePrice;

// Initial value of the state (the state values can change over time)
var state = {
        pepperonni: false,
        mushrooms: false,
        greenPeppers: false,
        whiteSauce: false,
        glutenFreeCrust: false,
    }
    //set all desactive at the begining
let $btn = document.querySelectorAll(".btn");
for (let i = 0; i < $btn.length; i++)
    $btn[i].classList.remove("active")

//set all hidden at the begining
var $priceList = document.querySelector(".price ul");
for (let i = 0; i < $priceList.children.length; i++)
    $priceList.children[i].style.visibility = "hidden";
var $total = document.querySelector(".price strong");
$total.innerHTML = `$${Total}`;

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
    renderPepperonni()
    renderMushrooms()
    renderGreenPeppers()
    renderWhiteSauce()
    renderGlutenFreeCrust()

    //renderButtons()
    renderPrice()
}

function renderPepperonni() {
    document.querySelectorAll('.pep').forEach(function($pep) {
        if (state.pepperonni) {
            $pep.style.visibility = "visible";
        } else {
            $pep.style.visibility = "hidden";
        }
    })
}

function renderMushrooms() {
    // Iteration 1: set the visibility of `<section class="mushroom">`
    document.querySelectorAll('.mushroom').forEach(function($mushrooms) {
        if (state.mushrooms) {
            $mushrooms.style.visibility = "visible";
        } else {
            $mushrooms.style.visibility = "hidden";
        }
    })
}

function renderGreenPeppers() {
    // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach(function($greenpepper) {
        if (state.greenPeppers) {
            $greenpepper.style.visibility = "visible";
        } else {
            $greenpepper.style.visibility = "hidden";
        }
    })
}

function renderWhiteSauce() {

    // // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    let sauce = document.querySelector("#pizza").lastElementChild;
    if (!state.whiteSauce)
        sauce.classList.remove("sauce-white");
    else
        sauce.classList.add("sauce-white");

}

function renderGlutenFreeCrust() {

    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    let gluten = document.querySelector("#pizza").lastElementChild;
    if (!state.glutenFreeCrust)
        gluten.classList.remove("crust-gluten-free");
    else
        gluten.classList.add("crust-gluten-free");

}

function renderButtons() {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`

}

function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`

    let prices = {
        pepperonni: 1,
        mushrooms: 1,
        greenPeppers: 1,
        whiteSauce: 3,
        glutenFreeCrust: 5
    }
    let thePriceDiv = document.querySelector(".panel.price > ul")
    thePriceDiv.innerHTML = "";

    for (let ing in state) {
        if (state[ing]) {
            // then we loop through the state and for each ingredient that is true
            Total += prices[ing];
            // we add the pice of the ingredient to the price variable
            let thing = document.createElement('li');
            // we create a blank <li>
            thing.innerHTML = `$${prices[ing]} ${ing}`;
            // we fill the <li> with the price and name of the ignredient
            thePriceDiv.append(thing);
            // and then we append the <li> to the <ul>
        }
    }
    document.querySelector('.panel.price strong').innerHTML = "$" + Total;



}



renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
    state.pepperonni = !state.pepperonni
    this.classList.toggle("active");

    renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
        state.mushrooms = !state.mushrooms;
        this.classList.toggle("active");

        renderEverything()
    }
    // Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
    state.greenPeppers = !state.greenPeppers
    this.classList.toggle("active");

    renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
    state.whiteSauce = !state.whiteSauce
    this.classList.toggle("active");
    renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`/*
document.querySelector('.btn.btn-crust').onclick = function() {
    state.glutenFreeCrust = !state.glutenFreeCrust
    this.classList.toggle("active");

    renderEverything()
}