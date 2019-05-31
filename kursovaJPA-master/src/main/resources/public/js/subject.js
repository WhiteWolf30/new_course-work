var app = angular.module("subject", []);

app.controller("AppCtrl", function ($scope, $http) {

    $scope.subjects = [];
    $http.get('api/subjects').then(function (response) {
        $scope.subjects = response.data;
    });

    function checkName(str) {
        var pattern = new RegExp(/^[А-ЯІ][А-ЯІа-яі'\- ]+$/);
        return pattern.test(str);
    }

    this.startInsertSubject = function () {
        $http.get('/api/types of subject').then(function (response) {
            var typesOfSubject = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть тип предмету";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("typeOfSubject");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < typesOfSubject.length; i++) {
                var option = document.createElement("option");
                option.text = typesOfSubject[i].type;
                option.value = typesOfSubject[i].id;
                selector.add(option);
            }
        });

        $http.get('/api/forms of control').then(function (response) {
            var formsOfControl = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть форму контролю";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("formOfControl");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < formsOfControl.length; i++) {
                var option = document.createElement("option");
                option.text = formsOfControl[i].form;
                option.value = formsOfControl[i].id;
                selector.add(option);
            }
        });
    };

    this.insertSubject= function add() {
        var name = document.getElementById("name").value;
        var numberOfHours = document.getElementById("numberOfHours").value;

        var indexTypeOfSubject= document.getElementById("typeOfSubject").selectedIndex;
        var typeOfSubjectId = document.getElementById("typeOfSubject").options[indexTypeOfSubject].value;

        var indexFormOfControl = document.getElementById("formOfControl").selectedIndex;
        var formOfControlId= document.getElementById("formOfControl").options[indexFormOfControl].value;

        if(numberOfHours > 0) {
            if (checkName(name)) {
                $http.get('/api/type of subject/get?id=' + typeOfSubjectId).then(function (responseType) {
                    var selectedType = responseType.data;
                    $http.get('/api/form of control/get?id=' + formOfControlId).then(function (responseForm) {
                        var selectedForm = responseForm.data;
                        var req = {
                            method: 'POST',
                            url: '/api/subject/insert',
                            data: {
                                name: name,
                                numberOfHours: numberOfHours,
                                typeOfSubject: selectedType,
                                formOfControl: selectedForm
                            }
                        };
                        console.log(req);
                        $http(req).then(function (resp) {
                            window.location.reload();
                        })
                    });
                });
            }
            else
                window.alert("Введено некоректну назву предмета!\n" +
                    "Початок сторки повинен починатися з великої літери.\n" +
                    "Підтримуються літери українського алфавіту та символи: -  '");
        }
        else
            window.alert("Введено некоректну кількість годин!\n" +
                "Підтримуються всі додатні цифри");
    };

    this.deleteSubject= function del(id) {
        $http.get("api/subject/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdateSubject= function startUpdate(subject) {
        $http.get('/api/types of subject').then(function (response) {
            var typesOfSubject = response.data;
            var selector = document.getElementById("updateTypeOfSubject");
            $(selector).empty();
            for (var i = 0; i < typesOfSubject.length; i++) {
                var option = document.createElement("option");
                if(typesOfSubject[i].id == subject.typeOfSubject.id)
                    option.selected = 'selected';
                option.text = typesOfSubject[i].type;
                option.value = typesOfSubject[i].id;
                selector.add(option);
            }
        });

        $http.get('/api/forms of control').then(function (response) {
            var formsOfControl = response.data;
            var selector = document.getElementById("updateFormOfControl");
            $(selector).empty();
            for (var i = 0; i < formsOfControl.length; i++) {
                var option = document.createElement("option");
                if(formsOfControl[i].id == subject.formOfControl.id)
                    option.selected = 'selected';
                option.text = formsOfControl[i].form;
                option.value = formsOfControl[i].id;
                selector.add(option);
            }
        });

        document.getElementById("updateId").innerText = subject.id;
        document.getElementById("updateName").value = subject.name;
        document.getElementById("updateNumberOfHours").value = subject.numberOfHours;
    };

    this.updateSubject= function update() {
        var id = document.getElementById("updateId").innerText;
        var name = document.getElementById("updateName").value;
        var numberOfHours = document.getElementById("updateNumberOfHours").value;

        var indexTypeOfSubject= document.getElementById("updateTypeOfSubject").selectedIndex;
        var typeOfSubjectId = document.getElementById("updateTypeOfSubject").options[indexTypeOfSubject].value;

        var indexFormOfControl = document.getElementById("updateFormOfControl").selectedIndex;
        var formOfControlId= document.getElementById("updateFormOfControl").options[indexFormOfControl].value;

        if(numberOfHours > 0) {
            if (checkName(name)) {
                $http.get('/api/type of subject/get?id=' + typeOfSubjectId).then(function (responseType) {
                    var selectedType = responseType.data;
                    $http.get('/api/form of control/get?id=' + formOfControlId).then(function (responseForm) {
                        var selectedForm = responseForm.data;
                        var req = {
                            method: 'POST',
                            url: '/api/subject/update?id=' + id,
                            data: {
                                name: name,
                                numberOfHours: numberOfHours,
                                typeOfSubject: selectedType,
                                formOfControl: selectedForm
                            }
                        };
                        console.log(req);
                        $http(req).then(function (resp) {
                            window.location.reload();
                        })
                    });
                });
            }
            else
                window.alert("Введено некоректну назву предмета!\n" +
                    "Початок сторки повинен починатися з великої літери.\n" +
                    "Підтримуються літери українського алфавіту та символи: -  '");
        }
        else
            window.alert("Введено некоректну кількість годин!\n" +
                "Підтримуються всі додатні цифри");
    };
});