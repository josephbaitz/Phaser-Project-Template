import Phaser from "phaser";

export class Hello extends Phaser.Scene {
  constructor() {
    super("Hello");
  }

  create() {
    this.add.text(200, 200, "Hello Joe!", { fill: "#0f0" });

    this.input.on(
      "pointerup",
      function (pointer) {
        this.scene.start("Hello2");
      },
      this
    );
  }
}
