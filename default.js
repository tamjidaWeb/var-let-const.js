//default --> if value is not provided, take this as a default
function add (num1=9, num2=8){
    const result = num1 +num2;
    console.log(num1, num2,result);
    return result;
}
function fullName (f,l= ''){
    const full = f + '' + l;
    return full;
}


function frnd (numb=[]){

}
function person(human= {})