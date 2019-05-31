var app = angular.module("query_20", []);

app.controller("AppCtrl", function ($scope, $http) {

    $http.get('/api/categories of teacher').then(function (response) {
        var categories = response.data;
        var defaultOption = document.createElement("option");
        defaultOption.value="";
        defaultOption.text = "Виберіть категорію викладача";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        var selector = document.getElementById("category");
        $(selector).empty();
        selector.add(defaultOption);
        for (var i = 0; i < categories.length; i++) {
            var option = document.createElement("option");
            option.text = categories[i].category;
            option.value = categories[i].id;
            selector.add(option);
        }
    });

    this.getTeachersByCategory = function () {
        var indexCategory= document.getElementById("category").selectedIndex;
        var categoryId= document.getElementById("category").options[indexCategory].value;

        $http.get('/api/teacher/get by category?categoryOfTeacher_id=' + categoryId).then(function (response) {
            $scope.teachers = response.data;
        });

    };

});