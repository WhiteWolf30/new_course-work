var app = angular.module("diploma", []);

app.controller("AppCtrl", function ($scope, $http) {

    $scope.diplomas = [];
    $http.get('/api/diplomas').then(function (response) {
        $scope.diplomas = response.data;
    });

    function checkName(str) {
        var pattern = new RegExp(/^[А-ЯІ][А-ЯІа-яі'\- ]+$/);
        return pattern.test(str);
    }

    this.startInsertDiploma = function () {
        $http.get('/api/teachers').then(function (response) {
            var teachers = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть викладача";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("teacher");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < teachers.length; i++) {
                var option = document.createElement("option");
                option.text = teachers[i].name;
                option.value = teachers[i].id;
                selector.add(option);
            }
        });

        $http.get('/api/students').then(function (response) {
            var students = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть студента";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("student");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < students.length; i++) {
                var option = document.createElement("option");
                option.text = students[i].name;
                option.value = students[i].id;
                selector.add(option);
            }
        });

    };

    this.insertDiploma= function add() {
        var themeOfDiploma = document.getElementById("themeOfDiploma").value;

        var indexTeacher= document.getElementById("teacher").selectedIndex;
        var teacherId = document.getElementById("teacher").options[indexTeacher].value;

        var indexStudent= document.getElementById("student").selectedIndex;
        var studentId= document.getElementById("student").options[indexStudent].value;

        if(checkName(themeOfDiploma)) {
            $http.get('/api/teacher/get?id=' + teacherId).then(function (responseTeacher) {
                var selectedTeacher = responseTeacher.data;
                $http.get('/api/student/get?id=' + studentId).then(function (responseStudent) {
                    var selectedStudent = responseStudent.data;
                    var req = {
                        method: 'POST',
                        url: '/api/diploma/insert',
                        data: {
                            themeOfDiploma: themeOfDiploma,
                            teacher: selectedTeacher,
                            student: selectedStudent
                        }
                    };
                    console.log(req);
                    $http(req).then(function (resp) {
                        window.location.reload();
                    })
                });
            });
        }
        else
            window.alert("Введено некоректну тему дипломної!\n" +
                "Початок сторки повинен починатися з великої літери.\n" +
                "Підтримуються літери українського алфавіту та символи: -  '");
    };

    this.deleteDiploma = function del(id) {
        $http.get("api/diploma/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdateDiploma= function startUpdate(diploma) {
        $http.get('/api/teachers').then(function (response) {
            var teachers = response.data;
            var selector = document.getElementById("updateTeacher");
            $(selector).empty();
            for (var i = 0; i < teachers.length; i++) {
                var option = document.createElement("option");
                if(teachers[i].id == diploma.teacher.id)
                    option.selected = 'selected';
                option.text = teachers[i].name;
                option.value = teachers[i].id;
                selector.add(option);
            }
        });

        $http.get('/api/students').then(function (response) {
            var students = response.data;
            var selector = document.getElementById("updateStudent");
            $(selector).empty();
            for (var i = 0; i < students.length; i++) {
                var option = document.createElement("option");
                if(students[i].id == diploma.student.id)
                    option.selected = 'selected';
                option.text = students[i].name;
                option.value = students[i].id;
                selector.add(option);
            }
        });

        document.getElementById("updateId").innerText = diploma.id;
        document.getElementById("updateThemeOfDiploma").value = diploma.themeOfDiploma;

    };

    this.updateDiploma= function update() {
        var id = document.getElementById("updateId").innerText;
        var themeOfDiploma = document.getElementById("updateThemeOfDiploma").value;

        var indexTeacher= document.getElementById("updateTeacher").selectedIndex;
        var teacherId = document.getElementById("updateTeacher").options[indexTeacher].value;

        var indexStudent= document.getElementById("updateStudent").selectedIndex;
        var studentId= document.getElementById("updateStudent").options[indexStudent].value;

        if(checkName(themeOfDiploma)) {
            $http.get('/api/teacher/get?id=' + teacherId).then(function (responseTeacher) {
                var selectedTeacher = responseTeacher.data;
                $http.get('/api/student/get?id=' + studentId).then(function (responseStudent) {
                    var selectedStudent = responseStudent.data;
                    var req = {
                        method: 'POST',
                        url: '/api/diploma/update?id=' + id,
                        data: {
                            themeOfDiploma: themeOfDiploma,
                            teacher: selectedTeacher,
                            student: selectedStudent
                        }
                    };
                    console.log(req);
                    $http(req).then(function (resp) {
                        window.location.reload();
                    })
                });
            });
        }
        else
            window.alert("Введено некоректну тему дипломної!\n" +
                "Початок сторки повинен починатися з великої літери.\n" +
                "Підтримуються літери українського алфавіту та символи: -  '");
    };
});