package per.example.kursova.service.diploma;

import per.example.kursova.model.Diploma;

import java.util.List;

public interface IDiplomaService {

    public Diploma insertDiploma(Diploma diploma);
    public Diploma getDiploma(int id);
    public Diploma updateDiploma(Diploma diploma);
    public void deleteDiploma(int id);
    public List<Diploma> getAll();
    List<Diploma> getDiplomaByTeacher(int teacher_id);
}
