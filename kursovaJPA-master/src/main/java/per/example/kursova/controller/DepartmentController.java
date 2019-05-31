package per.example.kursova.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import per.example.kursova.model.Department;
import per.example.kursova.service.department.DepartmentServiceImpl;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class DepartmentController {

    @Autowired
    private DepartmentServiceImpl departmentService;

    @RequestMapping("/departments")
    public List<Department> showDepartments() {
        return departmentService.getAll();
    }

    @PostMapping("/department/insert")
    Department insertDepartment(@RequestBody Department department) {
        return departmentService.insertDepartment(department);
    }

    @GetMapping("/department/delete")
    void deleteDepartment(@RequestParam("id") int id)
    {
        departmentService.deleteDepartment(id);
    }

    @GetMapping("/department/get")
    Department getDepartmentById(@RequestParam("id") int id)
    {
        return departmentService.getDepartment(id);
    }

    @RequestMapping("/department/update")
    Department updateDepartment(@RequestBody Department department, @RequestParam("id") int id)
    {
        department.setId(id);
        return departmentService.updateDepartment(department);
    }
}
