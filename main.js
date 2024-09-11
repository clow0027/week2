/*** Variables ***/
// 1. Rules for valid variable names in JavaScript:
// - Must start with a letter, $, or _
// - Can include letters, numbers, $, and _, but no spaces or special characters
// - Cannot begin with a number
// - Case-sensitive (e.g., 'name', 'Name', and 'nAme' are different variables)
// - Avoid using reserved keywords (e.g., 'let', 'const', 'var')
// - Be cautious of global variables in browsers (e.g., 'alert', 'document', 'window')

//Avoid Keywords https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords reserved words that are part of the language
//Avoid variable names already assigned. Browsers define global standard variables like: alert, document, window


//2. let
// - Use 'let' for variables whose values are expected to change.
// - 'let' provides block scope and allows reassignment.
// - 'let' and then the variable name.
// - you can't re-declare the variable let gameScore. In other words, no variables can have the same name as the other. 
// - the 'let' variable has to start with a letter, $, and _ 

let gameScore; 
console.log(gameScore)
gameScore = 0
console.log(gameScore)


// 3. const
// - const = constant 
// - Use 'const' for variables with values that should not change.
// - 'const' declarations must be initialized at declaration.
// - Attempting to reassign a 'const' variable will result in a runtime error.
// - Variable name must be in '' or ""

const firstName = "Laura"


/*** Data types ***/
// 1. Strings
// - Strings are used for text. They can be enclosed in single quotes '', double quotes "", or backticks ``.
// - String concatenation can be done using the '+' operator or template literals for interpolation.

// 2. Number
// - Includes integers, decimals, negatives, and numeric separators

// 3. Boolean
// - Boolean type represents logical values: true or false.
// - Commonly used in conditional statements and logical operations.
let isLoggedIn = false


// 4. Arrays
// - Arrays are ordered list of values.
// - They can store elements of different types.
// - Use square brackets for arrays [].
// - Access elements by their index, starting from 0.

//declare array
// Now this has an array with one element inside of it.To add more, use a comma. Now we have four elements.
// Element index: Record player = 0, Loud Speaker = 1, etc. 
const shoppingCart = ["Record player", "Loud Speaker", "Cable", "Mic"]
//display the array
console.log(shoppingCart)
//display a specific element in the array 
// specify the index position of the element you want to obtain
console.log(shoppingCart[2])

// Multidimensional Arrays
const shoppingCartMultidimensional = [      //opening the main array
    [                                       //first entry - index 0
        'Record player',                    //first element in the first array
        99,                                 //second element in the first array
        'index-0'                           //third element in the first array
    ],
    [                                       //second entry - index 1
        'Loudspeaker',                      //first element in the second array
        120,                                //...
        'index-1',
    ]
]                                           //closing the main array

//display the array
console.log(shoppingCartMultidimensional)
//display a specific element
// here we're targeting the second element in the first array and the first element in the second array. [] hold a new array. 
console.log(shoppingCartMultidimensional[1][0])

// 5. Objects
// - Objects are collections of key-value pairs (properties).
// - They can store various types of data, including nested objects.
// - Use curly braces for objects {}.
// - Access object properties using dot notation '.' or square brackets [].
// you don't call up elements by calling the index number. Instead you use the ID name

// object literal notation {}
const student = {
    firstName:'Laura', 
    lastName: 'Clow', 
    isActive:false}

console.log(student)
console.log(student['lastName'])
// This is the preferred way of accessing objects within something bigger (dot notation).
console.log(student.firstName)

//Common use of arrays and objects
const students = [
    {
        firstName: 'Jane',
        lastName: 'Doe',
        isActive: false
    },
    {
        firstName: 'Emma',
        lastName: 'Anderson',
        isActive: true
    },
    {
        firstName: 'Liam',
        lastName: 'Jackson',
        isActive: true
    }
]
// Exercise = display 'Emma'
// Step #1 = call up the variable name (students)
// Step #2 = call up the element using the index number. Second element = 1.
// Step #3 = use dot notation to access the specific property. You want Emma to be displayed, so call up the first name. 
console.log(students[1].firstName)

/*** Operators and Expressions ***/
// Arithmetic operators: +, -, *, /, and % for calculations.
// Shorthand operators: +=, -=, *=, /=, and %= for combined assignment and operation. 
// Comparison operators: ==, != for equality checks; ===, !== for strict equality checks.
gameScore = gameScore + 1 // + 
console.log(gameScore)

gameScore++ // This is the short hand version of line 133. 
// + = +1
// ++ = +2 and so on 
// 
console.log(gameScore)

gameScore = gameScore + 5
console.log(gameScore)

gameScore += 3
console.log(gameScore)

console.log(5 != 5) // false * Note ! = a not operator. We are checking for inequality. By saying false, we determine that these two numbers are the same. 

console.log(5 !== 5) // false

console.log (5 === 5) // true 

console.log (5 == '5') // true

console.log (5==5 && 5==='5') // false because the second one isn't true - both need to be true because you're saying AND with &&

console.log (5==5 || 5==='5') // true because the first one IS true. Only one needs to be true because you're saying OR with ||

let playStatus = 5 == '5'
console.log(!playStatus)

// Add a value to a variable and then assign the result back to that variable



/*** Guided Practice ***/

// A. Calculate the total and average grades for a student across different courses, compare the grades, and check whether the student passed or failed based on a minimum passing grade of 50 points for each course.


// Step 1: Declare the student's grades in three different courses:
// Design: 85
// Development: 90
// Project Management: 80

const designGrade = 85
const developmentGrade = 90
const projectManagementGrade = 80

// Step 2: Calculate the total grade for the student across the three courses and store it in a variable called totalGrade.

const totalGrade = designGrade + developmentGrade + projectManagementGrade
console.log(totalGrade)

// Step 3: Calculate the average grade for the student and store it in a variable called averageGrade.

const averageGrade = totalGrade / 3
console.log(averageGrade)

// Step 4: Compare the grades:
// Check if the Design grade is greater than or equal to 50 (passing grade). Store the result in a variable called isDesignPassed.

const isDesignPassed = designGrade >= 50
console.log (isDesignPassed)

// Check if the Development grade is greater than or equal to 50. Store the result in a variable called isDevelopmentPassed.
const minimumGrade = 50
const isDevelopmentPassed = developmentGrade >= 50
console.log (isDevelopmentPassed)

// Check if the Project Management grade is greater than or equal to 50. Store the result in a variable called isProjectManagementPassed.

const isProjectManagementPassed = projectManagementGrade >= 50
console.log (isProjectManagementPassed)

// Step 5: Use logical operators:
// Check if the student passed all three courses by ensuring that all course grades are 50 or above. Store the result in a variable called passedAllCourses.
// Check if the student failed any course (i.e., if any course grade is below 50). Store the result in a variable called failedAnyCourse.

// const minimumGrade = 50 // now you could replace 50 in the three steps above with the variable minimumGrade

const passedAllCourses = isDesignPassed && developmentGrade >= 50 && isProjectManagementPassed
console.log (passedAllCourses)

const failedAnyCourse = designGrade < 50 || developmentGrade < 50 || projectManagementGrade < 50

console.log (failedAnyCourse)

// of course all these courses are above fifty AND since we used the or operator (||) we get a false (they didn't fail). If one of them were a fail, we would still get a false answer because we used or and not and.

// const failedAnyCourse = designGrade < 90 || developmentGrade < 90 || projectManagementGrade < 90
// console.log (failedAnyCourse) // true


// Step 6: Output the results to the console using console.log():
// Print the total grade.
console.log("Total grade:" + totalGrade)
// Print the average grade.
console.log("Average grade" + averageGrade)
// Print whether the student passed each course. Did the student pass...
console.log("Did the student pass Design" + isDesignPassed)
console.log("Did the student pass Development" + isDevelopmentPassed)
console.log("Did the student pass Project Management" + isProjectManagementPassed)
// Print whether the student passed all courses.
console.log("Did the student pass all courses" + passedAllCourses)
// Print whether the student failed any course.
console.log("Did the student fail any courses" + failedAnyCourse)


// B. Calculate the total price of items in a shopping cart, determine if the customer qualifies for a discount, and check if the total is within the customer’s budget.

// Steps:
// Step 1: Declare the prices of three items in the shopping cart:
    // Item 1 (Laptop): $800
    // Item 2 (Mouse): $25
    // Item 3 (Headphones): $60

// Step 2: Calculate the total price for all three items and store it in a variable called totalPrice.

// Step 3: Check if the customer qualifies for a discount:
// If the total price is greater than or equal to $500, the customer qualifies for a discount. Store the result in a variable called qualifiesForDiscount.

// Step 4: Check if the total price exceeds the customer’s budget:
// Assume the customer's budget is $1000. Store the result of whether the total price is within the budget in a variable called withinBudget.

// Step 5: Output the results to the console using console.log():
// Total price of the shopping cart:
// Does the customer qualify for a discount?
// Is the total price within the customer's budget?

