package per.example.kursova.service.department;


import per.example.kursova.model.Department;

import java.util.List;

public interface IDepartmentService {

    public Department insertDepartment(Department department);
    public Department getDepartment(int id);
    public Department updateDepartment(Department department);
    public void deleteDepartment(int id);
    public List<Department> getAll();
}
