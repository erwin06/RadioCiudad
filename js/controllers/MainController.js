myApp.controller('Main',function($scope, $http) {

        $scope.news = [];
 	// Obtengo la foto
	$http.post(__URL__, {operation: "getFrontPhoto"})
        .success(function (response) {
        	if(response.success){
	            $scope.front_image = __IMAGE__URL__ + response.optional.frontphoto;
	        } else {
	        	alert.error(response.message)
	        }
        }).error(function(response){
        	alert.error("Ups! Algo no salió como esperábamos. Intenta nuevamente más tarde")
        });

        // Load picture
        $http.post(__URL__, {operation: "getLastNews"})
        .success(function (response) {
                if(response.success)
                        $scope.news = response.optional;
        });

        $scope.showfooter = window.location.href.indexOf("admin") == -1 ? false : true

});