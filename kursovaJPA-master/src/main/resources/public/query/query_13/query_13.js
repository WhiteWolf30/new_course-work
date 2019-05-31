var app = angular.module("query_13", []);

app.controller("AppCtrl", function ($scope, $http) {

    $http.get('/api/group/get order by average mark').then(function (response) {
        $scope.groups = response.data;
    });

    this.getGroupsOrderByAverageMark = function () {

        $http.get('/api/group/get order by average mark').then(function (response) {
            $scope.groups = response.data;
        });
    };

});