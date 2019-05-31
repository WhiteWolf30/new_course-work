package per.example.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import per.example.kursova.model.Session;

public interface SessionRepository extends JpaRepository<Session, Integer> {
}
