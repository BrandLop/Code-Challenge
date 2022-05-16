const request = require("supertest");
const {app, server} = require("../lib/server");

describe("GET task for VisualPartners API", function() {
    test("Should return a json", async() => {
        const response = await request(app)
            .get("/");
        expect(response.statusCode).toEqual(200);
        expect(response.body).toMatchObject({message: "VisualPartners API welcome"});
    });

    afterAll(() => {
        server.close();
    });
});