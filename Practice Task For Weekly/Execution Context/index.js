var myName = "Yash";
function calcAge (birthYear) {
    
    var currentYear = 2023;
    var age = currentYear - birthYear;
    return age
}
function introduce (birthYear){
   
    var age = calcAge(birthYear)
    var myName = "Yash Arora"
    return `Hi! My name is ${myName} and I am ${age} years old`
}
 var sayHello = introduce(1997);
 console.log(sayHello);
 console.log(myName);
Footer