function checkAge(age) {
let checkAge = "You are an adult";
  if (age <= 18) {
    checkAge = undefined;
  }
  return checkAge;
}


function checkStorage(available, ordered) {
    if (available < ordered) {
   return checkStorage = "Not enough goods in stock!";
  } else {return checkStorage = "Order is processed, our manager will contact you"
    
  }
}


function checkStorage(available, ordered) {
    if (ordered === 0) {return checkStorage = "There are no products in the order!";}
   else if (available < ordered) {return checkStorage = "Your order is too large, there are not enough items in stock!";
       }
  else {return checkStorage = "The order is accepted, our manager will contact you";}
  
}
// console.log(checkStorage(70,100))

function getSubscriptionPrice(type) {
  switch(type) {
    case `starter`: 
     return "0";
      break;
    case `professional`:
     return "20";
      break;
     case `organization`: 
      return "50";
      break; 
    default:
     return "Invalid subscription type!"; 
  }
 
}
// console.log(getSubscriptionPrice(`organization`));

function isNumberInRange(start, end, number) 
{if (number >= start && number <= end) {return true;
  }
else {return false;}

}
// console.log(isNumberInRange(10, 30, 17))

function getSubstring(string, length) {
  return string.slice(0, length);
}
// console.log(getSubstring("Hello world", 3))

function normalizeInput(input, to) 
{
  if (to === "upper") {return input.toLowerCase()
    
  } else {return input.toUpperase
    
  }
}
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
function checkForName(fullName, firstName) {
  return fullName.toLowerCase().includes(firstName.toLowerCase())
 
}
// console.log(checkForName("Jason Neis", "Jason"))
// console.log(checkForName("Jason Neis", "jAsOn"))

function getFileName(file) {
  if (!file.indexOf(".")) {
    return file.slice() ;
  
} else {return file.slice(0, file.indexOf("."))
}
  
}
// console.log(getFileName("styles.css"));
// console.log(getFileName("app"))
// console.log(getFileName("index"))

function createFileName(name, ext) {
  return `${name.trim()}.${ext}`
}
// console.log(createFileName(" order ", "txt"))

function calculateTotal(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }
  return sum
}
// console.log(calculateTotal(7))

function calculateEvenTotal(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++){
    
    if (i % 2 == 0) { sum += i };
    
  }
  return sum;
  
}
// console.log(calculateEvenTotal(18))


function general(num) {
  switch (num) {
    case `1`:
      return `зима`;
      break;
    case `2`:
      return `весна`;
      break;
    case `3`:
      return `літо`;
      break;
    case `4`:
      return `осінь`;
      break;
    default:
      return `Вибачте, але ви маєте ввести значення від 1 до 4 включно`
  }
}
// console.log(general("4"))


function min(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number')
 { return 'Not a number!'}
        
    return a < b ? a : b
    
  
}
// console.log(min(12,15))

const start = 17;
const end = 25;
let number;
for (let index = start; index < end; index++) {
  if (index % 5 === 0) {
    number = index
    break
  
  }
  
}
// console.log(number)
function findNumber(start, end, divisor) {
  for (let i = start; i < end; i++) {
    if (i % divisor === 0) {
      return i;
      
    }
  }
}
// console.log(findNumber(2, 6, 5))

function getOrderQuantity(order) {return order.length
}
// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]))
// console.log (getOrderQuantity(["apple", "banana"]))

function getLastElementMeta(array) {
    const lastIndex = array.length - 1;
    const lastElement = array[lastIndex];
  return [lastIndex, lastElement]
}
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]))

function getExtremeElements(array) { 
    const lastIndex = array.length - 1;
    return [array[0], array[lastIndex]];
}
// console.log(getExtremeElements([1, 2, 3, 4, 5]))
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]))
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]))

function getLength(array) {
  return array.join("").length

}
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]))

function calculateEngravingPrice(message, pricePerWord) {
  return message.split(" ").length * pricePerWord
}
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10))
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20))

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(fruits.length - 3);
// console.log(lastThreeEls)

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClients = oldClients.concat(newClients)
// console.log(allClients)

function getSlice(array, value) {
  if (array.indexOf(value) === -1) {return[]
     } 
  else {return array.slice(0, array.indexOf(value) + 1)}
  
}
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"))
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"))

function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
    
  }
  return numbers
}
// console.log(createArrayOfNumbers(1, 3))

function calculateTotalPrice(order) {
  let sum = 0;
  for (i = 0; i < order.length; i++) {
    sum += order[i]

  }
  return sum
}
// console.log(calculateTotalPrice([12, 85, 37, 4]))

function getEvenNumbers(start, end) {
  const evenNum = [];
  for (let index = start; index <= end; index++) {
    if (index % 2 === 0) {
      evenNum.push(index);
    } }
  return evenNum;
    
}
// console.log(getEvenNumbers(2, 5))
// console.log(getEvenNumbers(7, 7))

function checkStorage(storage, item) {
  const itemA = item.toLowerCase()
  // const storageA = storage.toLowerCase()
  if (storage.includes(itemA)) {
    return `${itemA} is available to order!`
  }
  else {
    return `Sorry! We are out of stock!`
  }
 }
// console.log(checkStorage(["apple", "plum", "pear"], "plum"))
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"))

function getCommonElements(array1, array2) {
  const commonElements = [];
  for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    if (array2.includes(element)) {
      commonElements.push(element);
      }
    }
    return commonElements;
    }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

function calculateTotalPrice(order) { 
  let calc = 0;
  for (const part of order) {
    calc += part;
  }
  return calc
}

// console.log(calculateTotalPrice([0]));

function createReversedArray() {
  const arg = Array.from(arguments)
  return arg.toReversed(arguments)

}
// console.log(createReversedArray(412, 371, 94, 63, 176));

function calculateTax(amount, taxRate = 0.2) { 
 return amount * taxRate

}
// console.log(calculateTax(100, 0.1));

function fillArray(min, max) {
    let arr = [];
    for (let i = min; i <= max; i += 2) {
      return arr.push(i)
    }
}
// console.log(fillArray(2, 10));

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(lastTag);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// for (const key in book) {
//   console.log(key); // Ключ
//   // console.log(book[key]);  // Значення властивості з таким ключем
// }
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push (apartment [key])
// }

// console.log(values);
// console.log(keys)

// function countProps(object) {
 
// return Object.keys(object).length
 
// }
// console.log(countProps({ name: "Mango", age: 2 }));

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
// }

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const keys = Object.values(salaries);
//   for (const key of keys) {
//     totalSalary += key;
//   }
  
//  return totalSalary
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)
// }
// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
 
  
//   for (const product of products) {
//     if (product.name === productName)
//       return product.price
//       }
//   return null
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));


// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const result = [];

//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       result.push(product[propName]);
//     }
//   }

//   return result;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("category"));

// // function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   let result = 0;
//   for (const product of products) {
//     if (product.name === productName) {
// return result = product.price * product.quantity
//     }
    
//   }
//   return `Product ${productName} not found!`
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Grip"));

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions"
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`

//   }
// }
// console.log(atTheOldToad.addPotion("Invisibility"));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
        
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//   for (let potion of this.potions) {
//     totalPrice += potion.price;
//   }
// return totalPrice
//    } }
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.getTotalPrice());


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//   for (const potion of this.potions)
//     if (potion.name === oldName)
//         potion.name = newName
    
//   },
  
// };
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

// function foo(...args) {
// 	console.log(args);
// }
// foo("a", "b");

// function addOverNum(value, ...args) {
//   let total = 0;

//   for (const num of args) {
//     if (num > value) {
//       total += num;
//     }
//   }

//   return total;
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// function getExtremeScores(scores) {
//    return {
//     best: Math.max(...scores),
//     worst: Math.min(...scores)
//   };

// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }
// registerGuest("Mango", greet);
// registerGuest("Mango", notify);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));



// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese");


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (orderedItems) {
//     totalPrice +=orderedItems
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([164, 48, 291]));


// function filterArray(numbers, value) {
//   const numbersNew = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       numbersNew.push(number) }
//   }
//   )
//   return numbersNew
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 5));


// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));


// const changeEven = (numbers, value) => {
//   const NewArrey = [];
//   array.forEach(element => {if (element % 2 === 0){
//     newArray.push(element + value)
//   }});
   
//   return NewArrey
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));



// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);


//

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);


// const calculateTotalBalance = (users) => { return users.reduce((acc, user) => acc + user.balance, 0) };
// console.log(calculateTotalBalance([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]));


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = books.toSorted((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);
// console.log(sortedByAscendingRating);


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted()
// console.log(names);
