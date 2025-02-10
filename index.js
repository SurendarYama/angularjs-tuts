console.log('Happy developing ✨');
(function () {
    "use strict";
    angular.module("myFirstApp", [])
        .controller("MyFirstController", MyFirstController)
        .controller("NameCalculatorAppController", NameCalculatorAppController )
        .controller("DIController", DIController)
        .controller("ExpAndIntropController", ExpAndTntropController)
        .controller("MyFilterController", MyFilterController)
        .filter('loves', LovesFilter)
        .filter('truth', TruthFilter);

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
                $scope.name = $filter("uppercase")($scope.name);
            }
        }

        ExpAndTntropController.$inject = ['$scope', 'lovesFilter'];
        function ExpAndTntropController ($scope, lovesFilter) {
            $scope.name ="Yama";
            $scope.sayMessage = () => "Surendar Yama is likes to eat noodles...";
            $scope.sayLoves = () => lovesFilter("Surendar Yama is likes to eat noodles...");
        }

        MyFilterController.$inject = ['$scope'];
        function MyFilterController($scope){
            $scope.cost = 0.45;
            $scope.message = "I likes to play Dota 2";
        }

        // filters...
        function LovesFilter (){
            return function(input){
                input  = input || '';
                input  = input.replace("likes", "loves")
                return input;
            }
        }

        function TruthFilter() {
            return function(input, target, replace){
                if (!input || !target || !replace) {
                    throw new Error("input, target and replace is required");
                }
                input = input.replace(target, replace);
                return input;
            }
        }

        // end of filters ...

        function calculateNumericForString(string){
            let totalStringValue = 0;
            for (let i = 0; i < string.length; i++){
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }
})();
