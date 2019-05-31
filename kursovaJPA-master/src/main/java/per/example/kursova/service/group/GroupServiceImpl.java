package per.example.kursova.service.group;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import per.example.kursova.model.Group;
import per.example.kursova.repository.GroupRepository;

import java.util.List;

@Service
public class GroupServiceImpl implements IGroupService {

    @Autowired
    private GroupRepository groupRepository;

    @Override
    public Group insertGroup(Group group) {

        return groupRepository.save(group);
    }

    @Override
    public Group getGroup(int id) {

        return groupRepository.findById(id).get();
    }

    @Override
    public Group updateGroup(Group group) {
        return groupRepository.save(group);
    }

    @Override
    public void deleteGroup(int id) {
        groupRepository.deleteById(id);
    }

    @Override
    public List<Group> getAll() {
        return groupRepository.findAll();
    }

    @Override
    public List<Group> getGroupsOrderByAverageMark() {
        return groupRepository.getGroupsOrderByAverageMark();
    }
}
