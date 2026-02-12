// // Switch case statement in javaScript
// const day= 7;
// console.log(day);
// switch(day){
//     case 0:
//     console.log("today is sunday");
//     break;
//     case 1:
//     console.log("today is monday");
//     break;
//     case 2:
//         console.log("today is tuesday");
//         break;
//         case 3:
//             console.log("today is wednesday");
//             break;
//             case 4:
//                 console.log("today is thursday");
//                 break;
//                 case 5:
//                     console.log("today is friday");
//                     break;
//                     case 6:
//                         console.log("today is saturday");
//                         break;
//                         default:
//                             console.log("Wrong input(0-6)");
// }
// Q2 
// const month=new Date().getMonth();
// console.log(day)
//     switch(month){
// case 0:
//     console.log("it is january");
//     break;
//     case 1:
//     console.log("it is feburary");
//     break;
//     case 2:
//     console.log("it is march");
//     break;
//     case 3:
//         console.log("it is april");
//         break;
//         case 4:
//             console.log("it is may");
//             break;
//             case 5:
//                 console.log("it is june");
//                 break;
//                 default:
//                     console.log("error");
//     }
// FUNCTION
// function sum(){
//     let a = 10;
//     let b=20;
//     console.log(a+b);
//     // return a+b;
// }
// sum(); // if you use console.log or directly prints inside function
// console.log(sum()); // if i use return a+b 

//parameter based function
// function mul(x,y){
//     return x*y
// }
// console.log(mul(2,3));
// console.log(mul(12,12));
// function multiply(a,b){
//     console.log(a*b);
// }
// multiply(13,13);

function num(a){
    if(a%2==0)
    console.log("even");
else{
    console.log("odd");
}
}
num(5);