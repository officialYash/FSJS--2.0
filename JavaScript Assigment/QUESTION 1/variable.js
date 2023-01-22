//Q.1 Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

// Solution

// Declaring a Variable

const MyName="Yash Arora";
const isStudent=false;
const havejob=null;
const willGetJob=undefined;


// if we only declare a variable and do not intialized it then it will automatically have the undefined data type. But this can't be done with const keyword, for that declaration must start from let or var keyword.

console.log("the data type of " + MyName + " is " + typeof MyName);
console.log("The data type of " + isStudent + " is " + typeof isStudent);

// null has a data type object which is kind of a bug. But this bug is still not removed in JavaScript due to legacy reasons.
console.log("The data type of " + havejob + " is " + typeof havejob);
console.log("The data type of " + willGetJob + " is " + typeof willGetJob);

