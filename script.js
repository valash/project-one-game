const question = document.querySelector('.question');
const answer1 = document.querySelector('.option1');
const answer2 = document.querySelector('.option2');
const score = document.querySelector('.score');
// ans1.innerText= "sup skank";
// ans2.innerText ="it is dark in hur";
// question.innerText = "here is ze question";

questionArray = [];

class Questions {
    constructor(question,correct1,wrong2) {
        this.question = question;
        this.correct1 = correct1;
        this.wrong2 = wrong2;
    }
}

let question0 = new Questions("Yes or no?","Yes","No"); 

questionArray.push(question0);
console.log(question0);

question.innerText = "yes or no?";
answer1.innerText = "Yes";
answer2.innerText = "No";

//create a function that when correct answer is clicked box turns green
// https://codepen.io/jkohlin/pen/MQPBYJ?editors=0010 - help referenced 
  answer1.addEventListener("click",correct);

  function correct(e){
    e.currentTarget.style.backgroundColor = "green";
    alert("You've made the gods proud!");

  }

  answer2.addEventListener("click",wrong);

  function wrong(e) {
      e.currentTarget.style.backgroundColor = "red";
      alert("You've failed");
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

