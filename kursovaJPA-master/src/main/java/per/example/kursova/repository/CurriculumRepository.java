package per.example.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import per.example.kursova.model.Curriculum;

public interface CurriculumRepository extends JpaRepository<Curriculum, Integer> {
}
