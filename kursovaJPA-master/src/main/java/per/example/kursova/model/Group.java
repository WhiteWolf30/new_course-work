package per.example.kursova.model;

import javax.persistence.*;

@Entity
@Table(name = "\"group\"")
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "course")
    private int course;
    @Column(name = "number")
    private int number;
    @ManyToOne
    @JoinColumn(name = "chair_id")
    private Chair chair;

    public Group() {
    }

    public Group(int course, int number, Chair chair) {
        this.course = course;
        this.number = number;
        this.chair = chair;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCourse() {
        return course;
    }

    public void setCourse(int course) {
        this.course = course;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Chair getChair() {
        return chair;
    }

    public void setChair(Chair chair) {
        this.chair = chair;
    }
}
