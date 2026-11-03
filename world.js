import { PLAYER_SPEED } from "./config.js";

export const canvas = document.getElementById("game");
export const ctx = canvas.getContext("2d");
export const W = canvas.width;
export const H = canvas.height;

export const player = {
  x: W / 2 - 16,
  y: H / 2 - 16,
  w: 32,
  h: 32,
  speed: PLAYER_SPEED,
  color: "#f76868",
};

export const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
};