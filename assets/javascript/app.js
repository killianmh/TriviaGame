
var trivia = {
	
	questions: [
		{
			q: "What is my name?",
			right: "Matt",
			wrong1: "Bill",
			wrong2: "Steve",
			wrong3: "Ted"
		 },
		 
		 {
			q: "Question 2",
			right: "right",
			wrong1: "wrong1",
			wrong2: "wrong2",
			wrong3: "wrong3"
		 },
		 
		 {
			q: "Question 3",
			right: "right",
			wrong1: "wrong1",
			wrong2: "wrong2",
			wrong3: "wrong3"
		 },
		 
		 {
			q: "Question 4",
			right: "right",
			wrong1: "wrong1",
			wrong2: "wrong2",
			wrong3: "wrong3"
		 }
	],

	timerRunning: false,
	score: 0,
	progress: 0,
	time: 25,

	
	currentQuestion: "",
	rightAnswer: "",
	wrongAnswer1:"",
	wrongAnswer2:"",
	wrongAnswer3:"",

	pastQuestion: -1,
	currentQIndex: 0,

	answers: [],
	rand: 0,

	startClick: function(){
		$(".startbtn").on("click", function(){
			console.log("poop");
			$(".startbtn").off("click");
			$(".startbtnRow").remove();
			trivia.question();
		});
	},

	question: function(){
		console.log("haha");
		if(trivia.progress != trivia.questions.length){

			// store new question and all answer options as variables
			currentQIndex = this.pastQuestion + 1;
			currentQuestion = this.questions[this.pastQuestion + 1].q;
			rightAnswer = this.questions[this.pastQuestion + 1].right;
			wrongAnswer1 = this.questions[this.pastQuestion + 1].wrong1;
			wrongAnswer2 = this.questions[this.pastQuestion + 1].wrong2;
			wrongAnswer3 = this.questions[this.pastQuestion + 1].wrong3;

			// store answers in answers array:

			trivia.answers = [
					rightAnswer,
					wrongAnswer1,
					wrongAnswer2,
					wrongAnswer3
			];

			// create divs for question:
			var questionDiv = $("<div>");
			questionDiv.addClass("row question");
			questionDiv.text(currentQuestion);
			$(".box").append(questionDiv);

			// create 4 columns (middle two have buttons) for optionRow1:

			var optionRow1Col1Div = $("<div>");
			optionRow1Col1Div.addClass("col-md-2");
			$(".optionRow1").append(optionRow1Col1Div);

			var optionRow1Col2Div = $("<div>");
			optionRow1Col2Div.addClass("col-md-4 option");
			$(".optionRow1").append(optionRow1Col2Div);

				var optionBtn1 = $("<button>");
				optionBtn1.addClass("btn questionbtn qbtn1");
				rand = Math.floor(Math.random()*(4));
				optionBtn1.text(trivia.answers[rand]);
				trivia.answers.splice(rand,1);
				$(optionRow1Col2Div).append(optionBtn1);

			var optionRow1Col3Div = $("<div>");
			optionRow1Col3Div.addClass("col-md-4 option");
			$(".optionRow1").append(optionRow1Col3Div);

				var optionBtn2 = $("<button>");
				optionBtn2.addClass("btn questionbtn qbtn2");
				rand = Math.floor(Math.random()*(3));
				optionBtn2.text(trivia.answers[rand]);
				trivia.answers.splice(rand,1);
				$(optionRow1Col3Div).append(optionBtn2);

			var optionRow1Col4Div = $("<div>");
			optionRow1Col4Div.addClass("col-md-2");
			$(".optionRow1").append(optionRow1Col4Div);

			// create 4 columns (middle two have buttons) for optionRow2:

			var optionRow2Col1Div = $("<div>");
			optionRow2Col1Div.addClass("col-md-2");
			$(".optionRow2").append(optionRow2Col1Div);

			var optionRow2Col2Div = $("<div>");
			optionRow2Col2Div.addClass("col-md-4 option");
			$(".optionRow2").append(optionRow2Col2Div);

				var optionBtn3 = $("<button>");
				optionBtn3.addClass("btn questionbtn qbtn3");
				rand = Math.floor(Math.random()*(2));
				optionBtn3.text(trivia.answers[rand]);
				trivia.answers.splice(rand,1);
				$(optionRow2Col2Div).append(optionBtn3);

			var optionRow2Col3Div = $("<div>");
			optionRow2Col3Div.addClass("col-md-4 option");
			$(".optionRow2").append(optionRow2Col3Div);

				var optionBtn4 = $("<button>");
				optionBtn4.addClass("btn questionbtn qbtn4");
				optionBtn4.text(trivia.answers[0]);
				trivia.answers.splice(0,1);
				$(optionRow2Col3Div).append(optionBtn4);

			var optionRow2Col4Div = $("<div>");
			optionRow2Col4Div.addClass("col-md-2");
			$(".optionRow2").append(optionRow2Col4Div);

			// create divs for timer and intialize timer:
			var timeDisplayRow = $("<div>");
			timeDisplayRow.addClass("row htmlTimer");
			$(".box").append(timeDisplayRow);

			var timeDisplayCol = $("<div>");
			timeDisplayCol.addClass("col-md-12 timer");
			$(timeDisplayRow).append(timeDisplayCol);

			timerRunning = true;
			intervalId = setInterval(trivia.timer,1000);
			
			// start choice on click function
			this.optionBtnClicks();
		}
		else{
			trivia.done();
		}
	},

	timer: function(){
		if(trivia.time > 0){
			trivia.time --;
			$(".timer").html(trivia.time);
		}
		else{
			trivia.outOfTime();
		}
		
	},

	outOfTime: function(){

	},

	optionBtnClicks: function(){
		$(".questionbtn").on("click", function(){
			$(".questionbtn").off("click");
			console.log($(this).text());
			if($(this).text() === trivia.questions[currentQIndex].right){
				console.log("right!");
			}

		});
	}


};



//start game when window loads:
window.onload = function(){
	trivia.startClick();
};