class StudentService {
    static getStudentsList(students) {
        return students;
    }

    static getCertifiedEmailList(students) {
        const havecertification = students.filter(student => student.haveCertification === true);
        const certifiedsEmails = havecertification.map(student => student.email);
        return certifiedsEmails;
    }
}

module.exports = StudentService;
