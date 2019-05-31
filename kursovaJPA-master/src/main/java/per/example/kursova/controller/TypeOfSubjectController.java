package per.example.kursova.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import per.example.kursova.model.TypeOfSubject;
import per.example.kursova.service.typeOfSubject.TypeOfSubjectServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TypeOfSubjectController {
    @Autowired
    private TypeOfSubjectServiceImpl typeOfSubjectService;

    @RequestMapping("/types of subject")
    List<TypeOfSubject> showTypesOfSubject() {
        return typeOfSubjectService.getAll();
    }

    @PostMapping("/type of subject/insert")
    TypeOfSubject insertOneTypeOfSubject(@RequestBody TypeOfSubject typeOfSubject) {
        return typeOfSubjectService.insertTypeOfSubject(typeOfSubject);
    }

    @GetMapping("/type of subject/delete")
    void deleteTypeOfSubjectById(@RequestParam("id") int id)
    {
        typeOfSubjectService.deleteTypeOfSubject(id);
    }

    @RequestMapping("/type of subject/update")
    TypeOfSubject updateTypeOfSubject(@RequestBody TypeOfSubject typeOfSubject, @RequestParam("id") int id)
    {
        typeOfSubject.setId(id);
        return typeOfSubjectService.updateTypeOfSubject(typeOfSubject);
    }

    @GetMapping("/type of subject/get")
    TypeOfSubject getTypeOfSubjectById(@RequestParam("id") int id)
    {
        return typeOfSubjectService.getTypeOfSubject(id);
    }
}
