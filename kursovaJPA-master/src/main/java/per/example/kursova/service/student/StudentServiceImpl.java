package per.example.kursova.service.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import per.example.kursova.model.Student;
import per.example.kursova.repository.StudentRepository;

import java.util.List;

@Service
public class StudentServiceImpl implements IStudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student insertStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Student getStudent(int id) {

        return studentRepository.findById(id).get();
    }

    @Override
    public Student updateStudent(Student student) {

        return studentRepository.save(student);
    }

    @Override
    public void deleteStudent(int id) {
        studentRepository.deleteById(id);
    }

    @Override
    public List<Student> getAll() {
        return studentRepository.findAll();
    }

    @Override
    public List<Student> getStudentsByGroup(int group_id) {
        return studentRepository.getStudentsByGroup(group_id);
    }

    @Override
    public int getNumberOfStudentsByDepartment(int department_id) {
        return studentRepository.getNumberOfStudentsByDepartment(department_id);
    }

    @Override
    public List<Student> getStudentsBySessionMark(int mark) {
        return studentRepository.getStudentsBySessionMark(mark);
    }

    @Override
    public List<Student> getStudentsFromCurriculum() {
        return studentRepository.getStudentsFromCurriculum();
    }

    @Override
    public List<Student> getStudentsFromSessionByLesson(int subject_id) {
        return studentRepository.getStudentsFromSessionByLesson(subject_id);
    }

    @Override
    public List<Student> getStudentsFromSessionByLessonAndMark(int subject_id, int mark) {
        return studentRepository.getStudentsFromSessionByLessonAndMark(subject_id, mark);
    }

    @Override
    public List<Student> getGreatStudentsByGroup(int group_id) {
        return studentRepository.getGreatStudentsByGroup(group_id);
    }

    @Override
    public List<Student> getStudentsWhoGetMoreThanOneEByGroup(int group_id) {
        return studentRepository.getStudentsWhoGetMoreThanOneEByGroup(group_id);
    }

    @Override
    public List<Student> getStudentsFromSessionBySubjectAndMarkAndTeacher(int subject_id, int mark, int teacher_id) {
        return studentRepository.getStudentsFromSessionBySubjectAndMarkAndTeacher(subject_id, mark, teacher_id);
    }
}
