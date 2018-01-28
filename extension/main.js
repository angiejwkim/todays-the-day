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
	if (i > 12) {
		i = i-12;
		return i;
	}
	else if (i == 0){
		return 12;
	}
	else {
		return i;
	}
}

function updateDay(i) {
	if (i > 12) {return "PM";}
	else {return "AM";}
}

window.onload = getTime()
window.onload = chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
  // Use the token.
  /*$.get(
    "https://www.googleapis.com/calendar/v3/users/me/calendarList?access_token="+token,
    function(data) {
       console.log(data);
    }
);*/
today = new Date();
endDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
$.ajax({
  url: "https://www.googleapis.com/calendar/v3/calendars/primary/events?access_token="+token,
  type: "get", //send it through get method
  data: { 
    orderBy: "startTime",
    maxResults: 5,
    timeMin: (today).toISOString(),
    timeMax: (endDay).toISOString(),
    singleEvents: true
  },
  success: function(response) {
  nextEvents = response.items;
    console.log(nextEvents);
  },
  error: function(xhr) {
    //Do Something to handle error
    //ADDD STUFF
    console.log(xhr)
  }
});
});

function getWeather() {

}

function getLocation() {
	var loc = document.getElementById("location");
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition();
    } else { 
        loc.innerHTML = "Geolocation is not supported by this browser.";
    }
}



