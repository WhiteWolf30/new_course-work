package per.example.kursova.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import per.example.kursova.model.DoctoralDissertation;
import per.example.kursova.model.Student;
import per.example.kursova.service.doctoralDissertation.DoctoralDissertationServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DoctoralDissertationController {
    @Autowired
    private DoctoralDissertationServiceImpl doctoralDissertationService;

    @RequestMapping("/doctoral dissertations")
    List<DoctoralDissertation> showDoctoralDissertations(){
        return doctoralDissertationService.getAll();
    }

    @PostMapping("/doctoral dissertation/insert")
    DoctoralDissertation insertDoctoralDissertation(@RequestBody DoctoralDissertation doctoralDissertation) {
        return doctoralDissertationService.insertDoctoralDissertation(doctoralDissertation);
    }

    @GetMapping("/doctoral dissertation/delete")
    void deleteDoctoralDissertation(@RequestParam("id") int id)
    {
        doctoralDissertationService.deleteDoctoralDissertation(id);
    }

    @GetMapping("/doctoral dissertation/get")
    DoctoralDissertation getDoctoralDissertationById(@RequestParam("id") int id)
    {
        return doctoralDissertationService.getDoctoralDissertation(id);
    }

    @RequestMapping("/doctoral dissertation/update")
    DoctoralDissertation updateDoctoralDissertation(@RequestBody DoctoralDissertation doctoralDissertation, @RequestParam("id") int id)
    {
        doctoralDissertation.setId(id);
        return doctoralDissertationService.updateDoctoralDissertation(doctoralDissertation);
    }
}
