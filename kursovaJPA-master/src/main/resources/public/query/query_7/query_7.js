var app = angular.module("query_7", []);

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
            var option = document.createElement("option");
            option.text = subjects[i].name + " - " +  subjects[i].typeOfSubject.type;
            option.value = subjects[i].id;
            selector.add(option);
        }
    });


    this.getTeachersByLessonAndCourse = function () {
        var indexSubject= document.getElementById("subject").selectedIndex;
        var subjectId= document.getElementById("subject").options[indexSubject].value;

        var indexCourse= document.getElementById("course").selectedIndex;
        var courseValue= document.getElementById("course").options[indexCourse].value;

        $http.get('/api/teacher/get by lesson and course?subject_id=' + subjectId + '&course=' + courseValue).then(function (response) {
            $scope.teachers = response.data;
        });

    };

});