myApp.controller('AdminChangePassword',function($scope, $http, $cookies) {
		
	$scope.data = {};

	$scope.savePassword = function(){

		var json = {
			operation: "changePassword",
			data: {
				currentPassword: $scope.data.password,
				newPassword: $scope.data.newPassword,
				newPassword2: $scope.data.newPassword2

			},
			userData: {
				iduser: $cookies.iduser,
				idsession: $cookies.idsession
			}
		}

		$http.post(__URL__, json)
	        .success(function (response) {
	        	console.log(response)
	        	if(response.success){
	        		alert.info(response.message)
	        		$scope.data = {}
		        } else {
		        	alert.error(response.message)
		        }
	        }).error(function(response){
	        	alert.error("Ups! Algo no salió como esperábamos. Intenta nuevamente más tarde")
	        });
	}
});