/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book } from "@prisma/client";
import { RequestHandler } from "express";
import { ResponseError } from "../../interfaces/globalTypes";

export interface BookHandlers {
  getAll: RequestHandler<null, Book[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Book | ResponseError, null>;
  // add the rest of the handlers here
}
