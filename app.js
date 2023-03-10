const getTime = () => {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour == 0) {
    hour = 12;
  }

  // for adding 0 (Zero) at front, when time in single digit
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;
  document.getElementById("millisecond").innerHTML = millisecond;
}

const greetings = () => {
  let time = new Date();
  let hour = time.getHours();

  let greet = "";

  if (hour <= 4) {
    greet = "Good Night ";
  } else if (hour <= 11) {
    greet = "Good Morning ";
  } else if (hour <= 16) {
    greet = "Good Afternoon ";
  } else if (hour <= 20) {
    greet = "Good Evening ";
  } else {
    greet = "Good Night ";
  }

  document.getElementById("greetings").innerHTML = greet.toUpperCase();

  let day_night = "AM";

  if (hour > 12) {
    day_night = "PM";
  }
  document.getElementById("am-pm").innerHTML = day_night;
}

greetings();
setInterval(getTime, 1000);
