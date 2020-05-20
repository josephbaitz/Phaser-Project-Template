import Phaser from "phaser";

import { Hello } from "./scenes/Hello.js";
import { Hi } from "./scenes/Hello2.js";
import { Hey } from "./scenes/Hello3.js";

const config = {
  type: Phaser.AUTO,
  width: 3689,
  height: 778,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
    },
  },

  scene: [Hello, Hi, Hey],
};

export default new Phaser.Game(config);
