package per.example.kursova.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import per.example.kursova.model.Session;
import per.example.kursova.model.Student;
import per.example.kursova.service.session.SessionServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SessionController {
    @Autowired
    private SessionServiceImpl sessionService;

    @RequestMapping("/session")
    public List<Session> showSession(){
        return sessionService.getAll();
    }

    @PostMapping("/session/insert")
    Session insertSession(@RequestBody Session session) {
        return sessionService.insertSession(session);
    }

    @GetMapping("/session/delete")
    void deleteSession(@RequestParam("id") int id)
    {
        sessionService.deleteSession(id);
    }

    @GetMapping("/session/get")
    Session getSessionById(@RequestParam("id") int id)
    {
        return sessionService.getSession(id);
    }

    @RequestMapping("/session/update")
    Session updateSession(@RequestBody Session session, @RequestParam("id") int id)
    {
        session.setId(id);
        return sessionService.updateSession(session);
    }
}
