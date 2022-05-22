const request = require("supertest");
const {app, server} = require("../lib/server");

describe("GET task for VisualPartners API", function() {
    test("Should return a json", async() => {
        const response = await request(app)
            .get("/");
        expect(response.statusCode).toEqual(200);
        expect(response.body).toMatchObject({message: "VisualPartners API welcome"});
    });

    test("Should return a visualpartners list", async() => {
        const response = await request(app)
            .get("/v1/visualpartners");
        expect(response.statusCode).toEqual(200);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toMatchObject({
            id: expect.any(String),
            name: expect.any(String),
            email: expect.stringMatching(/@/),
            credits: 508,
            enrollments: expect.any(Array),
            previousCourses: expect.any(Number),
            haveCertification: expect.any(Boolean)
        });
    });

    test("Should return a list of visualpartners emails certified", async() => {
        const response = await request(app)
            .get("/v1/visualpartners/havecertification/email");
        expect(response.statusCode).toEqual(200);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toEqual(expect.stringMatching(/@/));
    });

    afterAll(() => {
        server.close();
    });
});