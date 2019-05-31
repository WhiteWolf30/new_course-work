package per.example.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import per.example.kursova.model.Student;

import javax.persistence.NamedNativeQueries;
import javax.persistence.NamedNativeQuery;
import javax.persistence.NamedQuery;
import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Integer>{

    @Query("select s from Student s where s.group.id = :group_id")
    List<Student> getStudentsByGroup(@Param("group_id") int group_id);

    @Query("select count(s) from Student s where s.group.chair.department.id = :department_id")
    int getNumberOfStudentsByDepartment(@Param("department_id") int department_id);

    @Query("select s.student from Session s where s.mark = :mark group by s.student.id")
    List<Student> getStudentsBySessionMark(@Param("mark") int mark);

    @Query("select s from Student s where s.group.id in (select c.group.id from Curriculum c)")
    List<Student> getStudentsFromCurriculum();

    @Query("select s.student from Session s where s.curriculum.subject.id = :subject_id group by s.student.id")
    List<Student> getStudentsFromSessionByLesson(@Param("subject_id") int subject_id);

    @Query("select s.student from Session s where s.curriculum.subject.id = :subject_id and s.mark =:mark group by s.student.id")
    List<Student> getStudentsFromSessionByLessonAndMark(@Param("subject_id") int subject_id, @Param("mark") int mark);

    @Query("select s.student from Session s where s.student.id not in (" +
            "select s.student.id from Session s where s.mark < 4) and s.curriculum.group.id = :group_id group by s.student.id")
    List<Student> getGreatStudentsByGroup(@Param("group_id") int group_id);


    @Query("select s.student from Session s where s.mark = 2 and s.curriculum.group.id = :group_id group by s.student having count(s.student) > 1")
    List<Student> getStudentsWhoGetMoreThanOneEByGroup(@Param("group_id")int group_id);

    @Query("select s.student from Session s where s.curriculum.subject.id = :subject_id and s.mark =:mark " +
            "and s.curriculum.teacher.id = :teacher_id group by s.student.id")
    List<Student> getStudentsFromSessionBySubjectAndMarkAndTeacher(
            @Param("subject_id") int subject_id,
            @Param("mark") int mark,
            @Param("teacher_id") int teacher_id);

}
