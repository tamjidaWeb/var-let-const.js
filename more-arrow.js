const difference = (x,y) => x-y;
const multiply = (first, second, third) => first* second* third;
//single or one parameter
const getAge = (person) => person.age;
const student = {name:'ananta', age:45}
const age = getAge(student)
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5,3,100,5,3]);
console.log(third);

const doubleIt = num => num*2;

//no parameter

const getPI = ()=> Math.PI;
console.log(getPI());