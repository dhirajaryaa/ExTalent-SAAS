import { node_env } from "../config/env.js";

const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";
  res.status(err.statusCode || 500).json({
    statusCode,
    message,
    ...err,
    stack: node_env === "development" ? err.stack : null,
  });
};

export default errorMiddleware;