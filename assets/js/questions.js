var questionManager = (function(){
	var managerToReturn = {};
	
	managerToReturn.win = document.getElementById("win");
	managerToReturn.numberOfQuestionToPresent = 1;
	managerToReturn.currentQuestionIndex = 0;
 	managerToReturn.CorrectAnswerCounter = 0;
 	managerToReturn.WrongAnswerCounter = 0;
	managerToReturn.answerAlreadyShowed = {	};
	
	managerToReturn.resetManager = function(numberOfQuestionToPresent){
		managerToReturn.numberOfQuestionToPresent = numberOfQuestionToPresent;
		managerToReturn.answerAlreadyShowed = {};
	}

	managerToReturn.clearChildNodes = function(){
		managerToReturn.win.innerHTML = "";
	}

	managerToReturn.buildQuestion = function (isAmerican, callback) {
		managerToReturn.win.style.display='block';
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
						managerToReturn.callback({
							correctAnswer: managerToReturn.CorrectAnswerCounter,
							wrongAnswer: managerToReturn.WrongAnswerCounter						
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


// function runCode() {
//     var resultElement = document.getElementById('resultText');
//     resultElement.innerText = "";

//     var codeText = document.getElementById('codeText').value;
//     codeText = "(function() {" + codeText + "}())";
//     try {

//         var codeResult = eval(codeText);
//         if (codeResult == 2) {
//             resultElement.innerText = "Good Answer";
//         }
//         else {
//             resultElement.innerText = "Wrong Answer";
//         }
//     }
//     catch(err) {
//         resultElement.innerText = "Wrong Answer";
//     }
// }
