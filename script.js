//...............variables.................
const nextQuestionButton = document.querySelector('.nextQ');
const currentQuestion = document.querySelector('.questions');
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
            return true,
            selectedAnswer.currentTarget.style.backgroundColor = "green",
            currentScore += 100,
            console.log(currentScore)
            console.log(playerScore)
            playerScore.innerText = currentScore,
            alert("correct bish");
            } else return false,
            alert("YOURE WRONG");
    }
}
//..............questions array .......
// const questionsArray = [
//     new Question("Which emperor attempted to make his horse, Incitatus, a Consul (the highest elected office of the Roman Republic)?",["Caligula","Nero"],"Caligula"),
//     new Question("Is the sky blue",["Yes","No"],"Yes"),
//     new Question("whaz my name",["Tony","VA"],"VA"),
//     new Question("where am i from",["clarendon","texas"],"clarendon"),
//     new Question("do i have a brother?",["No","Yes"],"Yes")
// ]

var question0 =  new Question("Which emperor attempted to make his horse, Incitatus, a Consul (the highest elected office of the Roman Republic)?",["Caligula","Nero"],"Caligula");

    currentQuestion.innerText = question0.questionString;
    option_1.innerText = question0.answerChoices[0];
    option_2.innerText= question0.answerChoices[1];



// let question0 = questionArray[0];
//     questions.innerText = questionArray.question[1];
//     option_1.innerText = questionArray[0].choices[0];
//     option_2.innerText = questionArray[0].choices[1];
// console.log(question0);

// let question1 = questionArray[1];
//     questions.innerText = questionArray[1].question;
//     option_1.innerText = questionArray[1].choices[0];
//     option_2.innerText = questionArray[1].choices[1];
// console.log(question1);

// let question2 = questionArray[2];
//     questions.innerText = questionArray[2].question;
//     option_1.innerText = questionArray[2].choices[0];
//     option_2.innerText = questionArray[2].choices[1];
// console.log(question2);

// let question3 = questionArray[3];
//     questions.innerText = questionArray[3].question;
//     option_1.innerText = questionArray[3].choices[0];
//     option_2.innerText = questionArray[3].choices[1];
// console.log(question3);

// let question4 = questionArray[4];
//     questions.innerText = questionArray[4].question;
//     option_1.innerText = questionArray[4].choices[0];
//     option_2.innerText = questionArray[4].choices[1];
// console.log(question4);

//.............functions.............

// nextQuestionButton.addEventListener('click','load', fillInputs);

// option_1.addEventListener('click',correctAns); 
// option_2.addEventListener('click', incorrectAns);

// function correctAns(e){
//     e.option_1 === questionArray.correctAnswer,
//         e.currentTarget.style.backgroundColor = "green",
//         currentScore += 100;
//         console.log(currentScore)
//         console.log(playerScore)
//         playerScore.innerText = currentScore;
//         alert("correct bish");
//     } 

// function incorrectAns(e) {
//     e.option_2 === questionArray.wrongAnswer,
//     e.currentTarget.style.backgroundColor = "red",
//     alert("You've failed the Gods");
//     } 


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

// function displayCurrentQuestion(e) {
//     const currentQuestion = currentQuiz.getCurrentQuestion();
//     document.querySelector(".questions").innerText =currentQuestion.questionString;
//     questionNumber.innerText = `Question ${currentQuiz.questionNum + 1}`;
//     let answerList = document.createElement("li");
//     let replacedItem = document.createElement("ul");
//     for (let i = 0; i < currentQuestion.answerChoices.length; i++) {
//         const answerItem = currentQuestion.answerChoices[i].split("").join("").replace(",","").replace(":"," ").replace("."," ").replace("'","").replace("/"," ").toLowerCase();
//         let indexOfDash =replaceItem.indexOf('-')
//         if (indexOfDash >= 0) {
//             replacedItem = replacedItem.substring(0,indexOfDash);
//         }
        
//     }
// nextQuestionButton.addEventListener('click',function (e) {
//     currentQuiz.moveToNextQuestion();
//     const finished = currentQuiz.isQuizFinished();
//     if (finished) {
//         main.innerText = `<h1>You're Finished!<h1>`
//     }
// }
// )


  //.............. events.............
// https://codepen.io/jkohlin/pen/MQPBYJ?editors=0010 - help referenced 


// window.addEventListener('load', function() {
//     questions.innerText = questionArray.question;
//     option_1.innerText = questionArray.answerChoices[0];
//     option_2.innerText = questionArray.answerChoices[1];
// });

//QUESTIONS//
    //QUESTION 0//
// let question0 = new Questions("","",""); 
// questionArray.push(question0);
// console.log(question0.a1);

// question.innerText = question0.q;
// answer_1.innerText = question0.a1;
// answer_2.innerText = question0.a2.