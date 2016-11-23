var manager = (function() {

	let returnManager = {};

    returnManager.allQuestionAnswers = {
        "1": "1"
    };

    returnManager.allQuestionsDB = [
        {
            questionID: 1,
            questionContent: "How do you make each word in a text start with a capital letter?",
            PosibleAnswers:[
                {
                    answerID:1,
                    answerContent: "text-transform:capitalize"
                },
                {
                    answerID:2,
                    answerContent: "text-transform:uppercase"
                },
                {
                    answerID:3,
                    answerContent: "You can't do that with CSS"
                },
                {
                    answerID:4,
                    answerContent: "text:capitalize"
                }
            ]
        }
    ];
	
	returnManager.getRandomQuestion = function() {
        // Return a random number between 0 and 10:
        let randomID = Math.floor((Math.random() * this.allQuestionsDB.length));
        return this.allQuestionsDB[randomID];
    }

    returnManager.isAnswerCorrectForSpecificQuestions = function(questionID, answerID){
        let answer = this.allQuestionAnswers[questionID];
        return answer == answerID ? true : false;
    }
		
	return returnManager;

    
}());
