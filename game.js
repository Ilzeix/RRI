import { canvas, ctx, W, H, player, keys } from "./world.js";
import { PLAYER_SPEED } from "./config.js";
import { bindInput } from "./input.js";
import { updatePlayer } from "./player.js";
import { draw } from "./render.js";

(function () {
  "use strict";

  // Vklopimo poslušanje tipkovnice
  bindInput();

  let lastTime = 0;

  function loop(timestamp) {
    if (!lastTime) lastTime = timestamp;

    let dt = (timestamp - lastTime) / 1000;
    lastTime = timestamp;
    if (dt > 0.05) dt = 0.05;

    updatePlayer(dt);
    draw();

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
})();