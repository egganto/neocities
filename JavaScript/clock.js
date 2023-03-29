function updateTime() {
  const time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let diem = "AM";

  if (h == 0) {
    h = 12;
  } else if (h > 12) {
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

  let DigiClock = document.getElementById("DigiClock");
  DigiClock.textContent = h + ":" + m + ":" + s + " " + diem;
  setTimeout("updateTime()", 1000);
}

updateTime();
