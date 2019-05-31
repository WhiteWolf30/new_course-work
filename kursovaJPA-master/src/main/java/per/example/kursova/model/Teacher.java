package per.example.kursova.model;

import javax.persistence.*;
import java.time.LocalDate;
@Entity
@Table(name = "teacher")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;
    @Column(name = "count_of_children")
    private int countOfChildren;
    @Column(name = "salary")
    private int salary;
    @ManyToOne
    @JoinColumn(name = "category_of_teacher_id")
    private CategoryOfTeacher categoryOfTeacher;
    @ManyToOne
    @JoinColumn(name = "chair_id")
    private Chair chair;

    public Teacher() {
    }

    public Teacher(String name, LocalDate dateOfBirth, int countOfChildren, int salary, CategoryOfTeacher categoryOfTeacher, Chair chair) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.countOfChildren = countOfChildren;
        this.salary = salary;
        this.categoryOfTeacher = categoryOfTeacher;
        this.chair = chair;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public int getCountOfChildren() {
        return countOfChildren;
    }

    public void setCountOfChildren(int countOfChildren) {
        this.countOfChildren = countOfChildren;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public CategoryOfTeacher getCategoryOfTeacher() {
        return categoryOfTeacher;
    }

    public void setCategoryOfTeacher(CategoryOfTeacher categoryOfTeacher) {
        this.categoryOfTeacher = categoryOfTeacher;
    }

    public Chair getChair() {
        return chair;
    }

    public void setChair(Chair chair) {
        this.chair = chair;
    }
}
