import express, { NextFunction, Request, Response } from "express";

// Importing Routes
import userRoutes from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";

const port = 3000;

connectDB();

const app = express();

app.use(express.json());

// Using Routes
app.use("/api/v1/user", userRoutes);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
