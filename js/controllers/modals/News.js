angular.module('modModalNews', []).controller('modalNewsCntrl', function ($scope, $http, $modalInstance) {

    $scope.data = {};

    $scope.uploadNew = function () {

        var url = document.getElementById('files');
        var urlN = '';
        if (url.childElementCount > 0) {
            url = url.childNodes[0];
            urlN = url.innerHTML;
        }
        
        if(!$scope.data.title){
            alert.warn("Agregé un título");
            return;
        }
        
        if(!$scope.data.description){
            alert.warn("Agregé una descripción");
            return;
        }
            


        var json = {
            operation: 'addnews',
            data: {
                title: $scope.data.title,
                description: $scope.data.description,
                imgName: urlN
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