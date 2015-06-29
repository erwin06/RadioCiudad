<?php

include("misc/logg.php");
include("misc/response.php");

include("controllers/error.php");
include("controllers/connection.php");
include("controllers/user.php");
include("controllers/configuration.php");


// Obtengo los datos
$input = json_decode(file_get_contents("php://input"));
$operation = $input->operation ? $input->operation : "__";
$data = isset($input->data) ? $input->data : null;

$messageReturn = null;


switch ($operation) {
    case 'register':
        $messageReturn = User::register($data);
        break;
    case 'login':
        $messageReturn = User::login($data);
        break;
    case 'getFrontPhoto':
    	$messageReturn = Configuration::getFrontPhoto();
    	break;
    case 'setFrontPhoto':
        $messageReturn = Configuration::setFrontPhoto($input->userData, $data);
        break;
    case 'changePassword':
        $messageReturn = User::changePassword($input->userData, $data);
        break;
}

if ($messageReturn == null) {
    $respo = new Response(false, "Operación no válida");
    $messageReturn = $respo->getResponse();
}

echo json_encode($messageReturn);
