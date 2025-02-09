console.log('Happy developing ✨');
(function () {
    "use strict";
    angular.module("myFirstApp", [])
        .controller("MyFirstController", MyFirstController)
        .controller("NameCalculatorAppController", NameCalculatorAppController )
        .controller("DIController", DIController)
        .controller("ExpAndIntropController", ExpAnaTntropController);

        MyFirstController.$inject = ['$scope']
        function MyFirstController ($scope) {
            $scope.message = "Hello World!";
            $scope.sayHi = () => "Hi.";
        }

        NameCalculatorAppController.$inject = ['$scope'];
        function NameCalculatorAppController ($scope) {
            $scope.name = "";
            $scope.totalValue = 0;
            $scope.displayNumeric = () => {
                $scope.totalValue = calculateNumericForString($scope.name);
            }
        }

        DIController.$inject= ['$scope', '$filter'];
        function DIController ($scope, $filter) {
            $scope.name = "Surendar";
            $scope.upper = function () {
                let upCase = $filter("uppercase");
                $scope.name = upCase($scope.name);
            }
        }

        ExpAnaTntropController.$inject = ['$scope'];
        function ExpAnaTntropController ($scope) {
            $scope.name = "Yama";
            $scope.sayMessage = () => "Surendar Yama is like to eat noodles...";
        }

        function calculateNumericForString(string){
            let totalStringValue = 0;
            for (let i = 0; i < string.length; i++){
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }
})();
