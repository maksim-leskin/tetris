import {
  Controller
} from "./modules/controller.js";

export const SIZE_BLOCK = 35;
export const COLUMNS = 10;
export const ROWS = 20;


const controller = new Controller(
  document.querySelector('.container'),
  {
    up: '',
    down: '',
    left: '',
    right: ''
  }
);



controller.init('Enter');

