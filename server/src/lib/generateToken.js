import jwt from "jsonwebtoken";
import {
  jwt_secret,
  jwt_expires_in,
  jwt_refresh_expires_in,
  jwt_refresh_secret,
} from "../config/env.js";

const generateAccessAndRefreshToken = (user) => {
  if (!user) return;
  const accessToken = jwt.sign({ _id: user._id, name: user.name }, jwt_secret, {
    subject: "accessToken",
    expiresIn: jwt_expires_in,
  });
  const refreshToken = jwt.sign({ _id: user._id }, jwt_refresh_secret, {
    subject: "accessToken",
    expiresIn: jwt_refresh_expires_in,
  });
  return {accessToken,refreshToken}
};

export default generateAccessAndRefreshToken;