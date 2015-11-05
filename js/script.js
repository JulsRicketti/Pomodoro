var workTime = 25;
var restTime = 15;
var repeats =4;
var longRestTime =30;
function setCustomTime(setWorkTime){

    workTime = setWorkTime;
    alert(workTime);
}

function setCutomRestTime(setRestTime){
    restTime = setRestTime;
}

function setCustomRepeat(setRepeatTime){
    repeats = setRepeatTime;
}

function traditionalPomodoroStart(){
    $(".new-form").hide();
    workOrRestMsg(true, "status");
    countDown(1500, "traditional");
}

function showNewForm(){
    $(".new-form").show();
}

function startCustomPomodoro(){
    $(".new-form").hide();
    workTime = document.getElementById('customTime').value;
    restTime=document.getElementById('customRestTime').value;
    repeats=document.getElementById('customRepeat').value;
    longRestTime =document.getElementById('customLongRestTime').value;
    workOrRestMsg(true, "status");
    countDown(workTime*60, "traditional");
}

function workOrRestMsg(isWorkTime, elem){
	var element = document.getElementById(elem);
    if(isWorkTime)
        element.innerHTML= "Work time!";
    else
        element.innerHTML = "Rest time!";

}

function countDown(seconds, elem){
	var element = document.getElementById(elem);
	var minutes=0;
	var totalSeconds=0;
    	
    if(seconds<=60){

		element.innerHTML = "Time remaining: "+seconds + " seconds";
	}
	else{
		var minutes = Math.floor(seconds/60);
		seconds= seconds -(minutes*60);
		
		element.innerHTML = "Time remaining: "+minutes+ " minutes and "+seconds+ " seconds";
	}
	
	seconds--;
	
	if(seconds==0){
		
		if(minutes==0){
			clearTimeout(timer);
			element.innerHTML = '<h2>Complete!</h2>';
		}
		else{
			minutes--;
			seconds=59;
			totalSeconds = seconds + (minutes*60);
			var timer = setTimeout ('countDown('+totalSeconds+', "'+elem+'")', 1000);
		}
	}
	else{
		if(seconds==0)
			seconds=59;
		totalSeconds = seconds + (minutes*60);
		var timer = setTimeout ('countDown('+totalSeconds+', "'+elem+'")', 1000);
	}

}	

