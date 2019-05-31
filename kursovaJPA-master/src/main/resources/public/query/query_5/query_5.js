var app = angular.module("query_5", []);

app.controller("AppCtrl", function ($scope, $http) {

    $http.get('/api/departments').then(function (response) {
        var departments = response.data;
        var defaultOption = document.createElement("option");
        defaultOption.value="";
        defaultOption.text = "Виберіть факультет";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        var selector = document.getElementById("department");
        $(selector).empty();
        selector.add(defaultOption);
        for (var i = 0; i < departments.length; i++) {
            var option = document.createElement("option");
            option.text = departments[i].name;
            option.value = departments[i].id;
            selector.add(option);
        }
    });

    this.getCandidatesDissertationsByDepartmentOfTeachers = function () {
        var departmentIndex = document.getElementById("department").selectedIndex;
        var departmentId = document.getElementById("department").options[departmentIndex].value;
        $http.get('/api/candidate dissertation/get by chair of teacher?department_id=' + departmentId).then(function (response) {
            $scope.candidatesDissertations = response.data;
        });

    };

});