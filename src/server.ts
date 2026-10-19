import { Server } from "http";
import app from "./app.js";
import config from "./config/index.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
let server: Server;

async function main() {
  try {
    await prisma.$connect();
    console.log("📦 Database connected successfully!");

    server = app.listen(Number(config.port), () => {
      console.log(`🚀 Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();