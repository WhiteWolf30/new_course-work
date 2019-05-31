package per.example.kursova.model;

import javax.persistence.*;

@Entity
@Table(name = "form_of_control")
public class FormOfControl {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "form")
    private String form;

    public FormOfControl() {
    }

    public FormOfControl(String form) {
        this.form = form;
    }

    //    public FormOfControl(int id, String form) {
//        this.id = id;
//        this.form = form;
//    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getForm() {
        return form;
    }

    public void setForm(String form) {
        this.form = form;
    }
}
