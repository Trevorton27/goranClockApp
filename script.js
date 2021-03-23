// call the function

let ampm;
function displayClockTime() {
  const time = new Date();
  let hours = displayAmPm(time.getHours());
  const minutes = addLeadingZero(time.getMinutes());
  const seconds = addLeadingZero(time.getSeconds());

  const timeDisplay = `${hours}:${minutes}:${seconds} ${amPm}`;
  document.getElementById('time').textContent = timeDisplay;
}

function displayClockDate() {
  const today = new Date();
  let month = months[today.getMonth()];
  let day = days[today.getDay()];
  let date = convertDateToOrdinal(today.getDate());
  let year = today.getFullYear();
  const dateDisplay = `${day}, ${month} ${date} ${year}`;
  document.getElementById('date').textContent = dateDisplay;
}

const days = [
  'Sunday',
  'Monday',
  'Tueseday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function displayAmPm(hour) {
  const isAm = hour < 12 || hour === 0;
  amPm = isAm ? 'AM' : 'PM';
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}

function convertDateToOrdinal(number) {
  if (number < 10 || number > 20) {
    switch (number % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
}

displayClockDate();
displayClockTime();
setInterval(displayClockTime, 1000);
