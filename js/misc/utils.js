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