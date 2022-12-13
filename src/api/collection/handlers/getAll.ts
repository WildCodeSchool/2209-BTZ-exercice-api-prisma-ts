import CollectionController from "../interface";
import prisma from "../../../../prisma/client";

const getAllCollections: CollectionController["getAll"] = async (req, res) => {
  try {
    const collections = await prisma.collection.findMany();

    res.status(200).json(collections);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllCollections;
