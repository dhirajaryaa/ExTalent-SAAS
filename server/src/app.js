import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { origin } from "./config/env.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();
//! setup middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin,
    credentials: true,
  })
);
app.use(cookieParser());


//! setup error middleware
app.use(errorMiddleware);
export default app;
