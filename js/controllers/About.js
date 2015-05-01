angular.module('modAbout', []).controller('aboutCntrl', function ($scope, $http, $cookies, $location) {

    $scope.data = {};

    $scope.addComment = function () {

        if (!$scope.data.name) {
            alert.warn("El nombre es obligatorio");
            return;
        }

        if (!$scope.data.message) {
            alert.warn("El mensaje es obligatorio");
            return;
        }

        var json = {
            operation: 'addComm',
            data: {
                name: $scope.data.name,
                title: $scope.data.title ? $scope.data.title : "",
                message: $scope.data.message ? $scope.data.message : "",
                mail: $scope.data.email ? $scope.data.email : ""
            }
        };


        $http.post(__URL__, json)
                .success(function (response) {
                    if (response.success) {
                        alert.info("Mensaje enviado. Gracias!");
                        $scope.data = {};
                    } else {
                        alert.error(response.message);
                    }
                }).error(server_error);
    };
});