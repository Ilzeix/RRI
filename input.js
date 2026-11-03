import { keys } from "./world.js";

export function bindInput() {
  window.addEventListener("keydown", (e) => {
    const k = e.key.toLowerCase();
    if (k in keys) {
      keys[k] = true;
      e.preventDefault(); // prepreči scroll strani pri tipkah
    }
  });

  window.addEventListener("keyup", (e) => {
    const k = e.key.toLowerCase();
    if (k in keys) {
      keys[k] = false;
    }
  });
}