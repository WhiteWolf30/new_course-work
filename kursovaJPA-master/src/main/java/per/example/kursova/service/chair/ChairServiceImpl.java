package per.example.kursova.service.chair;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import per.example.kursova.model.Chair;
import per.example.kursova.repository.ChairRepository;

import java.util.List;

@Service
public class ChairServiceImpl implements IChairService {

    @Autowired
    private ChairRepository chairRepository;

    @Override
    public Chair insertChair(Chair chair) {
        return chairRepository.save(chair);
    }

    @Override
    public Chair getChair(int id) {

        return chairRepository.findById(id).get();
    }

    @Override
    public Chair updateChair(Chair chair) {

        return chairRepository.save(chair);
    }

    @Override
    public void deleteChair(int id) {

        chairRepository.deleteById(id);
    }

    @Override
    public List<Chair> getAll(){
        return chairRepository.findAll();
    }

    @Override
    public List<Chair> getChairsByLessonsInGroup(int group_id) {
        return chairRepository.getChairsByLessonsInGroup(group_id);
    }
}
