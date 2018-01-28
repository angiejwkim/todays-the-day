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
    if(nextEvents.length==0){
    	var messagetext = document.createTextNode("No more events today!");
    	var innerh3 = document.createElement("h3");
    	innerh3.appendChild(messagetext);
		document.getElementById("inner events").append(innerh3);;
    }else{
	    //document.getElementById("inner events").innerHTML="";
	    for(var i in nextEvents){
	    	var temp = document.createElement("div");
	    	temp.id = "eventsect";
	    	var timetext = document.createTextNode(nextEvents[0].start.dateTime);
			var summarytext = document.createTextNode(nextEvents[i].summary);
			var innerdiv = document.createElement("div");
			innerdiv.appendChild(timetext);
			innerdiv.id = "event";
			var innerh3 = document.createElement("h3");
			innerh3.appendChild(summarytext);
			temp.appendChild(innerdiv);
			temp.appendChild(innerh3);
			console.log(temp)
			document.getElementById("inner events").append(temp);
	    }
	}
    //document.getElementById("inner events");

  },
  error: function(xhr) {
    //Do Something to handle error
    //ADDD STUFF
    console.log(xhr)
  }
});
});

/*
$.ajax({
	url: "http://localhost:8000/weather",
	type: "get",
	data: {
		latitude: getLocation().coords.latitude,
		longtitude: getLocation().coords.longitude
	}
});

function getWeather() {
	var weatherFormat = document.getElementById("weather");
	var loc = getLocation();
}

function getLocation() {
	//var loc = document.getElementById("location");
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition();
        //^Failed to execute 'getCurrentPosition' on 'Geolocation': 1 argument required, but only 0 present.
    } else { 
        loc.innerHTML = "Geolocation is not supported by this browser.";
    }
}*/



