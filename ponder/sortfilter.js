

nums = [12, 10, 8, 3]

// console.log(nums.sort())
// this splits the list into two, and sorts the two splits (runs). it doesn't recombine them properly.
// it sees the numbers as strings and recognizes the '1' in '10' comes before '3' in '3'. so it they were ints, it would work.



console.log(nums.sort(compareFn))
// this sorts the 
function compareFn(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    return 0;
}



// 

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];
                

let simpleSort = simpleList.sort();
console.log(simpleSort);
// uppercase comes before lowercase, so the sorting is messed up.


let lowerList = simpleList.map(function(fruit) {
    return fruit.toLowerCase();
})


lowerSort = lowerList.sort()
console.log(lowerSort);




//   Filter:

let searchTerm = 'an';
// String we're looking for

let filterFruit = lowerSort.filter(searchFruit);
// filter out the string using the function

function searchFruit(item) {
    return item.includes(searchTerm)
    // Only return this back into filterfruit if it has 'an' in the string.
}

console.log(filterFruit);




//      sorting dictionaries:

const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

//      SORT BY PRICE
// function compareFnProducts(a, b) {
//     if (a.price < b.price) {
//         return -1;
//     }
//     else if (a.price > b.price) {
//         return 1;
//     }
//     return 0;
// }


//      SORT BY NAME
function compareFnProducts(a, b) {
    if (a.productName < b.productName) {
        return -1;
    }
    else if (a.productName > b.productName) {
        return 1;
    }
    return 0;
}

let productSort = products.sort(compareFnProducts);

console.log(productSort);




// Array inside an Array:

const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];
    

// Filter by NAME
// 

let query = 'dog';

let filteredList = animals.filter(searchMyList);

function searchMyList(item) {
    return item.name.toLowerCase().includes(query.toLowerCase());
}

console.log(filteredList);


// Filter by TRAIT
// finds using

let queryTrait = 'cuddly';

let filteredTraits = animals.filter(function(item) {
    return item.traits.find((trait)=>
        trait.toLowerCase().includes(queryTrait.toLocaleLowerCase()));
});
//  => is an anyonmyous function, not reusable: contains FunctionName Parens and Arrow   (no curly brackets '{}')

console.log(filteredTraits);


