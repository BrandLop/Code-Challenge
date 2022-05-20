const StudentController = require("../../lib/controllers/StudentsController");

describe("Tests for StudentController", () => {
    test("Get students list from StudentController", () => {
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
});