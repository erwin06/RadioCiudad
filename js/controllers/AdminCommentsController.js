myApp.controller('AdminComments',function($scope, $http, $cookies) {
		
	$scope.comments = [];

	var json = {
		operation: "getComments",
		userData: {
			iduser: $cookies.iduser,
			idsession: $cookies.idsession
		}
	}

	$http.post(__URL__, json)
        .success(function (response) {
        	if(response.success)
	        	$scope.comments = response.optional;
    });
});