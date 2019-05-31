package per.example.kursova.service.department;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import per.example.kursova.model.Department;
import per.example.kursova.repository.DepartmentRepository;

import java.sql.SQLException;
import java.util.List;

@Service
public class DepartmentServiceImpl implements IDepartmentService {

    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public Department insertDepartment(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public Department getDepartment(int id) {

        return departmentRepository.findById(id).get();
    }

    @Override
    public Department updateDepartment(Department department) {

        return departmentRepository.save(department);
    }

    @Override
    public void deleteDepartment(int id) {
        departmentRepository.deleteById(id);
    }

    @Override
    public List<Department> getAll() {
        return departmentRepository.findAll();
    }
}
