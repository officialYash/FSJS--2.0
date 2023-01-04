// let myName = "Yash"
// console.log(myName);
// console.log(myName[0])
// myName[0]= "R";
// console.log(myName) // Yash --> It show that string i.e. primitive data types are immutable

/*****************************************Arrays*****************************************/

//Arrays in JavaScript are used to store multiple elements inside a single variable reference. These multiple elements can be of similar data types or different data types.

// Here languages is the variable which is like a container inside which the data i.e array is stored.

//Here our array contains multiple elements of same data type i.e string
// let languages = [ "python", "Ruby", "javascript", "kotlin", "PHP", "java" ]


// Here our array contains multiple elements of different data types even we can store an another array inside an array
let data = [ "yash", 12345589, false, true, [ "java","python", "Ruby"], {id: 1998, email: "Jiop@gmail.com"}]
console.log(data[5].id)

/*Declaration of an Array

Method-1 --> Preferred 
let arr1 = [ "value1", "value2", "value3"...... ];

Method-2 --> Not Preferred
let arr2 =  new Array( "value1", "value2", "value3"...... );*/

//Initializing while Declaraing
//Method 1
let num1 = [5];
console.log(num1); // [5]

//Method 2
let num2 = new Array(5);
console.log(num2); // [undefined, undefined, undefined, undefined, undefined]

//So in Method 2, we can't get an array that contains only one element. That's why we do not prefer to use this method.

//Array Methods and properties

//array.length
// let arr1 = ["Yash", "Harmeet", "Savinder", "kaalpi", "Azhar"]
// console.log(arr1.length)

//index
// console.log(arr1[0],arr1[1],arr1[2],arr1[3],arr1[4],arr1[5])

// We have this array fruits which contains 4 elements
let fruits = ["apple", "bada apple", "chhota apple", "double apple"];
// console.log(fruits)
//Now mutability means that we can change or modifiy content of this array
fruits[1] = "BADA APPLE";
// console.log(fruits)

// let str = "YashArora"
// console.log(str[5])
// str[5] = "K";
// let k = str[5]
// console.log(str,k)

//Adding and Removing eleemts in the array

// let arr = [1,2,3,4,5,6,7]
// console.log(arr)
// arr.pop();
// console.log(arr)
// arr.push(8);
// console.log(arr);
// arr.shift();
// console.log(arr)
// arr. unshift(0);
// console.log(arr);
// let str = arr.toString();

// console.log(str)
// console.log(typeof str)
// console.log(arr);
// let str = arr.join("-")
// console.log(str);
// console.log(arr)

// let arr2 = [8,9,10,11,12,13]
// let arr3 = [14,15,16,17,18,19,20]

// let arr4 = arr.concat(arr2,arr3);
// console.log(arr4)
// console.log(arr)
// arr.reverse();
// console.log(arr)

// console.log(arr.slice(2))
// console.log(arr.slice(1,6))
// console.log(arr)

// console.log(arr.splice(2,3,"Ram","Shyam","Mohan"))
// console.log(arr)

// let num = [25,16,18,55,9,5,19,88,99.93]
// num.sort()
// console.log(num)

// let tvShows = ["Naruto", "Spiderman", "drangon ball z" ,"pokemon", "Batman", "Superman"]
// tvShows.sort();
// console.log(tvShows)

// for(let code of tvShows){
//     console.log(`The unicode value of ${code[0]} is ${code.charCodeAt(0)}`)
// }
// console.log("p".charCodeAt(0))
// console.log("u".charCodeAt(0))

// let num = [5,88,95,6,15,36,17,56];
// num.sort((a,b)=>{
//     return b-a
// });
// console.log(num)

// let arr = [1,2,3,4,5,6,7]
// console.log(arr.length)
// delete arr[3];
// console.log(arr.length)
// console.log(arr.fill("FSJS",1,5))
// console.log(arr)

// let names = ["Harry", "yash", "jaspreet", "savinder","Robin"];
// // console.log(names.indexOf("Harry1"))
// console.log(names.lastIndexOf("Harry"))

let firstName = "Yash";
// let arr1 = firstName.split("");
// console.log(arr1);
// let txt = "This FSJS 2.0 Bootcamp by Hitesh Sir & iNeuron is Awesome";
// let arr2 = txt.split(" ");
// console.log(arr2)
// console.log(Array.isArray(firstName))
// if(Array.isArray(firstName)){
//     console.log(`${firstName} is an array`)
// }else{
//     console.log(`${firstName} is not an array`) 
// }

// let languages = [ "python", "Ruby", "javascript", "kotlin", "PHP", "java" ];
// console.log(languages.includes("javascript"))
// console.log(languages.includes("javascript",1));
// console.log(languages.includes("javascript",2));
// console.log(languages.includes("javascript",3));
// console.log(languages.includes("javascript",4));

// let num = "123456789"
// let arr = Array.from(num,(element)=>{
//     return element*element;
// })
// console.log(num)
// console.log(arr)
let arr = [1,2,3,4,5]
// let arr2 = arr.map(element=>{
//     return element*element*element;
// })
// console.log(arr2)
for(let item of arr){
    console.log(`The square of ${item} is ${item*item}`)
}
