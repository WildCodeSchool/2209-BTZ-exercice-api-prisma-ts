import prisma from "../../../../prisma/client";
import { BookHandlers } from "../interface";

const getOneBook: BookHandlers["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await prisma.book.findUniqueOrThrow({
      where: {
        id: id,
      },
    });

    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneBook;
