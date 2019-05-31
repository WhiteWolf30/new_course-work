var app = angular.module("query_18", []);

app.controller("AppCtrl", function ($scope, $http) {

    $http.get('/api/chairs').then(function (response) {
        var chairs = response.data;
        var defaultOption = document.createElement("option");
        defaultOption.value="";
        defaultOption.text = "Виберіть кафедру";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        var selector = document.getElementById("chair");
        $(selector).empty();
        selector.add(defaultOption);
        for (var i = 0; i < chairs.length; i++) {
            var option = document.createElement("option");
            option.text = chairs[i].name;
            option.value = chairs[i].id;
            selector.add(option);
        }
    });

    this.getTeachersFromDiplomaByChair = function () {
        var indexChair= document.getElementById("chair").selectedIndex;
        var chairId = document.getElementById("chair").options[indexChair].value;

        $http.get('/api/teacher/get from diploma by chair?chair_id=' + chairId).then(function (response) {
            $scope.teachers = response.data;
        });
    };
});