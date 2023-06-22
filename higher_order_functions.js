// Code Explanation:
//This code iterates over the elements of the myNumbers array using two different methods: a for...of loop and the forEach method. 
// It logs a message for each number, including the number itself and, in the case of the forEach method, its index position.
//In summary, the code prints messages to the console for each number in the myNumbers array, displaying the number itself and, in the case of the forEach method, its corresponding index position.

const myNumbers = [1, 2, 3, 4, 5];

for (const number of myNumbers) {
  console.log(`This is number ${number}`)
}

myNumbers.forEach((number, index) => {
  console.log(`This is number ${number} at index position ${index}`);
});

// .................................................................

// const multiplyByTwo = function (numbers) {
//   const result = [];
//
//   numbers.forEach((number) => {
//     const multiplied = number * 2;
//     result.push(multiplied);
//   });
//
//   return result;
// }

// .................................................................

// Code Explanation:
// This code defines a function named multiplyByTwo that takes an array of numbers as input. 
// It uses the map method to create a new array by multiplying each number in the input array by 2. 
// The function then returns the resulting array. 
// Finally, it prints the result of calling the multiplyByTwo function with an array of numbers using console.log.
// In summary, the code multiplies each number in an array by 2 and logs the resulting array.


const multiplyByTwo = function (numbers) {
  const result = numbers.map((number) => {
    return number * 2;
  });

  return result;
}

console.log(multiplyByTwo(myNumbers));

// .................................................................

//Code Explanation:
//This code defines a function named multiplyByTwo that takes an array of numbers as input. 
//It uses the map method to create a new array by multiplying each number in the input array by 2. 
//The function then returns the resulting array. 
//Finally, it prints the result of calling the multiplyByTwo function with an array of numbers using console.log.
//In summary, the code multiplies each number in an array by 2 and logs the resulting array. 
//It uses an arrow function with a concise syntax (x => x * 2) for the mapping operation.

// const multiplyByTwo = function (numbers) {
//     const result = numbers.map(x => x * 2);
  
//     return result;
//   }
  
//   console.log(multiplyByTwo(myNumbers));
  

// .................................................................

// const getEvens = function (numbers) {
//   const result = [];
//
//   numbers.forEach((number, index) => {
//     if (number % 2 === 0) {
//       result.push(number);
//     }
//   });
//
//   return result;
// }

// .................................................................

// Code Explanation: 
// This code defines a function named getEvens that takes an array of numbers as input. 
// It filters out the even numbers from the input array using the filter method and returns a new array containing only the even numbers. 
// Finally, it prints the result of calling the getEvens function with an array of numbers using console.log.
//In summary, the code retrieves the even numbers from an array and logs the result.


const getEvens = function (numbers){
    const result = numbers.filter((number) => {
      return number % 2 === 0;
    });
  
    return result;
  }
  
  console.log(getEvens(myNumbers));

// .................................................................

//Code Explanation:
//This code defines a function named sumElements that takes an array of numbers as input. 
//It uses the reduce method to calculate the sum of all the numbers in the input array. 
//The initial value for the sum is set to 0. 
//The function then returns the total sum. 
//Finally, it prints the result of calling the sumElements function with an array of numbers using console.log.
//In summary, the code calculates the sum of all the numbers in an array and logs the result.


const sumElements = function (numbers) {
    const total = numbers.reduce((runningTotal, number) => {
      return runningTotal + number;
    }, 0);
  
    return total;
  }
  
  console.log(sumElements(myNumbers));


  