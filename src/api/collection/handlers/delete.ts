import prisma from "../../../../prisma/client";
import CollectionController from "../interface";

const deleteCollection: CollectionController["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const collection = await prisma.collection.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      message: `Collection: "${collection.name}" deleted successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteCollection;
