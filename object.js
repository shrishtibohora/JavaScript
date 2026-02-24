const questionData={
    id:1,
    title:"Javascript Quiz",
    totalQuestion:3,
    questions:[
        {
            id:101,
            question:"What is JavaScript?",
            Options:["programming Language", "Database","Operating System","Browser"],
            correctAnswer: "programmimg Language"
        },{
            id:102,
             question:"Which keyword is used to declare variable?",
            Options:["var", "int","letvar","define"],
            correctAnswer: "var"
        },
        {
            id:103,
             question:"Which symbol is used for single line comment?",
            Options:["//", "/**/","#","<!-- -->"],
            correctAnswer: "//"
        }
    ]
};
//Get All Questions
console.log(questionData.questions);
//Get Question with options
questionData.questions.forEach((question)=>{
    console.log(question.question)
    console.log(question.Options)
})

//Access Single Question
console.log( questionData.questions[0].question);

//Access correct answer of a question
questionData.questions.forEach((question)=>{
console.log(question.correctAnswer)
});