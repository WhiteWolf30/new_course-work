package per.example.kursova.model;

import javax.persistence.*;

@Entity
@Table(name = "diploma")
public class Diploma {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "theme_of_the_diploma")
    private String themeOfDiploma;
    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    public Diploma() {
    }

    public Diploma(String themeOfDiploma, Teacher teacher, Student student) {
        this.themeOfDiploma = themeOfDiploma;
        this.teacher = teacher;
        this.student = student;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getThemeOfDiploma() {
        return themeOfDiploma;
    }

    public void setThemeOfDiploma(String themeOfDiploma) {
        this.themeOfDiploma = themeOfDiploma;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
}
