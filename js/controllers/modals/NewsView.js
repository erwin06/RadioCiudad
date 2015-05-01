angular.module('modModa', []).controller('newsView', function ($scope, $modalInstance, items, $http) {

    $scope.data = {
        date: items.date,
        description: items.description,
        idnew: items.idNew,
        title: items.title,
        url: items.url
    };

    $scope.close = function(){
        $modalInstance.close();
    };

    $scope.deleteNew = function () {
        confirm.info("¿Está seguro que desea eliminar?", function (button) {
            if (button == 'Aceptar') {

                var json = {
                    operation: 'deleteNew',
                    data: {
                        id: $scope.data.idnew
                    }
                };

                $http.post(__URL__, json);
                $modalInstance.close();
            }
        });
    };

});