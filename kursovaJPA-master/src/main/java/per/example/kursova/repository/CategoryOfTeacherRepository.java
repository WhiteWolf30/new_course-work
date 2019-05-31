package per.example.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import per.example.kursova.model.CategoryOfTeacher;

public interface CategoryOfTeacherRepository extends JpaRepository<CategoryOfTeacher, Integer> {
}
