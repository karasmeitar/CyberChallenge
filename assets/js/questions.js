function buildQuestion() {
    var field = document.getElementById("questionField");
    var question = new manager.getRandomQuestion();
    var legend = document.createElement("legend");
    legend.innerHTML = question.questionContent;
    field.appendChild(legend);
    for (var answerKey in PosibleAnswers) {
        var p = document.createElement("p");
        p.answer = answerKey;
        p.innerHTML = PosibleAnswers[answerKey].answerContent;
        field.appendChild(p);
    }
}

function runCode() {
    var resultElement = document.getElementById('resultText');
    resultElement.innerText = "";

    var codeText = document.getElementById('codeText').value;
    codeText = "(function() {" + codeText + "}())";
    try {

        var codeResult = eval(codeText);
        if (codeResult == 2) {
            resultElement.innerText = "Good Answer";
        }
        else {
            resultElement.innerText = "Wrong Answer";
        }
    }
    catch(err) {
        resultElement.innerText = "Wrong Answer";
    }
}



