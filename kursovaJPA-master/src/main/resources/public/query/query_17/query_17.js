var app = angular.module("query_17", []);

app.controller("AppCtrl", function ($scope, $http) {

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

    this.getDiplomaByTeacher = function () {
        var indexTeacher= document.getElementById("teacher").selectedIndex;
        var teacherId = document.getElementById("teacher").options[indexTeacher].value;

        $http.get('/api/diploma/get by teacher?teacher_id=' + teacherId).then(function (response) {
            $scope.diplomas = response.data;
        });
    };
});