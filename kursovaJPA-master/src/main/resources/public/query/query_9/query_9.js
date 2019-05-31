var app = angular.module("query_9", []);

app.controller("AppCtrl", function ($scope, $http) {

    this.getStudentsBySessionMark = function () {
        var indexMark= document.getElementById("mark").selectedIndex;
        var markValue= document.getElementById("mark").options[indexMark].value;

        $http.get('/api/student/get by session mark?mark=' + markValue).then(function (response) {
            $scope.students = response.data;
        });
    };
});