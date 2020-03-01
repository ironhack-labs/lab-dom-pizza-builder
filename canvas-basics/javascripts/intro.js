let canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'lightblue'
ctx.fillRect(0, 0, 300, 300)

ctx.fillStyle = 'black'

ctx.fillRect(100, 100, 40, 40)

ctx.fillStyle = 'yellow'
ctx.fillRect(0, 0, 40, 80)

ctx.clearRect(20, 20, 20, 20)

ctx.strokeRect(60, 60, 60, 60)

ctx.beginPath();
ctx.moveTo(50, 50)
ctx.lineTo(50, 200)
ctx.lineTo(80, 250)
ctx.lineTo(200, 250)
ctx.lineTo(200, 30)


ctx.stroke()

ctx.beginPath();
    // ctx.arc(x, y, radius, startAngle, endAngle)
    ctx.arc(100, 100, 90, 0, Math.PI/2);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "pink"; // !
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = 'green'
    ctx.font ="50px Arial"
    ctx.fillText('Hello There', 20, 200)

    