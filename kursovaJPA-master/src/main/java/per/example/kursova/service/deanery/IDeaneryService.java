package per.example.kursova.service.deanery;


import per.example.kursova.model.Deanery;

import java.util.List;

public interface IDeaneryService {

    public Deanery insertDeanery(Deanery deanery);
    public Deanery getDeanery(int id);
    public Deanery updateDeanery(Deanery deanery);
    public void deleteDeanery(int id);
    public List<Deanery> getAll();
}
