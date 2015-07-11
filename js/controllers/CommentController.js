myApp.controller('Comment',function($scope, $http) {

        $scope.sendComment = function(){

                notification.info("Enviando...");

                var json = {
                        operation: 'addComment',
                        data: {
                                name: $scope.data.name,
                                email: $scope.data.email,
                                subject: $scope.data.subject,
                                message: $scope.data.message
                        }
                }

                $http.post(__URL__, json)
                .success(function (response) {
                        if(response.success){
                            alert.info(response.message)
                            $scope.data = {}
                        } else {
                                alert.error(response.message)
                        }
                }).error(errorMessage());
        }

});