package per.example.kursova.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import per.example.kursova.model.Chair;
import per.example.kursova.model.Department;
import per.example.kursova.service.chair.ChairServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ChairController {
    @Autowired
    private ChairServiceImpl chairService;

    @RequestMapping("/chairs")
    List<Chair> showChairs() {
        return chairService.getAll();
    }

    @PostMapping("/chair/insert")
    Chair insertChair(@RequestBody Chair chair) {
        return chairService.insertChair(chair);
    }

    @GetMapping("/chair/delete")
    void deleteChair(@RequestParam("id") int id)
    {
        chairService.deleteChair(id);
    }

    @GetMapping("/chair/get")
    Chair getChairById(@RequestParam("id") int id)
    {
        return chairService.getChair(id);
    }

    @RequestMapping("/chair/update")
    Chair updateChair(@RequestBody Chair chair, @RequestParam("id") int id)
    {
        chair.setId(id);
        return chairService.updateChair(chair);
    }

    @GetMapping("/chair/get by lessons in group")
    List<Chair> getChairsByLessonsInGroup(@RequestParam("group_id") int group_id)
    {
        return chairService.getChairsByLessonsInGroup(group_id);
    }
}
