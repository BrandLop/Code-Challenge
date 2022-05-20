const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentController {
    static getStudents() {
        const jsonfile = Reader.readerJSONFile("./visualpartners.json");
        return StudentService.getStudentsList(jsonfile);
    }
}

module.exports = StudentController;