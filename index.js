console.log('Happy developing ✨');
(function () {
    "use strict";
    angular.module("myFirstApp", [])
        .controller("MyFirstController", function ($scope) {
            $scope.message = "Hello World!";
        })
})();
