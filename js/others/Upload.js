$( document ).ready(function() {
    $('#fileupload').fileupload({
        url: 'services/files/',
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('#imagenUploaded').attr('style','background-image: url("' + __IMAGE__URL__ + file.name + '");')
                $('#newPicture').attr('value',file.name);
                $('#savePicture').show();
            });

            $('#progressBarContainer').hide();
            $('#progressBar').css('width','0%');
            $("#saveButton").attr("disabled", false);
        }
    }).on('fileuploadprogressall', function (e, data) {
        $("#progressBarContainer").show();

        var progress = parseInt(data.loaded / data.total * 100, 10);
        $('#progressBar').css('width',progress + '%');
    }).on('fileuploadfail', function (e, data) {
        $('#progressBarContainer').hide();
        $('#progressBar').css('width','0%');
        alert.error("Ups! Algo no salió como esperabamos. Intenta nuevamente.");
        $("#saveButton").attr("disabled", false);
    }).on('fileuploadadd', function (e, data) {
        $("#saveButton").attr("disabled", true);
    });
});