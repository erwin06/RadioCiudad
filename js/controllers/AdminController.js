myApp.controller('Admin',function($scope, $http, $cookies) {
		
	$scope.data = {};

	if($cookies.idsession){
		$scope.templateUrl = 'views/admin/tabs.html';
	} else {
		$scope.templateUrl = 'views/admin/login.html';
	}

	$scope.login = function(){

		var json = {
			operation: "login",
			data: {
				user: $scope.data.user,
				password: $scope.data.password
			}
		}

		$http.post(__URL__, json)
	        .success(function (response) {
	        	if(response.success){
		            $cookies.iduser = response.optional.iduser
		            $cookies.idsession = response.optional.idsession
		            $cookies.admin = response.optional.admin
		            $scope.templateUrl = 'views/admin/tabs.html'
		        } else {
		        	alert.error(response.message)
		        }
	        }).error(function(response){
	        	alert.error("Ups! Algo no salió como esperábamos. Intenta nuevamente más tarde")
	        });
	}
});