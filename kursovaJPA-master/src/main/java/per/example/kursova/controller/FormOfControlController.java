package per.example.kursova.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import per.example.kursova.model.FormOfControl;
import per.example.kursova.model.TypeOfSubject;
import per.example.kursova.service.formOfControl.FormOfControlServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FormOfControlController {
    @Autowired
    private FormOfControlServiceImpl formOfControlService;

    @RequestMapping("/forms of control")
    List<FormOfControl> showFormsOfControl() {
        return formOfControlService.getAll();
    }

    @PostMapping("/form of control/insert")
    FormOfControl insertOneFormOfControl(@RequestBody FormOfControl formOfControl) {
        return formOfControlService.insertFormOfControl(formOfControl);
    }

    @GetMapping("/form of control/delete")
    void deleteFormOfControl(@RequestParam("id") int id)
    {
        formOfControlService.deleteFormOfControl(id);
    }

    @RequestMapping("/form of control/update")
    FormOfControl updateFormOfControl(@RequestBody FormOfControl formOfControl, @RequestParam("id") int id)
    {
        formOfControl.setId(id);
        return formOfControlService.updateFormOfControl(formOfControl);
    }

    @GetMapping("/form of control/get")
    FormOfControl getFormOfControlById(@RequestParam("id") int id)
    {
        return formOfControlService.getFormOfControl(id);
    }
}
