// ******************** String ******************* 
// A string is a sequence of characters enclosed in quotes.
// Single quote('')
// duble quote("")
// backtickts(``)

let firstName = "Ashish"
console.log(firstName)

// We can also create a string using a new keyword.

let firstName1 = new String("rahul") 
console.log(firstName1)//This will return a string object that has some methods associated with it. 

// ******************** String Indexing ********************

//Note: String index starts with 0, and you can access string characters using their index.

// Example 
let myName = "AshishPawer"
console.log(myName[6])//print P

//**String also have length properties that return the length of the string**
console.log(myName.length) //print 11
console.log(myName[myName.length-1]) //print the character of the string

// ********************* String Methods ********************

// ########## trim method remove the  spaces from both the left and right sides of the string ###########

let myName1 = "    Ashish Pawar    "
console.log(myName1.trim()) //

// ########## As name suggested converting a string to uppercase and lowercase ##########

console.log(myName1.toUpperCase())
console.log(myName1.toLowerCase())

// ########## The slice method extracted a portion of the string and returned it.  ##########

let myName2 = "    AshishPawar"
console.log(myName2.slice(0,6))

/*
string can be index negative, starting from -1 from the last right side, and the number keeps decreasing as it goes to the left side.
*/

/* 
 example :  
   myname = "ashish" Here h is -1, s is -2, and i is -3, which goes
   up to -6, which is a
 */
 
console.log(myName2.slice(-5))//print Pawar

// ##########The only difference between the substring and slice methods is that the substring method does not support negative indexing  ###########

console.log(myName2.substring(0,6))

//replace and replaceAll method 
let str1 = "AshishPAwAr"
let str2 = str1.replace("A","a")
console.log(str1)
console.log(str2)

//Include method return true or false value 
let str3 = "Include"
console.log(str3.includes("a"))

//Split method 
let str4 = "split method convert string to array"
let str5 = str4.split(" ")
str5[5] = "array"
console.log(str5)

//chartAt and indexOf
let str6 = "charAt"
console.log(str6.charAt(5))
let str7 = "indexOf"
console.log(str7.indexOf("O"))


// ******************** concatenating strings ********************
let myName22 = "Ashish "
let lastName = "Pawar"

console.log("my name is " + myName22 + lastName)
let fullName = `my name is ${myName22} ${lastName}`
console.log(fullName)