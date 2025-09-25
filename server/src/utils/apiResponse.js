class apiResponse {
  constructor(
    statusCode = 200,
    message = "req successful",
    name = "Success",
    isError = false,
    isSuccess = true
  ) {
    this.message = message;
    this.statusCode = statusCode;
    this.name = name;
    this.isError = isError;
    this.isSuccess = isSuccess;
  }
}

export default apiResponse;
