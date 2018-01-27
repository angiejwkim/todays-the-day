function getDate(){
	var now = new Date();
	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

	var day = days[now.getDay()];
	var month = months[now.getMonth()];
	var dateFormat = day + ", " + month + " " + now.getDay() + " " + now.getFullYear();
	document.getElementById("date").innerHTML =  dateFormat;
}

function getTime() {
	var today = new Date();
	var hrs = today.getHours();
	var mins = today.getMinutes();
	var timeFormat = hrs + ":" + mins

	document.getByElementId('time').innerHTML = timeFormat;