package per.example.kursova.service.candidateDissertation;

import per.example.kursova.model.CandidatesDissertation;

import java.util.List;

public interface ICandidatesDissertationService {

    public CandidatesDissertation insertCandidatesDissertation(CandidatesDissertation candidatesDissertation);
    public CandidatesDissertation getCandidatesDissertation(int id);
    public CandidatesDissertation updateCandidatesDissertation(CandidatesDissertation candidatesDissertation);
    public void deleteCandidatesDissertation(int id);
    public List<CandidatesDissertation> getAll();
    List<CandidatesDissertation> getCandidatesDissertationsByDepartmentOfTeachers(int department_id);
}
