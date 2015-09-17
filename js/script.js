function countDown(secs, elem){
	var element = document.getElementById(elem);
	element.innerHTML = "Please wait for "+secs + " seconds";
	
	secs--;
	
	if(secs<0){
		clearTimeout(timer);
		element.innerHTML = '<h2>Complete!</h2>';
	}
	var timer = setTimeout ('countDown('+secs+', "'+elem+'")', 1000);
}