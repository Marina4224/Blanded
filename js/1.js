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

function getOrderQuantity(order) {return   order.length
}
console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]))