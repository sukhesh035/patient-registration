var app = angular.module("app", []);

app.controller("registrationCtrl", ["$scope", "$http", function ($scope, $http) {

    $scope.registrationObj = {};
    $scope.errShowObj = {};
    $scope.dateOptions = {
        maxDate: ""
    }
    //below  code is for disabling date picker for future as we  dont have future age
    $scope.dateOptions.maxDate = new Date();
    var dd = $scope.dateOptions.maxDate.getDate();
    var mm = $scope.dateOptions.maxDate.getMonth() + 1; //January is 0!
    var yyyy = $scope.dateOptions.maxDate.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    $scope.dateOptions.maxDate = yyyy + '-' + mm + '-' + dd;

    //below  functiona validates all the input fields from Javascriptend,even though we have angular 
    //validations
    $scope.validateRegistration = function () {

        if (!$scope.registrationObj.name) {
            $scope.errShowObj.name = true;
            return;
        } else {
            $scope.errShowObj.name = false;
        }
        if (!$scope.registrationObj.dob) {
            $scope.errShowObj.date = true;
            return;
        } else {
            $scope.errShowObj.date = false;
        }
        if ($scope.registrationObj.weight && !Number($scope.registrationObj.weight)) {
            $scope.errShowObj.weight = true;
            return;
        } else {
            $scope.errShowObj.weight = false;
        }
        if (!$scope.registrationObj.email) {
            $scope.errShowObj.email = true;
            return;
        } else {
            $scope.errShowObj.email = false;
        }

        $scope.submitRegistration();
    }

    //calculate age from the date string generated from the HTML date picker
    $scope.calcAge = function (dateString) {
        if (!dateString) {
            $scope.errShowObj.date = true;
            return;
        } else {
            $scope.errShowObj.date = false;
        }
        var birthday = new Date(dateString);
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs);
        $scope.registrationObj.age = Math.abs(ageDate.getFullYear() - 1970);
    }

    //ajax Call to save the patient info to the back-end
    $scope.submitRegistration = function () {
        console.log($scope.registrationObj);
        $http.post("/registrationForm", $scope.registrationObj).then(function (response) {
            alert("You are successfully registered.");
        }, function (err) {

        });
    }
}]);