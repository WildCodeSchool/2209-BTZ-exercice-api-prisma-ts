import { ResponseError } from "./../../interfaces/globalTypes";
import { User } from "@prisma/client";
import { RequestHandler } from "express";

type TUserWithoutPassword = Omit<User, "password">;
type TUserRegisterBody = Pick<User, "email" | "name" | "password">;

type TLoginBody = {
  email: string;
  password: string;
};

interface IAuthController {
  signIn: RequestHandler<
    null,
    TUserWithoutPassword | ResponseError,
    TLoginBody,
    null
  >;
  signUp: RequestHandler<
    null,
    TUserWithoutPassword | ResponseError,
    TUserRegisterBody,
    null
  >;
}

export default IAuthController;
