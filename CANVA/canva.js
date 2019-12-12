const canvas = document.getElementById('canvas');
 const ctx = canvas.getContext('2d');
 const color = document.getElementById('color');
 const nmb = document.getElementById('number');

 const angle = (degrees = 360) => (Math.PI/180)*degrees;

ctx.moveTo(170, 100);
ctx.arc(100, 100, 70, 0, angle(), true);

ctx.lineWidth = '10';
ctx.strokeStyle = '#007700'
ctx.stroke();


ctx.beginPath();
ctx.moveTo(320, 100);
ctx.arc(250, 100, 70, 0, angle(), true);

ctx.lineWidth = '10';
ctx.strokeStyle = '#004400'
ctx.stroke();

ctx.beginPath();
ctx.moveTo(470, 100);
ctx.arc(400, 100, 70, 0, angle(), true);

ctx.lineWidth = '10';
ctx.strokeStyle = '#bb1010'
ctx.stroke();

ctx.beginPath();
ctx.moveTo(244, 185);
ctx.arc(175, 170, 70, 0, angle(), true);

ctx.lineWidth = '10';
ctx.strokeStyle = '#bb7700'
ctx.stroke();


ctx.beginPath();
ctx.moveTo(394, 185);
ctx.arc(325, 170, 70, 0, angle(), true);

ctx.lineWidth = '10';
ctx.strokeStyle = '#ff7700'
ctx.stroke();



//  ctx.shadowOffsetX = 5;
//  ctx.shadowOffsetY = 5;

//  ctx.shadowBlur = 3;
//  ctx.shadowColor = 'green'


// ctx.font = '30px Sans-serif';
// ctx.fillStyle = 'brown';
// ctx.save();
//  ctx.fillText('JavaScript', 50, 50, 200);

//  ctx.shadowColor = 'orange';
//  ctx.fillStyle = 'blue';
//ctx.rotate(angle(10));
//   ctx.fillText('Canvas', 200, 50, 200);
//    ctx.restore();

//    ctx.fillText('Freelance',125, 150, 200);
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.bezierCurveTo(200, 0, 200, 200, 300, 100);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 0);
// ctx.lineTo(175, 125);

// ctx.moveTo(150, 100);
// ctx.arc(100, 100, 50, 0, angle(), true);

// ctx.lineWidth = '2';
// ctx.strokeStyle = '#007700'
// ctx.stroke();

// const gradient = ctx.createLinearGradient(20, 20,120, 120);
// const gradient = ctx.createRadialGradient(70,70, 0, 70, 70, 70);

// gradient.addColorStop(0, 'hsl(250, 70%, 70%)');
// gradient.addColorStop(1, 'hsl(0, 70%, 70%)');

// ctx.fillStyle = gradient;

// ctx.fillRect(20, 20, 100,100);

// ctx.strokeStyle = "rgb(50,155,50)";
// ctx.strokeRect(10,10, 120, 120);
// ctx.clearRect(45, 45, 50, 50);
