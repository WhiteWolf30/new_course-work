var app = angular.module("group", []);

app.controller("AppCtrl", function ($scope, $http) {

    $scope.groups = [];
    $http.get('/api/groups').then(function (response) {
        $scope.groups = response.data;
    });

    this.startInsertGroup = function () {
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
    };

    this.insertGroup = function add() {
        var number = document.getElementById("number").value;
        var course = document.getElementById("course").value;

        var indexChair= document.getElementById("chair").selectedIndex;
        var chairId = document.getElementById("chair").options[indexChair].value;

        if(number > 0) {
            if(course > 0 && course < 7) {
                $http.get('/api/chair/get?id=' + chairId).then(function (response) {
                    var selectedChair = response.data;
                    var req = {
                        method: 'POST',
                        url: '/api/group/insert',
                        data: {
                            number: number,
                            course: course,
                            chair: selectedChair
                        }
                    };
                    console.log(req);
                    $http(req).then(function (resp) {
                        window.location.reload();
                    })
                });
            }
            else
                window.alert("Введено некоректний курс!\n" +
                    "Курс може бути в межах 1-6 включно.");
        }
        else
            window.alert("Введено некоректний номер групи!\n" +
                "Підтримуються всі додатні цифри.");
    };

    this.deleteGroup = function del(id) {
        $http.get("api/group/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdateGroup = function startUpdate(id, number, course, chair) {
        $http.get('/api/chairs').then(function (response) {
            var chairs = response.data;
            var selector = document.getElementById("updateChair");
            $(selector).empty();
            for (var i = 0; i < chairs.length; i++) {
                var option = document.createElement("option");
                if (chairs[i].id == chair.id){
                    option.selected = 'selected';
                }
                option.text = chairs[i].name;
                option.value = chairs[i].id;
                selector.add(option);
            }
        });
        document.getElementById("updateId").innerText = id;
        document.getElementById("updateNumber").value = number;
        document.getElementById("updateCourse").value = course;
    };

    this.updateGroup = function update() {
        var id = document.getElementById("updateId").innerText;
        var number = document.getElementById("updateNumber").value;
        var course = document.getElementById("updateCourse").value;

        var indexChair = document.getElementById("updateChair").selectedIndex;
        var chairId = document.getElementById("updateChair").options[indexChair].value;

        if(number > 0) {
            if(course > 0 && course < 7) {
                $http.get('/api/chair/get?id=' + chairId).then(function (response) {
                    var selectedChair = response.data;
                    var req = {
                        method: 'POST',
                        url: 'api/group/update?id=' + id,
                        data: {
                            number: number,
                            course: course,
                            chair: selectedChair
                        }
                    };
                    $http(req).then(function (resp) {
                        window.location.reload();
                    })
                });
            }
            else
                window.alert("Введено некоректний курс!\n" +
                    "Курс може бути в межах 1-6 включно.");
        }
        else
            window.alert("Введено некоректний номер групи!\n" +
                "Підтримуються всі додатні цифри.");
    };
});