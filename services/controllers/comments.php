<?php

class Comments {

    static function addComment($data) {

        $name = isset($data->name) ? $data->name : null;
        $email = isset($data->email) ? $data->email : "";
        $subject = isset($data->subject) ? $data->subject : "";
        $message = isset($data->message) ? $data->message : null;

        if(isset($name) && isset($message)){
            $mysqli = Connection::getInstance()->getDB();
            if ($stmt = $mysqli->prepare("INSERT INTO comments (`from`, `email`, `subjet`, `message`) VALUES (?,?,?,?)")) {
                $stmt->bind_param("ssss", $name, $email, $subject, $message);
                if($stmt->execute()){
                    $response = new Response(true, "Comentario enviado. Gracias!");
                }
            }
        }

        if(isset($stmt)) $stmt->close();

        return isset($response) ? $response->getResponse() : Error::genericError();
    }

    static function getComments($userData){

        if(!User::checkSession($userData))
            return Error::noPermission();


        $mysqli = Connection::getInstance()->getDB();
        $query = "SELECT `idcomments`, `from`, `subjet`, `date`, `message`, `email` FROM comments ORDER BY idcomments DESC";
        if ($stmt = $mysqli->prepare($query)) {
            if($stmt->execute()){
                $stmt->bind_result($idcomments, $from, $subjet, $date, $message, $email);
                $result = array();
                while($stmt->fetch()){
                    $item = array();
                    $item["idComments"] = $idcomments;
                    $item["from"] = $from;
                    $item["subjet"] = $subjet;
                    $item["date"] = $date;
                    $item["message"] = $message;
                    $item["email"] = $email;
                    array_push($result, $item);
                }

                $response = new Response(true, "Comentarios", $result);

            } else {
                $response = new Response(false, "Ups! Algo no salió bien :(");
            }
        }

        if(isset($stmt)) $stmt->close();
        return isset($response) ? $response->getResponse() : Error::genericError();
    }

    static function delComment($userData, $data) {

        if(!User::checkSession($userData))
            return Error::noPermission();

        $idComment = isset($data->idComment) ? $data->idComment : null;

        if(isset($idComment)){
            $mysqli = Connection::getInstance()->getDB();
            if ($stmt = $mysqli->prepare("DELETE FROM comments WHERE idcomments = ?")) {
                $stmt->bind_param("i", $idComment);
                if($stmt->execute()){
                    $response = new Response(true, "Comentario eliminado");
                }
            }
        }

        if(isset($stmt)) $stmt->close();

        return isset($response) ? $response->getResponse() : Error::genericError();
    }
}