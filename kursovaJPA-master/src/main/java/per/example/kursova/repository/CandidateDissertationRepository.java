package per.example.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import per.example.kursova.model.CandidatesDissertation;

import java.util.List;

public interface CandidateDissertationRepository extends JpaRepository<CandidatesDissertation, Integer> {

    @Query("select c from CandidatesDissertation c where c.teacher.chair.department.id = :department_id")
    List<CandidatesDissertation> getCandidatesDissertationsByDepartmentOfTeachers(@Param("department_id") int department_id);
}
