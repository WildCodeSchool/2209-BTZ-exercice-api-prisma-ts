import prisma from "../../../../prisma/client";
import { BookHandlers } from "../interface";

const getAllBooks: BookHandlers["getAll"] = async (req, res) => {
  try {
    const books = await prisma.book.findMany();

    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllBooks;
