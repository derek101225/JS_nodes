/*
Booleans: has only two possible values TRUE or FALSE
*/
let on = true;
console.log(on);
let off = false;
console.log(off);
/*
NULL: null is an empty value. It is an empty container. Nothing is in it, still exists as a space to fill
*/
let empty = null;
console.log(empty)
/*
UNDEFINED: no value is assigned and does not act as an empty container
*/
// let undef;
let undef = undefined;
console.log(undef);
/*
NULL vs UNDEFINED:
Null:
    - Null is like container with nothing in it
    - Undefined is when a variable has never been initialized, or hasn't been created yet.
    think of variables with null and undefined as packages coming out of UPS
    Null packages are packages that were intentionally packed up with nothing, but have been assembled
    Undefined packages are basically boxes that need to be assembled and given something to ship.
 */
/*
NUMBERS: numbers are literally just numbers. Don't need to write anything special in JS.
*/
let degrees = 90;
console.log(degrees)
let precise = 999999999999999 //15 9s
console.log(precise); // 15 9s
const rounded = 9999999999999999
console.log(rounded); //16 9s: JS gives you space for 15 9s before it rounds up
let notQuite = 0.2 + 0.1;
console.log(notQuite); //JS rounds out at a certain number. so if math is needed beware!
let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10
console.log(numbersAreHard)
/*
STRINGS: strings are a DataType to represent text and are wrapped in a single quote ('') or double quotes (" ")
*/
let stringOne = "Oh hi Mark";
let stringTwo = 'Oh hi Mark';
console.log(stringOne, stringTwo); //same output
//Numbers vs Strings
let first = 1050 + 100
let second = '1050' + '100' //String Concatenation
console.log(first); //number
console.log(second); //string
/*
OBJECTS: are used to store many values instead of a singular value
   -denoted by {}
*/
let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}
console.log(frodo);
console.log(typeof frodo)
/*
ARRAYS: are containers that hold lists of items
    -denoted by []
    - don't have to be the same dataType
 */
let list = ['item1', undefined, 3]
//  (1)    (2)             (3)
/*
1. name of the array or list;
2. array's use square brackets
3. each item, regardless of dataType, and is separated by commas
*/
let burritos = ['large', 4, true]
console.log(burritos);
console.log(typeof burritos)
 //Arrays are also containers that can hold multiple dataTypes. So JS has classified arrays as objects and not it's own dataType.


//  **************************************************************************


/*
    Literals
        - a literal represents a fixed value
            - literals include: 
                - string literal
                - numeric literal
                - boolean literal
                - object literal
                - array literal
        - literals are simply just values that we as developers add to our code
*/
// string literal
let car = 'Ford';
console.log(car.length)
// numeric literal
let december = 12;
// boolean literal
let tired = true;
// object literal - colon after the key assigns the value, and each key value pair is separated with a comma
let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley' 
}
console.log(soup.b); // dot notation
/*
    - when working with objects, using dot notation allows us to dive into the object and grab a specific piece of data
*/
// array literal
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(days[2]); // square bracket notation
console.log(typeof days);
/*
    - when working with arrays, using square bracket notation allows us to pull a singular value out of the array by its index number
    - when working with indices, JavaScript will start counting from 0
    - when using the length property, JS will start counting from 1
*/
console.log(days.length);

//  **************************************************************************

// assignment operator
let r = 5;
// addition assignment operator
r += 1; // r = r + 1
console.log(r); // 6
// subtraction assignment operator
r -= 1; // r = r - 1
console.log(r); // 5
// multiplication assignment operator
r *= 1; // r = r * 1
console.log(r); // 5
// division assignment operator
r /= 2; // r = r / 2
console.log(r); // 2.5
// remainder (modulus) assignment operator
r %= 2; // r = r % 2
console.log(r);
// exponential assignment operator
r **= 1 // r = r ** 1
console.log(r);

//  **************************************************************************

// equal
console.log(3 == 3); // true
console.log('3' == 3); // true
/*
    - coersion is the process of converting a value from one type to another   
        - JS assumes that we made a mistake and that we do want to compare two values that are the same datatype.
*/
// strict equal - this overrides javascript coersion
console.log(3 === 3); // true
console.log('3' === 3); // false
// not equal
console.log('3' != 3); // false
// strict not equal
console.log('3' !== 4); // true
// greater than
3 > 2; // true
// less than
2 < 3; // true
// greater than or equal to
3 >= 2; // true - not to be confused with fat arrow functions ( => )
// less than or equal to
2 <= 3; // true
// and
2 && 3; // allows us to check if multiple values are true or false
let x = 5;
let y = 6;
if(x >= 1 && y >= 1) {
    console.log('true');
}
// or
2 || 3; // or allows also allows us to check multiple values, but only one of the values needs to be true/false - whereas all need to be true/false in the case of &&

//  **************************************************************************

/*
NOTES:
-variables: Are named containers for storing data values and referring to later (We can name them whatever we want)
    - a variable name must begin with letter, underscore, or dollar sign
    - numbers may follow the above characters, but cannot come first
    - Javascript is case sensitive - 'Hi' and 'hi' are different variables
    - no spaces are allowed in variable names
    - camelCase is best practice for naming variables
        -snake_Case, PascalCasing
    - this is good practice because it helps keep everything readable - let myName='Garret';
*/
let a = 2;
let b = 2;
/* (1)    (2)    (3)    (4)
1. Keyword
2. Variable name (we can name this whatever we want)
3. Assignment Operator
4. Variable value
Var, Let, and Const:
-var: 'old' keyword for variables **In this course we won't be using this keyword often.
-let: 'new' keyword for variables (For now best practice is to use let)
-const: also 'new'; declares unchangeable variable
*/
/*
NOTES:
-declarations: are on the LEFT SIDE of a variable
    - it is simply: let x
    - declarations are on the left side of the assignment operator (=)
-initialization: are on the RIGHT SIDE of a variable
    - it sets the value of the variable
    - it incorporates the variabe name (x), the assignment operator (=), and the value (10) => x = 10
*/
let x;
console.log('Declaration', x);
x = 10;
console.log('Initialization', x);
x = 33;
console.log('Initialization 2', x);
let y = 'Hello';
console.log('Both:', x, y);
let today = "Great!";
const elevenFifty = "Wonderful!";
console.log(today, elevenFifty);
today = 'Lovely';
elevenFifty = "Fantastic"
console.log(today, elevenFifty);
//const: means "constant". 'new' in ES6: declares variables meant to remain unchanged

//  **************************************************************************

/*
Booleans: has only two possible values TRUE or FALSE
*/
let on = true;
console.log(on);
let off = false;
console.log(off);
/*
NULL: null is an empty value. It is an empty container. Nothing is in it, still exists as a space to fill
*/
let empty = null;
console.log(empty)
/*
UNDEFINED: no value is assigned and does not act as an empty container
*/
// let undef;
let undef = undefined;
console.log(undef);
/*
NULL vs UNDEFINED:
Null:
    - Null is like container with nothing in it
    - Undefined is when a variable has never been initialized, or hasn't been created yet.
    think of variables with null and undefined as packages coming out of UPS
    Null packages are packages that were intentionally packed up with nothing, but have been assembled
    Undefined packages are basically boxes that need to be assembled and given something to ship.
 */
/*
NUMBERS: numbers are literally just numbers. Don't need to write anything special in JS.
*/
let degrees = 90;
console.log(degrees)
let precise = 999999999999999 //15 9s
console.log(precise); // 15 9s
const rounded = 9999999999999999
console.log(rounded); //16 9s: JS gives you space for 15 9s before it rounds up
let notQuite = 0.2 + 0.1;
console.log(notQuite); //JS rounds out at a certain number. so if math is needed beware!
let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10
console.log(numbersAreHard)
/*
STRINGS: strings are a DataType to represent text and are wrapped in a single quote ('') or double quotes (" ")
*/
let stringOne = "Oh hi Mark";
let stringTwo = 'Oh hi Mark';
console.log(stringOne, stringTwo); //same output
//Numbers vs Strings
let first = 1050 + 100
let second = '1050' + '100' //String Concatenation
console.log(first); //number
console.log(second); //string
/*
OBJECTS: are used to store many values instead of a singular value
   -denoted by {}
*/
let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}
console.log(frodo);
console.log(typeof frodo)
/*
ARRAYS: are containers that hold lists of items
    -denoted by []
    - don't have to be the same dataType
 */
let list = ['item1', undefined, 3]
//  (1)    (2)             (3)
/*
1. name of the array or list;
2. array's use square brackets
3. each item, regardless of dataType, and is separated by commas
*/
let burritos = ['large', 4, true]
console.log(burritos);
console.log(typeof burritos)
 //Arrays are also containers that can hold multiple dataTypes. So JS has classified arrays as objects and not it's own dataType.

//  **************************************************************************

/*02-forInLoops.js
    - for in loops are great for looping over values in an object
        - properties (or key value pairs) in an object are known as enumerable properties
        - for in loops will loop over the enumerable properties of an object
        - enumerable simply means 'countable'
*/
let student = {
    name: 'Peter',
    awesome: true,
    degree: 'javascript',
    week: 1
} // all keys in objects are strings by default
// console.log(student.name); // dot notation
// console.log(student['name']); // object bracket notation
for (let item in student) {
    console.log(item);
    // console.log(student[item]);
}
let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
console.log(catArray[0]);
for (let cat in catArray) {
    console.log(cat);
    console.log(catArray[cat])
}
/*
CHALLENGE
************
    - write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
*/
let myName = 'sPonGeBoB';
let capName;
for (let i in myName) {
    console.log(i);
    if (i == 0) {
        capName = myName[i].toUpperCase();
    } else {
        capName += myName[i].toLowerCase();
    }
}
console.log(capName);


//  **************************************************************************


/*  03-forOfLoops.js
    - whereas for in loops look at enumerable properties, for of loops look at iterable properties
        - iterable meaning: able to parse through with numbers
    - for of loops are best suited for working with arrays
*/
// the below code doesnt work - object properties are enumerable, not iterable
let student = {
    name: 'Peter',
    awesome: true,
    degree: 'javascript',
    week: 1
}
for (let item of student) {
    console.log(item);
}
let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for (let cat of catArray) {
    console.log(cat, 'says meow');
}

//  **************************************************************************

/*05-scope.js
    - scope is how a computer keeps track of all variables/functions in a program
        - global scopes: available throughout the entirety of the application
        - local scope: only available within the scope they were created in - so not available globally
*/
let x = 12;
function scope() {
    // what is inside of the curly braces (body of function) is a local scope
    let x = 33;
    console.log(x);
}
scope();
console.log(x);
//
// we can access a globally scoped variale within a local scope
let y = 12;
function scopeTwo() {
    y = 33;
    console.log(y);
}
scopeTwo();
console.log(y);
// we cannot access a locally scoped variable in the global scope of our document
function scopeThree() {
    let z = 4;
    console.log(z);
}
scopeThree();
console.log(z);
/*
    const - const variables are variables that cannot be re-initialized, their values are constant
    - var and let seem to operate the same and share a lot of the same functionalities (they both allow us to declare and initialize variables), but they also have qualities that make them behave different from one another
        - var: the var keyword is scoped to the nearest function block
        - let: the let keyword is scoped to the nearest enclosing block
*/
// var
var x = 12;
function varTest() {
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x); // x variable that's locally scoped to the if
    }
    console.log(x); // x variable thats locally to the function
}
varTest();
console.log(x); // x variable thats scoped globally
// let 
let y = 12;
function letTest() {
    var y = 33;
    if (true) {
        let y = 45; 
        console.log(y);
    }
    console.log(y);
}
letTest();
console.log(y);

//  **************************************************************************

/*06-hoisting.js
    - JS is interpreted line by line and read top to bottom
    - when our JS code is read, the code is parsed through 2 times
        - pass 1: our code is read top to bottom, and any variables or functions that we've declared will get stored away to memory
        - pass 2: the code is executed (once again ran top to bottom), and all values that we've given to variables are assigned.
*/
console.log(myName);
let myName = 'Zach';
testFunction();
function testFunction() {
    console.log('I have been hoisted');
}

//  **************************************************************************

/*04-parameters.js
    - placeholders for information that we will pass into our function
    - parameters are placed inside of the parentheses
    - parameters are separated by a comma
*/
//            ticket = 'cheese pizza'
function zach(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
}
zach('cheese pizza'); // 'cheese pizza' is the argument
//
let resource = "|=========|";
//               ironRod = '|=========|'
function machine(ironRod) {
    console.log(ironRod);
}
machine(resource); // argument
/*
CHALLENGE
************
    - Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - inside of the function, declare a new variable that combines both the first name and last name parameters
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/
function testFn(fName, lName) {
    let fullName = `${fName} ${lName}`;
    console.log(fullName);
}
testFn('Zach', 'Maynard'); // <--- arguments go here inside of parentheses - also separated by a comma. The arguments we pass in are the values we want to assign to the fName and lName parameters



//  **************************************************************************

/*
************
 ARROW FUNCTIONS
      (1)       (2)
    let hi = () => {
        console.log('hi');
    }
    1- We need to set the fat arrow function to a variable
    2- We use the 'fat arrow' to signify its a function
    - arrow functions (or fat arrow functions) were introduced in ES6. They are basically just a more concise way to write function expressions - NOT declarations
        - that means that arrow functions do not get hoisted
*/
// CONCISE BODY
// hi() - error. arrow function do not get hoisted
let hi = () => console.log('hi');
/*
    NOTE: concise body arrow functions return by default
*/
// BLOCK BODY
let hi = () => {
    console.log('hi');
}
// NOTE: block body arrow functions must have a return in the body of the function (in between the curly braces) if we want to return a value
// CONCISE vs BLOCK
let apples = x => console.log(`There are ${x} apples.`);
apples(10);
let apples = x => {
    console.log(`There are ${x} apples.`);
}
apples(10);
// NOTE: more than one parameter will require parentheses


//  **************************************************************************

/*06-return.js
    - the return keyword allows us to take data from inside of a function, and return it so we can access it and use that data elsewhere in the application
*/
let resource = '|========|';
//               ironRod = '|========|;
function machine(ironRod) {
    let screws;
    if(ironRod) {
        screws = '|---  |---  |---  |---';
    } else {
        console.log('not fed any resources');
    }
    return screws;
}
let powerOn = machine(resource); // argument
console.log(powerOn);
// block body arrow function
let myName = (fName, lName) => {
    let fullName = `${fName} ${lName}`;
    return fullName;
}
let powerOn = myName('Spongebob', 'Squarepants');
console.log(powerOn);
// concise body arrow function - return happens by default with concise body arrow functions
let myName = (fName, lName) => `${fName} ${lName}`;
let powerOn = myName('Patrick', 'Star');
console.log(powerOn);
/*
CHALLENGE
************
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable to the console
*/
function tipCalc(bill) {
    let tip = bill * 0.2;
    return tip.toFixed(2);
}
let totalTip = tipCalc(25.50);
console.log(totalTip);

//  **************************************************************************

/*01-populatingAndReferring.js
    - an array is a container that holds a list of items
        - the items an array holds do not all have to be the same data type
    - denoted by []
*/
let list = ['orange', 'banana', true, 5];
console.log(list[1]);
/*
    - when we reference an array, we can append square brackets onto the end of the referenced array, and supply those square brackets with the index number we want to pull out
        - this is known as square bracket notation
*/
let students = ['Adam', 'Alec', 'Breyanna', 'Connor', ['Derek', 'Elijah', 'Garrett'], true];
// console.log(students[4]);
/*
CHALLENGE
************
    - dive into the nested array and pull the value 'Derek'
    - print out "Hello Derek!"
*/
let derek = students[4][0]; // derek
console.log(`Hello ${derek}`);
console.log('Hello' + ' ' + students[4][0]);


//  **************************************************************************

/*03-iterating.js
    - forEach() method
        - the forEach() method executes a function once for each element in an array
        - the forEach() method essentially does the same thing as a for loop or for of loop - both iterate over the properties in an array
*/
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
// console.log(food.length);
// regular for loop
// for (let i = 0; i < food.length; i++) {
//     console.log(food[i]);
// }
// forEach method - function declaration
food.forEach(function(foodItem) {
    console.log(foodItem);
})
/*
CHALLENGE
************
    - (Go look at MDN docs/w3 schools if you need a reminder):
    - Create an array containing movies
    - Use the .forEach() method to list your movies
    - Add another movie at the end of the array
    - And replace one of your existing movies with another movie
*/
let movies = ['Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith', 'Solo', 'Rogue One', 'A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];
movies.push('Force Awakens');
movies.splice(3, 1, 'The Rise of Skywalker');
movies.forEach(movie => console.log(movie)); // remember that parentheses are not needed when only a single parameter is present when working with fat arrow functions


//  **************************************************************************  02-methods.js

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
// push - allows us to add one or more items to the end of an array
food.push('Pizza');
console.log('push:', food);
// splice - allows us to remove, replace, or add new elements to the array
food.splice(4, 1);
console.log('splice:', food);
food.splice(2, 0, 'Lollipops');
console.log('splice 2:', food);
// pop - allows us to remove the last item of an array
food.pop();
console.log('pop:', food);
// shift - allows us to remove the first item of an array
food.shift();
console.log('shift:', food);
// unshift - allows us to add one or more items to the beginning of an array
food.unshift('Popcorn', 'Steak');
console.log('unshift:', food);


//  **************************************************************************

/*01-introToObjects.js
    - objects are used to store multiple sets of data in the key/value pair format
    - denoted by {}
*/
let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};
// console.log('All Data:', netflix);
// console.log("Just season info:", netflix.season1.seasonInfo);
// console.log("Specific Episode Name:", netflix.season1.seasonInfo.episodeInfo[1].episodeName);
/*
CHALLENGE
************
    - Pick an episode to console.log
    - Using dot notation, walk through the netflix object and print off both an episode number and an episode name.
*/
console.log(`episode: ${netflix.season1.seasonInfo.episodeInfo[1].episode} - ${netflix.season1.seasonInfo.episodeInfo[1].episodeName}`);
/*
    JSON Objects
        - JSON stands for JavaScript Object Notation
        - the JSON syntax is derived from JavaScript Object Notation, but the JSON format is text only
        - JSON exists as a string - useful when we want to fetch data from a server. JSON objects need to be converted to a native JavaScript object before we can access the data
*/
let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}
// object.keys & object.values methods
console.log(Object.keys(spaceJam)); // object.keys method will return all keys from the passed object in an array
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.values(spaceJam.nbaPlayers)); // object.values will return all key values from the referenced object

//  **************************************************************************

/*02-objectBracketNotation.js
    - object bracket notation [] can also be used to reference or pull values out of an object
        - when accessing keys in an object, you will use dot notation most of the time - but there are some use cases as to why we would want/need to use object bracket notation instead
        - REMINDER: all keys in objects are strings
*/
let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}
let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);
console.log(garden.vegetable); // standard dot notation
let zucchini = garden['vegetable']; // object bracket notation
/*
    - we can access keys in an object by specifying the name of the object followed by a set a square brackets containing the key name that we want to reference. The key name that we pass into the square brackets needs to be wrapped in a set of quotes since all keys inside of objects are strings.
*/
console.log(zucchini);
// we can also use object bracket notation to set key/value pairs in an object
let baking = {};
baking['zucchini'] = 'better make some bread!';
// console.log(baking);
let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}
//          baking['zucchini']
console.log(baking[garden['vegetable']]);
// garden['vegetable'] = 'zucchini'
let testObj = {
    "Spaces here": true,
    noSpaces: true
}
console.log(testObj.noSpaces);
console.log(testObj["Spaces here"]);


//  **************************************************************************

Intro to DOM - index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro to DOM Manipulation</title>
</head>
<body>
   <!-- 
       - DOM stands for Document Object Model, and it is what allows our JS to interact with the HTML and CSS of our page. The DOM specifies how browsers should create a model of an HTML page and how JS can access and update the contents of a web page while it's in the browser window
            - the DOM is an object-oriented representation of a web page, which can be modified with a scripting language like JS. The DOM covers two primary areas:
                1. Makes a model of our HTML page
                    - when the browser loads a webpage, it creates a model of the page in memory
                    - the DOM specifies the way in which the browser should structure the model in what is called the DOM tree
                        - the DOM is called an object model because the DOM tree itself is made up of objects
                        - each object represents a different part of an HTML document that is loaded in the browser window
                2. Accessing and changing elements in our HTML document using a scripting language
                    - the DOM also provides methods and properties to access and update different objects in the model, which in turn updates what the user sees in the browser
                - while working with the DOM tree, we generally access the element that we want to work with, and once we've selected that element(s), we can then manipulate it
                ACCESSING
                    common methods for accessing a single element:
                        - getElementById()
                        - querySelector()
                    common methods for accessing multiple elements:
                        - querySelectorAll()
                        - getElementsByClassName()
                        - getElementsByTagName()
                MANIPULATING
                    common methods/properties for working with HTML content:
                        - innerHTML
                        - textContent
                        - createElement
                    common methods/properties for working with tag attributes:
                        - className / id
                        - setAttribute()
                        - getAttribute()
    -->
    <!-- 1. -->
    <h1>Hello World</h1>
    <!-- 2. -->
    <p id='testParagraph'>Sample Text</p>
    <!-- 3. -->
    <p class='sampleClass'>This paragraph has the class of 'sampleClass'</p>
    <p class='sampleClass'>This paragraph has the class of 'sampleClass'</p>
    <p class='sampleClass'>This paragraph has the class of 'sampleClass'</p>
    <p class='sampleClass'>This paragraph has the class of 'sampleClass'</p>
    <p class='sampleClass'>This paragraph has the class of 'sampleClass'</p>
    <!-- 3.5 -->
    <span id='spanTest'>Hello<span style='display: none'>World</span></span>
    <!-- 4. -->
    <button id='clickThisButton'>CLICK ME!</button>
    <!-- 5. -->
    <label for='nameInput'>Enter your name:</label>
    <input type='text' id='nameInput' placeholder="Your name here">
    <!-- inline script -->
    <!-- <script> 
        console.log('test');
    </script> -->
    <!-- linking to outside script file -->
    <script src="script.js"></script>
</body>
</html>


//  **************************************************************************
Intro to DOM - script.js
// 1. Test
let x = 10;
console.log(x);
// 2. - getElementById()
// best practice to store elements we're grabbing from the HTML in a variable so we can reference them again later on if needed
document.getElementById('testParagraph').style.color = 'red';
let testParagraph = document.getElementById('testParagraph');
console.log(testParagraph);
// testParagraph.style.color = 'blue';
/*
    - getElementById() grabs the first HTML element with the specified value - so if we have two elements with the same id, it will grab the first one it comes across
*/
// 3. querySelectorAll() & innerText / textContent / innerHTML
console.log(document.querySelectorAll('p.sampleClass')); // querySelectorAll() returns a nodelist containing all elements that match the specified group of selectors. Nodelist objects are collections of nodes, which are simply just various items in the HTML document itself like p tags, h1 tags, etc
document.querySelectorAll('p.sampleClass')[1].innerText = 'My text has changed!';
            //  [p.sampleClass...]
let changeAll = document.querySelectorAll('p.sampleClass');
changeAll.forEach(pTag => {
    // console.log(pTag);
    // pTag.innerText = 'My text has changed using a forEach() method!';
    // pTag.textContent = 'My text has changed using a forEach() method!';
    pTag.innerHTML = '<i>My text has changed using a forEach() method!</i>';
})
/*
    - innerText simply references or allows us to change the text of a specified element. Will return only visibile text in a 'node'.
    - textContent does the same thing that innerText does, but it will return the full text of a 'node'.
    - innerHTML allows us to set text as well as HTML elements. The HTML elements will be nested inside of the current HTML element we're referencing
*/
// 3.5 textContent vs innerText
console.log(document.getElementById('spanTest').innerText);
console.log(document.getElementById('spanTest').textContent);
// addEventListener()
let button = document.getElementById('clickThisButton');
// console.log(button);
// button.addEventListener('click', function(event) { // the event object that we get back from the event triggering holds a key of 'target'. This is a key that we will access from the event object frequently
//     // console.log(event.target);
//     event.target.style.backgroundColor = 'blue';
// })
// button.addEventListener('click', event => {
// })
/*
************
CHALLENGE
************
    - make the button toggle between red and blue when clicked
*/
button.addEventListener('click', function(event) { 
    let evTarget = event.target;
    console.log(evTarget);
    if (evTarget.style.backgroundColor == 'red') {
        evTarget.style.backgroundColor = 'blue';
    } else {
        evTarget.style.backgroundColor = 'red';
    }
})
// regarding Adam's question - to write multiple properties, we can do something like this
// event.target.style = 'background-color: blue; font-size: 10px; color: white;'
// 5. addEventListener() / getElementsByTagName()
let inputField = document.getElementById('nameInput');
// console.log(inputField);
inputField.addEventListener('keyup', event => {
    let evTarget = event.target;
    // console.log(evTarget.value);
    let pTags = document.getElementsByTagName('p');
    // console.log(pTags);
    pTags[0].innerText = 'SOMETHING CHANGED!';
    if (evTarget.value == "") {
        pTags[1].innerText = 'NOTHING HAS BEEN TYPED';
    } else {
        pTags[1].innerText = `Everyone, say hello to ${evTarget.value}`
    }
})



//  **************************************************************************


/*
    WHAT IS AN API?
        - API stands for Application Program Interface
        - in basic terms, APIs just allow applications to communicate with one another.
        - the API is not the database or even the server, it is the code that allows us access point(s) to the server.
            - those access points come in the form of an endpoint, which directs us to different sets of data we can access
    ASYNCHRONOUS PROGRAMMING
        - Generally, code is read and implemented line by line - this is known as synchronous programming
            - in the case of fetching data from an outside source like we do with an API, if JavaScript did not have the ability to run code asynchronously, it would have to run each line of code > wait for the response from the API > and then finish running the rest of our code.
            - in basic terms, asynchronous programming allows a program to do more than one thing at a time
        - Asynchronous programming allows our code to continue to run while we're waiting on a response from an API. Once the fetch has finished retrieving the data, it then presents us with that data, without having to wait on any other processes
        - the fetch() method is an asynchronous method, and is part of the browser window, not JavaScript
        - the fetch() method starts the process of fetching a resource from the network, and will return a promise which is fulfilled once the response is available.
            - a promise represents a value that is unknown when the promise is created, but represents the eventual fulfilled value or rejection (error)
                - a promise is always one these states:
                    - pending: initial state, neither fulfilled or rejected
                    - fulfilled: meaning the operation completed successfully
                    - rejected: meaning the operation failed
            - in the case of a fetch request, a promise will resolve into a Response object that represents the response of the request made.
*/

//  **************************************************************************

/*
    WHAT IS AN API?
        - API stands for Application Program Interface
        - in basic terms, APIs just allow applications to communicate with one another.
        - the API is not the database or even the server, it is the code that allows us access point(s) to the server.
            - those access points come in the form of an endpoint, which directs us to different sets of data we can access
    ASYNCHRONOUS PROGRAMMING
        - Generally, code is read and implemented line by line - this is known as synchronous programming
            - in the case of fetching data from an outside source like we do with an API, if JavaScript did not have the ability to run code asynchronously, it would have to run each line of code > wait for the response from the API > and then finish running the rest of our code.
            - in basic terms, asynchronous programming allows a program to do more than one thing at a time
        - Asynchronous programming allows our code to continue to run while we're waiting on a response from an API. Once the fetch has finished retrieving the data, it then presents us with that data, without having to wait on any other processes
        - the fetch() method is an asynchronous method, and is part of the browser window, not JavaScript
        - the fetch() method starts the process of fetching a resource from the network, and will return a promise which is fulfilled once the response is available.
            - a promise represents a value that is unknown when the promise is created, but represents the eventual fulfilled value or rejection (error)
                - a promise is always one these states:
                    - pending: initial state, neither fulfilled or rejected
                    - fulfilled: meaning the operation completed successfully
                    - rejected: meaning the operation failed
            - in the case of a fetch request, a promise will resolve into a Response object that represents the response of the request made.
*/
const baseURL = 'https://api.spacexdata.com/v4';
const searchForm = document.querySelector('form');
// console.log(searchForm);
const rocketsList = document.querySelector('ul');
// console.log(rocketsList);
searchForm.addEventListener('submit', fetchSpace) // function reference - we only want the fetchSpace function to run when the click event happens; otherwise, it will be invoked and ran immediately. The addEventListener method will automatically send the event object to the referenced function of fetchSpace
function fetchSpace(e) {
    e.preventDefault(); // the default action of a form is to reload the webpage on submission. We can prevent the default action of forms by using the preventDefault() method
    // console.log(e);
    fetch(`${baseURL}/rockets`) // fetch starts the process of fetching a resource from a network. The fetch will return a promise which is either fulfilled once the response is available - retuning us a response object - or the promise will be rejected, meaning the fetch failed to return us any data
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function(json) {
            // console.log(json);
            displayRockets(json); 
        })
}
function displayRockets(json) {
    console.log('this is coming from displayRockets:', json);
    json.forEach(rocket => {
        console.log(rocket);
        let listItem = document.createElement('li');
        listItem.innerText = rocket.name;
        rocketsList.appendChild(listItem);
        let cost = document.createElement('li');
        cost.innerText = rocket.cost_per_launch;
        rocketsList.appendChild(cost);
    })
}

//  **************************************************************************

/*05-spreadOperator.js
    - denoted by ...
    - the spread operator pulls out all elements of an array and gives them back to us as a standalone list of items
*/
let fullName = ['Spongebob', 'Squarepants'];
// INCORRECT SYNTAX 
// ...fullName // 'Spongebob', 'Squarepants'
// CORRECT SYNTAX
let copiedFullName = [...fullName];
// console.log(copiedFullName);
// let copiedFullName = [fullName];
// console.log(copiedFullName);
/*
    - one of the advantages of the spread operator is that if we decide we want or need to add another value to our original array, we can do that without altering our copied array. Keep in mind this is dependent on what data types we're working with. 
*/
fullName.push('Mr');
console.log(fullName, copiedFullName);
// SPREAD OPERATOR AND NUMBERS
// JavaScript has its own global Math object that has its own built in methods
// Math.min - looks at a list of integers, and returns the smallest value
console.log(Math.min(1, 5, -3));
const prices = [10.99, 5.99, 3.99, 7.50];
console.log(Math.min(prices)); // incorrect
console.log(Math.min(...prices));
// SPREAD OPERATOR AND OBJECTS
let persons = [{ name: 'Zach', age: 27}, { name: 'Donovan', age: 25}];
// let copiedPersons = [...persons];
let copiedPersons = persons;
// console.log(persons, copiedPersons);
// persons.push({ name: 'Anna', age: 29});
copiedPersons.push({name: 'Anna', age: 29});
console.log(persons, copiedPersons);
/*
    - JS has 5 data types that are passed by value: boolean, null, undefined, string, and number. These are known as primitive data types
        - if a primitive data type is assigned to a variable, we can think of that variable as containing a primitive value
        let x = 10;
        let y = 'abc';
        let z = null;
        - When running the code, JS stores these variables, and their respective values to memory
        VARIABLES   VALUES
        x           10
        y           'abc'
        z           null
        a           10
        b           'abc'
        - when we assign these variables to another variable using =, we copy the value to the new variable - they are copied by value since they are primitive data types
        let a = x;
        let b = y;
        - JS has 3 data types that are passed by reference: array, function, and object.
            - variables that are assigned a non primitive value are given a reference to that value. The reference points to that objects location in memory. The variables don't contain the absolute values.
            - objects are created at a location on your computers memory. When we write let arr = [], we've created an array in our computers memory. What the variable arr receives as its value, instead of a primitive absolute value, is the address (the location), of the array and where it's stored in the memory
            - when we assign a non primitive data type to a variable, what we write and see is:
                let arr = [];
                arr.push(1);
                - a representation of the above code in memory would look like this:
                VARIABLE    VALUE    ADDRESS    OBJECT
                arr         <#001>   #001       []     // before push
                arr         <#001>   #001       [1]    // after push
                - notice that the value, that points to the address of our array, which is contained by the variable of arr is static. The array in memory is what changes. When we reference the variable arr to do something, like pushing a new value, the JS engine goes to the location of arr in memory and works with the information that is stored there
                - when a reference type value (array, object, function) is copied to another variable using =, the address of that variable is what's actually copied over as if it were primitive. Arrays, objects, and functions are copied by reference instead of by value
                let reference = [1];
                let refCopy = reference;
                the above code looks like this in memory:
                VARIABLE   VALUES  ADDRESS    OBJECT
                reference  <#002>  #002       [1]
                refCopy    <#002>
                - each variable now contains a reference to the same array. That means that if we alter reference, refCopy will also see those changes - and visa versa
*/
let persons = [{ name: 'Zach', age: 27}, { name: 'Donovan', age: 25}];
let copiedPersons = [...persons];
persons.push({name: 'Anna', age: 29});
// copiedPersons[0].name = 'Zachary';
persons[0].name = 'Michael';
console.log(persons, copiedPersons);
// SPREAD OPERATOR AND AVOIDING CHANGING BOTH THE ORIGINAL AND COPIED ARRAY
let persons = [{ name: 'Zach', age: 27}, { name: 'Donovan', age: 25}];
// if you want to avoid changing both your original and copied array, you would also have to copy every object
let copiedPersons = persons.map(person => ({
    name: person.name,
    age: person.age
})) // since we're returning something in curly braces, we have to enclose the callback function body in parens so JS doesn't mistake it for the arrow functions body
persons.push({name: 'Anna', age: 29});
copiedPersons[0].name = 'Zachary';
console.log(persons, copiedPersons);
/*
    - since we are mapping over our original array, and then creating new objects with the values from person, those new objects will have their own addresses to where they are stored in memory
        - general rule of thumb: only copy what you plan on changing!
*/</#002>


//  **************************************************************************


/*06-arrayDestructuring.js


    - array destructuring allows us to unpack values from array, or even properties from objects, into their own distinct variables
        - destructuring uses very similar syntax as array literals, but is instead on the left hand side of the assignment operator, which is where we define what values to unpack from the sourced variable 
    - great for pulling information out of an array/object and assigning that data to its own variable
*/
let fullName = ['Patrick', 'Star'];
// let firstName = fullName[0];
// let lastName = fullName[1];
let [firstName, lastName] = fullName;
console.log(firstName);
console.log(lastName);
// what you include in the square brackets on the left hand side of the assignment operator are variable names for the elements in the array on the right hand side of the assignment operator
/*
    REST SYNTAX
        - rest syntax looks exactly like the spread syntax
            - denoted by ...
        - rest syntax is essentially the opposite of spread syntax. Spread syntax 'expands' an array into a list of comma separated items, while rest sytax collects multiple elements and 'condenses' them into a single element
*/
let fullName = ['Zach', 'Maynard', 'Mr', {month: 12, date: 18, year: 1992}];
// we can use the rest syntax when working with array destructuring to package up the REST of the values in the referrenced array, and return them as their own array
let [firstName, lastName, ...otherInfo] = fullName;
console.log(firstName);
console.log(lastName);
console.log(otherInfo);
// values can also be skipped or ommited if we dont want to assign them to a variable when working with array destructuring
let fullName = ['Zach', 'Maynard', 'Mr', {month: 12, date: 18, year: 1992}];
fullName.push('testOne', 2, 'testThree', 4, true, false);
let [firstName, lastName, , object, testOne, , testThree, , ...otherInfo] = fullName;
console.log(firstName);
console.log(lastName);
console.log(object);
console.log(testOne);
console.log(testThree);
console.log(otherInfo);  
let {date, month, year} = object;
console.log(date, month, year);
// rest syntax always has to be the last item we place when using array destructuring
/*
    OBJECT DESTRUCTURING
*/
let user = {
    username: 'testuser', 
    is_verified: true
};
let { username, is_verified } = user;
console.log(username);
console.log(is_verified);
const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};
let {
    title: englishTitle, // renamed variable
    translations: [
        {
            title: localeTitle // renamed variable
        }
    ]
} = metadata;
console.log(metadata);
console.log(englishTitle);
console.log(localeTitle);
const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
        age: 35
    },
    {
        name: 'Tom Jones',
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones'
        },
        age: 25
    }
];
for (let { name: n, family: { father: f, sister: s } } of people) {
    console.log(`Name: ${n}, Father: ${f}, Sister: ${s}`);
}