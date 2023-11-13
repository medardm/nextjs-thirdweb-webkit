import prisma from "@/library/prisma";
import {User} from "@prisma/client";

const userModel = {
  find: async (value: string | number, column: keyof User = 'id'): Promise<User | null> => {
    return prisma.user.findFirst({
      where: {
        [column]: value
      }
    })
  },
  all: () => {
  },
  upsert: (newUser: User) => {
    return prisma.user.upsert({
      where: {
        walletAddress: newUser.walletAddress
      },
      update: {
        lastLoginAt: new Date(Date.now()).toISOString()
      },
      create: {
        walletAddress: newUser.walletAddress,
        createdAt: new Date(Date.now()).toISOString(),
      },
    })
  },
  create: async (newUser: User): Promise<User | null> => {
    return prisma.user.create({
      data: {
        walletAddress: newUser.walletAddress,
        createdAt: new Date(Date.now()).toISOString(),
      },
    })
  },
  update: () => {
  },
  delete: () => {
  },
}

export default userModel
