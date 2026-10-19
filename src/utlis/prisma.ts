import { Prisma, PrismaClient } from "@prisma/client";

const loggingExtension = Prisma.defineExtension({
  name: "logging",
  query: {
    $allOperations: async ({ model, operation, args, query }: any) => {
      console.log(`[Prisma Query Log] Model: ${model}, Action: ${operation}`);
      return query(args);
    },
  },
});

const prisma = new PrismaClient().$extends(loggingExtension);

export default prisma;