// Data Types IN JavaScript

//String => Store the sequence of characters enclosed in quoets (single or double quoets and backticks).
let firstName = "Ashish";

//Number = > store the number range (Number.MAX_SAFE_INTEGER) (2 power 53 – 1)
let age = 24;

//Boolean => The Boolean object represents a truth value : ture or false
let isLoggedIn = true ;

//undefined = > when the variable is declared but not initialized yet. 
let job;

//Null   => intentional absence of value 
let company = null ;



//Object => store value(Properties) in key value pair 
let person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};
console.log(person);

//symbol

//Bigint => When you want to store a number that cannot be stored in number data, you use the BigINt datatype.
console.log(Number.MAX_SAFE_INTEGER);
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345);

console.table([firstName, age, isLoggedIn, job, company, x, y]);


//=> You can use the typeof operator to find the data type of a JavaScript variable.
console.table([typeof(age), typeof(firstName), typeof(isLoggedIn), typeof(job), typeof(company), typeof(person), typeof(x)]);

console.log(typeof(null)) //=>return object which is bug in javascript 
