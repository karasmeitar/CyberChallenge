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
}