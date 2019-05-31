package per.example.kursova.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import per.example.kursova.model.Chair;
import per.example.kursova.model.Group;
import per.example.kursova.service.group.GroupServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GroupController {
    @Autowired
    private GroupServiceImpl groupService;

    @RequestMapping("/groups")
    List<Group> showGroups() {
        return groupService.getAll();
    }

    @PostMapping("/group/insert")
    Group insertGroup(@RequestBody Group group) {
        return groupService.insertGroup(group);
    }

    @GetMapping("/group/delete")
    void deleteGroup(@RequestParam("id") int id)
    {
        groupService.deleteGroup(id);
    }

    @GetMapping("/group/get")
    Group getGroupById(@RequestParam("id") int id)
    {
        return groupService.getGroup(id);
    }

    @RequestMapping("/group/update")
    Group updateGroup(@RequestBody Group group, @RequestParam("id") int id)
    {
        group.setId(id);
        return groupService.updateGroup(group);
    }

    @GetMapping("/group/get order by average mark")
    List<Group> getGroupsOrderByAverageMark()
    {
        return groupService.getGroupsOrderByAverageMark();
    }

}
