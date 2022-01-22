// Create a quiz class

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions ;
        this.questionIndex = 0;
    }

    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if(this.getQuestionIndex().isCorrectAnswer(answer)){
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }

}

//Create a question Class
class Question {
    constructor(text, choices, answer){
        this.text = text ;
        this.choices = choices ;
        this.answer = answer ;

    }
    isCorrectAnswer(choice) {
        return this.answer ===choice ;
    }
}

//Display Question 
function displayQuestion(){
   if (quiz.isEnded()) {
       showScores() ;
    } else {
        //Show Question
        let questionElement =document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        //show options
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + 
            i);
            choiceElement.innerHTML =  choices[i];
            guess("btn" + i, choices[i]);

        }
        showProgress();

    }
}

//Guess Function
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function(){
       quiz.guess(guess);
       displayQuestion();
    }
}

//Show quiz progress
function showProgress(){
    let currentQuestionNumber = quiz.questionIndex +1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = 
    `Question ${currentQuestionNumber} of ${quiz.questions.length}
    `;
}
 //Show Score
 function showScores() {
     let quizEndHTML =
     `
  
     <h1>Quiz Completed</h1>
     <h2 id="score">You Score: ${quiz.score} of ${quiz.questions.length}</h2>
     <div class="quiz-repeat">
         <a href="index.html">Take Quiz Again</a>
     </div>
     `;
     let quizElement = document.getElementById("quiz");
     quizElement.innerHTML = quizEndHTML;
} 

 //Create Quiz Question

 let questions = [
    new Question(
        "A condition in an if/else statement is enclosed with?" , ["quotes",
        "curly brackets","parentheses","square brackets"], "parentheses"

    ),

    new Question(
        "Hyper Text Markup Language Stand For?" , ["JQuery",
        "XHTML","CSS","HTML"], "HTML"

    ),

    new Question(
        "Arrays in JavaScript can be used to stored?" , ["numbers and strings",
        "other arrays","booleans","all of the aboved"], "all of the above"

    ),

    new Question(
        " Which is Java Script Framework?" , ["React",
        "Laravel","Django","sass"], "React"

    ),

    new Question(
        " Which is backend language?" , ["PHP",
        "HTML","React","all of the above"], "PHP"

    ),


];     

 let quiz = new Quiz(questions);

 //display question
 displayQuestion();

 //Add a Countdown
 let time = 1;
 let quizTimeInMinutes = time * 60 * 60;
 quizTime = quizTimeInMinutes / 60;

 let counting = document.getElementById("count-down");

 function startCountdown() {
     let quizTimer = setInterval(function() {
         if (quizTime <=0) {
             clearInterval(quizTimer);
             showScores();
         }else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `Time: ${min} : ${sec}`;
         }
     }, 1000)
    }  
startCountdown();

 

