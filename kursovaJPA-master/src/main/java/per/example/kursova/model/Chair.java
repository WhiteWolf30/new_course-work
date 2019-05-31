package per.example.kursova.model;

import javax.persistence.*;

@Entity
@Table(name = "chair")
public class Chair {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "head_of_chair")
    private String headOfChair;
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    public Chair() {
    }

    public Chair(String name, String headOfChair, Department department) {
        this.name = name;
        this.headOfChair = headOfChair;
        this.department = department;
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

    public String getHeadOfChair() {
        return headOfChair;
    }

    public void setHeadOfChair(String headOfChair) {
        this.headOfChair = headOfChair;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
