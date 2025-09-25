const _config = {
  // server
  port: process.env.PORT || 3000,
  mongo_url: process.env.MONGO_URL || "mongodb://localhost:27017",
  client_url: process.env.CLIENT_URL,
  server_url: process.env.SERVER_URL,
  node_env: process.env.NODE_ENV,
  //   jwt
  jwt_secret: process.env.JWT_SECRET,
  jwt_expires_in: process.env.JWT_EXPIRES_IN || "1d",
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  //   github
  github_client_id: process.env.GITHUB_CLIENT_ID,
  github_client_secret: process.env.GITHUB_CLIENT_SECRET,
  github_oauth_redirect_url: process.env.GITHUB_OAUTH_REDIRECT_URL,
  // cors 
  origin: process.env.ORIGIN
};

export const {
  port,
  mongo_url,
  client_url,
  server_url,
  node_env,
  jwt_secret,
  jwt_expires_in,
  jwt_refresh_expires_in,
  jwt_refresh_secret,
  github_client_id,
  github_client_secret,
  github_oauth_redirect_url,
  origin
} = _config;
