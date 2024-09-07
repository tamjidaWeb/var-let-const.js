const actor = {
    name: 'ananta',
    age: 30,
    phone: '015',
    money: 4500000,
}
//if right side is an object left side of destructuring will be object as well
const {phone,age:boyos}= actor;
//use property  name as a variable that contains the property value

// const phone = actor.phone;
const name = actor.name;
// const age = actor.age;
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(boyos);


//array destructuring

const numbers = [34,65,12];
const [first, second ,third]= numbers;
const [x,y,z]= [2,5,3];


//function 
function double (a,b){
    return [a*2, b*2];
}

const [f,l] = double(6,4);
console.log(f,l);