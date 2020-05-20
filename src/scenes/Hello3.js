import Phaser from "phaser";

export class Hey extends Phaser.Scene {
  constructor() {
    super("Hello3");
  }

  create() {
    this.add.text(400, 400, "Hey", { fill: "#0f0" });
  }
}
