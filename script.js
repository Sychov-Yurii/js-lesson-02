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

// another variant to made 13s homework


// function slugify(title) {
//   // Change code below this line
// return title.split(" ").join("-").toLowerCase()
//   // Change code above this line
// }

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

// function findLongestWord(string) {
//   // Change code below this line
//   const word = string.split(" ");
//   let longestWord = ''; 
//   let maxWord = 0;
//   for (let i = 0; i < word.length; i+=1) {
//     if (maxWord < word[i].length) {
//           maxWord = word[i].length;
//       longestWord = word[i]
//     }
//   }
//   return longestWord


//   // Change code above this line
// }
  
// ================= work 22 ================= //

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i += 1) {
//   numbers.push(i)
// }
//   // Change code above this line
//   return numbers;
// }

// ================= work 23 ================= //

// function filterArray(numbers, value) {
//    // Change code below this line
// const newArray = [];
//   for (i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }

// return newArray
//   // Change code above this line
// }

// ================= work 24 ================= //

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); ; // Change this line
// }

// ================= work 25 ================= //

// function getCommonElements(array1, array2) {
//   let array3 = []

//   for (let i =0; i < array1.length; i+=1) {
//     if (array2.includes(array1[i])) {
//       array3.push(array1[i])
//     }
//   }
//   // Change code below this line


// return array3
//  // Change code above this line
// }

// ================= work 26 ================= //

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line


//   for(const index of order)
// {
// total += index;
// }
  
//   // Change code above this line
//   return total;
// }

// ================= work 27 ================= //

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];


//     for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);}
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// ================= work 28 ================= //

// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// ================= work 29 ================= //

// function getEvenNumbers(start, end) {
//   let evenNumber = [];
//   for (let i = start; i <= end; i+=1) {
//     if (i % 2 === 0) {
//       evenNumber.push(i);
//     }
//   }   return evenNumber;
// } 

// ================= work 30 ================= //

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
  
// }

// ================= work 31 ================= //

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
      
//       return number
//     }
//   }

  
//   // Change code above this line
// }

// ================= work 32 ================= //

// function includes(array, value) {
//   // Change code below this line
// for (let i = 0; i < array.length; i +=1) {
//   if (array[i] === value) {
//     return true;
//   }
// } return false
//   // Change code above this line
// }


const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
      for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }  
      }
      this.potions.push(newPotion);
    },
    removePotion(potionName) {
      let potionIndex = -1;
      for (const potion of this.potions) {
         if (potion.name === potionName) {
           potionIndex = this.potions.indexOf(potion)
        ;
      }
      }   
  
      this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
      let potionIndex = 0;
      for (const potion of this.potions) {
        if (potion.name === oldName) {
          potionIndex = this.potions.indexOf(potion);
          potion.name = newName;
        }
        if (potionIndex === -1) {
          return `Potion ${oldName} is not in inventory!`;
        }
      }
  
  
    // Change code above this line
  }
}
  