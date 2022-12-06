import { Book } from "@prisma/client";
import { BookHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createBook: BookHandlers["create"] = async (req, res) => {
  try {
    const { title, authorId, collectionName } = req.body;
    const book = await prisma.book.create({
      data: {
        title,
        author: {
          connect: {
            id: authorId,
          },
        },
        collection: {
          connectOrCreate: {
            where: { name: collectionName },
            create: { name: collectionName },
          },
        },
      },
    });

    res.status(201).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createBook;
