import prisma from "@/library/prisma";
import {Prisma, User} from "@prisma/client";
import UserFindManyArgs = Prisma.UserFindManyArgs;
import UserFindFirstArgs = Prisma.UserFindFirstArgs;
import UserCreateInput = Prisma.UserCreateInput;

const userModel = {
  find: async (options: UserFindFirstArgs): Promise<User | null> => {
    return prisma.user.findFirst(options)
  },
  all: (options?: UserFindManyArgs): Promise<User[] | null> => {
    return prisma.user.findMany(options)
  },
  upsert: (newUser: UserCreateInput) => {
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
  create: async (newUser: UserCreateInput): Promise<User | never> => {
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
