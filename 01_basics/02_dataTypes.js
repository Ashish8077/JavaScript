// Data Types IN JavaScript

//String => store the sequence of character that enclosed in quoets(single or double quoets and backtick)
let firstName = "Ashish";

//Number = > store the number range(Number.MAX_SAFE_INTEGER)(2 power 53 – 1)
let age = 24;

//Boolean => The Boolean object represents a truth value : ture or false
let isLoggedIn = true ;

//undefined = > when the variable is declared  but not initialize yet 
let job

//Null   => intentional absence of value 
let compony = null 

//Object => store value(Properties) in key value pair 
let person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};

//Bigint => when you want to store number which cannot be store in Number data than you used BigINt datatype
console.log(Number.MAX_SAFE_INTEGER)
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)

//symbol

