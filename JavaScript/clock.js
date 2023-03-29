const time = new Date();
const h = currentTime.getHours();
const m = currentTime.getMinutes();
const s = currentTime.getSeconds();
const diem = "AM";

function updateTime() {

  if (h == 0) {
    h = 12;
  }
  else if (h > 12) {
    h = h - 12;
    diem = "PM";
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  const DigiClock = document.getElementById("DigiClock");
  DigiClock.textContent = h + ":" + m + ":" + s + " " + diem;
  setTimeout('updateTime()', 1000);
}

alert("hi");
updateTime();
