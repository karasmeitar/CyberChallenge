
var manager = (function() {

	let returnManager = {};

    returnManager.allQuestionAnswers = {
        "1": "3",
        "2": "4",
        "3": "2",
        "4":"1"
    };

    returnManager.allAmericanPartyQuestionsDB =[
        {
            questionID: 3,
            questionContent: "Hackathon requires margaritas, what should we definitely have?",
            PosibleAnswers:[
                {
                    answerID:1,
                    answerContent: "Sugar"
                },
                {
                    answerID:2,
                    answerContent: " Salt"
                }
            ]
        },
        {
            questionID: 4,
            questionContent: "Last Purim party , our CEO dressed up as James Bond, how did he get his drink?",
            PosibleAnswers:[
                {
                    answerID:1,
                    answerContent: "Shaken"
                },
                {
                    answerID:2,
                    answerContent: "Stirred"
                },
                {
                    answerID:3,
                    answerContent: "O(n lg n)"
                },
                {
                    answerID:4,
                    answerContent: "O(n)"
                }
            ]
        }
    ];

    returnManager.allAmericanQuestionsDB = [
        {
            questionID: 1,
            questionContent: "Which sorting algorithm has an upper bound of O(n lg n)?",
            PosibleAnswers:[
                {
                    answerID:1,
                    answerContent: "Bubble Sort"
                },
                {
                    answerID:2,
                    answerContent: "Insertion Sort"
                },
                {
                    answerID:3,
                    answerContent: "Merge Sort"
                },
                {
                    answerID:4,
                    answerContent: "Quicksort"
                }
            ]
        },
        {
            questionID: 2,
            questionContent: "What is the worst case running time for finding an element in a Splay Tree?",
            PosibleAnswers:[
                {
                    answerID:1,
                    answerContent: "O(1)"
                },
                {
                    answerID:2,
                    answerContent: "O(lg n)"
                },
                {
                    answerID:3,
                    answerContent: "O(n lg n)"
                },
                {
                    answerID:4,
                    answerContent: "O(n)"
                }
            ]
        }
    ];
	
	returnManager.getRandomAmericanQuestion = function(isParty) {
        // Return a random number between 0 and 10:
        if (!isParty){
            let randomID = Math.floor((Math.random() * this.allAmericanQuestionsDB.length));
            return this.allAmericanQuestionsDB[randomID];
        }else {
            let randomID = Math.floor((Math.random() * this.allAmericanPartyQuestionsDB.length));
            return this.allAmericanPartyQuestionsDB[randomID];
        }
    }

    returnManager.isAnswerCorrectForSpecificQuestions = function(questionID, answerID){
        let answer = this.allQuestionAnswers[questionID];
        return answer == answerID ? true : false;
    }
		
	return returnManager;
}());