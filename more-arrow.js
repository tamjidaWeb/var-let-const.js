// const difference = (x,y) => x-y;
// const multiply = (first, second, third) => first* second* third;
// //single or one parameter
// const getAge = (person) => person.age;
// const student = {name:'ananta', age:45}
// const age = getAge(student)
// console.log(age);

// const getThird = numbers => numbers[2];
// const third = getThird([5,3,100,5,3]);
// console.log(third);

// const doubleIt = num => num*2;

// //no parameter

// const getPI = ()=> Math.PI;
// console.log(getPI());


// //large arrow function

// const doMath = (x,y,z) => {
//     const sum = x+y+z;
//     const mul = x*y*z;
//     const result = sum +mul;

//     return result;
// }



const difference = (x,y) => x-y;
const multiply = (a,b,c) => a*b*c;
const getAge = (person)=>person.age;
const student = {name: 'ananta', age:26};
const age = getAge(student);
console.log(age)

const getThird = numbers => numbers[2];
const third = getThird([4,5,3,2]);
console.log(third);

// const getThird = numbers => numbers[3];
// const num = getThird([2,4,1,5]);

const doubleIt = num => num*2;

//no parameter

const getPI = () => Math.PI;
console.log(getPI());

//large arrow function

const doMath = (x,y,z)=>{
    const sum = x+y+z;
    const sub = x-y-z;
    return sum ;
}
// const 
const summ = doMath(4,2,1);
console.log(summ)
