import Phaser from "phaser";

export class Hi extends Phaser.Scene {
  constructor() {
    super("Hello2");
  }

  create() {
    this.add.text(100, 100, "Hello Me!", { fill: "#0f0" });

    this.input.on(
      "pointerup",
      function (pointer) {
        this.scene.start("Hello3");
      },
      this
    );
  }
}
