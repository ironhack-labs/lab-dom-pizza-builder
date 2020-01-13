![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# JS | Pizza Builder

## Introduction

[![](https://i.giphy.com/e2AKpOvx2MREY.gif)](https://www.youtube.com/watch?v=04MJIXcZKPk)

We've got the munchies for a nice, fresh pie of pizza. Of course, we want to order online. After all, talking to a person will only delay the consumption of pizza.

There's only one problem: our local pizzeria's pizza builder **isn't working**. This time, the local pizzeria is in luck because their customer today is a Web developer. We always hear about how developers should give back to their community. I can't think of a more meaningful contribution than helping the community get pizza more easily.

**You can find a demo of the finished version by clicking [here](https://lab-dom-pizza-builder.surge.sh)**.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- Follow the instructions above to complete the exercise

## Submission

- Upon completion, run the following commands

	```
	git add .
	git commit -m "done"
	git push origin master
	```
- Navigate to your repo and [create a Pull Request](https://help.github.com/articles/creating-a-pull-request/)

## Deliverables

You should push every file needed to execute the exercise

## Instructions

We will only work with the `pizza.js` file. As you will see, the file contains some code. The file is architectured to have a [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) and make the code scalable. This architecture is very close to what you will use with React.

In this architecture, there is a variable `state` with different values, such as `state.pepperonni` initially set to `true`. When the user clicks on it, the value will be changed to the opposite (example: `false`).

In this architecture, there is also a function `renderEverything` that renders the pizza, the buttons and the price based on the state. This function everytime the state is changed, because the pizza, the buttons and the price must be changed. To give an example, when `state.pepperonni` is `true`, the function will:
- Make the pepperonni on the pizza visible
- Add a class active to the "Pepperonni" button
- Update the price panel


### Iteration 1: Add and remove toppings

There are five buttons on the left of the pizza builder. Three of those have to add or remove toppings from the pizza. Write the necessary JavaScript for those three buttons to **add and remove pepperonni, mushrooms and green peppers** from the pizza. **Don't worry about updating the price**. We will do it later.

Each individual topping has its own HTML element.

```html
<!-- When this button is clicked -->
<button class="btn btn-pepperonni active">Pepperonni</button>

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
- Add click event listener on `<button class="btn btn-mushrooms">` and `<button class="btn btn-green-peppers">` (pepperionni is already done)
- Write the code of the functions `renderMushrooms` and `renderGreenPeppers`


### Iteration 2: Sauce and crust options

In this iteration, your goal is to:
- Add click event listener on `<button class="btn btn-sauce">` and change `state.whiteSauce`
- Write the function `renderWhiteSauce`
- Add click event listener on `<button class="btn btn-crust">` and change `state.glutenFreeCrust`
- Write the function `renderGlutenFreeCrust`

As you can see, the initial value for `state.whiteSauce` and `state.glutenFreeCrust` is false. The reason is because, by default, we want a pizza with pepperonni, mushrooms, green peppers but no white sauce nor gluten-free crust.

At this state, **don't worry about updating the price**.


```html
<!-- Example of a pizza with white-sauche and a gluten-freecrust -->
<section class="crust crust-gluten-free"> 
  <section class="cheese"></section>
  <section class="sauce sauce-white"></section>
</section>

<!-- Example of a pizza with no white-sauche and no gluten-free crust -->
<section class="crust"> 
  <section class="cheese"></section>
  <section class="sauce"></section>
</section>
```


### Iteration 3: Make the buttons active or not

Currently our pizza builder's buttons look the same, no matter if the option is activated or not. If you notice, all the buttons have an `active` class.

```html
<button class="btn btn-pepperonni active">Pepperonni</button>
```

**Write some JavaScript that will remove and add the buttons' `active` class appropriately, by writing code in the function `renderButtons`**.


### Iteration 4: Ingredients and prices

On the right side of the pizza builder there is a price section. 

Write the function `renderPrice` that:
- Display the list of all items selected
- Display the total price

