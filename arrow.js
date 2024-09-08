//function declaration

function add (a,b){
    // const result = a+b;
    return a+b;
}

//function expression
const add2 = function(a,b){
    return a+b;
}

//arrow function

// const add3 = (a,b) => a+b;
// const add = (a,b) => a*b;

const add3 = (a,b) => a+b;
const add4 = (num1, num2)=> num1*num2;
const multiply = (num1,num2)=> num1*num2;
const mult = multiply(2,7);
console.log(mult)
const sums = add4(2,3);
console.log(sums)
const sum = add3(6,7);
console.log(sum)


