var app = angular.module("query_16", []);

app.controller("AppCtrl", function ($scope, $http) {

    $http.get('/api/subjects').then(function (response) {
        var subjects = response.data;
        var defaultOption = document.createElement("option");
        defaultOption.value="";
        defaultOption.text = "Виберіть предмет";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        var selector = document.getElementById("subject");
        $(selector).empty();
        selector.add(defaultOption);
        for (var i = 0; i < subjects.length; i++) {
            if (subjects[i].typeOfSubject.type == "Лекція") {
                var option = document.createElement("option");
                option.text = subjects[i].name + " - " + subjects[i].formOfControl.form + " - " + subjects[i].numberOfHours + " годин";
                option.value = subjects[i].id;
                selector.add(option);
            }
        }
    });

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

    this.getStudentsFromSessionBySubjectAndMarkAndTeacher = function () {
        var indexSubject= document.getElementById("subject").selectedIndex;
        var subjectId = document.getElementById("subject").options[indexSubject].value;

        var indexTeacher= document.getElementById("teacher").selectedIndex;
        var teacherId = document.getElementById("teacher").options[indexTeacher].value;

        var mark = document.getElementById("mark").value;

        $http.get('/api/student/get by exam and mark and teacher?subject_id=' + subjectId + "&mark=" + mark + '&teacher_id=' + teacherId).then(function (response) {
            $scope.students = response.data;
        });
    };

});