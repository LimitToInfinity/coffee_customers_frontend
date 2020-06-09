const shopsURL = 'http://localhost:3000/shops';

fetch(shopsURL)
  .then(parseJSON)
  .then(createAndAddShopOptions);

function createAndAddShopOptions(shops) {
  const shopSelect = document.querySelector('select[name="shop_id"]');
  shops.forEach(shop => makeShopOptions(shop, shopSelect));
}

function makeShopOptions(shop, shopSelect) {
  const shopOption = document.createElement('option');
  shopOption.textContent = shop.name;
  shopOption.value = shop.id;
  shopSelect.append(shopOption);
}

function parseJSON(response) {
  return response.json();
}