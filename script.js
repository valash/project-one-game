//...............variables.................
const nextQuestionButton = document.querySelector('.nextQ');
const questions = document.querySelector('.questions');
const option_1 = document.querySelector('.option1');
const option_2 = document.querySelector('.option2');
const currentQuiz= undefined;
let playerScore = document.querySelector('.Score');
let currentScore = 000;

// class Questions {
//     constructor(question,choices,correctAnswer,wrongAnswer) {
//         this.question = question;
//         this.choices = choices;
//         this.correctAnswer = correctAnswer;
//         this.wrongAnswer = wrongAnswer;
//     }
// }
class Question {
    constructor(questionString,answerChoices,actualAnswer){
        this.questionString= questionString;
        this.answerChoices= answerChoices;
        this.actualAnswer = actualAnswer;
}
    isAnswerCorrect(selectedAnswer) {
        if (selectedAnswer === this.actualAnswer) {
            return true;
        } else return false;
    }
}
//..............questions array .......
const questionsArray = [
    new Question("Which emperor attempted to make his horse, Incitatus, a Consul (the highest elected office of the Roman Republic)?",["Caligula","Nero"],"Caligula"),
    new Question("Is the sky blue",["Yes","No"],"Yes"),
    new Question("whaz my name",["Tony","VA"],"VA"),
]


var questionArray = [
    {
        question: "Which emperor attempted to make his horse, Incitatus, a Consul (the highest elected office of the Roman Republic)?",
        choices: ["Caligula","Nero"],
        correctAnswer: 0,
        wrongAnswer: 1
    },
    {
        question:"Is the sky blue",
        choices: ["Yes","No"],
        correctAnswer: 0,
        wrongAnswer: 1
    },
    {
        question:"whaz my name",
        choices: ["Tony","VA"],
        correctAnswer: 1,
        wrongAnswer: 0
    },
    {
        question:"where am i from",
        choices: ["va","texas"],
        correctAnswer: 0,
        wrongAnswer: 1
    },
    {
        question:"do i have a brother?",
        choices: ["no","yes"],
        correctAnswer: 1,
        wrongAnswer: 0
    },
];
let question0 = questionArray[0];
    questions.innerText = questionArray[0].question;
    option_1.innerText = questionArray[0].choices[0];
    option_2.innerText = questionArray[0].choices[1];
console.log(question0);

let question1 = questionArray[1];
    questions.innerText = questionArray[1].question;
    option_1.innerText = questionArray[1].choices[0];
    option_2.innerText = questionArray[1].choices[1];
console.log(question1);

let question2 = questionArray[2];
    questions.innerText = questionArray[2].question;
    option_1.innerText = questionArray[2].choices[0];
    option_2.innerText = questionArray[2].choices[1];
console.log(question2);

let question3 = questionArray[3];
    questions.innerText = questionArray[3].question;
    option_1.innerText = questionArray[3].choices[0];
    option_2.innerText = questionArray[3].choices[1];
console.log(question3);

let question4 = questionArray[4];
    questions.innerText = questionArray[4].question;
    option_1.innerText = questionArray[4].choices[0];
    option_2.innerText = questionArray[4].choices[1];
console.log(question4);

//.............functions.............

// nextQuestionButton.addEventListener('click','load', fillInputs);

option_1.addEventListener('click',correctAns); 
option_2.addEventListener('click', incorrectAns);

function correctAns(e){
    e.option_1 === questionArray.correctAnswer,
        e.currentTarget.style.backgroundColor = "green",
        currentScore += 100;
        console.log(currentScore)
        console.log(playerScore)
        playerScore.innerText = currentScore;
        alert("correct bish");
    } 

function incorrectAns(e) {
    e.option_2 === questionArray.wrongAnswer,
    e.currentTarget.style.backgroundColor = "red",
    alert("You've failed the Gods");
    } 


// function fillInputs() {
//     ('.questions').innerHTML = questionArray[0].question[0];
//     ('.option_1').innerHTML = questionArray[0].choices[0];
//     ('.option_2').innerHTML = questionArray[0].choices[1];
//     console.log(fillInputs);
// }

//https://stackoverflow.com/questions/40606697/how-do-i-loop-back-to-the-prompt-if-answer-is-incorrect-javascript
// guess();
// function guess() {
//     if (questionArray = questionArray[0].question);
//     if (answer === questionArray[0].correctAnswer) {
//         e.currentTarget.style.backgroundColor = "green";
//         currentScore += 100;
//         console.log(currentScore)
//         console.log(playerScore)
//         playerScore.innerText = currentScore;
//         alert("correct bish");
//     }else{
//     alert("incorrect bish");
//     }
// }

//   function guess(e){
//     if (guessIsCorrect) {
//     e.currentTarget.style.backgroundColor = "green";
//     currentScore += 100;
//     console.log(currentScore)
//     console.log(playerScore)
//     playerScore.innerText = currentScore;
//     window.alert("You've made the Gods proud!");
//    } else { (guessIsWrong) {
    // e.currentTarget.style.backgroundColor = "red";
    // window.alert("You've failed the Gods");
//    }
//   }
  
//  function nextQuestion(){
//     nextQ.addEventListener('click',function(load) {
//         console.log("this loaded");
//     })
//  }

function displayCurrentQuestion(e) {
    const currentQuestion = 
}



  //.............. events.............
// https://codepen.io/jkohlin/pen/MQPBYJ?editors=0010 - help referenced 


// window.addEventListener('load', function() {
//     questions.innerText = questionArray[0].question;
//     option_1.innerText = questionArray[0].choices[0];
//     option_2.innerText = questionArray[0].choices[1];
// });

//QUESTIONS//
    //QUESTION 0//
// let question0 = new Questions("","",""); 
// questionArray.push(question0);
// console.log(question0.a1);

// question.innerText = question0.q;
// answer_1.innerText = question0.a1;
// answer_2.innerText = question0.a2;

