class apiError extends Error {
  constructor(
    statusCode = 500,
    message = "Something went wrong",
    name = "Error",
    isError = true,
    isSuccess = false
  ) {
    super(message);
    this.statusCode = statusCode;
    this.name = name;
    this.isError = isError;
    this.isSuccess = isSuccess;
  }
}

export default apiError;
