// ******************** Variables in javascript ********************

// JavaScript Variables can be declared in 4 ways:

//1.Declaring variable using var keyword
var firstName = "ashish";

//2.Declaring variable using let keyword
let lastName = "pawar";

//3.Declaring varible without using keyword Automatically
email = "ashishpawar9833@gmail.com";

//Declaring vaiable using const keyword
const accountNo = "374800344";

//Declaring variable not initializing value 
let dob 


/*
  =>you cannot redeclare constant  and cannot assing any value once the variable is initialize
  => you cannot simply use constant variable after declaration you need to initialize value to variable 
*/
// accountNo = "4598340033" 



var firstName = "Rahul"
lastName = "Panwar"  // let cannot be redeclare  but can reassing it's value 
/*
  =>You can change the value of  variable declare using let and var keyword 
  =>only difference that var has global scope and let has block scope  when declare inside a particular block of code

*/

console.log(firstName , lastName ,email , accountNo ,dob) // Prints Rahul Panwar ashishpawar9833@gmail.com 374800344 undefined 


