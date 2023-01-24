// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.


// - 4 > 3  --> false
console.log(- 4 > 3)

// - 4 >= 3 -->false
console.log(- 4 >= 3)

// - 4 < 3 --> true
console.log(- 4 < 3)

// - 4 <= 3 --> true
console.log(- 4 <= 3)

//- 4 == 4 --> false
console.log(- 4 == 4)

// - 4 === 4 --> false
console.log(- 4 === 4)

// - 4 != 4 --> true
console.log(- 4 != 4)

// - 4 !== 4 --> true
console.log(- 4 !== 4)

//- 4 != '4' --> true
console.log(- 4 != '4')

//- 4 == '4' --> false
console.log(- 4 == '4')

// - 4 === '4' --> false
console.log(- 4 === '4')


// Q. Find the length of python and jargon and make a falsy comparison statement

const pyh = "python";
console.log(pyh.length) //6

const jar = "jargon";
console.log(jar.length); // 6 

if (pyh.length === jar.length) {
    console.log(`Both ${pyh} & ${jar} has same length i.e ${pyh.length}`);
}

