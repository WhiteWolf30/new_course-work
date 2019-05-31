package per.example.kursova.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import per.example.kursova.model.CandidatesDissertation;
import per.example.kursova.service.candidateDissertation.CandidatesDissertationServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CandidatesDissertationController {
    @Autowired
    private CandidatesDissertationServiceImpl candidatesDissertationService;

    @RequestMapping("/candidates dissertations")
    List<CandidatesDissertation> showCandidatesDissertations(){
        return candidatesDissertationService.getAll();
    }

    @PostMapping("/candidate dissertation/insert")
    CandidatesDissertation insertCandidatesDissertation(@RequestBody CandidatesDissertation candidatesDissertation) {
        return candidatesDissertationService.insertCandidatesDissertation(candidatesDissertation);
    }

    @GetMapping("/candidate dissertation/delete")
    void deleteCandidatesDissertation(@RequestParam("id") int id)
    {
        candidatesDissertationService.deleteCandidatesDissertation(id);
    }

    @GetMapping("/candidate dissertation/get")
    CandidatesDissertation getCandidatesDissertationById(@RequestParam("id") int id)
    {
        return candidatesDissertationService.getCandidatesDissertation(id);
    }

    @RequestMapping("/candidate dissertation/update")
    CandidatesDissertation updateCandidatesDissertation(@RequestBody CandidatesDissertation candidatesDissertation, @RequestParam("id") int id)
    {
        candidatesDissertation.setId(id);
        return candidatesDissertationService.updateCandidatesDissertation(candidatesDissertation);
    }

    @GetMapping("/candidate dissertation/get by chair of teacher")
    List<CandidatesDissertation> getCandidatesDissertationsByDepartmentOfTeachers(@RequestParam("department_id") int department_id)
    {
        return candidatesDissertationService.getCandidatesDissertationsByDepartmentOfTeachers(department_id);
    }

}
