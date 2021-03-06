var questionManager = (function(){
	var managerToReturn = {};
	
	managerToReturn.win = document.getElementById("win");
	managerToReturn.fade = document.getElementById('fade');
	
	managerToReturn.beginNewQuiz = function(numberOfQuestionToPresent, isAmerican, isParty, callback){
		managerToReturn.clearChildNodes();
		managerToReturn.numberOfQuestionToPresent = numberOfQuestionToPresent;
		managerToReturn.callback = callback;
		managerToReturn.answerAlreadyShowed = {};
		managerToReturn.currentQuestionIndex = 0;
 		managerToReturn.CorrectAnswerCounter = 0;
 		managerToReturn.WrongAnswerCounter = 0;
		
		managerToReturn.buildQuestion(isAmerican, isParty);	
	}

	managerToReturn.clearChildNodes = function(){
		managerToReturn.win.innerHTML = "";
	}

	managerToReturn.buildQuestion = function (isAmerican, isParty) {
		managerToReturn.win.style.display='block';
		managerToReturn.fade.style.display='block';

		if (isAmerican) {
			managerToReturn.createAmricanQuestion(isParty);
		}
		else {
			managerToReturn.createCodeQuestion();
		}
	}

	managerToReturn.createCodeQuestion = function() {

		var titleTag = document.createElement("h1");
		titleTag.innerHTML = "Enter a one line code that returns 5 when the input is 3 and 3 when the input is 5";
		titleTag.classList.add("american-question");
		managerToReturn.win.appendChild(titleTag);

		var input = document.createElement("textarea");
		input.value = "function(x) {\n\n\n}";
        input.classList.add("code-question");
		managerToReturn.win.appendChild(input);

		var runBtn = document.createElement("button");
        runBtn.classList.add("run-code-button");
		runBtn.innerText = "Run";

		runBtn.onclick = function(){
			var codeText5 = "(" + input.value  + "(3))";
            var codeText3 = "(" + input.value  + "(5))";

			try {
				var result = false;
				var codeResult5 = eval(codeText5);
                var codeResult3 = eval(codeText3);
				if (codeResult5 == 5 && codeResult3 == 3) {
					result = true;
					managerToReturn.CorrectAnswerCounter++;
				}
				else {
					managerToReturn.WrongAnswerCounter++;
				}
			}
			catch(err) {
				managerToReturn.WrongAnswerCounter++;
			}

			managerToReturn.clearChildNodes();

			var iconResultDiv = document.createElement("div");
			iconResultDiv.classList.add(result ? "correctIcon" : "wrongIcon");

			var nextButton = document.createElement("button");
			nextButton.innerText = "Next Quiz";
			nextButton.classList.add("next-quiz-button");

			nextButton.onclick = function (e) {					
				managerToReturn.fade.style.display='none';
				managerToReturn.win.style.display='none';

				managerToReturn.callback({
					correctAnswer: managerToReturn.CorrectAnswerCounter,
					wrongAnswer: managerToReturn.WrongAnswerCounter						
				});
			}

			managerToReturn.win.appendChild(iconResultDiv);
			managerToReturn.win.appendChild(nextButton);	
		}
		
		managerToReturn.win.appendChild(runBtn);
	}

 	managerToReturn.createAmricanQuestion = function(isParty) {
		managerToReturn.clearChildNodes(); 
		managerToReturn.currentQuestionIndex++;
		
		var question = manager.getRandomAmericanQuestion(isParty);
		
		while (managerToReturn.answerAlreadyShowed[question.questionID] != undefined) {
			question = manager.getRandomAmericanQuestion(isParty);
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
					managerToReturn.WrongAnswerCounter++;
				}

				var nextButton = document.createElement("button");
				
				if (managerToReturn.currentQuestionIndex === managerToReturn.numberOfQuestionToPresent) {
					nextButton.innerText = "Next Quiz";
                    nextButton.classList.add("next-quiz-button");
				}
				else{
					nextButton.innerText = "Next Question";
                    nextButton.classList.add("next-question-button");
				}

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
						managerToReturn.createAmricanQuestion(isParty);
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
