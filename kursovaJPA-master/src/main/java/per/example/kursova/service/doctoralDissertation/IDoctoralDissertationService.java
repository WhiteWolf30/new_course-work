package per.example.kursova.service.doctoralDissertation;

import per.example.kursova.model.DoctoralDissertation;

import java.util.List;

public interface IDoctoralDissertationService {

    public DoctoralDissertation insertDoctoralDissertation(DoctoralDissertation doctoralDissertation);
    public DoctoralDissertation getDoctoralDissertation(int id);
    public DoctoralDissertation updateDoctoralDissertation(DoctoralDissertation doctoralDissertation);
    public void deleteDoctoralDissertation(int id);
    public List<DoctoralDissertation> getAll();
}
