---
to: src/database/seeders/<%= name %>.seeder.ts
---
import <%= name %>Factory from "@/database/factory/<%= name %>.factory";

export default async function seedTestUsers () {
  return await <%= name %>Factory.create(5)
}

