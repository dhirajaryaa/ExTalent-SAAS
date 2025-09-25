import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { origin } from "./config/env.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import passport from "passport";

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
app.use(passport.initialize())

// setup routers
import authRouter from "./auth/auth.routes.js";
app.use("/api/v1/auth",authRouter);

//! setup error middleware
app.use(errorMiddleware);
export default app;
