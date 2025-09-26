import express from "express";
import { currentLoginUser, githubOauthLogin, userLogout } from "./auth.controller.js";
import authChecker from "../middlewares/auth.middleware.js";
import passport from "../config/passport.js";
const router = express.Router();

//? routes defined here
router.get("/github", passport.authenticate("github", { scope: ["user:email"], session: false }));
// callback
router.get(
  "/github/callback",
  passport.authenticate("github", { failureMessage: "Internal Server Error!",session:false }),
  githubOauthLogin
);
//? auth middleware - protect routes
// logout user 
router.post("/logout",authChecker,userLogout)
// current login user 
router.get("/me",authChecker,currentLoginUser)

export default router;
