import { Request, Response, NextFunction } from "express";
import AppError from "../middleware/AppError";
import { TErrorSources } from "../interface/error"; 

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = error.message || "Something went wrong!";
  
 
  let errorSources: TErrorSources[] = [
    {
      path: "",
      message: error.message || "Something went wrong!",
    },
  ];

  if (error instanceof AppError) {
    statusCode = error.statusCode;
    message = error.message;
    errorSources = [
      {
        path: "",
        message: error.message,
      },
    ];
  } else if (error.code === "P2025") {
    statusCode = 404;
    message = "Requested record not found in the database!";
    errorSources = [
      {
        path: "",
        message: "Requested record not found in the database!",
      },
    ];
  } else if (error.code === "P2002") {
    statusCode = 400;
    message = "Duplicate value error! This record already exists.";
    errorSources = [
      {
        path: "",
        message: "Duplicate value error! This record already exists.",
      },
    ];
  }

 
  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    error, 
  });
};

export default globalErrorHandler;