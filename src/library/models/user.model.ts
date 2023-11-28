import prisma from "@/library/prisma";
import {Prisma, User} from "@prisma/client";

const userModel = {
  ...prisma.user,
  login: async (data: {
    walletAddress: string,
  }): Promise<User> => {
    return prisma.user.upsert({
      where: {
        walletAddress: data.walletAddress
      },
      update: {
        lastLoginAt: new Date(Date.now()).toISOString()
      },
      create: {
        walletAddress: data.walletAddress,
        lastLoginAt: new Date(Date.now()).toISOString()
      },
    })
  },
  first: async (value: any, column: keyof User = 'id'): Promise<User | null> => {
    return prisma.user.findFirst({
      where: {
        [column]: value
      }
    })
  },
  all: async (options?: Prisma.UserFindManyArgs): Promise<User[] | null> => {
    return prisma.user.findMany(options)
  },
  softDelete: () => {
  },
}

export default userModel
