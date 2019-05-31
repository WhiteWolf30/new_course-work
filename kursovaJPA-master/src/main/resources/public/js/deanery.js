var app = angular.module("deanery", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.deaneries = [];
    $http.get('/api/deaneries').then(function (response) {
        $scope.deaneries = response.data;
    });

    function checkAddress(str) {
        var pattern = new RegExp(/^[А-ЯІа-яі][А-ЯІа-яі',.\-0-9 ]+$/);
        return pattern.test(str);
    }
    function checkPhone(str) {
        var pattern = new RegExp(/^[0-9]{10}$/);
        return pattern.test(str);
    }

    this.insertDeanery= function insert() {
        var address = document.getElementById("address").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        if(checkAddress(address))
        {
            if(checkPhone(phoneNumber)) {
                var req = {
                    method: 'POST',
                    url: '/api/deanery/insert',
                    data: {
                        address: address,
                        phoneNumber: phoneNumber
                    }
                };
                // console.log(req);
                $http(req).then(function (resp) {
                    window.location.reload();
                })
            }
            else
                window.alert("Введено некоректний номер телефону!\n" +
                    "Приклад: 0967809346");
        }
        else
            window.alert("Введено некоректну адресу!\n" +
                "Підтримуються літери українського алфавіту, цифри та символи: -  '  .  ,");
    };

    this.deleteDeanery= function del(id) {
        $http.get("api/deanery/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdate = function startUpdate(id, address, phoneNumber) {
        document.getElementById("updateId").innerText = id;
        document.getElementById("updateAddress").value = address;
        document.getElementById("updatePhoneNumber").value = phoneNumber;
    };

    this.updateDeanery= function update() {
        var id = document.getElementById("updateId").innerText;
        var address = document.getElementById("updateAddress").value;
        var phoneNumber = document.getElementById("updatePhoneNumber").value;
        if(checkAddress(address))
        {
            if(checkPhone(phoneNumber)) {
                var req = {
                    method: 'POST',
                    url: "/api/deanery/update?id=" + id,
                    data: {
                        address: address,
                        phoneNumber: phoneNumber
                    }
                };
                // console.log(req);
                $http(req).then(function (resp) {
                    window.location.reload();
                });
            }
            else
                window.alert("Введено некоректний номер телефону!\n" +
                    "Приклад: 0967809346");
        }
        else
            window.alert("Введено некоректну адресу!\n" +
                "Підтримуються літери українського алфавіту та символи: -  '  .  ,");
    };

});