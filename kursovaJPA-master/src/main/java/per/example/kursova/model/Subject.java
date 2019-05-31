package per.example.kursova.model;

import javax.persistence.*;

@Entity
@Table(name = "subject")
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "number_of_hours")
    private int numberOfHours;
    @ManyToOne
    @JoinColumn(name = "type_of_subject_id")
    private TypeOfSubject typeOfSubject;
    @ManyToOne
    @JoinColumn(name = "form_of_control_id")
    private FormOfControl formOfControl;

    public Subject() {
    }

    public Subject(String name, int numberOfHours, TypeOfSubject typeOfSubject, FormOfControl formOfControl) {
        this.name = name;
        this.numberOfHours = numberOfHours;
        this.typeOfSubject = typeOfSubject;
        this.formOfControl = formOfControl;
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

    public int getNumberOfHours() {
        return numberOfHours;
    }

    public void setNumberOfHours(int numberOfHours) {
        this.numberOfHours = numberOfHours;
    }

    public TypeOfSubject getTypeOfSubject() {
        return typeOfSubject;
    }

    public void setTypeOfSubject(TypeOfSubject typeOfSubject) {
        this.typeOfSubject = typeOfSubject;
    }

    public FormOfControl getFormOfControl() {
        return formOfControl;
    }

    public void setFormOfControl(FormOfControl formOfControl) {
        this.formOfControl = formOfControl;
    }
}
