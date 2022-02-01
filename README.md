## Search for a Value in an Array || Grocery List

this page basically searches with in the given array
and outputs a message in the page.

#### Used Methods

- .join()
- .includes()
- .toLowerCase()

---

## Why repeat search.toLowerCase() vs. assigning it to a variable and reusing it? For example:

```
const search = prompt('Search for a product.');
const searchText = search.toLowerCase();
```

```
inStock.includes(searchText);
inStock.indexOf(searchText);
```

If the user clicks the "Cancel" button in the prompt dialogue, the variable searchText would point to null. The JavaScript interpreter throws an error when you call toLowerCase() on a returned null value -- there's nothing to convert to lowercase:

```
const search = prompt('Search for a product.');
const searchText = search.toLowerCase();
// Uncaught TypeError: Cannot read property 'toLowerCase' of null
```

Following is another way you might convert the value assigned to search to all lowercase. If search points to a truthy value (not null, for example), then convert it to lowercase:

```
const inStock = [ ... ];
let message;
let search = prompt('Search for a product.');

if ( search ) {
  search = search.toLowerCase();
}

if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else if ( inStock.includes(search) ) {
  message = `Yes, we have <strong>${search}</strong>. It's #${inStock.indexOf(search) + 1} on the list!`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`;
}
```

That way, you don't have to repeat calling toLowerCase() in the conditional.
