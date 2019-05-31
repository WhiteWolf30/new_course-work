package per.example.kursova.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "candidates_dissertation")
public class CandidatesDissertation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "theme_of_the_dissertation")
    private String themeOfTheDissertation;
    @Column(name = "protection_date")
    private LocalDate protectionDate;
    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    public CandidatesDissertation() {
    }

    public CandidatesDissertation(String themeOfTheDissertation, LocalDate protectionDate, Teacher teacher) {
        this.themeOfTheDissertation = themeOfTheDissertation;
        this.protectionDate = protectionDate;
        this.teacher = teacher;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getThemeOfTheDissertation() {
        return themeOfTheDissertation;
    }

    public void setThemeOfTheDissertation(String themeOfTheDissertation) {
        this.themeOfTheDissertation = themeOfTheDissertation;
    }

    public LocalDate getProtectionDate() {
        return protectionDate;
    }

    public void setProtectionDate(LocalDate protectionDate) {
        this.protectionDate = protectionDate;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }
}
