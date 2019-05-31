var app = angular.module("teacher", []);

app.controller("AppCtrl", function ($scope, $http) {

    $scope.teachers = [];
    $http.get('api/teachers').then(function (response) {
        $scope.teachers = response.data;
    });

    function checkName(str) {
        var pattern = new RegExp(/^[А-ЯІ][А-ЯІа-яі'\- ]+$/);
        return pattern.test(str);
    }

    this.startInsertTeacher = function () {
        $http.get('/api/chairs').then(function (response) {
            var chairs = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть кафедру";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("chair");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < chairs.length; i++) {
                var option = document.createElement("option");
                option.text = chairs[i].name;
                option.value = chairs[i].id;
                selector.add(option);
            }
        });

        $http.get('/api/categories of teacher').then(function (response) {
            var categories = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть категорію викладача";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("categoryOfTeacher");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < categories.length; i++) {
                var option = document.createElement("option");
                option.text = categories[i].category;
                option.value = categories[i].id;
                selector.add(option);
            }
        });
    };

    this.insertTeacher= function add() {
        var name = document.getElementById("name").value;
        var dateOfBirth = document.getElementById("dateOfBirth").value;
        var salary = document.getElementById("salary").value;
        var countOfChildren = document.getElementById("countOfChildren").value;

        var indexCategoryOfTeacher= document.getElementById("categoryOfTeacher").selectedIndex;
        var categoryOfTeacherId = document.getElementById("categoryOfTeacher").options[indexCategoryOfTeacher].value;

        var indexChair= document.getElementById("chair").selectedIndex;
        var chairId= document.getElementById("chair").options[indexChair].value;
        if(salary > 0)
        {
            if(countOfChildren >= 0) {
                if (checkName(name)) {
                    $http.get('/api/category of teacher/get?id=' + categoryOfTeacherId).then(function (responseCategory) {
                        var selectedCategory = responseCategory.data;
                        $http.get('/api/chair/get?id=' + chairId).then(function (responseChair) {
                            var selectedChair = responseChair.data;
                            var req = {
                                method: 'POST',
                                url: '/api/teacher/insert',
                                data: {
                                    name: name,
                                    dateOfBirth: dateOfBirth,
                                    countOfChildren: countOfChildren,
                                    salary: salary,
                                    categoryOfTeacher: selectedCategory,
                                    chair: selectedChair
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
                    window.alert("Введено некоректний ПІБ викладача!\n" +
                        "Початок сторки повинен починатися з великої літери.\n" +
                        "Підтримуються літери українського алфавіту та символи: -  '");
            }
            else
                window.alert("Введено некоректну кількість дітей!\n" +
                    "Підтримуються всі додатні цифри.");
        }
        else
            window.alert("Введено некоректну зарплату!\n" +
                "Підтримуються всі додатні цифри.");
    };

    this.deleteTeacher= function del(id) {
        $http.get("api/teacher/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdateTeacher= function startUpdate(teacher) {
        $http.get('/api/chairs').then(function (response) {
            var chairs = response.data;
            var selector = document.getElementById("updateChair");
            $(selector).empty();
            for (var i = 0; i < chairs.length; i++) {
                var option = document.createElement("option");
                if(chairs[i].id == teacher.chair.id)
                    option.selected = 'selected';
                option.text = chairs[i].name;
                option.value = chairs[i].id;
                selector.add(option);
            }
        });

        $http.get('/api/categories of teacher').then(function (response) {
            var categories = response.data;
            var selector = document.getElementById("updateCategoryOfTeacher");
            $(selector).empty();
            for (var i = 0; i < categories.length; i++) {
                var option = document.createElement("option");
                if(categories[i].id == teacher.categoryOfTeacher.id)
                    option.selected = 'selected';
                option.text = categories[i].category;
                option.value = categories[i].id;
                selector.add(option);
            }
        });

        document.getElementById("updateId").innerText = teacher.id;
        document.getElementById("updateName").value = teacher.name;
        document.getElementById("updateSalary").value = teacher.salary;
        document.getElementById("updateDateOfBirth").value = teacher.dateOfBirth;
        document.getElementById("updateCountOfChildren").value = teacher.countOfChildren;
    };

    this.updateTeacher= function update() {
        var id = document.getElementById("updateId").innerText;
        var name = document.getElementById("updateName").value;
        var salary = document.getElementById("updateSalary").value;
        var dateOfBirth = document.getElementById("updateDateOfBirth").value;
        var countOfChildren = document.getElementById("updateCountOfChildren").value;

        var indexCategoryOfTeacher= document.getElementById("updateCategoryOfTeacher").selectedIndex;
        var categoryOfTeacherId = document.getElementById("updateCategoryOfTeacher").options[indexCategoryOfTeacher].value;

        var indexChair= document.getElementById("updateChair").selectedIndex;
        var chairId= document.getElementById("updateChair").options[indexChair].value;

        if(salary > 0)
        {
            if(countOfChildren >= 0) {
                if (checkName(name)) {
                    $http.get('/api/category of teacher/get?id=' + categoryOfTeacherId).then(function (responseCategory) {
                        var selectedCategory = responseCategory.data;
                        $http.get('/api/chair/get?id=' + chairId).then(function (responseChair) {
                            var selectedChair = responseChair.data;
                            var req = {
                                method: 'POST',
                                url: '/api/teacher/update?id=' + id,
                                data: {
                                    name: name,
                                    dateOfBirth: dateOfBirth,
                                    countOfChildren: countOfChildren,
                                    salary: salary,
                                    categoryOfTeacher: selectedCategory,
                                    chair: selectedChair
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
                    window.alert("Введено некоректне ПІБ викладача!\n" +
                        "Початок сторки повинен починатися з великої літери.\n" +
                        "Підтримуються літери українського алфавіту та символи: -  '");
            }
            else
                window.alert("Введено некоректну кількість дітей!\n" +
                    "Підтримуються всі додатні цифри.");
        }
        else
            window.alert("Введено некоректну зарплату!\n" +
                "Підтримуються всі додатні цифри.");
    };
});