const PromptSync = require("prompt-sync");

function add (a,b){
    console.log (a,b);
}
// add (10,20);
// add ("10","20");
// add (10,"20");
// add ("10",20);
// add ("Hello","20");


function square (n){
    console.log ( n*n);
}
// console.log (square(9));
// const prompt = require("prompt-sync")();
// let n = prompt("Enter the no for square ")
// n=parseInt(n);
// square (n);
let a = prompt("Enter no for prime text :")
a= parseInt(a);
function isprime(a){
    if (a<=1){
        return false ;
        }
    for (let i =2;i<=Math.sqrt(a);i++){
        if (a%i===0){
            return false ;
        }
        return true ;
    }
}
// isprime(a);