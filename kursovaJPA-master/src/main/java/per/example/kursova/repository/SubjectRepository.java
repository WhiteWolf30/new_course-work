package per.example.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import per.example.kursova.model.Subject;

import java.util.List;

public interface SubjectRepository extends JpaRepository<Subject, Integer> {
    @Query("select s from Subject s where s.typeOfSubject.id = :typeOfSubject_id")
    List<Subject> getSubjectsByType(@Param("typeOfSubject_id")int typeOfSubject_id);
}
