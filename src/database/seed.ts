import {PrismaClient} from '@prisma/client'
import { parseArgs } from 'node:util'
import {ParseArgsConfig} from "util";

const prisma = new PrismaClient()

const options = {
  env: { type: 'string' },
}

async function seedDevData() {
}

async function seedProdData() {
}


async function main() {
  const {
    values: { environment },
  } = parseArgs({ options } as ParseArgsConfig)

  switch (environment) {
    case 'dev':
      /** data for your development */
      await seedDevData();
      break
    case 'prod':
      /** data for your test environment */
      await seedProdData();
      break
    default:
      break
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
