//var: no reason to use var
//let : allow it to reassign
//const : do not allow to reassign

const money = 25;
const rich = money + 25;
console.log(rich);

let count= 0;
count = count+10;
console.log(count);


const numbers = [23,54,12,43];
// numbers = [4,6,2]
numbers[1]=55;
numbers.push(6,2,87);
console.log(numbers);
//object

const students = {
    name: 'moyna',
    class: 12
}
students.name = 'moyur'
console.log(students)

// loop 
let sum =0;
for(let i=0;i<10;i++){
    const num = i;
    sum = sum+num;
}
console.log(sum);

