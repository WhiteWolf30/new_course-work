package per.example.kursova.service.deanery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import per.example.kursova.model.Deanery;
import per.example.kursova.repository.DeaneryRepository;

import java.util.List;

@Service
public class DeaneryServiceImpl implements IDeaneryService {

    @Autowired
    private DeaneryRepository deaneryRepository;

    @Override
    public Deanery insertDeanery(Deanery deanery) {

        return deaneryRepository.save(deanery);
    }

    @Override
    public Deanery getDeanery(int id) {
        return deaneryRepository.findById(id).get();
    }

    @Override
    public Deanery updateDeanery(Deanery deanery) {

        return deaneryRepository.save(deanery);
    }

    @Override
    public void deleteDeanery(int id) {
        deaneryRepository.deleteById(id);
    }

    @Override
    public List<Deanery> getAll(){
       return deaneryRepository.findAll();
    }
}
