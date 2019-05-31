package per.example.kursova.model;

import javax.persistence.*;

@Entity
@Table(name = "department")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "dean")
    private String dean;
    @OneToOne
    private Deanery deanery;

    public Department() {
    }

    public Department(String name, String dean, Deanery deanery) {
        this.name = name;
        this.dean = dean;
        this.deanery = deanery;
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

    public String getDean() {
        return dean;
    }

    public void setDean(String dean) {
        this.dean = dean;
    }

    public Deanery getDeanery() {
        return deanery;
    }

    public void setDeanery(Deanery deanery) {
        this.deanery = deanery;
    }
}
