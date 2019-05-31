package per.example.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import per.example.kursova.model.Department;

public interface DepartmentRepository extends JpaRepository<Department, Integer> {
}
