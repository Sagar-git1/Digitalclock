function Time() {
// Creating object of the Date class
var date = new Date();
console.log(date);
 // Get current hour
var hours = date.getHours();
 // Get current minute
var minutes = date.getMinutes();
 // Get current second
var seconds = date.getSeconds();
 // Variable to store AM / PM
var period = "";
  // Assigning AM / PM according to the current hour
 if(hours >= 12){
    period = "PM";
 }else{
    period = "AM";
 }
 // Converting the hour in 12-hour format
 if (hours == 0){
    hours = 12;
 }else if(hours > 12){
    hours = hours -12;
 }
 hours = update(hours);
 minutes = update(minutes);
 seconds = update(seconds);
 document.getElementById("digi-clock").innerText = hours +" : " + minutes +" : " + seconds +" "+ period;
 // Set Timer to 1 sec (1000 ms)
 setTimeout(Time,1000);
}

function update(t){
    if(t<10){
        return "0" + t;
    }else {
        return t;
    }
 }
 Time();