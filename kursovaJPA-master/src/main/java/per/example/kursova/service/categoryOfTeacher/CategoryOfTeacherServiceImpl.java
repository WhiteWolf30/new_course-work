package per.example.kursova.service.categoryOfTeacher;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import per.example.kursova.model.CategoryOfTeacher;
import per.example.kursova.repository.CategoryOfTeacherRepository;

import java.util.List;

@Service
public class CategoryOfTeacherServiceImpl implements ICategoryOfTeacherService {

    @Autowired
    private CategoryOfTeacherRepository categoryOfTeacherRepository;

    @Override
    public CategoryOfTeacher insertCategoryOfTeacher(CategoryOfTeacher categoryOfTeacher) {

        return categoryOfTeacherRepository.save(categoryOfTeacher);
    }

    @Override
    public CategoryOfTeacher getCategoryOfTeacher(int id) {

        return categoryOfTeacherRepository.findById(id).get();
    }

    @Override
    public CategoryOfTeacher updateCategoryOfTeacher(CategoryOfTeacher categoryOfTeacher) {

        return categoryOfTeacherRepository.save(categoryOfTeacher);
    }

    @Override
    public void deleteCategoryOfTeacher(int id) {

        categoryOfTeacherRepository.deleteById(id);
    }

    @Override
    public List<CategoryOfTeacher> getAll() {
        return categoryOfTeacherRepository.findAll();
    }
}
