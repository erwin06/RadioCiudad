angular.module('changePassword', []).controller('changePassword', function ($scope, $http, $modalInstance) {

    $scope.data = {};

    $scope.changePassword = function () {

        if(!$scope.data.oldPass){
            alert.warn("Ingrese su contraseña actual");
            return;
        }
        
        if(!$scope.data.newPass){
            alert.warn("Ingrese una contraseña nueva");
            return;
        }
        
        if($scope.data.newPass != $scope.data.newPass2){
            alert.warn("Las contraseñas no coinciden");
            return;
        }
            


        var json = {
            operation: 'changePassword',
            data: {
                password: $scope.data.oldPass,
                newPass: $scope.data.newPass
            }
        };

        $http.post(__URL__, json)
                .success(function (response) {
                    console.log(response);
                    if (response.success) {
                        alert.info("Operación realizada correctamente");
                        $modalInstance.close();
                    } else {
                        alert.error(response.message);
                    }
                }).error(function(asd){
                    console.log(asd);
                });

    };


});