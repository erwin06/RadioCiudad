myApp.controller('AdminComments',function($scope, $http, $cookies) {
		
	$scope.comments = [];

	function loadComment(){
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
	}

	

    $scope.deleteComment = function(idComment){

    	var json = {
			operation: "delComment",
			userData: {
				iduser: $cookies.iduser,
				idsession: $cookies.idsession
			},
			data: {
				idComment: idComment
			}
		}

		$http.post(__URL__, json)
	        .success(function (response) {
	        	if(response.success){
		        	alert.info(response.message);
		        	loadComment();
	        	}
	    });
    }

    loadComment();
});