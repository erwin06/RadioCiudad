angular.module('modProg', []).controller('modProg', function ($scope, $http) {


    $scope.progItems = [];
    $scope.data = {};
    $scope.currentIndex = -1;
    
    $scope.getClass = function (page) {
        if ($scope.currentIndex == page)
            return "active";
        return "";
    };

    $scope.loadPrograms = function () {
        var json = {
            operation: 'getPrograms',
            data: {}
        };

        $http.post(__URL__, json)
                .success(function (response) {
                    console.log(response);
                    if (response.success) {
                        $scope.progItems = response.result;
                        $scope.active( response.result[0].idProgram);
                    }
                }).error(function (asd) {
        });
    };
    
    $scope.active = function(idProgram){
        $scope.currentIndex = idProgram;
        var count = $scope.progItems.length;
        for(var i = 0; i< count; i++){
            if($scope.progItems[i].idProgram ==  idProgram){
                $scope.data = $scope.progItems[i];
                return;
            }
        }
         
    };
    
    $scope.loadPrograms();



});

