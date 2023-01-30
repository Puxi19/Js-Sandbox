// Create a function that takes in two numbers as arguments and returns the result of adding them together.

/*
function addition(num1, num2) {
let result = num1 + num2;
console.log(result)
return result;
};
 addition(5, 5);
    */

// Create a function that takes in a string as an argument and returns the number of vowels in the string using a loop.

/*
function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
*/

//Create a function that takes in a number and returns the result of raising it to the power of 3.

/*
function power3(num1) {
  let result = num1 * num1 * num1;
  console.log(result);
  return result;
}
power3(2);
*/

//Create a function that takes in a number as an argument and returns true if it is even and false if it is odd.

/*
function evenOdd(number) {
  let result;
  if (number % ) {
    result = true;
  } else {
    result = false;
  }
  console.log(result);
  return;
}
evenOdd(3);
*/

//Create a function that takes in a string as an argument and returns the string with all the characters in reverse order.

/*
function reverseString(string) {
    let reverse ='';
    let reversed='';
    for (let i = reverse.length- 1; i >= 0; i--) { 
     let reversed = reverse[i]; 
    return reversed;
    }
}

reverseString('john');
console.log(reversed);

*/

//Create a function that takes in two numbers as arguments, and using a loop, returns the result of multiplying them together.

/*
function multiplying(number1, number2) {
  let ans = 0;
  for (let i = 0; i < number2; i++) {
    ans = number1 * number2
  };
  return ans;
}
console.log(multiplying(3, 3));
*/
/*
function loopedNumbers(number)
    for (let i =0;i< number+1, i++;) {
       let sum =sum + i;
        return sum;
        console.log(sum);
    } ;

*/

/*
function multiplyNumbers(num1, num2) {
  let result = 0;
  for (let i = 0; i < num2; i++) {
    result += num1;
  }
  console.log(result);
  return result;
}
multiplyNumbers(2,8);
*/

//Create a function that takes in n numbers and using a loop, returns the sum of all the numbers//

/*
function sumOfNumbers(num1, num2, num3, num4, num5, num6, num7) {
let count = 7;
for (let i =0;i < count;i++) {
  let sum = (num1 + num2 + num3 +num4+ num5 + num6 +num7);
return sum;
}
}
console.log(sumOfNumbers(1,2,3,4,5,6,7));
*/
//Create a function that takes in a number as an argument and returns the result of finding the square root of that number.

/*
function findSquareRoot(num) {
  return Math.sqrt(num);
}
console.log(findSquareRoot(9));
*/

//Create a function that takes in a string as an argument and returns true if it is a palindrome, and false if it is not.
/*
function isPalindrome(str) {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}
console.log(isPalindrome('anna'));
*/

//Create a function that takes in a number as an argument and returns the result of finding the factorial of that number.
/*
function findFactorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}
console.log(findFactorial(3));
*/
//Create a function that takes in a number n as an argument and returns the result of finding the nth number in the Fibonacci sequence using recursion.

/*
function findNthFibonacci(n) {
  if (n <= 1) return n;
  return findNthFibonacci(n - 1) + findNthFibonacci(n - 2);
}
console.log(findNthFibonacci(4));
*/
/*
function findFactorialRecursive(num) {
  if (num === 0) return 1;
  return num * findFactorialRecursive(num - 1);
}
console.log(findFactorialRecursive(5));
*/

//Create a function that takes in a number and a function as an argument, then calls the provided function with the result of the number multiplied by 2.
/*
function callWithResult(num, fn) {
 fn(num * 2);
}
function fn(num) {num = num *2};
console.log(callWithResult(2, fn(2)));
*/