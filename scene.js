let canvas = document.getElementById("myCanvas")
let pencil = canvas.getContext("2d")

pencil.fillStyle = "green";

pencil.fillRect(0, 330, 500, 100);

pencil.beginPath();
pencil.arc(450, 50, 40, 0, Math.PI * 2);
pencil.fillStyle = "yellow"
pencil.fill();
pencil.closePath();





pencil.beginPath();

pencil.moveTo(300, 300);

pencil.lineTo(400, 270);

pencil.lineTo(450, 350);

pencil.lineTo(270, 350)

pencil.closePath();

pencil.stroke();

pencil.fillStyle = "Brown"
pencil.fill();

pencil.beginPath();

