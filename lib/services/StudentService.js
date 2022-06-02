class StudentService {
    static getStudentsList(students) {
        return students;
    }

    static getCertifiedEmailList(students) {
        const havecertification = students.filter(student => student.haveCertification === true);
        const certifiedsEmails = havecertification.map(student => student.email);
        return certifiedsEmails;
    }

    static getStudentCredits(students) {
        const studentCredits = students.filter(student => student.credits >= 500);
        return studentCredits;
    }
}

module.exports = StudentService;
