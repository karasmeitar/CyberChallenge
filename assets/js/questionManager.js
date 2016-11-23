function questionManager () {

    let allQuestionAnswers = {
        "1": "",
        "1": ""
    };

    let allQuestionsDB = [
        {
            questionID: 1,
            questionContent: "",
            PosibleAnswers:[
                {
                    answerID:1,
                    answerContent: ""
                },
                {
                    answerID:2,
                    answerContent: ""
                },
                {
                    answerID:3,
                    answerContent: ""
                },
                {
                    answerID:4,
                    answerContent: ""
                }
            ]
        }
    ];

    this.getRandomQuestion = function() {
        // Return a random number between 0 and 10:
        let randomID = Math.floor((Math.random() * this.allQuestionsDB.length));
        return this.allQuestionsDB[randomID];
    }

    this.isAnswerCorrectForSpecificQuestions = function(questionID, answerID){
        let answer = this.allQuestionAnswers[questionID];
        return answer == answerID ? true : false;
    }
};