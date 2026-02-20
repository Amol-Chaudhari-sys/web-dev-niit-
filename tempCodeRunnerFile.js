const prompt = require("prompt-sync")();
// const greeet =function(name ){
//     console.log ("Hello ",name );
// }
// greeet ("amol")


// function login(username ,password){
//     if (username ==="admin"&&password ==="password"){
//         console.log ("login sucessfully ")
//     }
//     else {
//         console.log ("login failed ")
//     }
// }

// login ("admin", "password");
// login ("user", "1234");
// login ("admin", "1234");


// function greet(name ,callback ){
//     console.log("Hello ", name );
//     callback();
// }
// function saybye(){
//     console.log ("Goodbye !");

// }
// greet ("amol",saybye);


// function orderfood (item ,callback){
//     console.log ("order placed for :", item );
//     setTimeout (()=>{
        
//         callback();
//     },12000);
// }
// orderfood("pizza",function (){
//     console.log("food is ready ");
//     console.log ("Enjoy yoour meal !")
// });



function jobr(n ){
    if (n<=18){
        console.log ("baccha hai tu baccha");
    }
    else if( n >=18 && n <=60){
        console.log ("your eligible for job ");
    }
    else{
        console.log ("not elligable for job ");
    }
}
let age = prompt ("Enter your age :");
age = parseInt(age);
jobr(age );

