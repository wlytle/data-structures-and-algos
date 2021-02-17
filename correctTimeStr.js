// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

function timeCorrect(timestring) {
  if (!timestring?.length || !timestring.match(/\d{2}:\d{2}:\d{2}/))
    return null;
  // get hours mins and secs;
  let times = timestring.match(/(\d{2}):(\d{2}):(\d{2})/);
  let hr = +times[1];
  let min = +times[2];
  let sec = +times[3];

  if (sec >= 60) {
    sec = sec % 60;
    min += 1;
  }

  if (min >= 60) {
    min = min % 60;
    hr += 1;
  }

  if (hr >= 24) {
    hr = hr % 24;
  }

  if (sec < 10) sec = `0${sec}`;
  if (min < 10) min = `0${min}`;
  if (hr < 10) hr = `0${hr}`;

  return `${hr}:${min}:${sec}`;
}

console.log(timeCorrect("09:10:01"));
//   "09:10:01" -> "09:10:01"
console.log(timeCorrect("11:70:10"));
// "11:70:10" -> "12:10:10"
console.log(timeCorrect("19:99:99"));
// "19:99:99" -> "20:40:39"
console.log(timeCorrect("24:01:01"));
// "24:01:01" -> "00:01:01"
console.log(timeCorrect(""));
console.log(timeCorrect("001122"));
console.log(timeCorrect("00;11;22"));
