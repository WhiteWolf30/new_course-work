var app = angular.module("candidate dissertation", []);

app.controller("AppCtrl", function ($scope, $http) {

    $scope.candidatesDissertations = [];
    $http.get('/api/candidates dissertations').then(function (response) {
        $scope.candidatesDissertations = response.data;
    });

    function checkName(str) {
        var pattern = new RegExp(/^[А-ЯІ][А-ЯІа-яі'\- ]+$/);
        return pattern.test(str);
    }

    this.startInsertCandidateDissertation= function () {
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

    this.insertCandidateDissertation = function add() {
        var themeOfTheDissertation = document.getElementById("themeOfTheDissertation").value;
        var protectionDate = document.getElementById("protectionDate").value;

        var indexTeacher= document.getElementById("teacher").selectedIndex;
        var teacherId = document.getElementById("teacher").options[indexTeacher].value;

        if(checkName(themeOfTheDissertation)) {
            $http.get('/api/teacher/get?id=' + teacherId).then(function (response) {
                var selectedTeacher = response.data;
                var req = {
                    method: 'POST',
                    url: '/api/candidate dissertation/insert',
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

    this.deleteCandidateDissertation = function del(id) {
        $http.get("api/candidate dissertation/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdateCandidateDissertation = function startUpdate(candidateDissertation ) {
        $http.get('/api/teachers').then(function (response) {
            var teachers = response.data;
            var selector = document.getElementById("updateTeacher");
            $(selector).empty();
            for (var i = 0; i < teachers.length; i++) {
                var option = document.createElement("option");
                if (teachers[i].id == candidateDissertation.teacher.id){
                    option.selected = 'selected';
                }
                option.text = teachers[i].name;
                option.value = teachers[i].id;
                selector.add(option);
            }
        });
        document.getElementById("updateId").innerText = candidateDissertation.id;
        document.getElementById("updateThemeOfTheDissertation").value = candidateDissertation.themeOfTheDissertation;
        document.getElementById("updateProtectionDate").value = candidateDissertation.protectionDate;
    };

    this.updateCandidateDissertation = function update() {
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
                    url: 'api/candidate dissertation/update?id=' + id,
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