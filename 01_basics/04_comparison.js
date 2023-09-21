// console.log("2">1); //print true 
// console.log("02">1); //print true 

/*
javascript automatically convert string value to number 
"2" converted to 2
*/

// console.log(null>0); //false
// console.log(null == 0); //false
// console.log(null >=0) //true

/*
The reason is that an equality check == and comparisons (< < >= <=)
works differently
Comparisons convert null to a number ,treating it as 0. That's why
null >=0 is true and null>0 is false.
*/

// Stric equality operator vs equality operator 
console.log("2" == 2) //prints true due to automatic type conversion
console.log("2" === 2) //prints false because Stric equlaity operator check both value and their data type 
