import prisma from "@/library/prisma";
import {Prisma, User} from "@prisma/client";

const userModel = {
  ...prisma.user,
  find: async (options: Prisma.UserFindFirstArgs): Promise<User | null> => {
    return prisma.user.findFirst(options)
  },
  all: (options?: Prisma.UserFindManyArgs): Promise<User[] | null> => {
    return prisma.user.findMany(options)
  },
  softDelete: () => {
  },
}

export default userModel
