<?php

include("misc/logg.php");
include("misc/response.php");

include("controllers/error.php");
include("controllers/connection.php");
include("controllers/user.php");
include("controllers/configuration.php");
include("controllers/news.php");
include("controllers/programs.php");
include("controllers/comments.php");


// Obtengo los datos
$input = json_decode(file_get_contents("php://input"));
$operation = $input->operation ? $input->operation : "__";
$messageReturn = null;


switch ($operation) {
    case 'register':
        $messageReturn = User::register($input->data);
        break;
    case 'login':
        $messageReturn = User::login($input->data);
        break;
    case 'getFrontPhoto':
    	$messageReturn = Configuration::getFrontPhoto();
    	break;
    case 'setFrontPhoto':
        $messageReturn = Configuration::setFrontPhoto($input->userData, $input->data);
        break;
    case 'changePassword':
        $messageReturn = User::changePassword($input->userData, $input->data);
        break;
    case 'addNew':
        $messageReturn = News::addNew($input->userData, $input->data);
        break;
    case 'getNews':
        $messageReturn = News::getNews();
        break;
    case 'getLastNews':
        $messageReturn = News::getNews(3);
        break;
    case 'delNew':
        $messageReturn = News::delNew($input->userData, $input->data);
        break;
    case 'addProgram':
        $messageReturn = Programs::addProgram($input->userData, $input->data);
        break;
    case 'getPrograms':
        $messageReturn = Programs::getPrograms();
        break;
    case 'delProgram':
        $messageReturn = Programs::delProgram($input->userData, $input->data);
        break;
    case 'addComment':
        $messageReturn = Comments::addComment($input->data);
        break;
}

if ($messageReturn == null) {
    $respo = new Response(false, "Operación no válida");
    $messageReturn = $respo->getResponse();
}

echo json_encode($messageReturn);
