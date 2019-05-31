var app = angular.module("query_2", []);

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

    this.getStudentsByDepartment = function () {
        var indexDepartment= document.getElementById("department").selectedIndex;
        var departmentId= document.getElementById("department").options[indexDepartment].value;

        $http.get('/api/number of student/get by department?department_id=' + departmentId).then(function (response) {
            document.getElementById("result").innerText = response.data;
        });
    };

});