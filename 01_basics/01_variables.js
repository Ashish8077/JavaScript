// ******************** Variables in javascript ********************

//Variables are basically names given to the memory location.

// JavaScript Variables can be declared in 4 ways:

//1.Declaring variable using var keyword
var firstName = "ashish";

//2.Declaring variable using let keyword
let lastName = "pawar";

//3.Declaring varible without using keyword (Automatically)
email = "ashishpawar9833@gmail.com";

//Declaring variable using const keyword
const accountNo = "374800344";

//Declaring a variable without initializing it
let dob 

//Initializing a variable means setting up a value for the variable.

/*
  =>You cannot re-declare a constant and cannot assign any value once the variable is initialized.
  =>You cannot simply use a constant variable after a declaration; you need to initialize the value to a variable.
*/
// accountNo = "4598340033" 



var firstName = "Rahul"
lastName = "Panwar"  // Let cannot be redeclared but can be reassigned its value. 
/*
  =>You can change the value of a variable by using the let and var keywords.
  =>The only difference is that var has global scope and let has block scope when declared inside a particular block of code.

*/

console.log(firstName , lastName ,email , accountNo ,dob) // Prints Rahul Panwar ashishpawar9833@gmail.com 374800344 undefined 


