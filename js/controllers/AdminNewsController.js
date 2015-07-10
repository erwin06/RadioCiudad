myApp.controller('AdminNews',function($scope, $https, $cookies) {
	
	$scope.data = {};

	$scope.addNews = function(){

		notification.info("Guardando...");

		var json = {
			operation: 'addNew',
			userData: {
				iduser: $cookies.iduser,
				idsession: $cookies.idsession
			},
			data: {
				imageUrl: $('#newPicture').attr("value"),
				title: $scope.data.title,
				message: $scope.data.message
			}
		}

		$http.post(__URL__, json)
	        .success(function (response) {
	        	console.info(response)
	        	if(response.success){
		            alert.info(response.message)
		            $scope.data = {}
		        } else {
		        	alert.error(response.message)
		        }
	        }).error(errorMessage());

	}

});