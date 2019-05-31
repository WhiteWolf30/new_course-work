package per.example.kursova.service.typeOfSubject;


import per.example.kursova.model.TypeOfSubject;

import java.util.List;

public interface ITypeOfSubjectService {

    public TypeOfSubject insertTypeOfSubject(TypeOfSubject typeOfSubject);
    public TypeOfSubject getTypeOfSubject(int id);
    public TypeOfSubject updateTypeOfSubject(TypeOfSubject typeOfSubject);
    public void deleteTypeOfSubject(int id);
    public List<TypeOfSubject> getAll();
}
