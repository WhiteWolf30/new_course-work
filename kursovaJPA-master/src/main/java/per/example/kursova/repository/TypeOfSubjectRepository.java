package per.example.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import per.example.kursova.model.TypeOfSubject;

public interface TypeOfSubjectRepository extends JpaRepository<TypeOfSubject, Integer> {
}
