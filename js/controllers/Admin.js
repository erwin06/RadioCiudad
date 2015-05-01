angular.module('modAdmin', []).controller('adminCntrl', function ($scope, $http, $cookies, $location) {

    if ($cookies.loggin == 'logged')
        $location.path('/adminPage');

    $scope.loginData = {};

    $scope.loggin = function () {
        if ($scope.loginData.password) {

            var json = {
                operation: 'login',
                data: {
                    password: $scope.loginData.password
                }
            };

            $http.post(__URL__, json)
                    .success(function (response) {
                        if (response.success) {
                            $location.path('/adminPage');
                            $cookies.loggin = 'logged';
                        } else {
                            alert.error(response.message);
                        }
                    }).error(server_error);
        }
    };
});