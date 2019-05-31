package per.example.kursova.service.categoryOfTeacher;


import per.example.kursova.model.CategoryOfTeacher;

import java.sql.SQLException;
import java.util.List;

public interface ICategoryOfTeacherService {

    public CategoryOfTeacher insertCategoryOfTeacher(CategoryOfTeacher categoryOfTeacher);
    public CategoryOfTeacher getCategoryOfTeacher(int id);
    public CategoryOfTeacher updateCategoryOfTeacher(CategoryOfTeacher categoryOfTeacher);
    public void deleteCategoryOfTeacher(int id);
    public List<CategoryOfTeacher> getAll();
}
