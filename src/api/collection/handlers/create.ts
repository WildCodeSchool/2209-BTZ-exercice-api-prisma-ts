import CollectionController from "../interface";
import prisma from "../../../../prisma/client";

const createCollection: CollectionController["create"] = async (req, res) => {
  const { name } = req.body;
  try {
    const newCollection = await prisma.collection.create({
      data: {
        name,
      },
    });

    res.status(201).json(newCollection);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createCollection;
