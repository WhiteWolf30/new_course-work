package per.example.kursova.service.curriculum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import per.example.kursova.model.Curriculum;
import per.example.kursova.repository.CurriculumRepository;

import java.util.List;

@Service
public class CurriculumServiceImpl implements ICurriculumService {

    @Autowired
    private CurriculumRepository curriculumRepository;

    @Override
    public Curriculum insertCurriculum(Curriculum curriculum) {

        return curriculumRepository.save(curriculum);
    }

    @Override
    public Curriculum getCurriculum(int id) {

        return curriculumRepository.findById(id).get();
    }

    @Override
    public Curriculum updateCurriculum(Curriculum curriculum) {

        return curriculumRepository.save(curriculum);
    }

    @Override
    public void deleteCurriculum(int id) {

        curriculumRepository.deleteById(id);
    }

    @Override
    public List<Curriculum> getAll(){
        return curriculumRepository.findAll();
    }
}
