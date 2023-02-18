const employees = [
    {firstName:'kshama', job:"FrontendDeveloper", salary:1500},

    {firstName:'savinder', job:"BackendDeveloper", salary:3000},

    {firstName:'ashish', job:"Devops", salary:3200},

    {firstName:'yash', job:"FullStackDeveloper", salary:5000},

    {firstName:'vaibhav', job:"Security Analyst", salary:2800},

]

// [kshama-1500, savinder-3000]
console.log(employees.map(x=> x.firstName+ "-" +x.salary))

console.log(employees.filter(x => x.salary<3200))

//[kshama, vaibhav, savinder]--> Chaining
console.log(employees.filter(x => x.salary<3200).map(x=> x.firstName))

let isSalaryLess = employees.reduce((acc,curr)=>{
    if(curr.salary<3200){
     acc.push(curr.firstName)
    }
    return acc

},[])
console.log(isSalaryLess)
