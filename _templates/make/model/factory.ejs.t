---
to: src/database/factory/<%= name %>.factory.ts
---
import {faker} from "@faker-js/faker";
import <%= name %>Model from "@/library/models/<%= name %>.model";
import {<%= h.capitalize(name) %>} from "@prisma/client";

const <%= name %>Factory = {
  definition: {
    <%= name %>Column: faker.string.hexadecimal({length: 40}),
  },
  reloadDefinition: () => {
    <%= name %>Factory.setDefinition(<<%= h.capitalize(name) %>> {
      <%= name %>Column: faker.string.hexadecimal({length: 10})
    })

    return <%= name %>Factory
  },
  setDefinition: (definition:any) => {
    <%= name %>Factory.definition = {
      ...definition
    }

    return <%= name %>Factory
  },
  create: async (quantity = 1): Promise<<%= h.capitalize(name) %>[]> => {
    let records: <%= h.capitalize(name) %>[] = [];
    for (let i = 0; i < quantity; i++) {
      <%= name %>Factory.reloadDefinition()
      records.push(<<%= h.capitalize(name) %>> await <%= name %>Model.create(<%= name %>Factory.definition as <%= h.capitalize(name) %>))
    }
    return records
  }
}

export default <%= name %>Factory
