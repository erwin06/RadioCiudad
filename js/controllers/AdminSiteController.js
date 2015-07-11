myApp.controller('AdminSite',function($scope, $http, $cookies, $location) {


	$scope.front_image; // __IMAGE__URL__ + 'portada3.jpg';
	$scope.data = {};

	$scope.setFrontPhoto = function() {
		var json = {
			operation: 'setFrontPhoto',
			userData: {
				iduser: $cookies.iduser,
				idsession: $cookies.idsession
			},
			data: {
				imageUrl: $('#newPicture').attr("value")
			}
		}

		$http.post(__URL__, json)
	        .success(function (response) {
	        	if(response.success){
		            alert.info(response.message)
		            $('#savePicture').hide()
		        } else {
		        	alert.error(response.message)
		        }
	        }).error(errorMessage());
	}

	// Obtengo la foto
	$http.post(__URL__, {operation: "getFrontPhoto"})
        .success(function (response) {
        	if(response.success){
	            $scope.front_image = __IMAGE__URL__ + response.optional.frontphoto;
	        }
        });

});