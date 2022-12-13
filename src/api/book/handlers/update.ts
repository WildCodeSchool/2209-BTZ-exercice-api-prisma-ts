import prisma from "../../../../prisma/client";
import { BookHandlers } from "../interface";

const updateBook: BookHandlers["update"] = async (req, res) => {
  const { id } = req.params;
  const { title, collectionName } = req.body;

  try {
    const book = await prisma.book.update({
      where: {
        id,
      },
      data: {
        title,
        collection: {
          connect: {
            name: collectionName,
          },
        },
      },
    });
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateBook;
