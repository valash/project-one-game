//...............variables.................
const nextQuestionButton = document.querySelector('.nextQ');
const currentQuestion = document.querySelector('.questions');
const option_1 = document.querySelector('.option1');
const option_2 = document.querySelector('.option2');
let playerScore = document.querySelector('.Score');
let currentScore = 000;


class Question {
    constructor(questionString,answerChoices,correctAnswerIndex){
        this.questionString= questionString;
        this.answerChoices= answerChoices;
        this.correctAnswerIndex = correctAnswerIndex;
}
}
//..............questions array .......
const questionsArray = [
    new Question("Which emperor attempted to make his horse, Incitatus, a Consul (the highest elected office of the Roman Republic)?",["Caligula","Nero"],0),
    new Question("Is the sky blue",["Yes","No"],0),
    new Question("whaz my name",["Tony","VA"],1),
    new Question("where am i from",["clarendon","texas"],0),
    new Question("do i have a brother?",["No","Yes"],1)
]

let questionIndex = 0;

let newQuestion = questionsArray[questionIndex];
currentQuestion.innerHTML = newQuestion;
currentQuestion.innerText = newQuestion.questionString;
option_1.innerText = newQuestion.answerChoices[0];
option_2.innerText= newQuestion.answerChoices[1]

nextQuestionButton.addEventListener('click', function() {
    if (questionIndex < questionsArray.length) {
        questionIndex += 1;
        let newQuestion = questionsArray[questionIndex];
        currentQuestion.innerHTML = " ";
        option_1.style.backgroundColor = "white";
        option_2.style.backgroundColor ="white";
        currentQuestion.innerHTML = newQuestion;
        currentQuestion.innerText = newQuestion.questionString;
        option_1.innerText = newQuestion.answerChoices[0];
        option_2.innerText= newQuestion.answerChoices[1];
    } else {
        console.log("game over");
        alert(currentScore);
        //clear page
// dont increaseinndex, maybe say game over
    }});

    // console.log("game over");
    // alert(currentScore);
    //     if (currentScore = 500) {
    //         alert("GREAT JOB!");
    //     }
    //     else (currentScore > 400) {
    //         alert("youre terrible");
    //     }



var question0 =  new Question("Which emperor attempted to make his horse, Incitatus, a Consul (the highest elected office of the Roman Republic)?",["Caligula","Nero"], 0);


// instead of question0,we can have currentQuestion that uses the array and an index placeholder to determine one question at a time 

    option_1.setAttribute('data-index', 0);
    option_2.setAttribute('data-index', 1);


    const optionsParent = document.querySelector('.options')
    
    optionsParent.addEventListener('click', function(evt) {
        const target= evt.target
        
        const optionIndex = Number(target.getAttribute('data-index'))

        console.log(questionsArray[questionIndex])

        if (target.classList.contains('option')) {
            if (questionsArray[questionIndex].correctAnswerIndex === optionIndex) {
                console.log('that is the correct answer!!!!')
                target.style.backgroundColor ='green'
                currentScore += 100,
                console.log(currentScore)
                console.log(playerScore)
                playerScore.innerText = currentScore
            } else {
                console.log('sorry, that is incorrect')
                target.style.backgroundColor ='red'
            }
        }
        

    })



//.............functions.............


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
  



  //.............. events.............
// https://codepen.io/jkohlin/pen/MQPBYJ?editors=0010 - help referenced 
