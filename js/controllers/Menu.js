angular.module('modMenu', []).controller('menuCntrl', function ($scope, $location) {


    $scope.radio = "Radio Ciudad";
    $scope.fm = "103.1FM";
    $scope.eslogan = "Hablamos todos, decimos mas!!!"

    $scope.getClass = function (page) {
        if ($location.path().indexOf(page) != -1)
            return "active";
        return "";
    };


});


