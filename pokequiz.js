//Quiz Bank 
const pokequiz = [
        {question: "How many different Pokemon can Eevee evolve into?", answer: 8},
        {question: "How many Pokemon types exist?", answer: 18},
        {question: "What year did Pokemon Red and Blue release in America", answer: 1998},
        {question: "How much damage did the original base set Charizard's fire spin attack do?", answer: 120}
    ], correctQuestions = [], incorrectQuestions = [];

//Setting Initial Vars
let correct = 0;
var html;

//Quiz logic 

pokequiz.forEach(function (quiz) {
    const response = parseInt(window.prompt(quiz.question));
    if(response === quiz.answer) {
        correct++;
        correctQuestions.push(quiz.question);  
    }   else {
        incorrectQuestions.push(quiz.question);  
    }
});

//Print function
function print(message) {
  document.write(message);
}

//function for displaying questions
function buildList (arr) {
    var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i += 1) {
        listHTML += '<li>' + arr[i] + '</li>' //removed errant semicolon here that looked bad
    }
    listHTML += '</ol>';
    return listHTML;
}

//HTML for outputting questions
html = "You got " + correct + " question(s) right."
html += '<h2> You got these questions correct:</h2>';
html += buildList(correctQuestions);
html += '<h2> You got these questions wrong: </h2>';
html += buildList(incorrectQuestions);

//Output
print(html);