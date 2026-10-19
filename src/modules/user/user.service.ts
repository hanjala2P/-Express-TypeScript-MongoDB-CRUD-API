import prisma from "../../utlis/prisma"; 
import AppError from "../../middleware/AppError";
import { User } from "@prisma/client";

// 1. Create User
const createUserIntoDB = async (payload: User) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (existingUser) {
    throw new AppError(400, "This email is already registered!");
  }

  const result = await prisma.user.create({
    data: payload,
  });
  return result;
};

// 2. Get All Users
const getAllUsersFromDB = async () => {
  const result = await prisma.user.findMany();
  return result;
};

// 3. Get Single User by ID
const getSingleUserFromDB = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: { id },
  });

  if (!result) {
    throw new AppError(404, "User not found with this ID!");
  }

  return result;
};

// 4. Update User
const updateUserInDB = async (id: string, payload: Partial<User>) => {
  const isExist = await prisma.user.findUnique({ where: { id } });
  if (!isExist) {
    throw new AppError(404, "User not found to update!");
  }

  const result = await prisma.user.update({
    where: { id },
    data: payload,
  });
  return result;
};

// 5. Delete User
const deleteUserFromDB = async (id: string) => {
  const isExist = await prisma.user.findUnique({ where: { id } });
  if (!isExist) {
    throw new AppError(404, "User not found to delete!");
  }

  const result = await prisma.user.delete({
    where: { id },
  });
  return result;
};

export const UserService = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserInDB,
  deleteUserFromDB,
};