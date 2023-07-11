import getPrismaInstance from "../utils/PrismaClient.js";

export const checkUser = async ({body}, res, next) => {
  try {
    const { email } = body;
    console.log(email);
    if (!email)
      return res
        .status(404)
        .json({ message: "Email is required", status: false });
    const prisma = getPrismaInstance();
    await prisma.user.findUnique({ where: { email } });
    if (!user)
      return res.status(200).json({ message: "User not found", status: false });
    return res
      .status(200)
      .json({ message: "User found", status: true, data: user });
  } catch (error) {}
};
