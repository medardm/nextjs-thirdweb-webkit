import { PrismaClient } from '@prisma/client'
import config from "@/config/index";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (config.app.environment !== 'production') globalForPrisma.prisma = prisma

export default prisma
