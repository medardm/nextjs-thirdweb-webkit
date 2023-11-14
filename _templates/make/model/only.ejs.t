---
to: src/library/models/<%= name %>.model.ts
---
import prisma from "@/library/prisma";
import {<%= h.capitalize(name) %>} from "@prisma/client";

const <%= name %>Model = {
  find: () => {},
  all: () => {},
  upsert: () => {},
  create: async (new<%= h.capitalize(name) %>: <%= h.capitalize(name) %>): Promise<<%= h.capitalize(name) %> | null> => {
    return prisma.<%= name %>.create({
      data: {
        <%= name %>Column: new<%= h.capitalize(name) %>.<%= name %>Column,
        createdAt: new Date(Date.now()).toISOString(),
      },
    })
  },
  update: () => {},
  delete: () => {},
}

export default <%= name %>Model
