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

// Initial value of the state (the state values can change over time)
var state = {
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

    renderButtons()
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
    document.querySelectorAll('.mushroom').forEach(function($mroom) {
        if (state.mushrooms) {
            $mroom.style.visibility = "visible";
        } else {
            $mroom.style.visibility = "hidden";
        }
    })

}

function renderGreenPeppers() {
    // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach(function($pepper) {
        if (state.greenPeppers) {
            $pepper.style.visibility = "visible";
        } else {
            $pepper.style.visibility = "hidden";
        }
    })
}

function renderWhiteSauce() {
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    document.querySelectorAll('.sauce').forEach(function($node) {
        if (state.whiteSauce) {
            $node.classList.add("sauce-white");
        } else {
            $node.classList.remove("sauce-white");
        }
    })
}

function renderGlutenFreeCrust() {
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    document.querySelectorAll('.crust').forEach(function($node) {
        if (state.FreeCrust) {
            $node.classList.add("crust-gluten-free");
        } else {
            $node.classList.remove("crust-gluten-free");
        }
    })
}

function renderButtons() {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    let btn = document.querySelectorAll('.btn-pepperonni')[0];
    (state.pepperonni) ? btn.classList.add("active"): btn.classList.remove("active");

    btn = document.querySelectorAll('.btn-mushrooms')[0];
    (state.mushrooms) ? btn.classList.add("active"): btn.classList.remove("active");

    btn = document.querySelectorAll('.btn-green-peppers')[0];
    (state.greenPeppers) ? btn.classList.add("active"): btn.classList.remove("active");

    btn = document.querySelectorAll('.btn-sauce')[0];
    (state.whiteSauce) ? btn.classList.add("active"): btn.classList.remove("active");

    btn = document.querySelectorAll('.btn-crust')[0];
    (state.glutenFreeCrust) ? btn.classList.add("active"): btn.classList.remove("active");

}

/*ingredients = {
    pepperonni: { name: 'Pepperonni', price: 1 },
    mushrooms: { name: 'Mushrooms', price: 1 },
    greenPeppers: { name: 'Green Peppers', price: 1 },
    whiteSauce: { name: 'White sauce', price: 3 },
    glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
}

// Initial value of the state (the state values can change over time)
var state = {
    pepperonni: true,
    mushrooms: true,
    greenPeppers: true,
    whiteSauce: false,
    glutenFreeCrust: false */

function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
    let items = document.querySelector('.panel.price ul');
    let content = "";
    let totalPrice = 0;
    let printPrice = document.querySelector('.panel.price strong');
    if (state.pepperonni) {
        content += `<li>$${ingredients.pepperonni.price} ${ingredients.pepperonni.name}</li>`;
        totalPrice += ingredients.pepperonni.price;
    }
    if (state.mushrooms) {
        content += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`
        totalPrice += ingredients.mushrooms.price;
    }
    if (state.greenPeppers) {
        content += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`
        totalPrice += ingredients.greenPeppers.price;
    }
    if (state.whiteSauce) {
        content += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`
        totalPrice += ingredients.whiteSauce.price;
    }
    if (state.glutenFreeCrust) {
        content += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`
        items.innerHTML = content;
        totalPrice += ingredients.glutenFreeCrust.price;
    }

    items.innerHTML = content;
    printPrice.innerHTML = "$" + (totalPrice + 10);

}

function clearBill() {
    let items = document.getElementsByTagName('aside')[0]
        .getElementsByTagName('li');
    console.log(items.length);
    let parent = items[0].parentNode;
    for (let i = 0; i < items.length; i++) {
        console.log(`this is the item: ${items[i].innerHTML}`);

        //console.log(`this is the item: ${items.childNodes[i].innerHTML}`);
        parent.removeChild(items[i]);
    }

}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
    state.pepperonni = !state.pepperonni
    console.log("Pepperonni state is " + state.pepperonni)
    renderEverything()

}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
    state.mushrooms = !state.mushrooms
    console.log("Mushrooms state is " + state.mushrooms)
    renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
    state.greenPeppers = !state.greenPeppers
    console.log("Peppers state is " + state.greenPeppers)
    renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
    state.whiteSauce = !state.whiteSauce
    console.log("Sauce state is " + state.whiteSauce)
    renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
    state.glutenFreeCrust = !state.glutenFreeCrust
    console.log("Crust state is " + state.glutenFreeCrust)
    renderEverything()
}

