var questionManager = (function(){
	var managerToReturn = {};
	
	managerToReturn.win = document.getElementById("win");
	managerToReturn.fade = document.getElementById('fade');
	
	managerToReturn.beginNewQuiz = function(numberOfQuestionToPresent, isAmerican, callback){
		managerToReturn.numberOfQuestionToPresent = numberOfQuestionToPresent;
		managerToReturn.callback = callback;
		managerToReturn.answerAlreadyShowed = {};
		managerToReturn.currentQuestionIndex = 0;
 		managerToReturn.CorrectAnswerCounter = 0;
 		managerToReturn.WrongAnswerCounter = 0;
		managerToReturn.answerAlreadyShowed = {};
		
		managerToReturn.buildQuestion(isAmerican);	
	}

	managerToReturn.clearChildNodes = function(){
		managerToReturn.win.innerHTML = "";
	}

	managerToReturn.buildQuestion = function (isAmerican) {
		managerToReturn.win.style.display='block';
		managerToReturn.fade.style.display='block';

		if (isAmerican) {
			managerToReturn.createAmricanQuestion();
		}
		else {

		}
	}

	managerToReturn.runCode = function() {
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

 	managerToReturn.createAmricanQuestion = function() {
		managerToReturn.currentQuestionIndex++;
		
		var question = manager.getRandomQuestion();
		
		while (managerToReturn.answerAlreadyShowed[question.questionID] != undefined) {
			question = manager.getRandomQuestion();
		}

		managerToReturn.answerAlreadyShowed[question.questionID] = true;

		var titleTag = document.createElement("h1");
		titleTag.innerHTML = question.questionContent;
		titleTag.classList.add("american-question");
		managerToReturn.win.appendChild(titleTag);

        var answers = document.createElement("div");
        answers.classList.add("american-answer-list");
        managerToReturn.win.appendChild(answers);

		for	(var i =1; i < question.PosibleAnswers.length + 1; i++) {
			var currAnswer = document.createElement("h3");
			currAnswer.innerHTML = question.PosibleAnswers[i - 1].answerContent;
			currAnswer.setAttribute("data-answerID", question.PosibleAnswers[i - 1].answerID);
            currAnswer.classList.add("american-answer");

			currAnswer.onclick = function(e) {
				var result = manager.isAnswerCorrectForSpecificQuestions(question.questionID, e.target.attributes[0].value);
				
				managerToReturn.clearChildNodes();

				var iconResultDiv = document.createElement("div");
				iconResultDiv.classList.add(result ? "correctIcon" : "wrongIcon");
				
				if (result){
					managerToReturn.CorrectAnswerCounter++;
				}else {
					CorrectAnswerCounter.WrongAnswerCounter++;
				}

				var nextButton = document.createElement("button");
				nextButton.classList.add("next-button");

				nextButton.onclick = function (e) {
					if (managerToReturn.currentQuestionIndex === managerToReturn.numberOfQuestionToPresent) {
						
						managerToReturn.fade.style.display='none';
						managerToReturn.win.style.display='none';

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

            answers.appendChild(currAnswer);
		}
	}

	return managerToReturn;
}());
