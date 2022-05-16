const StudentService = require("../services/StudentService");

class StudentController {
    static getStudents(students) {
        return StudentService.getStudentsList(students);
    }
}

module.exports = StudentController;