myApp.controller('AdminPrograms',function($scope, $http, $cookies) {
	
	$scope.data = {};
	$scope.programs = [];

	$scope.addProgram = function(){

		notification.info("Guardando...");

		var json = {
			operation: 'addProgram',
			userData: {
				iduser: $cookies.iduser,
				idsession: $cookies.idsession
			},
			data: {
				picture: $('#newPicture').attr("value"),
				title: $scope.data.title,
				description: $scope.data.description,
				time: $scope.data.time
			}
		}

		$http.post(__URL__, json)
	        .success(function (response) {
	        	if(response.success){
		            alert.info(response.message)
		            $scope.data = {}
		            $('#imagenUploaded').attr('style','background-image: none;')
		            loadPrograms();
		        } else {
		        	alert.error(response.message)
		        }
	        }).error(function(response){
	        	alert.error("Ups! Algo no salió como esperábamos. Intenta nuevamente más tarde")
	        });

	}

	$scope.delProgram = function(idProgram){
		confirm.warn("¿Seguro que desea eliminar este programa?",function(result){
			if(result == "Aceptar"){
				
				notification.info("Eliminando...");

				var json = {
					operation: 'delProgram',
					userData: {
						iduser: $cookies.iduser,
						idsession: $cookies.idsession
					},
					data: {
						idProgram: idProgram
					}
				}

				$http.post(__URL__, json)
		        .success(function (response) {
		        	if(response.success){
		        		alert.hide();
			            loadPrograms();
			        } else {
			        	alert.error(response.message)
			        }
		        }).error(function(response){
		        	alert.error("Ups! Algo no salió como esperábamos. Intenta nuevamente más tarde")
		        });

			}
		});
	}


	function loadPrograms() {
		$http.post(__URL__, {operation: "getPrograms"})
	        .success(function (response) {
	        	if(response.success)
		        	$scope.programs = response.optional;
	        });

	}

	loadPrograms();

});