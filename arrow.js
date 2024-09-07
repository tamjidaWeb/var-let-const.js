//function declaration

function add(a,b){
    const result = a+b;
    return result;

}

//function expression

const add2 = function(a,b){
    return a+b;
}

//arrow function
const add4 = (num1, num2, num3,num4) => num1+ num2+ num3+ num4;
const sum4= add4(2,3,4,5);
console.log(sum4);

const multiply = (a,b) => a*b;
const mul = multiply(2,3);
console.log(mul);
const add3 = (a,b) => a+b;
const sum = add3(2,5);
console.log(sum);