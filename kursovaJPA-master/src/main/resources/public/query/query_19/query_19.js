var app = angular.module("query_19", []);

app.controller("AppCtrl", function ($scope, $http) {

    $http.get('/api/types of subject').then(function (response) {
        var typesOfSubject = response.data;
        var defaultOption = document.createElement("option");
        defaultOption.value="";
        defaultOption.text = "Виберіть тип предмету";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        var selector = document.getElementById("type");
        $(selector).empty();
        selector.add(defaultOption);
        for (var i = 0; i < typesOfSubject.length; i++) {
            var option = document.createElement("option");
            option.text = typesOfSubject[i].type;
            option.value = typesOfSubject[i].id;
            selector.add(option);
        }
    });
    this.getSubjectsByType= function () {
        var indexType= document.getElementById("type").selectedIndex;
        var typeId = document.getElementById("type").options[indexType].value;

        $http.get('/api/subject/get by type?typeOfSubject_id=' + typeId).then(function (response) {
            $scope.subjects = response.data;
        });
    };
});