package per.example.kursova.service.subject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import per.example.kursova.model.Subject;
import per.example.kursova.repository.SubjectRepository;

import java.util.List;

@Service
public class SubjectServiceImpl implements ISubjectService {

    @Autowired
    private SubjectRepository subjectRepository;

    @Override
    public Subject insertSubject(Subject subject) {

        return subjectRepository.save(subject);
    }

    @Override
    public Subject getSubject(int id) {

        return subjectRepository.findById(id).get();
    }

    @Override
    public Subject updateSubject(Subject subject) {

        return subjectRepository.save(subject);
    }

    @Override
    public void deleteSubject(int id) {
        subjectRepository.deleteById(id);
    }

    @Override
    public List<Subject> getAll(){
        return subjectRepository.findAll();
    }

    @Override
    public List<Subject> getSubjectByType(int typeOfSubject_id) {
        return subjectRepository.getSubjectsByType(typeOfSubject_id);
    }
}
