package per.example.kursova.service.group;

import per.example.kursova.model.Group;

import java.util.List;

public interface IGroupService {

    public Group insertGroup(Group group);
    public Group getGroup(int id);
    public Group updateGroup(Group group);
    public void deleteGroup(int id);
    public List<Group> getAll();
    List<Group> getGroupsOrderByAverageMark();
}
