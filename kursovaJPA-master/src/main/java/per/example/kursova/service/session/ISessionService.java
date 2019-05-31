package per.example.kursova.service.session;

import per.example.kursova.model.Session;

import java.util.List;

public interface ISessionService {

    public Session insertSession(Session session);
    public Session getSession(int id);
    public Session updateSession(Session session);
    public void deleteSession(int id);
    public List<Session> getAll();
}
