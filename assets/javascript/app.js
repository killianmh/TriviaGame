
var trivia = {
	
	questions: [
		{
			q: "Which car is currently the world's fastest production car?",
			right: "Koenigsegg Agera",
			wrong1: "Bugatti Veyron Super Sport",
			wrong2: "Porsche 918 Spyder",
			wrong3: "Hennessey Venom GT",
			img: "koenigsegg.jpg"
		 },
		 
		 {
			q: "Which American-built car famously won 1st, 2nd, and 3rd at the 24 Hours of Le Mans race in 1966?",
			right: "Ford GT40",
			wrong1: "Dodge Viper",
			wrong2: "Chevy Corvette",
			wrong3: "Shelby Cobra",
			img: "fordgt40.jpg"
		 },
		 
		 {
			q: "What year did the first Corvette come out?",
			right: "1953",
			wrong1: "1958",
			wrong2: "1948",
			wrong3: "1959",
			img: "corvette.jpg"
		 },
		 
		 {
			q: "How much horsepower does the Bugatti Veyron output?",
			right: "1200 hp",
			wrong1: "900 hp",
			wrong2: "945 hp",
			wrong3: "1160 hp",
			img: "bugatti.jpg"
		 },

		 {
		 	q: "Where was the production plant for the DeLorean DMC-12?",
			right: "Northern Ireland",
			wrong1: "USA",
			wrong2: "Mexico",
			wrong3: "Italy",
			img: "delorean.jpg"
		 }
	],

	timerRunning: false,
	score: 0,
	progress: 0,
	time: 15,
	questionsLeft: 5,

	
	currentQuestion: "",
	rightAnswer: "",
	wrongAnswer1:"",
	wrongAnswer2:"",
	wrongAnswer3:"",

	pastQuestion: -1,
	currentQIndex: 0,

	answers: [],
	rand: 0,

	start: function(){

		var startBtnRow = $("<div>");
		startBtnRow.addClass("row startbtnRow");
		$(".box").append(startBtnRow);

		var emptyDivLeft =$("<div>");
		emptyDivLeft.addClass("col-md-4");
		$(".startbtnRow").append(emptyDivLeft);

		var startBtnCol = $("<div>");
		startBtnCol.addClass("col-md-4 startBtnCol");
		$(".startbtnRow").append(startBtnCol);
		var startBtn = $("<button>");
		startBtn.addClass("btn startbtn");
		startBtn.text("Start");
		$(".startBtnCol").append(startBtn);

		var emptyDivRight =$("<div>");
		emptyDivRight.addClass("col-md-4");
		$(".startbtnRow").append(emptyDivRight);

		

		trivia.startClick();

	},

	startClick: function(){
		$(".startbtn").on("click", function(){
			console.log("poop");
			$(".startbtn").off("click");
			$(".box").empty();
			$(".progressDisplay").append(trivia.questionsLeft);
			trivia.question();
		});
	},

	question: function(){
		console.log("haha");
		if(trivia.progress != trivia.questions.length){

			// store new question and all answer options as variables
			this.currentQIndex = this.pastQuestion + 1;
			this.currentQuestion = this.questions[this.pastQuestion + 1].q;
			this.rightAnswer = this.questions[this.pastQuestion + 1].right;
			this.wrongAnswer1 = this.questions[this.pastQuestion + 1].wrong1;
			this.wrongAnswer2 = this.questions[this.pastQuestion + 1].wrong2;
			this.wrongAnswer3 = this.questions[this.pastQuestion + 1].wrong3;

			// store answers in answers array:

			trivia.answers = [
					this.rightAnswer,
					this.wrongAnswer1,
					this.wrongAnswer2,
					this.wrongAnswer3
			];

			// create divs for question:
			var questionDiv = $("<div>");
			questionDiv.addClass("row question");
			questionDiv.text(this.currentQuestion);
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
		trivia.pastQuestion = trivia.currentQIndex;
		clearInterval(intervalId);
		timerRunning = false;
		trivia.time = 15;
		$(".htmlTimer").remove();
		$(".question").remove();
		$(".optionRow1").empty();
		$(".optionRow2").empty();

		var messageDiv = $("<div>");
		messageDiv.addClass("row message");
		messageDiv.text("Out of time! The answer is " + trivia.questions[trivia.currentQIndex].right);
		$(".box").append(messageDiv);

		var imageRowDiv = $("<div>");
		imageRowDiv.addClass("row imageRowDiv");
		var imageDiv = $("<div>");
		imageDiv.addClass("imageColDiv col-md-12");
		var image = $("<img>");
		image.addClass("answerImage")
		image.attr("src","assets/images/"+ this.questions[this.currentQIndex].img);
		$(".box").append(imageRowDiv);
		$(".imageRowDiv").append(imageDiv);
		$(".imageColDiv").append(image);

		trivia.progress ++;
		this.questionsLeft --;
		$(".progressDisplay").empty();
		$(".progressDisplay").append(this.questionsLeft);

		console.log(trivia.progress);

		setTimeout(this.pause,5000);
	},

	optionBtnClicks: function(){
		$(".questionbtn").on("click", function(){
			$(".questionbtn").off("click");
			trivia.progress ++;
			console.log(trivia.progress);
			trivia.pastQuestion = trivia.currentQIndex;
			clearInterval(intervalId);
			timerRunning = false;
			trivia.time = 15;
			$(".htmlTimer").remove();
			$(".question").remove();
			$(".optionRow1").empty();
			$(".optionRow2").empty();

			console.log($(this).text());
			if($(this).text() === trivia.questions[trivia.currentQIndex].right){
				console.log("right!");
				trivia.right();
			}
			else{
				trivia.wrong();
			}

		});
	},

	right: function(){
		this.score ++;

		$(".scoreDisplay").empty();
		$(".scoreDisplay").append(this.score);
		var messageDiv = $("<div>");
		messageDiv.addClass("row message");
		messageDiv.text("Correct!");
		$(".box").append(messageDiv);

		var imageRowDiv = $("<div>");
		imageRowDiv.addClass("row imageRowDiv");
		var imageDiv = $("<div>");
		imageDiv.addClass("imageColDiv col-md-12");
		var image = $("<img>");
		image.addClass("answerImage")
		image.attr("src","assets/images/"+ this.questions[this.currentQIndex].img);
		$(".box").append(imageRowDiv);
		$(".imageRowDiv").append(imageDiv);
		$(".imageColDiv").append(image);

		this.questionsLeft --;
		$(".progressDisplay").empty();
		$(".progressDisplay").append(this.questionsLeft);

		setTimeout(this.pause,5000);
	},

	wrong: function(){
		var messageDiv = $("<div>");
		messageDiv.addClass("row message");
		messageDiv.text("Wrong! The answer is " + trivia.questions[trivia.currentQIndex].right);
		$(".box").append(messageDiv);

		var imageRowDiv = $("<div>");
		imageRowDiv.addClass("row imageRowDiv");
		var imageDiv = $("<div>");
		imageDiv.addClass("imageColDiv col-md-12");
		var image = $("<img>");
		image.addClass("answerImage")
		image.attr("src","assets/images/"+ this.questions[this.currentQIndex].img);
		$(".box").append(imageRowDiv);
		$(".imageRowDiv").append(imageDiv);
		$(".imageColDiv").append(image);

		this.questionsLeft --;
		$(".progressDisplay").empty();
		$(".progressDisplay").append(this.questionsLeft);

		setTimeout(this.pause,5000);
	},

	pause: function(){
		$(".box").empty();
		trivia.question();
	},

	done: function(){
		$(".scoreDisplay").empty();
		$(".progressDisplay").empty();

		$(".box").empty();
		var messageDiv = $("<div>");
		messageDiv.addClass("row message");
		messageDiv.text("You're final score is " + trivia.score + " Would you like to play again?");
		$(".box").append(messageDiv);

		var restartBtnRow = $("<div>");
		restartBtnRow.addClass("row restartbtnRow");
		$(".box").append(restartBtnRow);

		var emptyDivLeft =$("<div>");
		emptyDivLeft.addClass("col-md-4");
		$(".restartbtnRow").append(emptyDivLeft);

		var startBtnCol = $("<div>");
		startBtnCol.addClass("col-md-4 startBtnCol");
		$(".restartbtnRow").append(startBtnCol);

		var startBtn = $("<button>");
		startBtn.addClass("btn startbtn");
		startBtn.text("Restart");
		$(".startBtnCol").append(startBtn);

		var emptyDivRight =$("<div>");
		emptyDivRight.addClass("col-md-4");
		$(".restartbtnRow").append(emptyDivRight);

		this.timerRunning = false;
		this.score= 0;
		this.progress= 0;
		this.time= 15;

	
		this.currentQuestion= "";
		this.rightAnswer= "";
		this.wrongAnswer1="";
		this.wrongAnswer2="";
		this.wrongAnswer3="";

		this.pastQuestion= -1;
		this.currentQIndex= 0;

		this.answers= [];
		this.rand= 0;

		this.questionsLeft = 5;


		trivia.startClick();
	}


};


//start game when window loads:
window.onload = function(){
	trivia.start();
};
