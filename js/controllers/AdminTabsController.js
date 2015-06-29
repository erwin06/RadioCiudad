myApp.controller('AdminTabs',function($scope, $cookieStore, $location) {
 		$scope.template = 'views/admin/site.html';
 		$scope.templates = [];
 		$scope.templates.push('views/admin/site.html');
 		$scope.templates.push('views/admin/changePass.html');
 		$scope.templates.push('views/admin/users.html');
 		$scope.templates.push('views/admin/news.html');
 		$scope.templates.push('views/admin/programs.html');


 		$scope.getClass = function(site){
 			if($scope.template.indexOf(site) != -1)
 				return 'active'
 		}

 		$scope.logOut = function() {
 			$cookieStore.remove('iduser');
            $cookieStore.remove('idsession');
            $cookieStore.remove('admin');
            $location.path('/main');
 		}

});