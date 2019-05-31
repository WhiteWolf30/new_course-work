var app = angular.module("type of subject", []);
app.controller("TypeOfSubject", function ($scope, $http) {
    $scope.typesOfSubject = [];
    $http.get('/api/types of subject').then(function (response) {
        $scope.typesOfSubject = response.data;
    });

    function checkName(str) {
        var pattern = new RegExp(/^[А-ЯІ][А-ЯІа-яі'\- ]+$/);
        return pattern.test(str);
    }

    this.insertTypeOfSubject= function ins() {
        var type = document.getElementById("type").value;
        if(checkName(type)) {
            var req = {
                method: 'POST',
                url: '/api/type of subject/insert',
                data: {
                    type: type
                }
            };
            // console.log(req);
            $http(req).then(function (resp) {
                window.location.reload();
            });
        }
        else
            window.alert("Введено некоректний тип предмету!\n" +
                "Початок сторки повинен починатися з великої літери.\n" +
                "Підтримуються літери українського алфавіту та символи: -  '");
        // //incorect(delete do not work)
        // $scope.typesOfSubject.push({
        //     type: type
        // });
    };

    this.deleteTypeOfSubject = function del(id, index) {
        $http.get("api/type of subject/delete?id="+id).then(function (response) {
            window.location.reload();
        });
        // $scope.typesOfSubject.splice(index,1);
    };

    this.startUpdate = function startUpdate(id, type) {
        document.getElementById("updateId").innerText = id;
        document.getElementById("updateType").value = type;
    };

    this.updateTypeOfSubject= function update() {
        var id = document.getElementById("updateId").innerText;
        var type = document.getElementById("updateType").value;
        if(checkName(type)) {
            var req = {
                method: 'POST',
                url: "/api/type of subject/update?id=" + id,
                data: {
                    type: type
                }
            };
            // console.log(req);
            $http(req).then(function (resp) {
                window.location.reload();
            });
        }
        else
            window.alert("Введено некоректний тип предмету!\n" +
                "Початок сторки повинен починатися з великої літери.\n" +
                "Підтримуються літери українського алфавіту та символи: -  '");
    };
});