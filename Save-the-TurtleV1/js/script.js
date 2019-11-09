let turtle;
let obstacles;
let gameOver;

var imgBackgroundLoaded = false;
var imgBackground = new Image();
imgBackgroundDims = {
  w: undefined,
  h: undefined,
};
imgBackground.onload = function() {
  imgBackgroundLoaded = true;
  imgBackgroundDims.w = imgBackground.naturalWidth;
  imgBackgroundDims.h = imgBackground.naturalHeight;
};
imgBackground.src = "./images/Awesome-Ocean-Background-Vector-3.jpg";

imgBackgroundOffset = 0;

const ctx = document.querySelector("#gameOn1 canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  ctx.clearRect(0, 0, W, H);

  if (imgBackgroundLoaded) {
    ctx.drawImage(imgBackground, 0, H - imgBackgroundDims.h + imgBackgroundOffset);
  }
  
  turtle.draw();

  if (frames % 50 === 0) {
    var obstacle = new Obstacle();
    obstacles.push(obstacle);
  }

  obstacles.forEach(function(obstacle) {
    obstacle.y += 2;
    obstacle.draw();
  });

  for (obstacle of obstacles) {
    if (obstacle.hits(turtle)) {
      console.log("crashed");
      gameOver = true;

      

      var $gameOn1 = document.getElementById("gameOn1");
      $gameOn1.classList.remove("active");
      var $gameOver = document.getElementById("gameOver");
      $gameOver.classList.add("active");

      //var $gameOver = document.getElementById("gameOver");
      //$gameOver.classList.remove("active");
    }
  }

  // si la tortue arrive à la surface //
  if (turtle.y < 10) {
    gameOver = true;
    document.getElementById("gameOn1").classList.remove("active");
    document.getElementById("youWin").classList.add("active");
  }
}

document.onkeydown = function(e) {
  if (!turtle) return;

  console.log("keydown");
  switch (e.keyCode) {
    case 37:
      // left
      turtle.moveLeft();
      break;
    case 39:
      //right
      turtle.moveRight();
      break;
    case 38:
      // up
      turtle.moveUp();
      imgBackgroundOffset += 20;
      break;
    case 40:
      //down
      turtle.moveDown();
      imgBackgroundOffset -= 20;
      break;
  }
};

let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameOver) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }

  gameOver = false;
  turtle = new Turtle();
  obstacles = [];

  raf = requestAnimationFrame(animLoop);
}

document.getElementById("startButton").onclick = function() {
  var $intro = document.getElementById("intro");
  $intro.classList.remove("active");

  var $gameOn1 = document.getElementById("gameOn1");
  $gameOn1.classList.add("active");
  startGame();
};
