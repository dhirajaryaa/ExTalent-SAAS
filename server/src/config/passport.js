import passport from "passport";
import { Strategy as GithubStrategy } from "passport-github2";
import { github_client_id, github_client_secret, server_url } from "./env.js";

passport.use(
  new GithubStrategy(
    {
      clientID: github_client_id,
      clientSecret: github_client_secret,
      callbackURL: `${server_url}/api/v1/auth/github/callback`,
    },
    (accessToken, refreshToken, profile, done) => {
      return done(profile, accessToken, refreshToken);
    }
  )
);

export default passport;