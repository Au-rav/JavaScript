//Create variables and manipulate the values
let a = 5;
let sum = 0;
sum = a +25;
console.log(sum);

//Check what happens when you try concatenating strings using variables of different data types
let name = '90sblubbles';
let age = 25;
let contacttwostrings = name + age
console.log(contacttwostrings);
//Interpolate multiple variables into a string
console.log(`trying ti interpolate name var ${name} and age var ${age} into one string`);

/*use console.log() on variables declared by 
different keywords (const, let, var) before they’re defined */
console.log(testingvar);
var testingvar = 'var variable';
/*console.log(testingconst);        // error
const testingconst = 'const variable'; 
console.log(testinglet);            //error
let testinglet = 'let variable'; */

//Find the data type of a variable’s value.
console.log(typeof(sum));

// find the data type of the resulting value when you concatenate variables containing two different data types.
console.log(typeof(conatacttwostrings));










