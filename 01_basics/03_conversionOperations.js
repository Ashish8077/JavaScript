let stringValue = "33";
let strvalue2 = "33abc";
let isLoggedIn = true

// Converting String DataType To Nubmber 
let numberValue = Number(stringValue);
console.log(typeof numberValue);
let numvalue2 = Number(strvalue2);
console.log(typeof numvalue2); // return number
console.log(numvalue2); //return NaN(Not A Number)

// Convertin  boolean to number 
let num = Number(isLoggedIn)
console.log(typeof num , num)