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
}

module.exports = StudentController;