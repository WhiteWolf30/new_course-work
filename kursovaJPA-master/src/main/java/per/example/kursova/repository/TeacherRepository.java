package per.example.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import per.example.kursova.model.Teacher;

import java.time.LocalDate;
import java.util.List;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {

    @Query("select t from Teacher t where t.chair.id = :chair_id")
    List<Teacher> getTeachersByChair(@Param("chair_id") int chair_id);

    @Query("select d.teacher from DoctoralDissertation d where d.protectionDate between :startDate and :endDate")
    List<Teacher> GetTeachersByProtectionOfDoctoralDissertationDuringSpecifiedTime(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

    @Query("select c.teacher from Curriculum c where c.subject.id = :subject_id and c.group.course = :course")
    List<Teacher> getTeachersByLessonAndCourse(@Param("subject_id") int subject_id, @Param("course") int course);

    @Query("select count( distinct c.teacher) from Curriculum c where c.group.id = :group_id")
    int getNumberOfTeachersByLessonsInTheGroup(@Param("group_id") int group_id);

    @Query("select s.curriculum.teacher from Session s where s.curriculum.group.id = :group_id group by s.curriculum.teacher")
    List<Teacher> getTeachersByExamInCurrentGroup(@Param("group_id")int group_id);

    @Query("select d.teacher from Diploma d where d.teacher.chair.id = :chair_id")
    List<Teacher> getTeachersFromDiplomaByChair(@Param("chair_id") int chair_id);

    @Query("select t from Teacher t where t.categoryOfTeacher.id = :categoryOfTeacher_id")
    List<Teacher> getTeachersByCategoryOfTeacher(@Param("categoryOfTeacher_id") int categoryOfTeacher_id);
}
