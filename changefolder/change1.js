let squareSize = 20; // 每个正方形的像素大小（包括边框）  
let borderWidth = 10; // 边框宽度（但通常这会影响到squareSize的计算，这里我们简化处理）  
let gridCols = 12; // 网格的列数  
let gridRows = 23; // 网格的行数  
//let canvasWidth = gridCols * (squareSize ); // 画布宽度（这里borderWidth/squareSize是为了示意，实际上可能不需要调整画布大小）  + 6 * (borderWidth / squareSize)
//let canvasHeight = gridRows * (squareSize + 6 * (borderWidth / squareSize)); // 画布高度  
  
// 注意：由于边框宽度相对于正方形大小很小，这里我们直接设置canvasWidth和canvasHeight为gridCols和gridRows的倍数乘以squareSize  
// 实际上，borderWidth在这里不影响画布大小，因为它是在正方形内部绘制的  
canvasWidth = gridCols * squareSize;  
canvasHeight = gridRows * squareSize;  
  
function setup() {  
  createCanvas(canvasWidth+100, canvasHeight+100);  
  background(128); // 设置背景色为灰色  
  drawGrid();  
}  
  
function drawGrid() {  
  let baseRotation = 0; // 初始旋转角度（度）  
  let rotationIncrement = 0.05; // 旋转角度增量（度）  
  
  for (let y = 0; y < gridRows; y++) {  
    for (let x = 0; x < gridCols; x++) {  
      // 计算每个正方形的位置  
      let xPos = x * squareSize+50;  
      let yPos = y * squareSize+50;  
  
      // 计算当前正方形的旋转角度  
      let squareRotation = radians(baseRotation); // 将度转换为弧度  
  
      // 如果是在第五行或之后，则随机生成旋转角度  
      if (y > 4&y<=9) {  
        squareRotation = radians(Math.random() * 20)+radians(Math.random()*1); // 生成0到360度之间的随机角度  
      }else if (y>9&y<=15) {
        squareRotation = radians(Math.random() * 160); // 生成0到360度之间的随机角度
     }else if (y>15& y<=23){
        squareRotation = radians(Math.random() * 240); // 生成0到360度之间的随机角度
     }
     else {  
        // 否则，递增旋转角度  
        baseRotation += rotationIncrement;  
    
      }  
  
      // 绘制正方形  
     push();  
    translate(xPos , yPos );  
      rotate(squareRotation);  
      noFill(); // 不填充颜色  
      stroke(0); // 设置边框颜色为黑色  
      strokeWeight(10);
      // 注意：由于我们假设squareSize已经包含了边框，所以不需要单独绘制边框宽度  
      rect(-squareSize / 2, -squareSize / 2, squareSize, squareSize); // 绘制正方形  
  
      pop();  
    }  
  }  
}  
  
// 注意：rotate()函数接受弧度作为参数，所以我们使用radians()函数将度转换为弧度