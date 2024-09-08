const numbers = [1,4,2,7];
//for(let i =0;i<numbers;i++){
//}

for (const num of numbers){
    console.log(num);
}

const nobab = 'siral ud doula';
for(const char of nobab){
    console.log(char);
}

const actor = {
    name: 'ananta',
    age: 30,
    phone: '015',
    money: 4500000,
}

// for(const key of actor){
//     console.log(key);
// }

for(const key in actor ){
    const value = actor[key];
    // console.log(key, value)
}

//optional

const keys = Object.keys(actor);
// console.log(keys);

for(const key of keys){
    const value = actor[key];
    console.log(key,value);
}