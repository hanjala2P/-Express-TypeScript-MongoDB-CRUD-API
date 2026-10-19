import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/routes"; 
import globalErrorHandler from "./middleware/globalErrorHandler";
import notFound from "./middleware/notFound";

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Application Routes
app.use("/api/v1", router);

// Basic Route
app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "API is running successfully with MongoDB! 🚀",
  });
});
app.use(notFound)
app.use(globalErrorHandler)

export default app;