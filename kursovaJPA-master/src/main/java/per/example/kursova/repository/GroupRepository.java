package per.example.kursova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import per.example.kursova.model.Group;

import java.util.List;

public interface GroupRepository extends JpaRepository<Group, Integer> {

    @Query("select s.curriculum.group from Session s group by s.curriculum.group.id order by avg(s.mark) desc")
    List<Group> getGroupsOrderByAverageMark();
}
