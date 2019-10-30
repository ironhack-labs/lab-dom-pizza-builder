// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
	pepperonni: { name: 'Pepperonni', price: 1 },
	mushrooms: { name: 'Mushrooms', price: 1 },
	greenPeppers: { name: 'Green Peppers', price: 1 },
	whiteSauce: { name: 'White sauce', price: 3 },
	glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

let addIngredientsPrice = 0;
const total = document.querySelector('.total');

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
	document.querySelectorAll('.pep').forEach(function($pep) {
		if (state.pepperonni) {
			$pep.style.visibility = 'visible';
		} else {
			$pep.style.visibility = 'hidden';
		}
	});
}

function renderMushrooms() {
	// Iteration 1: set the visibility of `<section class="mushroom">`
	document.querySelectorAll('.mushroom').forEach(function($mushroom) {
		if (state.mushrooms) {
			$mushroom.style.visibility = 'visible';
		} else {
			$mushroom.style.visibility = 'hidden';
		}
	});
}

function renderGreenPeppers() {
	// Iteration 1: set the visibility of `<section class="green-pepper">`
	document.querySelectorAll('.green-pepper').forEach(function($greenPeppers) {
		if (state.greenPeppers) {
			$greenPeppers.style.visibility = 'visible';
		} else {
			$greenPeppers.style.visibility = 'hidden';
		}
	});
}

function renderWhiteSauce() {
	// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
	document.querySelectorAll('.sauce-white').forEach(function($whiteSauce) {
		if (state.whiteSauce) {
			$whiteSauce.style.visibility = 'visible';
		} else {
			$whiteSauce.style.visibility = 'hidden';
		}
	});
}

function renderGlutenFreeCrust() {
	// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
	document.querySelectorAll('.crust').forEach(function($glutenFreeCrust) {
		if (state.glutenFreeCrust) {
			$glutenFreeCrust.classList.remove('crust-gluten-free');
		} else {
			$glutenFreeCrust.classList.add('crust-gluten-free');
		}
	});
}

function renderButtons() {
	// Iteration 3: add/remove the class "active" of each `<button class="btn">`
	document.querySelectorAll('.btn').forEach(function(btn) {
		if (btn.className.includes('btn-pepperonni')) {
			console.log(btn.className);
			if (state.pepperonni) {
				btn.className = 'btn btn-pepperonni active';
			} else {
				btn.className = 'btn btn-pepperonni';
			}
		}
		if (btn.className.includes('btn-mushrooms')) {
			console.log(btn.className);
			if (state.mushrooms) {
				btn.className = 'btn btn-mushrooms active';
			} else {
				btn.className = 'btn btn-mushrooms';
			}
		}
		if (btn.className.includes('btn-green-peppers')) {
			console.log(btn.className);
			if (state.greenPeppers) {
				btn.className = 'btn btn-green-peppers active';
			} else {
				btn.className = 'btn btn-green-peppers';
			}
		}
		if (btn.className.includes('btn-sauce')) {
			console.log(btn.className);
			if (state.whiteSauce) {
				btn.className = 'btn btn-sauce active';
			} else {
				btn.className = 'btn btn-sauce';
			}
		}
		if (btn.className.includes('btn-crust')) {
			console.log(btn.className);
			if (state.glutenFreeCrust) {
				btn.className = 'btn btn-crust active';
			} else {
				btn.className = 'btn btn-crust';
			}
		}
	});
}

function renderPrice() {
	// Iteration 4: change the HTML of `<aside class="panel price">`
	document.querySelectorAll('.prices').forEach(function(element, idx) {
		addIngredientsPrice = 0;
		if (state.pepperonni === true && idx === 0) {
			element.style.visibility = 'visible';
		} else if (state.pepperonni === false && idx === 0) {
			element.style.visibility = 'hidden';
		}
		if (state.mushrooms === true && idx === 1) {
			element.style.visibility = 'visible';
		} else if (state.mushrooms === false && idx === 1) {
			element.style.visibility = 'hidden';
		}
		if (state.greenPeppers === true && idx === 2) {
			element.style.visibility = 'visible';
		} else if (state.greenPeppers === false && idx === 2) {
			element.style.visibility = 'hidden';
		}
		if (state.whiteSauce === true && idx === 3) {
			element.style.visibility = 'visible';
		} else if (state.whiteSauce === false && idx === 3) {
			element.style.visibility = 'hidden';
		}
		if (state.glutenFreeCrust === true && idx === 4) {
			element.style.visibility = 'visible';
		} else if (state.glutenFreeCrust === false && idx === 4) {
			element.style.visibility = 'hidden';
		}
		//Precio
		if (state.pepperonni) {
			addIngredientsPrice += 1;
		}
		if (state.mushrooms) {
			addIngredientsPrice += 1;
		}
		if (state.greenPeppers) {
			addIngredientsPrice += 1;
		}
		if (state.whiteSauce) {
			addIngredientsPrice += 3;
		}
		if (state.glutenFreeCrust) {
			addIngredientsPrice += 5;
		}
		console.log(addIngredientsPrice);
		total.innerText = `$${addIngredientsPrice + basePrice}`;
	});
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
	state.pepperonni = !state.pepperonni;
	renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
	state.mushrooms = !state.mushrooms;
	renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
	state.greenPeppers = !state.greenPeppers;
	renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
	state.whiteSauce = !state.whiteSauce;
	renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
	state.glutenFreeCrust = !state.glutenFreeCrust;
	renderEverything();
};
