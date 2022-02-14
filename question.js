const quiz = [
	{
		q: 'Which month comes right before june ?',
		options: ['may', 'september', 'july', 'august'],
		answer: 0
	},
	{
		q: 'What color is an apple ?',
		options: ['orange', 'yellow', 'red', 'white'],
		answer: 2
	},
	{
		q: '3 + 4 = 7 ?',
		options: ['false', 'true'],
		answer: 1
	},
	{
		q: 'What time of day do we have breatfast ?',
		options: ['In the afternoon', 'In the evening', 'In the morning', 'At night'],
		answer: 2
	},
	{
		q: 'What is 22 + 6 ?',
		options: ['99', '56', '16', '28'],
		answer: 3
	},
];

// Quiz Question
let allQuestion = [];
let allOption = [];
let quiz_length = quiz.length;
let option_length = 0;
let current_question = [];
let quiz_question = document.querySelector(".question");
let question_length = quiz_length;
let random = 0;
let num = 0;
let score = 0;
let right = 0;
let percentage = 0.0;

function showQuestion(){
    for(let i = 0; i < quiz_length; i++){
        allQuestion.push(quiz[i]);
    }
    
    let random = Math.floor(Math.random()*question_length);
    setQuestion(random);

}
let time_left = 30;

function show_sec(){
    if(time_left > 0){
        time_left--;
        document.querySelector(".timersec").innerHTML = time_left;
    }else{
        time_left = 30;
        next();
    }
}

function show_timer(){
 	setInterval(show_sec,1000);
}

function setQuestion(index){
	if(num == quiz_length){
		time_left = 0;
		for(let i = 0; i < quiz_length; i++){
        	allQuestion.push(quiz[i]);
    	}
    	num = 0;
    	current_question = allQuestion[random];
		document.querySelector(".quiz_box").style.display = "none";
		document.querySelector(".start").style.display = "none";
		document.querySelector("#result").style.display = "block";
		totalScore();
		
	}
	current_question = allQuestion[random];
	quiz_question.innerHTML = `${allQuestion[random].q}`;
	option_length = current_question.options.length;
	
	for(let i = 0; i < option_length; i++){
		let box = document.querySelector(`#option_container${num+1}`);
		for(let k = 0; k < quiz_length; k ++){
			document.querySelector(`#option_container${k+1}`).style.display = "none";
		}
		box.style.display = "block";
		let options = document.createElement("div");
		options.innerHTML = current_question.options[i];
		options.id = i;
		options.classList.add("options");
		options.setAttribute("onclick","check(this)");
		box.appendChild(options);
	}
    allQuestion.splice(random,1);
    question_length = allQuestion.length;
    num++;
}

function next(){
	random = Math.floor(Math.random()* question_length);
	setQuestion(random);
	time_left = 30;
}

function check(element){
	if(element.id == current_question.answer){
		right++;
		element.style.border = "2px solid green";
		setTimeout(next,400);
	}else{
		element.style.border = "2px solid red";
		setTimeout(next,400);
	}
}

function totalScore(){
	let result = right / quiz_length;
	percentage = result * 100;
	document.querySelector(".score_text").innerHTML = `Total Score: ${right} <br> Percentage: ${percentage}.00%`;

}