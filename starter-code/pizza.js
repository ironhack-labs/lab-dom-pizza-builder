// Constants 
var basePrice = 10

var ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
}

// $21 is start of price for pizza
let total = 21;

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

/***************************************
    BUTTONS TOGGLES
****************************************/
// Hide list on load

// When btn-pepperonni clicked, toggle ("matched elements will be revealed or hidden immediately, with no animation, by changing the CSS display property")
$('.btn-pepperonni').click(function () {

  // toggle if the pepporonnis on pizza are showing
  $('.pep').toggle();

   // CODE FOR TOTALING COST 
  
  // find out if its visible or not
  let visiblity = $("#addPep").css("visibility");
  console.log(visiblity);

  // if its visible
  if (visiblity === "visible") {
    // if it is showing, the click will hide it and remove cost
    total -= 1;
    $("#addPep").css("visibility", "hidden");

    visiblity = $("#addPep").css("visibility");

  }
  else if (visiblity === "hidden") {
    // if it is not showing, click will show it and add cost
    total += 1;
    $("#addPep").css("visibility", "visible");

    visiblity = $("#addPep").css("visibility");
  }
  console.log(visiblity);
  $("#totalPrice").text("$" + total);

})

$('.btn-mushrooms').click(function () {
  // toggle if the pepporonnis on pizza are showing
  $('.mushroom').toggle();

 // CODE FOR TOTALING COST 
  

  // find out if its visible or not
  let visiblity = $("#addMushrooms").css("visibility");
  console.log(visiblity);

  // if its visible
  if (visiblity === "visible") {
    // if it is showing, the click will hide it and remove cost
    total -= 1;
    $("#addMushrooms").css("visibility", "hidden");

    visiblity = $("#addMushrooms").css("visibility");

  }
  else if (visiblity === "hidden") {
    // if it is not showing, click will show it and add cost
    total += 1;
    $("#addMushrooms").css("visibility", "visible");

    visiblity = $("#addMushrooms").css("visibility");
  }
  console.log(visiblity);
  $("#totalPrice").text("$" + total);
})

$('.btn-green-peppers').click(function () {

  // toggle if the pepporonnis on pizza are showing
  $('.green-pepper').toggle();

   // CODE FOR TOTALING COST 
  
  // find out if its visible or not
  let visiblity = $("#addPeppers").css("visibility");
  console.log(visiblity);

  // if its visible
  if (visiblity === "visible") {
    // if it is showing, the click will hide it and remove cost
    total -= 1;
    $("#addPeppers").css("visibility", "hidden");

    visiblity = $("#addPeppers").css("visibility");

  }
  else if (visiblity === "hidden") {
    // if it is not showing, click will show it and add cost
    total += 1;
    $("#addPeppers").css("visibility", "visible");

    visiblity = $("#addPeppers").css("visibility");
  }
  console.log(visiblity);
  $("#totalPrice").text("$" + total);

})

$('.btn-sauce').click(function () {

  // toggle if the pepporonnis on pizza are showing
  $('.sauce-white').toggle();

   // CODE FOR TOTALING COST 
  
  // find out if its visible or not
  let visiblity = $("#addSauce").css("visibility");
  console.log(visiblity);

  // if its visible
  if (visiblity === "visible") {
    // if it is showing, the click will hide it and remove cost
    total -= 3;
    $("#addSauce").css("visibility", "hidden");

    visiblity = $("#addSauce").css("visibility");

  }
  else if (visiblity === "hidden") {
    // if it is not showing, click will show it and add cost
    total += 3;
    $("#addSauce").css("visibility", "visible");

    visiblity = $("#addSauce").css("visibility");
  }
  console.log(visiblity);
  $("#totalPrice").text("$" + total);

})

// when crust button is pressed, toggle the gluten free class that would typically overide it
$('.btn-crust').click(function () {
  $('.crust').toggleClass("crust-gluten-free");

  // then show added item on on list (ul)
  $("#addGluten-Free").toggle(function () {
    $("#addGluten-Free").css("visiblity", "visible");
  });


  // CODE FOR TOTALING COST 
  
  // find out if its visible or not
  let visiblity = $("#addGluten-Free").css("visibility");
  console.log(visiblity);

  // if its visible
  if (visiblity === "visible") {
    // if it is showing, the click will hide it and remove cost
    total -= 5;
    $("#addGluten-Free").css("visibility", "hidden");

    visiblity = $("#addGluten-Free").css("visibility");

  }
  else if (visiblity === "hidden") {
    // if it is not showing, click will show it and add cost
    total += 5;
    $("#addGluten-Free").css("visibility", "visible");

    visiblity = $("#addGluten-Free").css("visibility");
  }
  console.log(visiblity);
  $("#totalPrice").text("$" + total);

})

// when any of the buttons are pressed, on the button that was pressed toggle the 'active' class
$('.btn').click(function () {
  $(this).toggleClass('active');
})


/*****************************************
 *  Javascript
 ****************************************/




