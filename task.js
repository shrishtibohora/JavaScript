const student=[
    {
        name:"shri",
        marks:[90, 60,30],
        getTotalMarks:function(){
            let sum=0;
            for(let i=0; i< this.marks.length;i++)
{
    sum+= this.marks[i];
}     console.log("Total Marks:",sum); 
return sum ; },

}
    
];

// const student=[
//     {
//         name:"shri",
//         marks:90,
//         // changename:function addtask(){
//         //     this.name="ravi"
//         },
//          hobbies:["sing","dance"],
// addHobbies:function addHobbies(){
//     this.hobbies.push("code")
// }
//     },]
   
    // {
        // name: "hari",
        // age:70,
    // }
// ]

// student[0].changename()
// console.log(student[0].name);
// student.forEach((student)=>{
//     console.log(student.name);
//     console.log(student.age)
// }


