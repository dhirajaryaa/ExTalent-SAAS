import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import { jwt_secret } from "../config/env.js";

const authChecker = asyncHandler(async (req, res, next) => {
  // get token
  const incomingToken = req.cookies.accessToken || req.headers.authorization?.replace("Bearer ", "");
  if (!incomingToken) {
    throw new apiError(
      401,
      "unAuthorized Request! , please login first and try again!",
      "AUTHERROR"
    );
  }

  //   decode token
  const decodedToken = jwt.verify(incomingToken, jwt_secret);
  req.user = { _id: decodedToken._id, name: decodedToken.name };
  next();
});

export default authChecker;