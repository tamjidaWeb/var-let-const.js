const max = Math.max(4,6,34,87,24,10,91,43);
const numbers = [2,6,1,8,4,9,34,27,95];
const arrayMax = Math.max(...numbers);
// console.log(...numbers)

console.log(arrayMax);

//use spread operateor to copy
const nums = [2,5,1,7];
const num2 = nums;

const dosto = [...nums]
console.log(dosto);
nums.push(100);
console.log(dosto);
console.log(nums);


// advanced
const sonkha = [...nums,9999];
console.log(sonkha)