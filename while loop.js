// let i =1;
// while (i <=5 ){
//     console.log (i );
//     i+=1;
// }
// let j =1;
// let sum =0;

// do {
//     console.log(j*2);
//     sum +=j
//     j++;
// }
// while(j<=10)

//     console.log("sum is :",sum)

// //reverce varible 

// n = 12345;
// rev =0;
// while (n>0 ){
//     rev = rev*10 + n%10;
//     n=Math.floor(n/10);
// }
// console.log (rev);

// input 

// const process = require ("node:process ");
// let name = process.argv[2];
// console.log("hello", name )


const prompt = require("prompt-sync")();
let name = prompt ("enter the name  : ")
console.log ("hello ",name);

// let n= prompt ("Enter the number ");
// n= parseInt(n);
// for (let i=1;i<=n;i++){
//     console.log (i);
// }
let a = prompt("Enter the first no ");
let b =prompt("Enter the second no :");

a=parseInt(a);
b=parseInt(b);
c=prompt("enter operatop + - x /  ");

switch(c){
    case "+":
        console.log("addition :",a+b );
        break;
    case "-":
        console.log("addition :",a-b );
        break;
    case "x":
        console.log("addition :",a*b );
        break;
    case "/":
        console.log("addition :",a/b );
        break;
}

