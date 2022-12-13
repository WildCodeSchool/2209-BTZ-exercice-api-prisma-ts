/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book } from "@prisma/client";
import { RequestHandler } from "express";
import { IdParam, ResponseError } from "../../interfaces/globalTypes";

export type PostBody = Omit<
  Book,
  "id" | "createdAt" | "updatedAt" | "collectionId"
> & { collectionName: string };

export interface BookHandlers {
  getAll: RequestHandler<null, Book[] | ResponseError, null>;
  getOne: RequestHandler<IdParam, Book | ResponseError, null>;
  create: RequestHandler<null, Book | ResponseError, PostBody>;
  delete: RequestHandler<IdParam, { message: string } | ResponseError, null>;
  update: RequestHandler<IdParam, Book | ResponseError, PostBody>;
}
