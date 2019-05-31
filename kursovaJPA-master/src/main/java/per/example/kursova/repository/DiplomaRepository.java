package per.example.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import per.example.kursova.model.Diploma;

import java.util.List;

public interface DiplomaRepository extends JpaRepository<Diploma, Integer> {
    @Query("select d from Diploma d where d.teacher.id = :teacher_id")
    List<Diploma> getDiplomaByTeacher(@Param("teacher_id") int teacher_id);
}
