var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var size = window.innerWidth;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

var cols = 23;
var rows = 16;
var days = 365;

var gridw = size * 0.9;
var gridh = size * 0.7;
var cellw = gridw / cols;
var cellh = gridh / rows;
var margx = (size - gridw) * 0.5;
var margy = (size - gridh) * 0.5;

for (let i = 0; i < days; i++) {
  var col = Math.floor(i / rows);
  var row = i % rows;

  var x = margx + col * cellw;
  var y = margy + row * cellh;
  var w = 2;
  var h = 30;
  
  context.save();
  context.translate(x, y);
   
  context.beginPath();
  context.rect(0, 0, cellw, cellh);
  context.clip();
   
  context.translate(cellw * 0.5, cellh * 0.5);

  var phi = (i / days) * Math.PI;
  var theta = Math.sin(phi) * Math.PI * 0.45 + 0.85;

  context.rotate(theta);
   
  var scale = Math.abs(Math.cos(phi)) * 2 + 1;

  context.scale(scale, 1);
   
  context.beginPath();
  context.rect(w * -0.5, h * -0.5, w, h);
  context.fill();

  context.restore();}