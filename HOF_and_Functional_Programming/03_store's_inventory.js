const storeInventory = {
  apple: 2.5,   // Price in USD
  banana: 1.8,  // Price in USD
  orange: 3.0,  // Price in USD
  mango: 4.2    // Price in USD
};

const exchangeRate = 80; // 1 USD to 80 INR

// Function to convert prices to Indian Rupees
function convertToRupees(priceInUSD) {
  return priceInUSD * exchangeRate;
}

// Convert prices in storeInventory to Indian Rupees using map
const inventoryInRupees = Object.fromEntries(
  Object.entries(storeInventory).map(([item, price]) => [item, convertToRupees(price)])
);

// Output the inventory in Rupees
console.log("Store's Inventory (in Rupees):");
console.log(inventoryInRupees);
