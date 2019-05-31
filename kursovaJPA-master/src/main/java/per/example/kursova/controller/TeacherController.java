package per.example.kursova.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import per.example.kursova.model.Student;
import per.example.kursova.model.Teacher;
import per.example.kursova.service.teacher.TeacherServiceImpl;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TeacherController {
    @Autowired
    private TeacherServiceImpl teacherService;

    @RequestMapping("/teachers")
    public List<Teacher> showTeachers() {
        return teacherService.getAll();
    }

    @PostMapping("/teacher/insert")
    Teacher insertTeacher(@RequestBody Teacher teacher) {
        return teacherService.insertTeacher(teacher);
    }

    @GetMapping("/teacher/delete")
    void deleteTeacher(@RequestParam("id") int id)
    {
        teacherService.deleteTeacher(id);
    }

    @GetMapping("/teacher/get")
    Teacher getTeacherById(@RequestParam("id") int id)
    {
        return teacherService.getTeacher(id);
    }

    @RequestMapping("/teacher/update")
    Teacher updateTeacher(@RequestBody Teacher teacher, @RequestParam("id") int id)
    {
        teacher.setId(id);
        return teacherService.updateTeacher(teacher);
    }
    @GetMapping("/teacher/get teachers by chair")
    List<Teacher> getTeachersByChair(@RequestParam("chair_id") int chair_id){
        return teacherService.getTeachersByChair(chair_id);
    }
    @GetMapping("/teacher/get by protection of doctoral dissertation during specified time")
    List<Teacher> GetTeachersByProtectionOfDoctoralDissertationDuringSpecifiedTime(@RequestParam("startDate") Date startDate,
                                                                                   @RequestParam("endDate") Date endDate){
        return teacherService.getTeachersByProtectionOfDoctoralDissertationDuringSpecifiedTime(startDate.toLocalDate(), endDate.toLocalDate());
    }

    @GetMapping("/teacher/get by lesson and course")
    List<Teacher> getTeachersByLessonAndCourse(@RequestParam("subject_id") int subject_id, @RequestParam("course") int course){
        return teacherService.getTeachersByLessonAndCourse(subject_id, course);
    }

    @GetMapping("/teacher/get count by lessons in the group")
    int getNumberOfTeachersByLessonsInTheGroup(@RequestParam("group_id") int group_id){
        return teacherService.getNumberOfTeachersByLessonsInTheGroup(group_id);
    }

    @GetMapping("/teacher/get by exam in current group")
    List<Teacher> getTeachersByExamInCurrentGroup(@RequestParam("group_id") int group_id){
        return teacherService.getTeachersByExamInCurrentGroup(group_id);
    }

    @GetMapping("/teacher/get from diploma by chair")
    List<Teacher> getTeachersFromDiplomaByChair(@RequestParam("chair_id") int chair_id){
        return teacherService.getTeachersFromDiplomaByChair(chair_id);
    }

    @GetMapping("/teacher/get by category")
    List<Teacher> getTeachersByCategoryOfTeacher(@RequestParam("categoryOfTeacher_id") int categoryOfTeacher_id){
        return teacherService.getTeachersByCategoryOfTeacher(categoryOfTeacher_id);
    }
}
