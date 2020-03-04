// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
	pepperoni: {
		name: "pepperoni",
		price: 1
	},
	mushrooms: {
		name: "Mushrooms",
		price: 1
	},
	greenPeppers: {
		name: "Green Peppers",
		price: 1
	},
	whiteSauce: {
		name: "White sauce",
		price: 3
	},
	glutenFreeCrust: {
		name: "Gluten-free crust",
		price: 5
	}
};

// Initial value of the state (the state values can change over time)
let state = {
	pepperoni: true,
	mushrooms: true,
	greenPeppers: true,
	whiteSauce: false,
	glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
const renderEverything = () => {
	//Render Ingredients
	renderPepperoni();
	renderMushrooms();
	renderGreenPeppers();
	renderWhiteSauce();
	renderGlutenFreeCrust();

	//Render Buttons
	renderButtons();

	//Render Prices
	renderPrice();
};

const renderPepperoni = () => {
	document.querySelectorAll(".pep").forEach(onePep => {
		if (state.pepperoni) {
			onePep.style.visibility = "visible";
		} else {
			onePep.style.visibility = "hidden";
		}
	});
};

const renderMushrooms = () => {
	document.querySelectorAll(".mushroom").forEach(oneMushroom => {
		if (state.mushrooms) {
			oneMushroom.style.visibility = "visible";
		} else {
			oneMushroom.style.visibility = "hidden";
		}
	});
};

const renderGreenPeppers = () => {
	document.querySelectorAll(".green-pepper").forEach(oneGreenPeppers => {
		if (state.greenPeppers) {
			oneGreenPeppers.style.visibility = "visible";
		} else {
			oneGreenPeppers.style.visibility = "hidden";
		}
	});
};

const renderWhiteSauce = () => {
	document.querySelectorAll(".sauce").forEach(oneWhiteSauce => {
		if (state.whiteSauce) {
			oneWhiteSauce.classList.add("sauce-white");
		} else {
			oneWhiteSauce.classList.remove("sauce-white");
		}
	});
};

const renderGlutenFreeCrust = () => {
	document.querySelectorAll(".crust").forEach(oneGlutenFree => {
		if (state.glutenFreeCrust) {
			oneGlutenFree.classList.add("crust-gluten-free");
		} else {
			oneGlutenFree.classList.remove("crust-gluten-free");
		}
	});
};

const renderButtons = () => {
	// Pepperoni button
	const btnPepperoni = document.querySelector(".btn-pepperoni");
	if (state.pepperoni) {
		btnPepperoni.classList.add("active");
	} else {
		btnPepperoni.classList.remove("active");
	}

	// Mushrooms button
	const btnMushrooms = document.querySelector(".btn-mushrooms");
	if (state.mushrooms) {
		btnMushrooms.classList.add("active");
	} else {
		btnMushrooms.classList.remove("active");
	}

	// Green Peppers button
	const btnGreenPeppers = document.querySelector(".btn-green-peppers");
	if (state.greenPeppers) {
		btnGreenPeppers.classList.add("active");
	} else {
		btnGreenPeppers.classList.remove("active");
	}

	// White Sauce button
	const btnWhiteSauce = document.querySelector(".btn-sauce");
	if (state.whiteSauce) {
		btnWhiteSauce.classList.add("active");
	} else {
		btnWhiteSauce.classList.remove("active");
	}

	// Gluten-Free button
	const btnGlutenFree = document.querySelector(".btn-crust");
	if (state.glutenFreeCrust) {
		btnGlutenFree.classList.add("active");
	} else {
		btnGlutenFree.classList.remove("active");
	}
};

const renderPrice = () => {
	const tagPrice = document.querySelectorAll("aside ul li");
	const newTagPriceArr = [...tagPrice];
	let sum = 10;

	// Pepperoni price
	if (state.pepperoni) {
		newTagPriceArr[0].style.display = "block";
		sum += 1;
	} else {
		newTagPriceArr[0].style.display = "none";
	}

	// Mushrooms price
	if (state.mushrooms) {
		newTagPriceArr[1].style.display = "block";
		sum += 1;
	} else {
		newTagPriceArr[1].style.display = "none";
	}

	// Green Peppers price
	if (state.greenPeppers) {
		newTagPriceArr[2].style.display = "block";
		sum += 1;
	} else {
		newTagPriceArr[2].style.display = "none";
	}

	// White Sauce price
	if (state.whiteSauce) {
		newTagPriceArr[3].style.display = "block";
		sum += 3;
	} else {
		newTagPriceArr[3].style.display = "none";
	}

	// Gluten-Free price
	if (state.glutenFreeCrust) {
		newTagPriceArr[4].style.display = "block";
		sum += 5;
	} else {
		newTagPriceArr[4].style.display = "none";
	}

	// Total
	const pizzaBill = document.querySelector("strong");

	pizzaBill.innerHTML = `$${sum}`;
};

renderEverything();

document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
	state.pepperoni = !state.pepperoni;
	renderEverything();
});

document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
	state.mushrooms = !state.mushrooms;
	renderEverything();
});

document
	.querySelector(".btn.btn-green-peppers")
	.addEventListener("click", () => {
		state.greenPeppers = !state.greenPeppers;
		renderEverything();
	});

document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
	state.whiteSauce = !state.whiteSauce;
	renderEverything();
});

document.querySelector(".btn.btn-crust").addEventListener("click", () => {
	state.glutenFreeCrust = !state.glutenFreeCrust;
	renderEverything();
});
