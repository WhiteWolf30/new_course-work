var app = angular.module("student", []);

app.controller("AppCtrl", function ($scope, $http) {

    $scope.students = [];
    $http.get('/api/students').then(function (response) {
        $scope.students = response.data;
    });

    function checkName(str) {
        var pattern = new RegExp(/^[А-ЯІ][А-ЯІа-яі'\- ]+$/);
        return pattern.test(str);
    }

    this.startInsertStudent = function () {
        $http.get('/api/groups').then(function (response) {
            var groups = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть групу";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("group");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < groups.length; i++) {
                var option = document.createElement("option");
                option.text = groups[i].number;
                option.value = groups[i].id;
                selector.add(option);
            }
        });
        var selector = document.getElementById("children");
        var defaultOption = document.createElement("option");
        var trueOption = document.createElement("option");
        var falseOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.text = "Наявність дітей";
        defaultOption.disabled;
        defaultOption.selected = true;
        trueOption.text = "Так";
        trueOption.value = true;
        falseOption.text = "Ні";
        falseOption.value = false;
        $(selector).empty();
        selector.add(defaultOption);
        selector.add(trueOption);
        selector.add(falseOption);
    };

    this.insertStudent = function add() {
        var name = document.getElementById("name").value;
        var dateOfBirth = document.getElementById("dateOfBirth").value;
        var scholarship = document.getElementById("scholarship").value;

        var indexChildren= document.getElementById("children").selectedIndex;
        var childrenValue = document.getElementById("children").options[indexChildren].value;

        var indexGroup= document.getElementById("group").selectedIndex;
        var groupId= document.getElementById("group").options[indexGroup].value;
        if(scholarship > 0) {
            if (checkName(name)) {
                $http.get('/api/group/get?id=' + groupId).then(function (response) {
                    var selectedGroup = response.data;
                    var req = {
                        method: 'POST',
                        url: '/api/student/insert',
                        data: {
                            name: name,
                            dateOfBirth: dateOfBirth,
                            children: childrenValue,
                            scholarship: scholarship,
                            group: selectedGroup
                        }
                    };
                    console.log(req);
                    $http(req).then(function (resp) {
                        window.location.reload();
                    })
                });
            }
            else
                window.alert("Введено некоректне ПІБ студента!\n" +
                    "Початок сторки повинен починатися з великої літери.\n" +
                    "Підтримуються літери українського алфавіту та символи: -  '");
        }
        else
            window.alert("Введено некоректну стипендію!\n" +
                "Підтримується люба додатня сума");
    };
    
    this.deleteStudent = function del(id) {
        $http.get("api/student/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdateStudent = function startUpdate(student) {
        $http.get('/api/groups').then(function (response) {
            var groups = response.data;
            var selector = document.getElementById("updateGroup");
            $(selector).empty();
            for (var i = 0; i < groups.length; i++) {
                var option = document.createElement("option");
                if (groups[i].id == student.group.id){
                    option.selected = 'selected';
                }
                option.text = groups[i].number;
                option.value = groups[i].id;
                selector.add(option);
            }
        });

        var selector = document.getElementById("updateChildren");
        $(selector).empty();
        var trueOption = document.createElement("option");
        var falseOption = document.createElement("option");
        trueOption.text = "Так";
        trueOption.value = true;
        falseOption.text = "Ні";
        falseOption.value = false;

        if(falseOption.value == student.children.toString())
            falseOption.selected = 'selected';
        else
            trueOption.selected == 'selected';
        selector.add(trueOption);
        selector.add(falseOption);

        document.getElementById("updateId").innerText = student.id;
        document.getElementById("updateName").value = student.name;
        document.getElementById("updateScholarship").value = student.scholarship;
        document.getElementById("updateDateOfBirth").value = student.dateOfBirth;
    };

    this.updateStudent = function update() {
        var id = document.getElementById("updateId").innerText;
        var name = document.getElementById("updateName").value;
        var scholarship = document.getElementById("updateScholarship").value;
        var dateOfBirth = document.getElementById("updateDateOfBirth").value;

        var indexChildren= document.getElementById("updateChildren").selectedIndex;
        var childrenValue = document.getElementById("updateChildren").options[indexChildren].value;

        var indexGroup= document.getElementById("updateGroup").selectedIndex;
        var groupId= document.getElementById("updateGroup").options[indexGroup].value;

        if(scholarship > 0) {
            if (checkName(name)) {
                $http.get('/api/group/get?id=' + groupId).then(function (response) {
                    var selectedGroup = response.data;
                    var req = {
                        method: 'POST',
                        url: 'api/student/update?id=' + id,
                        data: {
                            name: name,
                            scholarship: scholarship,
                            dateOfBirth: dateOfBirth,
                            children: childrenValue,
                            group: selectedGroup
                        }
                    };
                    console.log(req);
                    $http(req).then(function (resp) {
                        window.location.reload();
                    })
                });
            }
            else
                window.alert("Введено некоректне ПІБ студента!\n" +
                    "Початок сторки повинен починатися з великої літери.\n" +
                    "Підтримуються літери українського алфавіту та символи: -  '");
        }
        else
            window.alert("Введено некоректну стипендію!\n" +
            "Підтримується люба додатня сума");
    };
});