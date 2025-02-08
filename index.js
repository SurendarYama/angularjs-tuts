console.log('Happy developing ✨');
(function () {
    "use strict";
    angular.module("myFirstApp", [])
        .controller("MyFirstController", function ($scope) {
            $scope.message = "Hello World!";
            $scope.sayHi = () => "Hi.";
        })
        .controller("NameCalculatorAppController", function ($scope) {
            $scope.name = "";
            $scope.totalValue = 0;
            $scope.displayNumeric = () => {
                $scope.totalValue = calculateNumericForString($scope.name);
            }
        })


        function calculateNumericForString(string){
            let totalStringValue = 0;
            for (let i = 0; i < string.length; i++){
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }
})();
