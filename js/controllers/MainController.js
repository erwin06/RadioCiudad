myApp.controller('Main',function($scope, $http) {

 	// Obtengo la foto
	$http.post(__URL__, {operation: "getFrontPhoto"})
        .success(function (response) {
        	console.info(response)
        	if(response.success){
	            $scope.front_image = __IMAGE__URL__ + response.optional.frontphoto;
	        } else {
	        	alert.error(response.message)
	        }
        }).error(function(response){
        	alert.error("Ups! Algo no salió como esperábamos. Intenta nuevamente más tarde")
        });

});