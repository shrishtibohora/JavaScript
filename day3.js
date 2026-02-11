//  day3: Conditional statement in javascript
// Q1:
// let a =20;
// let b=30;
// let c=40;
// if(a>b && a>c){
//     console.log(a+"is greater");
// }
// else if(b>c){
//     console.log(b+"is grater");
// }
// else{
//     console.log(c+"is greater");
// }

// Q2: Declare four variables W,X,Y,Z and find largest /greatest among them using if else if condition
// let x=5;
// let y=10;
// let w=15;
// let z=20;
// if(x>y && x>w && x>z){
//     console.log(x+"x is greater");
// }
// else if(y>w && y>z){
//     console.log(y+"y is greater");
// }
// else if(w>z){
//     console.log(w+"w is greater");
// }
// else{
//     console.log(z+"z is graeter");
// }

// Q3. using if else if else condition statement ,display "your BMI[bodymassindex value ] is perfect","your Bmi is below average" or your BMI is above average".
// let average=40;
// let bmi=50;
// if(bmi>average){
//     console.log(bmi+"bmi is greater");
// }
// else if (bmi<average){
//     console.log(bmi+" bmi is below average");
// }
// else{
//     console.log(bmi+"bmi is perfect");
// }
// Q4
// let marks=67;
// if (marks>40){
//     if (marks>90){
//         console.log("he got A+");
//     }

// else if(marks>80 && marks<90){
//     console.log("he got A");
// }
// else if(marks>60 && marks <80 ){
//     console.log("He got B");

// }
// else{
//     console.log("he got C");
// } }
// else{
//     console.log("he failed the exam");
// }
// Q5 using the if else -if else statement, calculated the electricity bill based on units consumed:
//conditions:
//up to 50 units=rs 3 per unit
//51-150 units =rs.5 per unit
// //Above 150 units =rs.8 per unit
// let unit=100;
// bill=0;
// if(unit<=50){
//     bill=50*3;
// }
// else if(unit<=150){
//     bill=(50*3)+((unit-50)*5);
// }
// else{
//     bill=(50*3)+(100*5)+((unit-150)*8);
// }
// console.log("total bill :"+bill);
// Q6. 
let age=18;
if(age<13){
    console.log(age+"  years age is child ");
}
else if(age>=13&& age<=19){
    console.log(age+" years age is teenage ");
}
else if(age>=19 && age<=59){
    console.log(age+" years is adult");
}
else{
    console.log(age+" years age is senior citizens");
}