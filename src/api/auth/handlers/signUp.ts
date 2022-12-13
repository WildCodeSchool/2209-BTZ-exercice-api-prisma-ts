import prisma from "../../../../prisma/client";
import IAuthController from "../interface";
import bcrypt from "bcryptjs";
import { getJWTSecret } from "../../../utils/auth";
import jwt from "jsonwebtoken";

const signUp: IAuthController["signUp"] = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    const secret = getJWTSecret();

    const { password: removedPassword, ...userWithoutPassword } = newUser;

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

export default signUp;
