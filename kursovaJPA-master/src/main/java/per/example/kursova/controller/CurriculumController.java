package per.example.kursova.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import per.example.kursova.model.Curriculum;
import per.example.kursova.model.Subject;
import per.example.kursova.service.curriculum.CurriculumServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CurriculumController {
    @Autowired
    private CurriculumServiceImpl curriculumService;

    @RequestMapping("curriculum")
    public List<Curriculum> showCurriculum() {
        return curriculumService.getAll();
    }

    @PostMapping("/curriculum/insert")
    Curriculum insertCurriculum(@RequestBody Curriculum curriculum) {
        return curriculumService.insertCurriculum(curriculum);
    }

    @GetMapping("/curriculum/delete")
    void deleteCurriculum(@RequestParam("id") int id)
    {
        curriculumService.deleteCurriculum(id);
    }

    @GetMapping("/curriculum/get")
    Curriculum getCurriculumById(@RequestParam("id") int id)
    {
        return curriculumService.getCurriculum(id);
    }

    @RequestMapping("/curriculum/update")
    Curriculum updateCurriculum(@RequestBody Curriculum curriculum, @RequestParam("id") int id)
    {
        curriculum.setId(id);
        return curriculumService.updateCurriculum(curriculum);
    }
}
