class apiResponse {
  constructor(
    statusCode = 200,
    message = "req successful",
    data = null,
    name = "Success",
    isError = false,
    isSuccess = true
  ) {
    this.message = message;
    this.statusCode = statusCode;
    this.name = name;
    this.data = data;
    this.isError = isError;
    this.isSuccess = isSuccess;
  }
}

export default apiResponse;
