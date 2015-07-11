myApp.controller('AdminNews',function($scope, $http, $cookies) {
	
	$scope.data = {};
	$scope.news = [];

	$scope.addNews = function(){

		notification.info("Guardando...");

		var json = {
			operation: 'addNew',
			userData: {
				iduser: $cookies.iduser,
				idsession: $cookies.idsession
			},
			data: {
				picture: $('#newPicture').attr("value"),
				title: $scope.data.title,
				message: $scope.data.message
			}
		}

		$http.post(__URL__, json)
	        .success(function (response) {
	        	if(response.success){
		            alert.info(response.message)
		            $scope.data = {}
		            $('#imagenUploaded').attr('style','background-image: none;')
		            loadNews();
		        } else {
		        	alert.error(response.message)
		        }
	        }).error(function(response){
	        	alert.error("Ups! Algo no salió como esperábamos. Intenta nuevamente más tarde")
	        });

	}

	$scope.deleteNew = function(idNew){
		confirm.warn("¿Seguro que desea eliminar esta noticia?",function(result){
			if(result == "Aceptar"){
				
				notification.info("Eliminando...");

				var json = {
					operation: 'delNew',
					userData: {
						iduser: $cookies.iduser,
						idsession: $cookies.idsession
					},
					data: {
						idNew: idNew
					}
				}

				$http.post(__URL__, json)
		        .success(function (response) {
		        	if(response.success){
		        		alert.hide();
			            loadNews();
			        } else {
			        	alert.error(response.message)
			        }
		        }).error(function(response){
		        	alert.error("Ups! Algo no salió como esperábamos. Intenta nuevamente más tarde")
		        });

			}
		});
	}


	function loadNews() {
		$http.post(__URL__, {operation: "getNews"})
	        .success(function (response) {
	        	if(response.success)
		        	$scope.news = response.optional;
	        });

	}

	loadNews();

});