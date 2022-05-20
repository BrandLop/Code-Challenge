const StudentService = require("../../lib/services/StudentService");
const Reader = require("../../lib/utils/Reader");

describe("Tests for StudentService", () => {
    test("Get students list from JSON file", () => {
        const jsonfile = Reader.readerJSONFile("./visualpartners.json");
        const studentslist = StudentService.getStudentsList(jsonfile);
        expect(studentslist.length).toEqual(51);
        expect(studentslist[0]).toMatchObject({
            id: expect.any(String),
            name: expect.any(String),
            email: expect.any(String),
            credits: expect.any(Number),
            enrollments: expect.any(Array),
            previousCourses: expect.any(Number),
            haveCertification: expect.any(Boolean)
        });
    });

    test("Get certified students emails from JSON file", () => {
        const expected = /@/;
        const jsonfile = Reader.readerJSONFile("./visualpartners.json");
        const certifiedsEmails = StudentService.getCertifiedEmailList(jsonfile);
        expect(certifiedsEmails.length).toEqual(29);
        expect(certifiedsEmails[0]).toEqual(expect.stringMatching(expected));
    });
});