// Sample list of products
const products = [
  { name: 'Product A', inStock: true },
  { name: 'Product B', inStock: false },
  { name: 'Product C', inStock: true },
  { name: 'Product D', inStock: false },
  { name: 'Product E', inStock: true },
];

// Function to filter out-of-stock products
function filterOutofStockProducts(products) {
  return products.filter((product) => product.inStock);
}

// Filter out-of-stock products
const inStockProducts = filterOutofStockProducts(products);

// Display the in-stock products
console.log('In-stock products:');
inStockProducts.forEach((product) => {
  console.log(product.name);
});
console.log(inStockProducts);



// point by reference 
// point by value 
// function sum(a,b){
// a = 20;
//   return a + b;
// }

// let x = 10, y = 20;

// sum(x,y)
// // x = 10;
// // y = 20 ;
// // a = 20;

let x = 10;
let a = x; // 10 
a = 20;
x // 20 point by ref.
x = 10; 
a = 20;