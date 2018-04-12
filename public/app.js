var app = angular.module("app", []);

app.controller("registrationCtrl", ["$scope", "$http", function ($scope, $http) {

    $scope.registrationObj = {};
    $scope.errShowObj = {};


    $scope.validateRegistration = function () {

        if (!$scope.registrationObj.name) {
            $scope.errShowObj.name = true;
            return;
        }else{
            $scope.errShowObj.name = false;
        }
        if (!$scope.registrationObj.dob) {
            $scope.errShowObj.date = true;
            return;
        }else{
            $scope.errShowObj.date = false;
        }
        if ($scope.registrationObj.weight && !Number($scope.registrationObj.weight)) {
            $scope.errShowObj.weight = true;
            return;
        }else{
            $scope.errShowObj.weight = false;
        }
        if (!$scope.registrationObj.email) {
            $scope.errShowObj.email = true;
            return;
        }else{
            $scope.errShowObj.email = false;
        }

        $scope.submitRegistration();
    }

    $scope.calcAge = function (dateString) {
        if (!dateString) {
            $scope.errShowObj.date = true;
            return;
        }else{
            $scope.errShowObj.date = false;
        }
        var birthday = new Date(dateString);
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs);
        $scope.registrationObj.age = Math.abs(ageDate.getFullYear() - 1970);
    }


    $scope.submitRegistration = function () {
        console.log($scope.registrationObj);
        $http.post("/registrationForm", $scope.registrationObj).then(function (response) {
            alert("You are successfully registered.");
        }, function (err) {

        });
    }
}]);