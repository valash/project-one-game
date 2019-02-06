const nextQuestion = document.querySelector('.nextQ');
nextQuestion.addEventListener("click",next);
function next(e) {
    e.currentTarget.
}


const question = document.querySelector('.question');
const answer_1 = document.querySelector('.option1');
const answer_2 = document.querySelector('.option2');
let playerScore = document.querySelector('.Score');
let currentScore = 000;
// ans1.innerText= "sup skank";
// ans2.innerText ="it is dark in hur";
// question.innerText = "here is ze question";




questionArray = [];

class Questions {
    constructor(question,answer1,answer2) {
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
    }
}

//QUESTIONS//
    //QUESTION 0//
let question0 = new Questions("Yes or no?","Yes","No"); 
questionArray.push(question0);
console.log(question0.answer1);

question.innerText = question0.question;
answer_1.innerText = question0.answer1;
answer_2.innerText = question0.answer2;

    //QUESTION 1//
let question1 = new Questions("Which emperor attempted to make his horse, Incitatus, a Consul (the highest elected office of the Roman Republic)?" 
,"Caligula","Nero");

questionArray.push(question1);
console.log(question1.answer1);

question.innerText = question1.question;
answer_1.innerText = question1.answer1;
answer_2.innerText = question1.answer2;



//create a function that when correct answer is clicked box turns green
// https://codepen.io/jkohlin/pen/MQPBYJ?editors=0010 - help referenced 
  answer_1.addEventListener("click",correct);

  function correct(e){
    e.currentTarget.style.backgroundColor = "green";
    currentScore += 100;
    console.log(currentScore)
    console.log(playerScore)
    playerScore.innerText = currentScore;
    window.alert("You've made the Gods proud!");
  }
  //this.style.pointerEvents = "none";

  answer_2.addEventListener("click",wrong);

  function wrong(e) {
      e.currentTarget.style.backgroundColor = "red";
      window.alert("You've failed the Gods");
      
  }




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

