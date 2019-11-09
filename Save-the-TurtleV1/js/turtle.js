class Turtle {
  constructor() {
    const img1 = document.createElement("img");
    img1.onload = () => {
      this.img1 = img1;
      this.img = img1;

      const imgRatio = img1.naturalWidth / img1.naturalHeight;

      this.w = 100;
      this.h = this.w / imgRatio; // use ratio to compute `turtleHeight`

      this.x = W / 2 - this.w / 2;
      this.y = H - this.h - 5;
      this.speed = 75;
    };
    img1.src = "./images/turtleUp.png";

    const img2 = document.createElement("img");
    img2.onload = () => {
      this.img2 = img2;
    };
    img2.src = "./images/turtleDown.png";

    const img3 = document.createElement("img");
    img3.onload = () => {
      this.img3 = img3;
    };
    img3.src = "./images/turtleLeft.png";

    const img4 = document.createElement("img");
    img4.onload = () => {
      this.img4 = img4;
    };
    img4.src = "./images/turtleRight.png";
    
  }
  
  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }  
  moveUp() {
    this.img = this.img1;
    if (this.y <=0) {
      this.y += 0;
    } else {
      this.y -= 2;}
  }
  moveDown() {
    this.y += 2;
    this.img = this.img2;
    if (this.y >= H - this.h) {
      this.y += 0;
    } else {
      this.y += 2;}
  }
  moveLeft() {
    this.img = this.img3;
    if (this.x <=0) {
      this.x += 0;
    } else {
      this.x -= this.speed;}
  }
  moveRight() {
    this.img = this.img4;
    if (this.x >= W - this.w) {
      this.x += 0;
    } else {
      this.x += this.speed;
    }
  }
}
