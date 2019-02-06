// what i need to have 
// need to have an array with 5 questions and 5 answers
// need to have same 5 questions with wrong answers
// question 1 = correct answer wrong answer 
// let questions =["","","","",""];

// let question1 = [
//     correct1 = "text",
//     wrong1 = "text"
// ]
// const gameSetup = function(evt) {
    //puts question in the question box
    //puts two answers in the option boxes
// }

// question 2 = correct answer wrong answer 
// let question2 = [
//     correct2 = "text2",
//     wrong2 = "text2"
// ]
// question 3 = correct answer wrong answer 
// let question3 = [
//     correct3 = "text3",
//     wrong3 = "text3"
// ]
// question 4 = correct answer wrong answer 
// let question4 = [
//     correct4 = "text4",
//     wrong4 = "text4"
// ]
// question 5 = correct answer wrong answer 
//let question5 = [
    // correct5 = "text5",
    // wrong5 = "text5"
//]

// what needs to happen 
// page loads 
// has one question and 2 potential answers 
//let playerScore = document.querySelector('.Score');
//let currentScore = 000;

//const gameSetup = function(evt) {
    //puts question in the question box
    //puts two answers in the option boxes
//}



// one option is correct 
// when click on the correct answer turn the box green alert that you are correct 
// score goes up 100 points 
// loads next question
// when the wrong answer is clicked turn the box red alert that you were wrong
// score stays the same 
// shake next question button ??

// button reloads page with new question and answers
// game 1
// game 2 
// game 3
// game 4
// game 5
//could i potentially have these load with the different info 

const question = document.querySelector('.question');
const answer1 = document.querySelector('.option1');
const answer2 = document.querySelector('.option2');

// answer_op_1.innerText= "sup skank";
// answer_op_2.innerText ="it is dark in hur";
// question.innerText = "here is ze question";

questionArray = [];

class questionSetup {
    constructor(question,ans1,ans2) {
        this.question = question;
        this.ans1 = ans1;
        this.ans2 = ans2;
    
    }
}

question0 = ("Yes or no?","Yes","No")

questionArray.push(question0);
console.log(question0);

//OR

// var GetMyQuestion = questionArray[0];
// var litString = GetMyQuestion.ans1;
// console.log(litString);
