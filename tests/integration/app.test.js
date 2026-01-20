const request = require("supertest");
const app = require("../../src/server");

describe("GET /hello", () => {
  it("should return Hello world", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });

  it("should return Hello world with a name", async () => {
    const res = await request(app).get("/hello/Alice");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world! From Alice");
  });
});

describe("POST /hello", () => {                                                                                    
  it("should return Hello world with a name from header", async () => {                                            
    const res = await request(app)                                                                                 
      .post("/hello")                                                                                              
      .set("x-name", "Bob");                                                                                       
    expect(res.statusCode).toBe(200);                                                                              
    expect(res.text).toBe("Hello world! From Bob");                                                                
  });
                                                                                                               
  it("should return Hello world without header", async () => {                                                     
    const res = await request(app).post("/hello");                                                                 
    expect(res.statusCode).toBe(200);                                                                              
    expect(res.text).toBe("Hello world!");                                                                         
  });                                                                                                              
});  

describe("Error handling", () => {
  it("should return 404 for non-existent routes", async () => {
    const res = await request(app).get("/nonexistent");
    expect(res.statusCode).toBe(404);
  });

  it("should return 405 for unsupported methods", async () => {
    const res = await request(app).put("/hello");  // Méthode PUT non supportée
    expect(res.statusCode).toBe(405);
  });
});