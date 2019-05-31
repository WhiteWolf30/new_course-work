package per.example.kursova.service.subject;
import per.example.kursova.model.Subject;

import java.util.List;

public interface ISubjectService {

    public Subject insertSubject(Subject subject);
    public Subject getSubject(int id);
    public Subject updateSubject(Subject subject);
    public void deleteSubject(int id);
    public List<Subject> getAll();
    List<Subject> getSubjectByType(int typeOfSubject_id);
}
