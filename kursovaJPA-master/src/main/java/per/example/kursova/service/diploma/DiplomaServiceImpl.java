package per.example.kursova.service.diploma;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import per.example.kursova.model.Diploma;
import per.example.kursova.repository.DiplomaRepository;

import java.util.List;

@Service
public class DiplomaServiceImpl implements IDiplomaService {

    @Autowired
    private DiplomaRepository diplomaRepository;

    @Override
    public Diploma insertDiploma(Diploma diploma) {

        return diplomaRepository.save(diploma);
    }

    @Override
    public Diploma getDiploma(int id) {

        return diplomaRepository.findById(id).get();
    }

    @Override
    public Diploma updateDiploma(Diploma diploma) {

        return diplomaRepository.save(diploma);
    }

    @Override
    public void deleteDiploma(int id) {

        diplomaRepository.deleteById(id);
    }

    @Override
    public List<Diploma> getAll() {
        return diplomaRepository.findAll();
    }

    @Override
    public List<Diploma> getDiplomaByTeacher(int teacher_id) {
        return diplomaRepository.getDiplomaByTeacher(teacher_id);
    }
}
