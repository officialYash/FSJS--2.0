//07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

const arr = ["youtube", "twitter", "pw skills", "discord", "instagram", "pw skills", "linkedin"];

const lastOccurrence = arr.lastIndexOf("pw skills"); // to find lastOccurrence


//We can use indexOf() to find the first occurrence but since it was not mentioned in the question we will try to get it using lastIndexOf()


const firstOccurrence = (arr.length - 1) - arr.reverse().lastIndexOf("pw skills");

// Output this program

const output = `the first occurrence of "pw skills" is at index : ${firstOccurence} the Last occurrence of "pw skills" is at : ${lastOccurrence}`;

console.log(output);