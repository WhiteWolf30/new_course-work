var app = angular.module("doctoral dissertation", []);

app.controller("AppCtrl", function ($scope, $http) {

    $scope.doctoralDissertations = [];
    $http.get('/api/doctoral dissertations').then(function (response) {
        $scope.doctoralDissertations = response.data;
    });

    function checkName(str) {
        var pattern = new RegExp(/^[А-ЯІ][А-ЯІа-яі'\- ]+$/);
        return pattern.test(str);
    }

    this.startInsertDoctoralDissertation= function () {
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
    };

    this.insertDoctoralDissertation= function add() {
        var themeOfTheDissertation = document.getElementById("themeOfTheDissertation").value;
        var protectionDate = document.getElementById("protectionDate").value;

        var indexTeacher= document.getElementById("teacher").selectedIndex;
        var teacherId = document.getElementById("teacher").options[indexTeacher].value;

        if(checkName(themeOfTheDissertation)) {
            $http.get('/api/teacher/get?id=' + teacherId).then(function (response) {
                var selectedTeacher = response.data;
                var req = {
                    method: 'POST',
                    url: '/api/doctoral dissertation/insert',
                    data: {
                        themeOfTheDissertation: themeOfTheDissertation,
                        protectionDate: protectionDate,
                        teacher: selectedTeacher
                    }
                };
                console.log(req);
                $http(req).then(function (resp) {
                    window.location.reload();
                })
            });
        }
        else
            window.alert("Введено некоректну тему дисертації!\n" +
                "Початок сторки повинен починатися з великої літери.\n" +
                "Підтримуються літери українського алфавіту та символи: -  '");
    };

    this.deleteDoctoralDissertation = function del(id) {
        $http.get("api/doctoral dissertation/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdateDoctoralDissertation = function startUpdate(doctoralDissertation) {
        $http.get('/api/teachers').then(function (response) {
            var teachers = response.data;
            var selector = document.getElementById("updateTeacher");
            $(selector).empty();
            for (var i = 0; i < teachers.length; i++) {
                var option = document.createElement("option");
                if (teachers[i].id == doctoralDissertation.teacher.id){
                    option.selected = 'selected';
                }
                option.text = teachers[i].name;
                option.value = teachers[i].id;
                selector.add(option);
            }
        });
        document.getElementById("updateId").innerText = doctoralDissertation.id;
        document.getElementById("updateThemeOfTheDissertation").value = doctoralDissertation.themeOfTheDissertation;
        document.getElementById("updateProtectionDate").value = doctoralDissertation.protectionDate;
    };

    this.updateDoctoralDissertation = function update() {
        var id = document.getElementById("updateId").innerText;
        var themeOfTheDissertation = document.getElementById("updateThemeOfTheDissertation").value;
        var protectionDate = document.getElementById("updateProtectionDate").value;

        var indexTeacher= document.getElementById("updateTeacher").selectedIndex;
        var teacherId = document.getElementById("updateTeacher").options[indexTeacher].value;

        if(checkName(themeOfTheDissertation)) {
            $http.get('/api/teacher/get?id=' + teacherId).then(function (response) {
                var selectedTeacher = response.data;
                var req = {
                    method: 'POST',
                    url: 'api/doctoral dissertation/update?id=' + id,
                    data: {
                        themeOfTheDissertation: themeOfTheDissertation,
                        protectionDate: protectionDate,
                        teacher: selectedTeacher
                    }
                };
                $http(req).then(function (resp) {
                    window.location.reload();
                })
            });
        }
        else
            window.alert("Введено некоректну тему дисертації!\n" +
                "Початок сторки повинен починатися з великої літери.\n" +
                "Підтримуються літери українського алфавіту та символи: -  '");
    };
});