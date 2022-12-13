import IAuthController from "../interface";
import prisma from "../../../../prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getJWTSecret } from "../../../utils/auth";

const signIn: IAuthController["signIn"] = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(403).json({ message: "Invalid credentials" });
    }

    const { password: removedPassword, ...userWithoutPassword } = user;

    const secret = getJWTSecret();

    const token = jwt.sign(userWithoutPassword, secret, {
      expiresIn: "10m",
    });

    res.setHeader("Authorization", `Bearer ${token}`);

    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default signIn;
