import prisma from "@/library/prisma";
import {Prisma, User} from "@prisma/client";
import {RoleEnum} from "@/library/enums/roles.enum";

const userModel = {
  ...prisma.user,
  login: async (data: {
    walletAddress: string,
  }, defaultRole: RoleEnum = RoleEnum.Standard): Promise<User> => {
    return prisma.user.upsert({
      where: {
        walletAddress: data.walletAddress
      },
      update: {
        lastLoginAt: new Date(Date.now()).toISOString(),
      },
      create: {
        walletAddress: data.walletAddress,
        lastLoginAt: new Date(Date.now()).toISOString(),
        roles: {
          create: [
            {
              role: {
                connect: {
                  id: defaultRole
                },
              }
            },
          ]
        },
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
  assignRole: async (user: User, roleId: RoleEnum) => {
    return prisma.user.update({
      where: {
        walletAddress: user.walletAddress
      },
      data: {
        roles: {
          create: [
            {
              role: {
                connect: {
                  id: roleId
                }
              }
            },
          ]
        }
      }
    })
  },
}

export default userModel
