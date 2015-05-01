<?php

include("misc/logg.php");

include("controllers/connection.php");
include("controllers/log.php");
include("controllers/news.php");
include("controllers/programs.php");
include("controllers/comments.php");

// Obtengo los datos
$input = json_decode(file_get_contents("php://input"));
$operation = $input->operation ? $input->operation : "__";
$data = $input->data;
$arr = array();
$arr['success'] = false;
$arr['message'] = "Operación no válida";

$messageReturn = null;

switch ($operation) {
    // LOGIN -------------------------------------------------------------------
    case 'login':
        $log = new Log();
        $messageReturn = $log->login($data);
        break;
    case 'changePassword':
        $log = new Log();
        $messageReturn = $log->changePassword($data);
        break;
    // NOTICIAS ----------------------------------------------------------------
    case 'addnews':
        $news = new News();
        $messageReturn = $news->addNew($data);
        break;
    case 'getNews':
        $news = new News();
        $messageReturn = $news->getNews();
        break;
    case 'deleteNew':
        $news = new News();
        $messageReturn = $news->deleteNew($data);
        break;
    // PROGRAMAS ---------------------------------------------------------------
    case 'addProgram':
        $prog = new Programs();
        $messageReturn = $prog->add($data);
        break;
    case 'getPrograms':
        $prog = new Programs();
        $messageReturn = $prog->get();
        break;
    case 'deleteProgram':
        $prog = new Programs();
        $messageReturn = $prog->delete($data);
        break;
    // PROGRAMAS ---------------------------------------------------------------
    case 'addComm':
        $prog = new Comments();
        $messageReturn = $prog->add($data);
        break;
    case 'getComms':
        $prog = new Comments();
        $messageReturn = $prog->get();
        break;
    case 'deleteComm':
        $prog = new Comments();
        $messageReturn = $prog->delete($data);
        break;
        
}

if($messageReturn == null){
    $messageReturn = $arr;
}

//var_dump($messageReturn);

echo json_encode($messageReturn);

