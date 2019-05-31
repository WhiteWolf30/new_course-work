var app = angular.module("query_8", []);

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


    this.getNumberOfTeachersByLessonsInTheGroup = function () {
        var indexGroup= document.getElementById("group").selectedIndex;
        var groupId= document.getElementById("group").options[indexGroup].value;

        $http.get('/api/teacher/get count by lessons in the group?group_id=' + groupId).then(function (response) {
            document.getElementById("result").innerText = response.data;
        });

    };

});