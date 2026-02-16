// for (let i =2 ; i<= 10;i+=2){
//     console.log( i );   // even no 
// }
// for(let i=1;i <=10; i+=2){
//     console.log(i)    // odd no 
// }
// for (let i = 10;i>=1;i--){
//     console.log(i )       //reverse no
// }
// for(let i=1;i <=10; i++){
//     if (i==5){
//         break;    //stop it 5 
//     }
//     console.log(i )
// }
// for(let i=1;i <=10; i++){
//     if (i==5){
//         continue;    // skip 5 
//     }
//     console.log(i )
// }
let sum = 0 ;
for(let i =1 ;i<=10;i++){
    sum +=i ;
}
console.log(sum)

let fac =1;
for (let i =1 ;i<=5;i++){
    fac *=i ;
}
console.log (fac)


let n = 1234;
let rev=0

// for (let i = n ;i>0;i=Math.floor(i/10);){
//     // i= Math.floor(i/10)
   
//     rev =(rev*10)+(n  % 10)
   
// }
console.log(rev);
while (n>0){
    // i= Math.floor(i/10)
   
    rev =(rev*10)+(n  % 10)
    n=Math.floor(n/10);

}
console.log(rev);