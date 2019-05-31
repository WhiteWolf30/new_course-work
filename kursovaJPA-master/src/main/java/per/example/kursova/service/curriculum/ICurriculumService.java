package per.example.kursova.service.curriculum;

import per.example.kursova.model.Curriculum;

import java.util.List;

public interface ICurriculumService {

    public Curriculum insertCurriculum(Curriculum curriculum);
    public Curriculum getCurriculum(int id);
    public Curriculum updateCurriculum(Curriculum curriculum);
    public void deleteCurriculum(int id);
    public List<Curriculum> getAll();
}
