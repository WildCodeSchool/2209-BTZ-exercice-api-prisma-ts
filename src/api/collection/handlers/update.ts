import prisma from "../../../../prisma/client";
import CollectionController from "../interface";

const updateCollection: CollectionController["update"] = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedCollection = await prisma.collection.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    res.status(204).json(updatedCollection);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateCollection;
