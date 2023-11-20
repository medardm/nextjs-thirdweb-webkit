---
to: src/library/models/<%= name %>.model.ts
---
import prisma from "@/library/prisma";
import {Prisma, <%= h.capitalize(name) %>} from "@prisma/client";

const <%= name %>Model = {
  ...prisma.<%= name %>,
  find: async (options: Prisma.<%= h.capitalize(name) %>FindFirstArgs): Promise<<%= h.capitalize(name) %> | null> => {
    return prisma.<%= name %>.findFirst(options)
  },
  all: (options?: Prisma.<%= h.capitalize(name) %>FindManyArgs): Promise<<%= h.capitalize(name) %>[] | null> => {
    return prisma.<%= name %>.findMany(options)
  },
  softDelete: () => {
  },
}

export default <%= name %>Model
