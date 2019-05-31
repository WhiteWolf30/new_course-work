var app = angular.module("curriculum", []);

app.controller("AppCtrl", function ($scope, $http) {

    $scope.curriculum = [];
    $http.get('api/curriculum').then(function (response) {
        $scope.curriculum = response.data;
    });

    this.startInsertCurriculum = function () {
        $http.get('/api/teachers').then(function (response) {
            var teachers = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть викладача";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("teacher");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < teachers.length; i++) {
                var option = document.createElement("option");
                option.text = teachers[i].name;
                option.value = teachers[i].id;
                selector.add(option);
            }
        });

        $http.get('/api/subjects').then(function (response) {
            var subjects = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть предмет";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("subject");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < subjects.length; i++) {
                var option = document.createElement("option");
                option.text = subjects[i].name + ",  "
                    +  subjects[i].typeOfSubject.type + ",  "
                    +  subjects[i].formOfControl.form + ",  "
                    +  subjects[i].numberOfHours + "  годин";
                option.value = subjects[i].id;
                selector.add(option);
            }
        });

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
    };

    this.insertCurriculum = function add() {
        var semester = document.getElementById("semester").value;

        var indexTeacher= document.getElementById("teacher").selectedIndex;
        var teacherId = document.getElementById("teacher").options[indexTeacher].value;

        var indexSubject= document.getElementById("subject").selectedIndex;
        var subjectId= document.getElementById("subject").options[indexSubject].value;

        var indexGroup = document.getElementById("group").selectedIndex;
        var groupId= document.getElementById("group").options[indexGroup].value;

        if(semester > 0 && semester < 3) {
            $http.get('/api/group/get?id=' + groupId).then(function (responseGroup) {
                var selectedGroup = responseGroup.data;
                $http.get('/api/teacher/get?id=' + teacherId).then(function (responseTeacher) {
                    var selectedTeacher = responseTeacher.data;
                    $http.get('/api/subject/get?id=' + subjectId).then(function (responseSubject) {
                        var selectedSubject = responseSubject.data;
                        var req = {
                            method: 'POST',
                            url: '/api/curriculum/insert',
                            data: {
                                semester: semester,
                                teacher: selectedTeacher,
                                subject: selectedSubject,
                                group: selectedGroup
                            }
                        };
                        console.log(req);
                        $http(req).then(function (resp) {
                            window.location.reload();
                        })
                    });
                });
            });
        }
        else
            window.alert("Введено некоректний семестер!\n" +
                "Коректний семестер в межах 1-2 включно.");
    };

    this.deleteCurriculum = function del(id) {
        $http.get("api/curriculum/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdateCurriculum = function startUpdate(curriculum) {
        $http.get('/api/teachers').then(function (response) {
            var teachers = response.data;
            var selector = document.getElementById("updateTeacher");
            $(selector).empty();
            for (var i = 0; i < teachers.length; i++) {
                var option = document.createElement("option");
                if(teachers[i].id == curriculum.teacher.id)
                    option.selected = 'selected';
                option.text = teachers[i].name;
                option.value = teachers[i].id;
                selector.add(option);
            }
        });

        $http.get('/api/subjects').then(function (response) {
            var subjects = response.data;
            var selector = document.getElementById("updateSubject");
            $(selector).empty();
            for (var i = 0; i < subjects.length; i++) {
                var option = document.createElement("option");
                if(subjects[i].id == curriculum.subject.id)
                    option.selected = 'selected';
                option.text = subjects[i].name + ",  "
                    +  subjects[i].typeOfSubject.type + ",  "
                    +  subjects[i].formOfControl.form + ",  "
                    +  subjects[i].numberOfHours + "  годин";
                option.value = subjects[i].id;
                selector.add(option);
            }
        });

        $http.get('/api/groups').then(function (response) {
            var groups = response.data;
            var selector = document.getElementById("updateGroup");
            $(selector).empty();
            for (var i = 0; i < groups.length; i++) {
                var option = document.createElement("option");
                if(groups[i].id == curriculum.group.id)
                    option.selected = 'selected';
                option.text = groups[i].number;
                option.value = groups[i].id;
                selector.add(option);
            }
        });

        document.getElementById("updateId").innerText = curriculum.id;
        document.getElementById("updateSemester").value = curriculum.semester;

    };

    this.updateCurriculum = function update() {
        var id = document.getElementById("updateId").innerText;
        var semester = document.getElementById("updateSemester").value;

        var indexTeacher= document.getElementById("updateTeacher").selectedIndex;
        var teacherId = document.getElementById("updateTeacher").options[indexTeacher].value;

        var indexSubject= document.getElementById("updateSubject").selectedIndex;
        var subjectId= document.getElementById("updateSubject").options[indexSubject].value;

        var indexGroup = document.getElementById("updateGroup").selectedIndex;
        var groupId= document.getElementById("updateGroup").options[indexGroup].value;

        if(semester > 0 && semester < 3) {
            $http.get('/api/group/get?id=' + groupId).then(function (responseGroup) {
                var selectedGroup = responseGroup.data;
                $http.get('/api/teacher/get?id=' + teacherId).then(function (responseTeacher) {
                    var selectedTeacher = responseTeacher.data;
                    $http.get('/api/subject/get?id=' + subjectId).then(function (responseSubject) {
                        var selectedSubject = responseSubject.data;
                        var req = {
                            method: 'POST',
                            url: '/api/curriculum/update?id=' + id,
                            data: {
                                semester: semester,
                                teacher: selectedTeacher,
                                subject: selectedSubject,
                                group: selectedGroup
                            }
                        };
                        console.log(req);
                        $http(req).then(function (resp) {
                            window.location.reload();
                        })
                    });
                });
            });
        }
        else
            window.alert("Введено некоректний семестер!\n" +
                "Коректний семестер в межах 1-2 включно.");
    };

});