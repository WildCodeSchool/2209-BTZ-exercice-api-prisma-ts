import IAuthController from "./interface";
import signIn from "./handlers/signIn";
import signUp from "./handlers/signUp";

const controller: IAuthController = {
  signIn,
  signUp,
};

export default controller;
