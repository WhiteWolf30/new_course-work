var app = angular.module("query_6", []);

app.controller("AppCtrl", function ($scope, $http) {

    $http.get('/api/groups').then(function (response) {
        var groups = response.data;
        var defaultOption = document.createElement("option");
        defaultOption.value="";
        defaultOption.text = "Виберіть групу";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        var selector = document.getElementById("group");
        $(selector).empty();
        selector.add(defaultOption);
        for (var i = 0; i < groups.length; i++) {
            var option = document.createElement("option");
            option.text = groups[i].number;
            option.value = groups[i].id;
            selector.add(option);
        }
    });

    this.getChairsByLessonsInGroup = function () {
        var indexGroup= document.getElementById("group").selectedIndex;
        var groupId= document.getElementById("group").options[indexGroup].value;

        $http.get('/api/chair/get by lessons in group?group_id=' + groupId).then(function (response) {
            $scope.chairs = response.data;
        });
    };

});