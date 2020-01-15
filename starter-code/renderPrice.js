function renderPrice() {
  let precio = basePrice;
  let $list = document.querySelector('aside.panel.price ul');
  $list.innerHTML = '';
  for (let ingredientKey in ingredients) {
    if (state[ingredientKey]) {
      precio === ingredients[ingredientKey].price;
      $list.innerHTML += `<li>$${ingredients[ingredientKey].price} ${ingredients[ingredientKey].name.toLowerCase()}</li>`;
    }
  }
  document.querySelector('aside.panel.price strong').innerHTML = "$" + precio;
}
