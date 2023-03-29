const ctx = document.getElementById("canvas").getContext("2d");

ctx.fillStyle = "#001F69";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#111F11";
ctx.beginPath();
ctx.moveTo(40, 40);
ctx.lineTo(40, 70);
ctx.lineTo(70, 40);
ctx.fill();

ctx.beginPath();
ctx.moveTo(40, 70);
ctx.lineTo(200, 200);
ctx.lineTo(230, 170);
ctx.lineTo(70, 40)
ctx.fill();
