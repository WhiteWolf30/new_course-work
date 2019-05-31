var app = angular.module("form of control", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.formsOfControl = [];
    $http.get('/api/forms of control').then(function (response) {
        $scope.formsOfControl = response.data;
    });

    function checkName(str) {
        var pattern = new RegExp(/^[А-ЯІ][А-ЯІа-яі'\- ]+$/);
        return pattern.test(str);
    }

    this.insertFormOfControl= function insert() {
        var form = document.getElementById("form").value;
        if(checkName(form)) {
            var req = {
                method: 'POST',
                url: '/api/form of control/insert',
                data: {
                    form: form
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

    this.deleteFormOfControl= function del(id) {
        $http.get("api/form of control/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdate = function startUpdate(id, form) {
        document.getElementById("updateId").innerText = id;
        document.getElementById("updateForm").value = form;
    };

    this.updateFormOfControl = function update() {
        var id = document.getElementById("updateId").innerText;
        var form = document.getElementById("updateForm").value;
        if(checkName(form)) {
            var req = {
                method: 'POST',
                url: "/api/form of control/update?id=" + id,
                data: {
                    form: form
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