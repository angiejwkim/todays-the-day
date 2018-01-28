function getTime(){
	var now = new Date();
	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

	var day = days[now.getDay()];
	var month = months[now.getMonth()];
	var dateFormat = day + ", " + month + " " + now.getDate() + ", " + now.getFullYear();
	document.getElementById("date").innerHTML =  dateFormat;

	var today = new Date();
	var hr = today.getHours();
	var min = today.getMinutes();
	m = updateDay(hr);
	hr = updateHours(hr);
	min = updateMins(min);
	var timeFormat = hr + ":" + min + " " + m;
	document.getElementById('time').innerHTML = timeFormat;
	var t = setTimeout(getTime, 500);
}

function updateMins(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function updateHours(i) {
	if (i > 12) {i = i-12};
	return i;
}

function updateDay(i) {
	if (i > 12) {return "PM";}
	else {return "AM";}
}

window.onload = getTime()
