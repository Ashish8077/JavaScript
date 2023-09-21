/*Data type are divided on the basis of :
 1.how data store in memory
 2.and how they been accesed 
 */  

/*=>Javascript is dynamically typed language ,which means that data types of variables determined by the
 value they hold at runtime and can change throughout the program 
*/

/*=>Primitive datat types 
1.String
2.Number
3.Boolean
4.null
5.undefined
 */
//6.symbol
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);


// ******************** Reference(Non Primitive) ********************
//Array
const heros = ["shaktiman","naagraj","doga"];

//Objects
   let myObj = {
     name: "ashish",
     age: 22,
   }

//Functions
const myFunction = function(){
  console.log("Hello World")
}

console.log(typeof myFunction) //prinst Function(called object function)