import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import { BookHandlers } from "./interface";

const controller: BookHandlers = {
  getAll,
  getOne,
};

export default controller;
