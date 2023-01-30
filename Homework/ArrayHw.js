//Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.
/*
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
console.log(sumArray([1,2,3,4]));
*/

//Write a function that takes in an array of numbers and returns the largest number in the array.
/*
function maxArray(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }
  console.log(maxArray([7,4,5,2,1]));
  */

//Write a function that takes in an array of numbers and returns the smallest number in the array.

/*
function minArray(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }
    return min;
  }
  console.log(minArray([7,4,5,2,1]));
*/

//Write a function that takes in an array of numbers and returns the average of all the numbers in the array.

/*
function sumAverage(numbers) {
    let sum = 0;
    let average =0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
      average = sum /numbers.length;
    }
    return average;
  }
console.log(sumAverage([1,2,3,4]));
*/

//Write a function that takes in an array of numbers and returns a new array of only the even numbers.

/*
function evenArray(numbers) {
    let evens = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
      }
    }
    return evens;
  }
  console.log(evenArray([1,2,3,4,5,6,7,8,9,10]));
*/

//Write a function that takes in an array of numbers and returns a new array of only the odd numbers.

/*
function oddArray(numbers) {
    let odds = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        odds.push(numbers[i]);
      }
    }
    return odds;
  }
  console.log(oddArray([1,2,3,4,5,6,7,8,9,10]));
*/

//Write a function that takes in an array of numbers and returns the index of the first occurrence of a specific number.

/*
function findIndex(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }
  return 'Target not is Array';
}
console.log(findIndex([1,2,3,4,5,6,7,8,9,10], 5));
*/
//Write a function that takes in an array of numbers and returns the index of the last occurrence of a specific number.
/*
function findLastIndex(numbers, target) {
    for (let i = numbers.length - 1; i >= 0; i--) {
      if (numbers[i] === target) {
        return i;
      }
    }
    return 'Target not is Array';
  }
  console.log(findLastIndex([1,2,3,4,5,6,7,8,9,10,5], 5));
  */
//Write a function that takes in an array of numbers and returns a new array of numbers that are in sorted order.

/*
function sortArray(numbers) {
  return numbers.sort((a, b) => a - b);
}
console.log(sortArray([1,2,3,4,5,6,7,8,9,10,5]));
*/

//Write a function that takes in an array of numbers and returns a new array of numbers that are in reverse sorted order.
/*
function reverseSortArray(numbers) {
    return numbers.sort((a, b) => b - a);
  }

  console.log(reverseSortArray([1,2,3,4,5,6,7,8,9,10,5]));
  */
 