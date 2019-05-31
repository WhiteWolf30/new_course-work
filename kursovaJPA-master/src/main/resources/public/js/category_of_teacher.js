var app = angular.module("category of teacher", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.categoriesOfTeacher = [];
    $http.get('/api/categories of teacher').then(function (response) {
        $scope.categoriesOfTeacher = response.data;
    });

    function checkName(str) {
        var pattern = new RegExp(/^[А-ЯІ][А-ЯІа-яі'\- ]+$/);
        return pattern.test(str);
    }

    this.insertCategoryOfTeacher = function insert() {
        var category = document.getElementById("category").value;
        if(checkName(category)) {
            var req = {
                method: 'POST',
                url: '/api/category of teacher/insert',
                data: {
                    category: category
                }
            };
            // console.log(req);
            $http(req).then(function (resp) {
                window.location.reload();
            })
        }
        else
            window.alert("Введено некоректну форму контролю!\n" +
                "Початок сторки повинен починатися з великої літери.\n" +
                "Підтримуються літери українського алфавіту та символи: -  '");
    };

    this.deleteCategoryOfTeacher = function del(id) {
        $http.get("api/category of teacher/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdate = function startUpdate(id, category) {
        document.getElementById("updateId").innerText = id;
        document.getElementById("updateCategory").value = category;
    };

    this.updateCategoryOfTeacher = function update() {
        var id = document.getElementById("updateId").innerText;
        var category = document.getElementById("updateCategory").value;
        if(checkName(category)) {
            var req = {
                method: 'POST',
                url: "/api/category of teacher/update?id=" + id,
                data: {
                    category: category
                }
            };
            // console.log(req);
            $http(req).then(function (resp) {
                window.location.reload();
            });
        }
        else
            window.alert("Введено некоректну форму контролю!\n" +
                "Початок сторки повинен починатися з великої літери.\n" +
                "Підтримуються літери українського алфавіту та символи: -  '");
    };

});