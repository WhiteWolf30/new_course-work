package per.example.kursova.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import per.example.kursova.model.Student;
import per.example.kursova.model.Subject;
import per.example.kursova.service.subject.SubjectServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SubjectController {
    @Autowired
    private SubjectServiceImpl subjectService;

    @RequestMapping("/subjects")
    public List<Subject> showSubjects() {
        return subjectService.getAll();
    }

    @PostMapping("/subject/insert")
    Subject insertSubject(@RequestBody Subject subject) {
        return subjectService.insertSubject(subject);
    }

    @GetMapping("/subject/delete")
    void deleteSubject(@RequestParam("id") int id)
    {
        subjectService.deleteSubject(id);
    }

    @GetMapping("/subject/get")
    Subject getSubjectById(@RequestParam("id") int id)
    {
        return subjectService.getSubject(id);
    }

    @RequestMapping("/subject/update")
    Subject updateSubject(@RequestBody Subject subject, @RequestParam("id") int id)
    {
        subject.setId(id);
        return subjectService.updateSubject(subject);
    }

    @GetMapping("/subject/get by type")
    List<Subject> getSubjectByType(@RequestParam("typeOfSubject_id") int typeOfSubject_id)
    {
        return subjectService.getSubjectByType(typeOfSubject_id);
    }
}
