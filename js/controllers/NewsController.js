myApp.controller('News',function($scope, $http, $cookies) {
	$scope.news = [];
	$http.post(__URL__, {operation: "getNews"})
    .success(function (response) {
    	if(response.success)
        	$scope.news = response.optional;
    });
});