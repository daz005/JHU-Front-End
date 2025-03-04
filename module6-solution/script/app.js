(function() {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', ['$scope', function($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.messageClass = "";
        $scope.borderClass = "";

        $scope.checkLunch = function() {
            if (!$scope.lunchItems.trim()) {
                $scope.message = "Please enter data first";
                $scope.messageClass = "red";
                $scope.borderClass = "red-border";
            } else {
                var items = $scope.lunchItems.split(',').map(item => item.trim()).filter(item => item);
                if (items.length === 0) {
                    $scope.message = "Please enter data first";
                    $scope.messageClass = "red";
                    $scope.borderClass = "red-border";
                } else if (items.length <= 3) {
                    $scope.message = "Enjoy!";
                    $scope.messageClass = "green";
                    $scope.borderClass = "green-border";
                } else {
                    $scope.message = "Too much!";
                    $scope.messageClass = "green";
                    $scope.borderClass = "green-border";
                }
            }
        };
    }]);
})();
