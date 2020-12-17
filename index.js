var readlineSync = require("readline-sync");
var chalk = require('chalk');


var questions = [
  {Question: "Who is my favourite pop star? ", Answer: "Selena Gomez"}, {Question: "How old am I? ", Answer: "21"},
  {Question: "How many siblings do I have? ", Answer: "1"}]
var score = 0;
var questions1 = [
  {Question: "What is my favourite genre? ", Answer: "Thriller"},{Question: "What do I prefer - TV-shows or movies? ", Answer: "TV-shows"}]
  function welcome(){
    console.log(chalk.red("Hellooo! Welcome to ") + chalk.yellow("\"How well do you know me? - ") + chalk.red.bgYellowBright.bold("Sajag Agarwal") + chalk.yellow(" edition.\""));

    console.log("We will be playing a fun quiz to know how well do you know me.")
    var userName = readlineSync.question("First things first, what is your name? ")
    console.log("Welcome " + chalk.black.bgYellowBright.bold(userName) + " !!!!")
    console.log("--------------------------------");
  }
  function game(ques, i){
    var userAnswer = readlineSync.question(chalk.bgRedBright.bold(ques.Question));
      if(userAnswer.toLowerCase() === ques.Answer.toLowerCase()){
        score+=1;
        console.log(chalk.green("Your answer is correct. Your current score is " + score))
        if(i===0){
          console.log("Here comes your next question....")
        }
      }
      else{
        console.log(chalk.red("Oops! Your answer is incorrect. Your current score remains unchanged."))
      }
  }
  function play(questions){
    for(i=0;i<questions.length - 2;i++){
      ques = questions[i];
      game(ques,0);
    }
    game(questions[questions.length - 2], -1);
    console.log("Here comes your last question...");
    game(questions[questions.length - 1], -1);
  }
  function finalscore(){
    console.log("Your final score is " + score);
  } 

  var highScores = [{name: "A", score:1},{name:"B",score:3}];
  function highscore(){
    var flag = false;
    console.log("Current high scores are:");
    for(i=0;i<highScores.length;i++){
      console.log(highScores[i].name, " : ", highScores[i].score)
    }
    for(i=0;i<highScores.length;i++){
      if(score>highScores[i].score){
        console.log(chalk.blue("Congratulations! You are one of the high scorers. Message me and I will update the list."));
        flag = true;
        break;
      }
    }
    if(flag===false){
      console.log(chalk.red("Sorry you could not beat the high score."))
    }
  }
welcome();
play(questions);


var answersvar = ['Yes', 'No'];
if(score===questions.length){
  console.log(chalk.blue.bgYellowBright("Congratulations! You have cleared level 1. Will you want to continue to level 2?"));
  if (readlineSync.keyInYN('Press Y if you want to continue, else press any other key')) {
    play(questions1);
    finalscore();
    highscore();
    }
  else {
    finalscore();
    highscore();
  }
}
else{
  console.log(chalk.red("Sorry! You can't proceed to next level."));
  finalscore();
  highscore();
}
