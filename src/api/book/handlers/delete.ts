import { BookHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const deleteBook: BookHandlers["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await prisma.book.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: `Book ${book.id} deleted` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteBook;
