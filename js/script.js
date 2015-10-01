function countDown(seconds, elem){
	var element = document.getElementById(elem);
	var minutes=0;
	var totalSeconds=0;
	if(seconds<=60){

		element.innerHTML = "Please wait for "+seconds + " seconds";
	}
	else{
		var minutes = Math.floor(seconds/60);
		seconds= seconds -(minutes*60);
		
		element.innerHTML = "Please wait for "+minutes+ " minutes and "+seconds+ " seconds";
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

