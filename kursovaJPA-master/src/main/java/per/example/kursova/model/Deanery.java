package per.example.kursova.model;

import javax.persistence.*;

@Entity
@Table(name = "deanery")
public class Deanery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "address")
    private String address;
    @Column(name = "phone_number")
    private String phoneNumber;

    public Deanery() {
    }

    public Deanery(String address, String phoneNumber) {
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    //    public Deanery(int id, String address, String phoneNumber) {
//        this.id = id;
//        this.address = address;
//        this.phoneNumber = phoneNumber;
//    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
