const nextQuestion = document.querySelector('.nextQ');
const question = document.querySelector('.question');
const answer_1 = document.querySelector('.option1');
const answer_2 = document.querySelector('.option2');
let playerScore = document.querySelector('.Score');
let currentScore = 000;


nextQuestion.addEventListener("click",next);


// document.nextQuestion.onclick = inputChange;


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits;

// function myFunction() {  
//   document.getElementById("demo").innerHTML = fruits.fill("Kiwi");
// }


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



