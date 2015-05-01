angular.module('inApap', []).controller('newPackageCntrl', function ($scope, $http) {

    $scope.newsStore = [];

    $scope.loadNews = function () {

        var json = {
            operation: 'getNews',
            data: {}
        };

        $http.post(__URL__, json)
                .success(function (response) {
                    if (response.success) {
                        $scope.newsStore = response.result;
                    }
                }).error(function (asd) {
            console.log(asd);
        });
    };

    $scope.loadNews();




});


