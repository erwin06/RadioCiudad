myApp.controller('Programs',function($scope, $http, $cookies) {
	
	$scope.programs = [];

	$http.post(__URL__, {operation: "getPrograms"})
        .success(function (response) {
        	if(response.success)
	        	$scope.programs = response.optional;
    });

});