import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

export const generateToken = (
  id: number,
  role: string
) => {
  return jwt.sign(
    { id, role },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
};