// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
	pepperonni: { name: "Pepperonni", price: 1 },
	mushrooms: { name: "Mushrooms", price: 1 },
	greenPeppers: { name: "Green Peppers", price: 1 },
	whiteSauce: { name: "White sauce", price: 3 },
	glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
var state = {
	pepperonni: true,
	mushrooms: true,
	greenPeppers: true,
	whiteSauce: false,
	glutenFreeCrust: true
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
	document.querySelectorAll(".pep").forEach(function($pep) {
		if (state.pepperonni) {
			$pep.style.visibility = "visible";
		} else {
			$pep.style.visibility = "hidden";
		}
	});
}

function renderMushrooms() {
	// Iteration 1: set the visibility of `<section class="mushroom">`
	document.querySelectorAll(".mushroom").forEach(function($mush) {
		if (state.mushrooms) {
			$mush.style.visibility = "visible";
		} else {
			$mush.style.visibility = "hidden";
		}
	});
}

function renderGreenPeppers() {
	// Iteration 1: set the visibility of `<section class="green-pepper">`
	document.querySelectorAll(".green-pepper").forEach(function($green) {
		if (state.greenPeppers) {
			$green.style.visibility = "visible";
		} else {
			$green.style.visibility = "hidden";
		}
	});
}

function renderWhiteSauce() {
	// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
	document.querySelectorAll(".sauce").forEach(function($whiteSauce) {
		if (state.whiteSauce) {
			$whiteSauce.classList.add("sauce-white");
		} else {
			$whiteSauce.classList.remove("sauce-white");
		}
	});
}

function renderGlutenFreeCrust() {
	// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
	document.querySelectorAll(".crust").forEach(function($glutenFreeCrust) {
		if (state.glutenFreeCrust) {
			$glutenFreeCrust.classList.add("crust-gluten-free");
		} else {
			$glutenFreeCrust.classList.remove("crust-gluten-free");
		}
	});
}

function renderButtons() {
	// Iteration 3: add/remove the class "active" of each `<button class="btn">`

	if (!state.pepperonni) {
		let element = document.querySelector(".btn-pepperonni"); // btn-mushrooms active");
		element.classList.remove("active");
	} else {
		let element = document.querySelector(".btn-pepperonni");
		element.classList.add("active");
	}

	if (!state.mushrooms) {
		let element = document.querySelector(".btn-mushrooms"); // btn-mushrooms active");
		element.classList.remove("active");
	} else {
		let element = document.querySelector(".btn-mushrooms");
		element.classList.add("active");
	}

	if (!state.greenPeppers) {
		let element = document.querySelector(".btn-green-peppers"); // btn-mushrooms active");
		element.classList.remove("active");
	} else {
		let element = document.querySelector(".btn-green-peppers");
		element.classList.add("active");
	}

	if (!state.whiteSauce) {
		let element = document.querySelector(".btn-sauce"); // btn-mushrooms active");
		element.classList.remove("active");
	} else {
		let element = document.querySelector(".btn-sauce");
		element.classList.add("active");
	}

	if (!state.glutenFreeCrust) {
		let element = document.querySelector(".btn-crust"); // btn-mushrooms active");
		element.classList.remove("active");
	} else {
		let element = document.querySelector(".btn-crust");
		element.classList.add("active");
	}
}

function renderPrice() {
	// Iteration 4: change the HTML of `<aside class="panel price">`
	let price = 10;

	if (state.pepperonni) {
		price = price + 1;
		//let element = document.querySelector(".price >ul >li");
		//element.removeChild(element.childNodes[0]);
		//console.log(element);
	}

	if (state.mushrooms) {
		price = price + 1;
		//let element = document.querySelector(".price >ul >li");
		//element.removeChild(element.childNodes[1]);
	}
	if (state.greenPeppers) {
		price = price + 1;
	}
	if (state.whiteSauce) {
		price = price + 3;
	}
	if (state.glutenFreeCrust) {
		price = price + 5;
	}

	document.getElementsByTagName("strong")[0].innerHTML = price + "$";
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
	state.pepperonni = !state.pepperonni;
	renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function() {
	state.mushrooms = !state.mushrooms;
	renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function() {
	state.greenPeppers = !state.greenPeppers;
	renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function() {
	state.whiteSauce = !state.whiteSauce;

	renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function() {
	state.glutenFreeCrust = !state.glutenFreeCrust;
	renderEverything();
};
