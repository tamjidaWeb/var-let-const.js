// const max = Math.max(4,6,34,87,24,10,91,43);
// const numbers = [2,6,1,8,4,9,34,27,95];
// const arrayMax = Math.max(...numbers);
// // console.log(...numbers)

// console.log(arrayMax);

// //use spread operateor to copy
// const nums = [2,5,1,7];
// const num2 = nums;

// const dosto = [...nums]
// console.log(dosto);
// nums.push(100);
// console.log(dosto);
// console.log(nums);


// // advanced
// const sonkha = [...nums,9999];
// console.log(sonkha)


const max = Math.max(5,6,2,8,9,1);
const num = [3,5,7,1,8,9,1];
const arrayMax = Math.max(...num);
// console.log(...num);
// console.log(arrayMax);

//use spread operator to copy
const friends = [3,5,1];
const bondhu = friends;
bondhu.push(10);
console.log(bondhu)
console.log(friends)


const dosto = [...friends]//copy
console.log(dosto);
friends.push(100);
// console.log(dosto);
// console.log(friends)


//advanced

const songkha = [...friends, 9999];//add extra element while copy
console.log(songkha)








