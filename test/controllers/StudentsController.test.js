const StudentController = require("../../lib/controllers/StudentsController");

describe("Tests for StudentController", () => {
    test("Get students list from StudentService", () => {
        const studentslis = StudentController.getStudents();
        expect(studentslis.length).toEqual(51);
        expect(studentslis[0]).toMatchObject({
            id: expect.any(String),
            name: expect.any(String),
            email: expect.any(String),
            credits: expect.any(Number),
            enrollments: expect.any(Array),
            previousCourses: expect.any(Number),
            haveCertification: expect.any(Boolean)
        });
    });

    test("Get certified students emails from StudentService", () => { 
        const certifiedEmails = StudentController.getCertifiedStudentsEmails();
        expect(certifiedEmails.length).toEqual(29);
        expect(certifiedEmails[0]).toEqual(expect.stringMatching(/@/));
    });
});