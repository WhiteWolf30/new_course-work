package per.example.kursova.service.doctoralDissertation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import per.example.kursova.model.DoctoralDissertation;
import per.example.kursova.repository.DoctoralDissertationRepository;

import java.util.List;

@Service
public class DoctoralDissertationServiceImpl implements IDoctoralDissertationService {

    @Autowired
    private DoctoralDissertationRepository doctoralDissertationRepository;

    @Override
    public DoctoralDissertation insertDoctoralDissertation(DoctoralDissertation doctoralDissertation) {

        return doctoralDissertationRepository.save(doctoralDissertation);
    }

    @Override
    public DoctoralDissertation getDoctoralDissertation(int id) {
        return doctoralDissertationRepository.findById(id).get();
    }

    @Override
    public DoctoralDissertation updateDoctoralDissertation(DoctoralDissertation doctoralDissertation) {
        return doctoralDissertationRepository.save(doctoralDissertation);
    }

    @Override
    public void deleteDoctoralDissertation(int id) {
        doctoralDissertationRepository.deleteById(id);
    }

    @Override
    public List<DoctoralDissertation> getAll() {
        return doctoralDissertationRepository.findAll();
    }
}
