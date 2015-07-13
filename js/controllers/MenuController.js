myApp.controller('Menu',function($scope) {
 	
 	$scope.getClass = function(site) {
 		if(window.location.href.indexOf(site) != -1)
 			return 'link-active'
 	}

});