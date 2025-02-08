console.log('Happy developing ✨');
(function () {
    "use strict";
    angular.module("myFirstApp", [])
        .controller("MyFirstController", MyFirstController)
        .controller("NameCalculatorAppController", NameCalculatorAppController )
        .controller("DIController", DIController)

        function MyFirstController ($scope) {
            $scope.message = "Hello World!";
            $scope.sayHi = () => "Hi.";
        }
        function NameCalculatorAppController ($scope) {
            $scope.name = "";
            $scope.totalValue = 0;
            $scope.displayNumeric = () => {
                $scope.totalValue = calculateNumericForString($scope.name);
            }
        }

        function DIController ($scope, $filter) {
            $scope.name = "Surendar";
            $scope.upper = function () {
                let upCase = $filter("uppercase");
                $scope.name = upCase($scope.name);
            }
        };


        function calculateNumericForString(string){
            let totalStringValue = 0;
            for (let i = 0; i < string.length; i++){
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }
})();
