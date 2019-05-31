package per.example.kursova.model;

import javax.persistence.*;

@Entity
@Table(name = "type_of_subject")
public class TypeOfSubject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "type")
    private String type;

    public TypeOfSubject() {
    }

    public TypeOfSubject(String type) {
        this.type = type;
    }
    //    public typeOfSubject(int id, String type) {
//        this.id = id;
//        this.type = type;
//    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
