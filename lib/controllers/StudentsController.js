const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentController {
    static getStudents() {
        const jsonfile = Reader.readerJSONFile("./visualpartners.json");
        return StudentService.getStudentsList(jsonfile);
    }

    static getCertifiedStudentsEmails() {
        const jsonfile = Reader.readerJSONFile("./visualpartners.json");
        const certifiedStudentsEmails = StudentService.getCertifiedEmailList(jsonfile);
        return certifiedStudentsEmails;
    }

    static getStudentsWithCreditsGreaterThan500() {
        const jsonfile = Reader.readerJSONFile("./visualpartners.json");
        const studentsCredits = StudentService.getStudentCredits(jsonfile);
        return studentsCredits;
    }
}

module.exports = StudentController;