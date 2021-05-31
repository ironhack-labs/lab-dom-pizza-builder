![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | DOM Pizza Builder

<br>

## Introduction

[![](https://i.giphy.com/e2AKpOvx2MREY.gif)](https://www.youtube.com/watch?v=04MJIXcZKPk)

We have got the munchies for a nice, fresh pie of pizza. Of course, we want to order online. After all, talking to a person will only delay the consumption of pizza.

There is only one problem: our local pizzeria's pizza builder **is not working**. This time, the local pizzeria is in luck because their customer today is a Web developer. We always hear about how developers should give back to their community. I can't think of a more meaningful contribution than helping the community get pizza more easily.

**You can find a demo of the finished version by clicking [here](https://lab-dom-pizza-builder.surge.sh)**.

## Requirements

- Fork this repo
- Clone this repo
- Visit the "actions" tab in your fork, and enable workflows

## Submission

- Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "Solved lab"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

<br>

## Automated Tests

This lab includes an automated testing suite. For DOM-related labs, our automated tests should be seen as a secondary tool, that helps you to programmatically understand whether your solution is correct and allows the educational team to track your progress.

To run the automated tests, please, open your terminal, change directories into the root of the lab, and run `npm install` to install the test runner. Now, you can run the `npm run test:watch` command to run automated tests in watch mode. Open the resulting `lab-solution.html` file with the "Live Server" VSCode extension to always see the most up-to-date test results.

<br>

## Instructions

We will only work with the `js/index.js` file. As you will see, the file contains some code. The file is built to have a [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) and make the code scalable. This architecture is very close to what you will use with React.

In this architecture, there is a variable `state` with different values, such as `pepperoni` initially set to `true`. When the user clicks on it, the value will be changed to the opposite (example: `false`).

In this architecture, there is also a function `renderEverything` that renders the pizza, the buttons, and the price based on the state. This function should run every time the state is changed, because the pizza, the buttons, and the price must be changed. To give an example, when `state.pepperoni` is `true`, the function will:

- make the pepperoni on the pizza visible,
- add a class `active` to the "pepperoni" button,
- update the price panel.

<br>

### Iteration 1: Add and remove toppings

There are five buttons on the left of the pizza builder. Three of those have to add or remove toppings from the pizza. Write the necessary JavaScript for those three buttons to **add and remove pepperoni, mushrooms, and green peppers** from the pizza. **Don't worry about updating the price**. We will do it later.

Each individual topping has its own HTML element.

```html
<!-- When this button is clicked -->
<button class="btn btn-pepperoni active">Pepperoni</button>

<!-- ... -->

<!-- Hide/show all the following sections at the same time -->
<section class="pep one">1</section>
<section class="pep two">2</section>
<!-- ... -->
```

```html
<!-- When this button is clicked -->
<button class="btn btn-mushrooms active">Mushrooms</button>

<!-- ... -->

<!-- Hide/show all the following sections at the same time -->
<section class="mushroom one">
  <div class="cap">1</div>
  <div class="stem"></div>
</section>
<section class="mushroom two">
  <div class="cap">2</div>
  <div class="stem"></div>
</section>
<!-- ... -->
```

```html
<!-- When this button is clicked -->
<button class="btn btn-green-peppers active">Green peppers</button>

<!-- ... -->

<!-- Hide/show all the following sections at the same time -->
<section class="green-pepper one"></section>
<section class="green-pepper two"></section>
<!-- ... -->
```

**Create the code to hide/show those elements when the buttons are clicked.** For this, you will have to:

- Add click event listener on `<button class="btn btn-mushrooms">` and `<button class="btn btn-green-peppers">` (pepperoni is already done)
- Write the code for the functions `renderMushrooms()` and `renderGreenPeppers()`

<br>

### Iteration 2: Sauce and crust options

In this iteration, your goal is to:

- Add click event listener on `<button class="btn btn-sauce">` and change `state.whiteSauce`
- Write the function `renderWhiteSauce()`
- Add click event listener on `<button class="btn btn-crust">` and change `state.glutenFreeCrust`
- Write the function `renderGlutenFreeCrust()`

As you can see, the initial value for `state.whiteSauce` and `state.glutenFreeCrust` is false. The reason is that, by default, we want a pizza with pepperoni, mushrooms, green peppers but no white sauce nor gluten-free crust.

For now, **don't worry about updating the price**.

```html
<!-- Example of a pizza with white-sauce and a gluten-free crust -->
<section class="crust crust-gluten-free">
  <section class="cheese"></section>
  <section class="sauce sauce-white"></section>
</section>

<!-- Example of a pizza with no white-sauce and no gluten-free crust -->
<section class="crust">
  <section class="cheese"></section>
  <section class="sauce"></section>
</section>
```

<br>


### Iteration 3: Make the buttons active or not

Currently, all buttons look the same, no matter if the option is activated or not. If you notice, all the buttons have an `active` class.

```html
<button class="btn btn-pepperoni active">Pepperoni</button>
```

**Write the logic for removing and adding the buttons' `active` class appropriately. Write the code in the function `renderButtons()`**.

<br>

### Iteration 4: Ingredients and prices

On the right side of the pizza builder, there is a price section.

Write the function `renderPrice()` that:

- Displays the list of all items selected
- Displays the total price.


<br>

**Happy coding!** 💙
