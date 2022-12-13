import prisma from "../../../../prisma/client";
import CollectionController from "../interface";

const getOneCollection: CollectionController["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const collection = await prisma.collection.findUniqueOrThrow({
      where: {
        id,
      },
    });

    res.status(200).json(collection);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error });
  }
};

export default getOneCollection;
