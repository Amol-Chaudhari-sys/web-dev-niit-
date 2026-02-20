const prompt=require("prompt-sync")();
let age = prompt ("Enter your age :");
// if (age >=18){
//     console.log ("you are eligable for vitting ");

// }
// else {
//     console.log("not elogible for votting ")
// }


// let age = prompt("Enter the age");
age = parseInt(age );


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

jobr(age );