var app = angular.module("query_4", []);

app.controller("AppCtrl", function ($scope, $http) {

    this.getTeachersByProtectionOfDoctoralDissertationDuringSpecifiedTime = function () {
        var startDate = document.getElementById("startDate").value;
        var endDate = document.getElementById("endDate").value;
        $http.get('/api/teacher/get by protection of doctoral dissertation during specified time?startDate=' + startDate + '&endDate=' + endDate).then(function (response) {
            $scope.teachers = response.data;
        });

    };

});