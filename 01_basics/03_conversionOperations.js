

let stringValue = "33";
let strvalue2 = "33abc";
let isLoggedIn = true

// Converting String DataType to Nubmber 
let numberValue = Number(stringValue);
// console.log(typeof numberValue);

let numvalue2 = Number(strvalue2);
// console.log(typeof(numvalue2)); 
//=>return number

// console.log(numvalue2);
//=>return NaN(Not A Number)

// Converting  boolean to number 
let num = Number(isLoggedIn)
console.log(typeof num , num)

// ******************** Operations ********************

let str1 = "Ashish"
let str2 = " Pawar"
let str3 = str1 + str2;
console.log(str3)

console.log("1" + 2+44+5+8) 
//output => 124458
//number written after the string is automatically converted into a string.

console.log(1+2+"4")
//output => 34
//number written before the string is automatically converted into a number.

// ******************* Expressions - Increment operator ********************
// postfix
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

//prefix
let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
