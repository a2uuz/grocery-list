const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message; 

/* below is a condition to 
1st: output all the products in the array if an input
-were'nt given in the dailog box or search box using join method

2nd: to output the product if it matches the array using includes method 
*/
if (!search) {
    message = `<strong>in stock:</strong> ${inStock.join(', ')}`
}
else if (inStock.includes(search.toLowerCase())) {
    message = `Your Order <strong>${search}</strong> is in Stock`;
}
else {
    message = `Sorry <strong>${search}</strong> is not available now`;
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;

