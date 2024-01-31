//ES 1
let c = 50;
let d = 70;
function cinquanta(x,y){
    sum = x + y ;
    if(c == 50 || d == 50 || sum == 50){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
cinquanta(c,d);

//Es 3
let a = 43;
let b = 47;
function zeus(){
    if (a < 60 && a > 40 && b < 60 && b > 40 || a < 100 && a > 70 && b < 100 && b > 70){
        console.log(true)
    }
    else console.log(false)
}
zeus();
//Es 4
// function angeles(){
//     if (){

//     }
// }

//Es 5
let myArray = [1,2,5,7,9,11,15,63];
let total = 0;

function calculator(){
    myArray.forEach(element =>{
        total += element;
    });
    return total;
}
console.log(calculator());

//ES6
let myArray3 = [2,5,8,19,700,4]
function ES6(){
    for (i=0; i<myArray3.length; i++)
    if (myArray3 == 1 || myArray3 == 3 ){
        console.log(false)
    }
    else console.log(true)
}
ES6();