package per.example.kursova.service.student;


import per.example.kursova.model.Student;

import java.util.List;

public interface IStudentService {

    Student insertStudent(Student student);
    Student getStudent(int id);
    Student updateStudent(Student student);
    void deleteStudent(int id);
    List<Student> getAll();
    List<Student> getStudentsByGroup(int group_id);
    int getNumberOfStudentsByDepartment(int department_id);
    List<Student> getStudentsBySessionMark(int mark);
    List<Student> getStudentsFromCurriculum();
    List<Student> getStudentsFromSessionByLesson(int subject_id);
    List<Student> getStudentsFromSessionByLessonAndMark(int subject_id, int mark);
    List<Student> getGreatStudentsByGroup(int group_id);
    List<Student> getStudentsWhoGetMoreThanOneEByGroup(int group_id);
    List<Student> getStudentsFromSessionBySubjectAndMarkAndTeacher(int subject_id, int mark, int teacher_id);
}
