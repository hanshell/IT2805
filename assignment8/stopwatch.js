var millis=0;
var seconds=0;
var minutes=0;
var hours=0;

var myVar;
window.onload=function(){

	document.getElementById("toggle-button").onclick=function(){
		if(!myVar){
			myVar=window.setInterval(myTimer, 10)
		}
		else{
			window.clearInterval(myVar);
			myVar=null;
		}
	}
	document.getElementById("reset-button").onclick=function(){
		window.clearInterval(myVar);
		millis=0;
		seconds=0;
		minutes=0;
		hours=0;
		myVar=null;
		document.getElementById("display-area").innerHTML="00:00:00.000";
	}
};

function myTimer(){
	millis+=10;
	if(millis>=1000){
		millis=0;
		seconds+=1;
	}
	if(seconds>=60){
		seconds=0;
		minutes+=1;
	}
	if(minutes>=60){
		minutes=0;
		hours+=1;
	}
	document.getElementById("display-area").innerHTML=hours+":"+minutes+":"+seconds+"."+millis;
	console.log("Working!")

}
function stopTimer(){
	clearInterval(myVar);
}