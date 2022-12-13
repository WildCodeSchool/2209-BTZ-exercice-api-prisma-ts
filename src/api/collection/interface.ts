import { Collection } from "@prisma/client";
import { RequestHandler } from "express";
import {
  DeleteMessage,
  IdParam,
  ResponseError,
} from "../../interfaces/globalTypes";

type CollectionBody = {
  name: string;
};

interface CollectionController {
  getAll: RequestHandler<null, Collection[] | ResponseError, null, null>;
  getOne: RequestHandler<IdParam, Collection | ResponseError, null, null>;
  create: RequestHandler<
    null,
    Collection | ResponseError,
    CollectionBody,
    null
  >;
  update: RequestHandler<
    IdParam,
    Collection | ResponseError,
    CollectionBody,
    null
  >;
  delete: RequestHandler<IdParam, DeleteMessage | ResponseError, null, null>;
}

export default CollectionController;
