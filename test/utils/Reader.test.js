const Reader = require("../../lib/utils/Reader");

describe("Tests for Reader", () => {
    test("Reading JSON file", () => {
        const visualpartnerts = Reader.readerJSONFile("./visualpartners.json");
        expect(visualpartnerts.length).toBeGreaterThan(0);
        expect(visualpartnerts[0]).toMatchObject({
            id: expect.any(String),
            name: expect.any(String),
            email: expect.any(String),
            credits: expect.any(Number),
            enrollments: expect.any(Array),
            previousCourses: expect.any(Number),
            haveCertification: expect.any(Boolean)
        });
    });
});