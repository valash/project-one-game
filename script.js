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
    new Question("What substance did ancient Roman woman rub on their skin to stay lookin' fresh?",["Dead skin cells from Gladiators","Goat Poop"],0),
    new Question("What was the max amount of times a father could sell their sons into slavery?",["Two Times","Three Times"],1),
    new Question("'Emperor Heliogabalus loved collecting what items by the ton?",["Cobwebs","Chicken feathers"],0),
    new Question("Emperor Nero played what instrument while watching Rome burn?",["Bugle","Lyre"],1)
]

// which emperor claimed to kill more gauls than existed at the time - ceaser 

// i am sparticus 


let questionIndex = 0;

let newQuestion = questionsArray[questionIndex];
currentQuestion.innerHTML = newQuestion;
currentQuestion.innerText = newQuestion.questionString;
option_1.innerText = newQuestion.answerChoices[0];
option_2.innerText= newQuestion.answerChoices[1];


nextQuestionButton.addEventListener('click', function() {
    console.log(questionsArray.length)
    console.log(questionIndex)
    questionIndex += 1;
    if (questionIndex < questionsArray.length) {
        let newQuestion = questionsArray[questionIndex];
        currentQuestion.innerHTML = " ";
        currentQuestion.innerHTML = newQuestion;
        currentQuestion.innerText = newQuestion.questionString;
        option_1.innerText = newQuestion.answerChoices[0];
        option_2.innerText= newQuestion.answerChoices[1];
    } else {
        // document.querySelector('.results').style.display = 'unset';
        document.querySelector('.gameboard').style.display = 'none';
        if (currentScore == 500) {
            document.querySelector('.results').innerText = "ZEUS WOULD BE PROUD!";
        } else if (currentScore == 400) {
            document.querySelector('.results').innerText = "THE EMPEROR IS IMPRESSED";
        } else if (currentScore == 300) {
            document.querySelector('.results').innerText = "CESAR FROWNS AT YOU";
        }else if (currentScore == 200) {
            document.querySelector('.results').innerText = "CESAR FROWNS AT YOU";
        }
        else if (currentScore == 100) {
            document.querySelector('.results').innerText = "CESAR FROWNS AT YOU";
        }  else if (currentScore == 000) {
            document.querySelector('.results').innerText = "YOU'RE LITERALLY SO BAD";
        } 
        document.querySelector('.results').style.visibility = "visible";
     }

    });



var question0 =  new Question("Which emperor attempted to make his horse, Incitatus, a Consul (the highest elected office of the Roman Republic)?",["Caligula","Nero"], 0);



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
