package per.example.kursova.service.session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import per.example.kursova.model.Session;
import per.example.kursova.repository.SessionRepository;

import java.util.List;

@Service
public class SessionServiceImpl implements ISessionService {

    @Autowired
    private SessionRepository sessionRepository;

    @Override
    public Session insertSession(Session session) {

        return sessionRepository.save(session);
    }

    @Override
    public Session getSession(int id) {

        return sessionRepository.findById(id).get();
    }

    @Override
    public Session updateSession(Session session) {

        return sessionRepository.save(session);
    }

    @Override
    public void deleteSession(int id) {
        sessionRepository.deleteById(id);
    }

    @Override
    public List<Session> getAll() {
        return sessionRepository.findAll();
    }
}
