package per.example.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import per.example.kursova.model.DoctoralDissertation;

public interface DoctoralDissertationRepository extends JpaRepository<DoctoralDissertation, Integer> {
}
