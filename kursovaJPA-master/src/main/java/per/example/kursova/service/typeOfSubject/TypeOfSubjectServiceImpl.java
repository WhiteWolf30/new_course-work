package per.example.kursova.service.typeOfSubject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import per.example.kursova.model.TypeOfSubject;
import per.example.kursova.repository.TypeOfSubjectRepository;

import java.util.List;

@Service
public class TypeOfSubjectServiceImpl implements ITypeOfSubjectService {

    @Autowired
    private TypeOfSubjectRepository typeOfSubjectRepository;

    @Override
    public TypeOfSubject insertTypeOfSubject(TypeOfSubject typeOfSubject) {

        return typeOfSubjectRepository.save(typeOfSubject);
    }

    @Override
    public TypeOfSubject getTypeOfSubject(int id) {

        return typeOfSubjectRepository.findById(id).get();
    }

    @Override
    public TypeOfSubject updateTypeOfSubject(TypeOfSubject typeOfSubject) {

        return typeOfSubjectRepository.save(typeOfSubject);
    }

    @Override
    public void deleteTypeOfSubject(int id) {
        typeOfSubjectRepository.deleteById(id);
    }

    @Override
    public List<TypeOfSubject> getAll() {
        return typeOfSubjectRepository.findAll();
    }
}
