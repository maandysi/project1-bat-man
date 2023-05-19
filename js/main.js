console.log("hello");

class Player {
  constructor() {
    this.width = 10;
    this.positionX = 50 - this.width / 2;
    this.positionY = 0;
    this.height = 10;

    this.domElement = null;

    this.createDomElement();
    this.attachEventListeners();
  }

  createDomElement() {
    // create an element
    this.domElement = document.createElement("div");
    // add content/ modify
    this.domElement.id = "player";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.bottom = this.positionY + "vh";

    // append to the dom
    const parentElement = document.getElementById("board");
    parentElement.appendChild(this.domElement);
  }

  followKeyEvent(event) {}

  moveLeft() {
    this.positionX--;
    this.domElement.style.left = this.positionX + "vw";
    console.log("move left");
  }

  moveRight() {
    this.positionX++;
    this.domElement.style.right = this.positionX + "vw";
  }

  shoot() {
    console.log("batman shot");
  }

  attachEventListeners() {
    document.addEventListener("keydown", (event) => {
      if (event.code === "ArrowLeft") {
        this.moveLeft();
      } else if (event.code === "ArrowRight") {
        this.moveRight();
      } else if (event.code === "s") {
        this.shoot();
      }
    });
  }
}

const player = new Player("Bat-Man");

