/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book } from "@prisma/client";
import { RequestHandler } from "express";
import { ResponseError } from "../../interfaces/globalTypes";

type BookBodyPost = Omit<
  Book,
  "id" | "createdAt" | "updatedAt" | "collectionId"
> & { collectionName: string };

export interface BookHandlers {
  getAll: RequestHandler<null, Book[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Book | ResponseError, null>;
  create: RequestHandler<null, Book | ResponseError, BookBodyPost>;
  // add the rest of the handlers here
}
