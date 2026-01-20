const errorHandler = require("../../../src/middlewares/errorHandler");

describe("errorHandler", () => {
  let mockRequest;
  let mockResponse;
  let mockNext;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    mockNext = jest.fn();
  });

  it("should handle errors with status code", () => {
    const error = new Error("Bad Request");
    error.statusCode = 400;

    errorHandler(error, mockRequest, mockResponse, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: {
        message: "Bad Request",
        status: 400
      }
    });
  });

  it("should handle internal server errors", () => {
    const error = new Error("Internal Server Error");

    errorHandler(error, mockRequest, mockResponse, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: {
        message: "Internal Server Error",
        status: 500
      }
    });
  });
});