function existsVar(a) {
    if (!a || a == null || a == undefined || a == "null" || a == "undefined")
        return false;
    else
        return true;
}

function hideModal() {
    $('.modal').modal('hide');
}

function server_error(){
    alert.error(messages.server.fail_connection);
}

function xss(text){
	var regex = /^[0-9a-zA-ZãÃáÁàÀâÂäÄẽẼéÉèÈêÊëËĩĨíÍìÌîÎïÏõÕóÓòÒôÔöÖũŨúÚùÙûÛüÜçÇñÑ ,:_¡!¿%#@ºª’´`'"\$\-\/\^\(\)\+\?\*\.\n]*$/;
	regex.test(text) ? return true : return false;
}