angular.module('modprogView', []).controller('progView', function ($scope, $modalInstance, items, $http) {

    $scope.data = {
        time: items.time,
        description: items.description,
        idprog: items.idProgram,
        title: items.title,
        url: items.url
    };

    $scope.close = function(){
        $modalInstance.close();
    };

    $scope.deleteProg = function () {
        confirm.info("¿Está seguro que desea eliminar?", function (button) {
            if (button == 'Aceptar') {

                var json = {
                    operation: 'deleteProgram',
                    data: {
                        id: $scope.data.idprog
                    }
                };

                $http.post(__URL__, json);
                $modalInstance.close();
            }
        });
    };

});