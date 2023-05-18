// ================= work 1 ================= //

// const productName = "Droid";
// const pricePerItem = 2000;

// ================= work 2 ================= //

// let productName = "Droid";
// productName = "Repair droid"
// console.log(productName); // Repair droid

// let pricePerItem = 2000;
// pricePerItem = pricePerItem + 1500
// console.log(pricePerItem); // +1500

// ================= work 3 ================= //

// let topSpeed = 160
// let distance = 617.54
// let login = "mango935"
// let isOnline = true
// let isAdmin = false

// ================= work 4 ================= //

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;

// ================= work 5 ================= //

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = "You picked " + productName + ", price per item is " + pricePerItem + " credits";
// console.log(message)

// ================= work 6 ================= //

// let pricePerDroid = 800;
// let orderedQuantity = 6;
// let deliveryFee = 50;
// let totalPrice = pricePerDroid*orderedQuantity+deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message)

// ================= work 7 ================= //

// function sayHi () {
//     console.log("Hello, this is my first function!")
//   }
//   sayHi();

// ================= work 8 ================= //

// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);
//     // Change code above this line
//   }
  
//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

// ================= work 9 ================= //

// function add(a, b, c) {
//     // Change code below this line
  
//   return a + b + c
  
//     // Change code above this line
//   }
  
//   add(2, 5, 8); // 15
  
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

// ================= work 10 ================= //  

// function makeMessage (name, price) {
//     // Change code below this line
//      const message = `You picked ${name}, price per item is ${price} credits`;
//     // Change code above this line
//     return message;
//   };

// ================= work 11 ================= //    

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = orderedQuantity*pricePerItem;
  
//     // Change code above this line
//     return totalPrice;
//   };

// ================= work 12 ================= //      

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
//     let TotalPrice = orderedQuantity*pricePerDroid+deliveryFee;
//   const message = `You ordered droids worth ${TotalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
  
//     // Change code above this line
//     return message;
//   }
  
//   makeOrderMessage (2, 100, 50)
//   makeOrderMessage (4, 300, 100)
//   makeOrderMessage (10, 70, 200)

// ================= work 13 ================= //   

// function isAdult(age) {
//     // Change code below this line
//     const passed = age >= 18;
//   console.log()
//     // Change code above this line
//     return passed;
//   }
  
//   isAdult(20)
//   isAdult(14)
//   isAdult(8)
//   isAdult(37)

// ================= work 14 ================= //     

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = password === SAVED_PASSWORD;
  
//     // Change code above this line
//     return isMatch;
//   }

// ================= work 15 ================= //    

// function checkAge(age) {
//     let message;
  
//     if (age>=18) { // Change this line
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
  
//     return message;
//   }

// ================= work 16 ================= //      

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
    
//     if (ordered>available) { 
//       message = 'Not enough goods in stock!'
  
//     } else {
//       message = 'Order is processed, our manager will contact you.';
//     }
//     // Change code above this line
//     return message;
//   }
  
//   checkStorage();

// ================= work 17 ================= //        

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;


// ================= work 18 ================= //      

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//     let totalPrice = pricePerDroid * orderedQuantity;
//     let balance = customerCredits - totalPrice;
  
//      if (totalPrice > customerCredits) { 
//       message = 'Insufficient funds!';
  
//     } else {
//       message = `You ordered ${orderedQuantity} droids, you have ${balance} credits left`;
//      }
       
//     // Change code above this line
//     return message;
//   }
  
//   makeTransaction()

// ================= work 19 ================= //  

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     if (password === null) { // Change this line
//       message =  'Canceled by user!';
//     } else if (password === ADMIN_PASSWORD) { // Change this line
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
//   console.log(message)
//     return message;
//   }
  
//   checkPassword("mangohackzor") 
//   checkPassword(null)
//   checkPassword("polyhax")
//   checkPassword("jqueryismyjam") 

// ================= work 20 ================= //  

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   }
//     else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//     }
//     else {
//     message = "The order is accepted, our manager will contact you";
//     }
//     // Change code above this line
//     return message;
//   }

// ================= work 21 ================= // 

// function isNumberInRange(start, end, number) {
//     const isInRange = (number >= start && number <= end); // Change this line
  
//     return isInRange;
//   }

// ================= work 22 ================= // 

// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType === "vip" || subType === "pro"; // Change this line
  
//     return canAccessContent;
//   }

// ================= work 23 ================= // 

// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange; // Change this line
  
//     return isNotInRange;
//   }

// ================= work 24 ================= // 

// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
//   if (totalSpent >= 50000) {discount = GOLD_DISCOUNT}
//   else if (totalSpent >= 20000 && totalSpent < 50000) {discount = SILVER_DISCOUNT}
//   else if (totalSpent >= 5000 && totalSpent < 20000) {discount = BRONZE_DISCOUNT}
//   else (discount = BASE_DISCOUNT)  
//     // Change code above this line
//     return discount;
//   }

// ================= work 25 ================= //   

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
  
//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
    
//     // Change code above this line
//     return message;
//   }
  
// ================= work 26 ================= //   

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
//   message = (ADMIN_PASSWORD === password) ? "Access is allowed" : "Access denied, wrong password!";
//     // Change code above this line
//     return message;
//   }

// ================= work 27 ================= //    

// function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line
  
//    switch (type) { // Change this line
//      case "starter": // Change this line
//         price = 0; // Change this line
//         break;
  
//       case "professional" : // Change this line
//         price = 20; // Change this line
//         break;
  
//       case "organization" :// Change this line
//         price = 50; // Change this line
//         break;
//     }
  
//     // Change code above this line
//     return price;
//   }

// ================= work 28 ================= //    

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
//   switch (password) {
//     case null : message = "Canceled by user!";
//     break;
  
//     case ADMIN_PASSWORD : message = "Welcome!";
//       break;
  
//     default : message = "Access denied, wrong password!";
//   }
    
//     // Change code above this line
//     return message;
//   }
  
 // ================= work 29 ================= //  

//  function getShippingCost(country) {
//     let message;
//     // Change code below this line
//   switch (country) {
//     case "China":
//       message = `Shipping to ${country} will cost 100 credits`
//         break;
  
//     case "Chile":
//       message = `Shipping to ${country} will cost 250 credits`
//       break;
  
//     case "Australia":
//       message = `Shipping to ${country} will cost 170 credits`
//       break;
  
//     case "Jamaica":
//       message = `Shipping to ${country} will cost 120 credits`
//       break;
  
//     default:
//       message = `Sorry, there is no delivery to your country`
//   }
//     // Change code above this line
//     return message;
//   }

// ================= work 30 ================= // 

// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`; // Change this line
  
//     return message;
//   }
  
// ================= work 31 ================= // 

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line

// ================= work 32 ================= // 

// function getSubstring(string, length) {
//     const substring = string.slice (0, length); // Change this line
  
//     return substring;
//   }

// ================= work 33 ================= // 

// function formatMessage(message, maxLength) {
//     let result;
//     // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   }
//     else {
//       result = message.slice(0, maxLength) + "..."
//     }
//     /// Change code above this line
//     return result;
//   }

// ================= work 34 ================= // 

// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase(); // Change this line
  
//     return normalizedInput;
//   }  

// ================= work 35 ================= // 

// function checkForName(fullName, name) {
//     const result = (fullName.includes(name)); // Change this line
//      return result;
//    }   

// ================= work 36 ================= // 

// function checkForSpam(message) {
//     let result;
//     // Change code below this line
//   const forbiddenWord1 = "spam";
//     const forbiddenWord2 = "sale";
//     // Change code above this line
//     result = message.toLowerCase().includes(forbiddenWord1) || message.toLowerCase().includes(forbiddenWord2);
//     return result;
//   }

  