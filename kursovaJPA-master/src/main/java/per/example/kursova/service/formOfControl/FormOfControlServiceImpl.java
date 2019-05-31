package per.example.kursova.service.formOfControl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import per.example.kursova.model.FormOfControl;
import per.example.kursova.repository.FormOfControlRepository;

import java.sql.SQLException;
import java.util.List;

@Service
public class FormOfControlServiceImpl implements IFormOfControlService {

    @Autowired
    private FormOfControlRepository formOfControlRepository;

    @Override
    public FormOfControl insertFormOfControl(FormOfControl formOfControl) {
        return formOfControlRepository.save(formOfControl);
    }

    @Override
    public FormOfControl getFormOfControl(int id) {

        return formOfControlRepository.findById(id).get();
    }

    @Override
    public FormOfControl updateFormOfControl(FormOfControl formOfControl) {
        return formOfControlRepository.save(formOfControl);
    }

    @Override
    public void deleteFormOfControl(int id) {
        formOfControlRepository.deleteById(id);
    }

    @Override
    public List<FormOfControl> getAll() {
        return formOfControlRepository.findAll();
    }
}
