let typeofObstacles = [
  "./images/plasticBag.png", "./images/fishingNet.png"]
function random(from, to) {
  return Math.floor(from + Math.random()*(to - from));
}

class Obstacle {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;

      this.w = 100;
      this.h = this.w/imgRatio; // use ratio to compute `plasticBag Height`
      this.x = random(0, W-this.w);
      this.y = -this.h;
    }
    img.src = typeofObstacles[Math.floor(Math.random()*typeofObstacles.length)];
    
  }
  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  hits(turtle) {
    return (
      (turtle.x+turtle.w >= this.x && turtle.x <= this.x+this.w) // 
      &&
      (turtle.y <= this.y+this.h && turtle.y+turtle.h >= this.y));
  }
}
