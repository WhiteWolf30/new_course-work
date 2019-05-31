package per.example.kursova.service.candidateDissertation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import per.example.kursova.model.CandidatesDissertation;
import per.example.kursova.repository.CandidateDissertationRepository;

import java.util.List;

@Service
public class CandidatesDissertationServiceImpl implements ICandidatesDissertationService {

    @Autowired
    private CandidateDissertationRepository candidateDissertationRepository;

    @Override
    public CandidatesDissertation insertCandidatesDissertation(CandidatesDissertation candidatesDissertation) {
        return candidateDissertationRepository.save(candidatesDissertation);
    }

    @Override
    public CandidatesDissertation getCandidatesDissertation(int id) {

        return candidateDissertationRepository.findById(id).get();
    }

    @Override
    public CandidatesDissertation updateCandidatesDissertation(CandidatesDissertation candidatesDissertation) {
        return candidateDissertationRepository.save(candidatesDissertation);
    }

    @Override
    public void deleteCandidatesDissertation(int id) {

        candidateDissertationRepository.deleteById(id);
    }

    @Override
    public List<CandidatesDissertation> getAll() {
        return candidateDissertationRepository.findAll();
    }

    @Override
    public List<CandidatesDissertation> getCandidatesDissertationsByDepartmentOfTeachers(int department_id) {
        return candidateDissertationRepository.getCandidatesDissertationsByDepartmentOfTeachers(department_id);
    }
}
