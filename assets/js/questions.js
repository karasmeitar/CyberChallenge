<<<<<<< HEAD
var questionManager = (function(){
	var managerToReturn = {};
	
	managerToReturn.win = document.getElementById("win");
	managerToReturn.numberOfQuestionToPresent = 1;
	managerToReturn.currentQuestionIndex = 0;
 	managerToReturn.CorrectAnswerCounter = 0;
 	managerToReturn.WrongAnswerCounter = 0;
	managerToReturn.answerAlreadyShowed = {

	}
	

	managerToReturn.resetManager = function(numberOfQuestionToPresent){
		managerToReturn.numberOfQuestionToPresent = numberOfQuestionToPresent;
		managerToReturn.answerAlreadyShowed = {};
	}

	managerToReturn.clearChildNodes = function(){
		managerToReturn.win.innerHTML = "";
	}

	managerToReturn.buildQuestion = function (isAmerican, callback) {
		managerToReturn.callback = callback;

		if (isAmerican) {
			managerToReturn.createAmricanQuestion();
		}
		else {

		}
	}

 	managerToReturn.createAmricanQuestion = function() {
		managerToReturn.currentQuestionIndex++;
		
		var question = manager.getRandomQuestion();
		
		while (managerToReturn.answerAlreadyShowed[question.questionID] != undefined) {
			question = manager.getRandomQuestion();
		}

		managerToReturn.answerAlreadyShowed[question.questionID] = true;

		var titleTag = document.createElement("h1");
		titleTag.innerHTML = question.questionContent;
		managerToReturn.win.appendChild(titleTag);

		for	(var i =1; i < question.PosibleAnswers.length + 1; i++) {
			var currAnswer = document.createElement("h3");
			currAnswer.innerHTML = i.toString() + ") " + question.PosibleAnswers[i - 1].answerContent;
			currAnswer.setAttribute("data-answerID", question.PosibleAnswers[i - 1].answerID);
			
			currAnswer.onclick = function(e) {
				var result = manager.isAnswerCorrectForSpecificQuestions(question.questionID, e.target.attributes[0].value);
				
				managerToReturn.clearChildNodes();

				var iconResultDiv = document.createElement("div");
				iconResultDiv.classList.add(result ? "successIcon" : "errorIcon");
				
				if (result){
					managerToReturn.CorrectAnswerCounter++;
				}else {
					CorrectAnswerCounter.WrongAnswerCounter++;
				}

				var nextButton = document.createElement("button");
				nextButton.onclick = function (e) {
					if (managerToReturn.currentQuestionIndex === managerToReturn.numberOfQuestionToPresent) {
						document.getElementById('win').style.display='none';
						callback({
							
						});
					}
					else {
						managerToReturn.createAmricanQuestion();
					}
				}

				managerToReturn.win.appendChild(iconResultDiv);
				managerToReturn.win.appendChild(nextButton);
			};

			managerToReturn.win.appendChild(currAnswer);
		}
	}

	return managerToReturn;
}());

=======
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



function buildQuestion() {
	var field = document.getElementById("questionField");
	var question = manager.getRandomQuestion();
	var legend = document.createElement("legend");
	legend.innerHTML = question.questionContent;
	field.appendChild(legend);
	for (var answerKey in PosibleAnswers) {
		var p = document.createElement("p");
		p.answer = answerKey;
		p.innerHTML = PosibleAnswers[answerKey].answerContent;
		field.appendChild(p);
	}
};
>>>>>>> ed33f6f6d27919c3d3293c98a8d982db95e54cb1
