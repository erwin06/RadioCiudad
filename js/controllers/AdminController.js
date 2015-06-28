myApp.controller('Admin',function($scope) {
 		$scope.templateUrl = 'views/admin/login.html';

 		$scope.login = function(){
 			$scope.templateUrl = 'views/admin/tabs.html';
 		}
});