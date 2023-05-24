// ================= work 1 ================= //

// function checkAge(age) {
//     if (age>=20) { // Change this line
//       return "You are an adult";
//     }
  
//     return "You are a minor";
//   }

// ================= work 2 ================= //

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
  
  
//     if (password === ADMIN_PASSWORD) {
//       return "Welcome!";
//     } 
    
    
//       return "Access denied, wrong password!";
//     }

// ================= work 3 ================= //

// function checkStorage(available, ordered) {
//     // Change code below this line
  
//     if (ordered === 0) {
//       return "Your order is empty!";
//     } if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     } 
//       return "The order is accepted, our manager will contact you";
    
//     // Change code above this line
//   }  

// ================= work 4 ================= //

// // Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"]

// ================= work 5 ================= //

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// console.log(firstElement)
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// ================= work 6 ================= //

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line

// fruits [1] = "peach";
// fruits [3] = "banana";

// ================= work 7 ================= //

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = (fruits.length)

// ================= work 8 ================= //

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// ================= work 9 ================= //

// function getExtremeElements(array) {
//     // Change code below this line
//   let firstElements = array [0];
//   let lastElementIndex = array[array.length - 1]; 
//   let lastElement = [firstElements, lastElementIndex]; 
//   return lastElement
//     // Change code above this line
//   }

// ================= work 10 ================= //

// function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line
//   words = message.split(delimiter)
//     // Change code above this line
//     return words;
//   }  

// ================= work 11 ================= //

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//    let long;
//    let longer;
//    let totalCost;
//    long = message.split(" ");
//    longer = long.length;
//    totalCost = pricePerWord * longer;
 
//    return totalCost
//     // Change code above this line
//  }

// ================= work 12 ================= //

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

// string = array.join(delimiter)

//   // Change code above this line
//   return string;
// }

// ================= work 13 ================= //

// function slugify(title) {
//     // Change code below this line
//   let separation = title.split(" ")
//     let add = separation.join("-")
//     let result = add.toLowerCase()
//     return result
//     // Change code above this line
//   }

// ================= work 14 ================= //

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(-3); 

// ================= work 15 ================= //

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// ================= work 16 ================= //

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// let newArray = firstArray.concat(secondArray); 
//   if (newArray.length > maxLength) {
//     newArray = newArray.slice(0, maxLength);
//   }

// return newArray;
//     // Change code above this line
//   }

// ================= work 17 ================= //

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// ================= work 18 ================= //

// function calculateTotal(number) {
//     // Change code below this line
//    let sum = 0;
//      for (let i = 0; i <= number; i += 1) {
//        sum = sum +i
//      } 
//    return sum;
   
//      // Change code above this line
//    }

// ================= work 19 ================= //

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ================= work 20 ================= //

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i]
//   }
//     // Change code above this line
//     return total;
//     console.log(total)
//   }

// ================= work 21 ================= //

function findLongestWord(string) {
  // Change code below this line
  const word = string.split(" ");
  let longestWord = ''; 
  let maxWord = 0;
  for (let i = 0; i < word.length; i+=1) {
    if (maxWord < word[i].length) {
          maxWord = word[i].length;
      longestWord = word[i]
    }
  }
  return longestWord


  // Change code above this line
}
  
// ================= work 22 ================= //

