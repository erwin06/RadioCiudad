var messages = {
  
    server: {
        fail_connection: "Se produjo un error al conectar con el servidor, por favor intente nuevamente más tarde"
    }
    
};

function errorMessage(message){
	alert.error(message ? message : "Ups! Algo no salió como esperábamos. Intenta nuevamente más tarde")
}
