// Task 1  Given two objects. Write a function that performs shallow compare.
// Way 1
function shallowCompare(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  for (let key in object1) {
    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }

    return true;
  }

  if (object1.key === undefined && object2.key === undefined) {
    return true;
  }
}

console.log(shallowCompare({}, {}));

// Way 2

function shallowCompare2(obj1, obj2) {
  let result = false;

  for (let key in obj1) {
    if (!(key in obj2) || obj1[key] !== obj2[key]) {
      return result;
    }
  }
  
  for (let key in obj2) {
    if (!(key in obj1) || obj1[key] !== obj2[key]) {
      return result;
    }
  }

  result = true;
  return result;
}

console.log(shallowCompare2({}, {}));

// task 3  Given a number n ( n&gt;= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3,
// 5, 8 …, ak = ak-1 + ak-2)

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(20));

// Task 2 Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
// word&quot;) is a word or phrase without a repeating letter.

let word = "isogram";

function isIsogram(word) {
  let arr = [];
  let obj = {};
  let result = true;
  for (let i = 0; i < word.length; i++) {
    arr.push(word[i]);
  }

  for (let j = 0; j < arr.length; j++) {
    if (obj[arr[j]]) {
      return false;
      break;
    }
    obj[arr[j]] = true;
  }

  return result;
}

console.log(isIsogram(word));

// Task 4 Insert a number. Calculate product and sum of the digits of the number. If product is
// divisible by the sum, print the quotient, otherwise print the remainder.

let number = 0;
let sum = 0;
let product = 1;
let arr = [];
let strNumber = number.toString();
let result = "";
let quotient = 0;
let reminder = 0;

for (let i = 0; i < strNumber.length; i++) {
  arr.push(strNumber[i]);
}

for (let j = 0; j < arr.length; j++) {
  sum += +arr[j];
  product *= +arr[j];
}

if (number === 0) {
  result = "Cannot calculate";
} else if (product % sum === 0) {
  quotient = product / sum;
  result = `Quotient is ${quotient} `;
} else {
  reminder = product % sum;
  result = `Reminder is ${reminder}`;
}

console.log(result);

// Task 5 Write a program to print X star pattern series.

function paternX(number) {
  for (let i = 0; i <= number; i++) {
    for (let j = 0; j <= number; j++) {
      if (i === j || i + j === 4) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log("");
  }
}
