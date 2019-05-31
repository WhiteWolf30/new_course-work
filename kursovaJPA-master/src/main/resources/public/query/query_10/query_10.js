var app = angular.module("query_10", []);

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

    this.getStudentsFromSessionByLesson = function () {
        var indexSubject= document.getElementById("subject").selectedIndex;
        var subjectId = document.getElementById("subject").options[indexSubject].value;

        $http.get('/api/student/get from session by lesson?subject_id=' + subjectId).then(function (response) {
            $scope.students = response.data;
        });
    };

});