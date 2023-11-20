import prisma from "@/library/prisma";
import {Prisma, User} from "@prisma/client";

const userModel = {
  ...prisma.user,
  first: async (value: any, column: keyof User = 'id'): Promise<User | null> => {
    return prisma.user.findFirst({
      where: {
        [column]: value
      }
    })
  },
  all: (options?: Prisma.UserFindManyArgs): Promise<User[] | null> => {
    return prisma.user.findMany(options)
  },
  softDelete: () => {
  },
}

export default userModel
