/*Data types are divided on the basis of:
1. How data is stored in memory
2. and how they have been accessed
 */  

/*=>Javascript is a dynamically typed language, which means that the data types of variables are determined by the
value they hold at runtime and can change throughout the program.
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


//******************** Stack (Primitive), Heap(Non-Primitive)  ******************/

//Primitive data store in stack memory 
//A stack is a simple data structure that computers use to store and retrieve data quickly. 
let name1 = "Ashish"
let name2 = name1
name2 = "Rahul"
console.log(name1)
console.log(name2)
/*
name1 does not change it's value after changing in name2 because
The value assigned to name2 (name2 = name1) is not the original one; it's a copy value of the name1 variable.
*/

//Reference data store in heap memory 
const myObj1 = {
    name:"ashish",
    age:24
}
const myObj2 = myObj1

myObj2.name = "Rahul"

console.log(myObj1)

/*
Object store in heap and their reference store in stack, which is called pointer (myObj1), which points to the location of the object. Both objects have the same reference or pointer, so changing one object will affect another object.
*/
