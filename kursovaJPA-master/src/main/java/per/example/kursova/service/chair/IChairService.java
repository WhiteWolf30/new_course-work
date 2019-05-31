package per.example.kursova.service.chair;

import per.example.kursova.model.Chair;

import java.util.List;

public interface IChairService {

    public Chair insertChair(Chair chair);
    public Chair getChair(int id);
    public Chair updateChair(Chair chair);
    public void deleteChair(int id);
    public List<Chair> getAll();
    List<Chair> getChairsByLessonsInGroup(int group_id);
}
