let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let size = window.innerWidth;
let dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

let cols = 23;
let rows = 16;
let days = 365;

let gridw = size * 0.9;
let gridh = size * 0.7;
let cellw = gridw / cols;
let cellh = gridh / rows;
let margx = (size - gridw) * 0.5;
let margy = (size - gridh) * 0.5;

for (let i = 0; i < days; i++) {
    let col = Math.floor(i / rows);
    let row = i % rows;

    let x = margx + col * cellw;
    let y = margy + row * cellh;
    let w = 2;
    let h = 30;
  
  context.save();
  context.translate(x, y);
   
  context.beginPath();
  context.rect(0, 0, cellw, cellh);
  context.clip();
   
  context.translate(cellw * 0.5, cellh * 0.5);

  let phi = (i / days) * Math.PI;
  let theta = Math.sin(phi) * Math.PI * 0.45 + 0.85;

  context.rotate(theta);
   
  let scale = Math.abs(Math.cos(phi)) * 2 + 1;

  context.scale(scale, 1);
   
  context.beginPath();
  context.rect(w * -0.5, h * -0.5, w, h);
  context.fill();

  context.restore();}