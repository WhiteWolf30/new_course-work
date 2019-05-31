package per.example.kursova.service.formOfControl;



import per.example.kursova.model.FormOfControl;

import java.sql.SQLException;
import java.util.List;

public interface IFormOfControlService {

    public FormOfControl insertFormOfControl(FormOfControl formOfControl);
    public FormOfControl getFormOfControl(int id);
    public FormOfControl updateFormOfControl(FormOfControl formOfControl);
    public void deleteFormOfControl(int id);
    public List<FormOfControl> getAll();
}
