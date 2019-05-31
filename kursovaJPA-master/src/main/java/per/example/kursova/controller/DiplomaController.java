package per.example.kursova.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import per.example.kursova.model.Diploma;
import per.example.kursova.model.Group;
import per.example.kursova.service.diploma.DiplomaServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DiplomaController {
    @Autowired
    private DiplomaServiceImpl diplomaService;

    @RequestMapping("/diplomas")
    List<Diploma> showDiplomas() {
        return diplomaService.getAll();
    }

    @PostMapping("/diploma/insert")
    Diploma insertDiploma(@RequestBody Diploma diploma) {
        return diplomaService.insertDiploma(diploma);
    }

    @GetMapping("/diploma/delete")
    void deleteDiploma(@RequestParam("id") int id)
    {
        diplomaService.deleteDiploma(id);
    }

    @GetMapping("/diploma/get")
    Diploma getDiplomaById(@RequestParam("id") int id)
    {
        return diplomaService.getDiploma(id);
    }

    @RequestMapping("/diploma/update")
    Diploma updateDiploma(@RequestBody Diploma diploma, @RequestParam("id") int id)
    {
        diploma.setId(id);
        return diplomaService.updateDiploma(diploma);
    }

    @RequestMapping("/diploma/get by teacher")
    List<Diploma> getDiplomaByTeacher(@RequestParam("teacher_id") int teacher_id)
    {
        return diplomaService.getDiplomaByTeacher(teacher_id);
    }

}
