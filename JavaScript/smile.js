function draw(){

  const canvas = document.getElementById("canvas");

  if (canvas.getContext){
    const ctx = canvas.getContext("2d");

    const lingrad0 = ctx.createLinearGradient(120, 0, 180, 0);
    lingrad0.addColorStop(0, "#FFDF89");
    lingrad0.addColorStop(0.2, "#FFDF67");
    lingrad0.addColorStop(1, "#FDDF19");

    ctx.fillStyle = lingrad0;
    ctx.beginPath();
    ctx.arc(150, 0, 100, 0, Math.PI, false);
    ctx.fill();

    ctx.fillStyle = "#FDDF19";
    ctx.beginPath();
    ctx.arc(65, 160, 35, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#FDDF19";
    ctx.beginPath();
    ctx.arc(235, 160, 35, 0, Math.PI * 2);
    ctx.fill();

    const radgrad = ctx.createRadialGradient(120, 120, 30, 120, 120, 70);
    radgrad.addColorStop(0, "#FFDFb1");
    radgrad.addColorStop(0.7, "#FFDF80");
    radgrad.addColorStop(1, "#FFDF58");

    ctx.fillStyle = radgrad;
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, Math.PI * 2, true);
    ctx.fill();

    const lingrad = ctx.createLinearGradient(116, 150, 126, 150);
    lingrad.addColorStop(0, "#999999");
    lingrad.addColorStop(0.2, "#666666");
    lingrad.addColorStop(1, "#000000");

    const lingrad2 = ctx.createLinearGradient(176, 150, 186, 150);
    lingrad2.addColorStop(0, "#999999");
    lingrad2.addColorStop(0.2, "#666666");
    lingrad2.addColorStop(1, "#000000");

    const lingrad3 = ctx.createLinearGradient(120, 90, 180, 90);
    lingrad3.addColorStop(0, "#999999");
    lingrad3.addColorStop(0.2, "#666666");
    lingrad3.addColorStop(1, "#000000");

    ctx.fillStyle = lingrad;
    ctx.fillRect(116, 150, 10, 50);
    ctx.fillStyle = lingrad2;
    ctx.fillRect(176, 150, 10, 50);
    
    ctx.fillStyle = lingrad3;
    ctx.beginPath();
    ctx.moveTo(150, 90);
    ctx.lineTo(120, 120);
    ctx.lineTo(180, 120);
    ctx.fill();
  }
}
