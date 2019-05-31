package per.example.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import per.example.kursova.model.Chair;

import java.util.List;

public interface ChairRepository extends JpaRepository<Chair, Integer> {

    @Query("select c.teacher.chair from Curriculum c where c.group.id = :group_id group by c.teacher.chair.id")
    List<Chair> getChairsByLessonsInGroup(@Param("group_id") int group_id);
}
