<?php

class News {

    static function addNew($userData, $data) {

        if(!User::checkSession($userData))
            return Error::noPermission();

        $title = isset($data->title) ? $data->title : null;
        $message = isset($data->message) ? $data->message : null;
        $picture = isset($data->picture) ? $data->picture : null;

        if(isset($title) && isset($message)){
            $mysqli = Connection::getInstance()->getDB();
            if(isset($picture)){
                if ($stmt = $mysqli->prepare("INSERT INTO news (title, message, picture) VALUES (?,?,?)")) {
                    $stmt->bind_param("sss", $title, $message, $picture);
                    if($stmt->execute()){
                        $response = new Response(true, "Noticia guardada");
                    }
                }
            } else {
                if ($stmt = $mysqli->prepare("INSERT INTO news (title, message) VALUES (?,?)")) {
                    $stmt->bind_param("ss", $title, $message);
                    if($stmt->execute()){
                        $response = new Response(true, "Noticia guardada");
                    }
                }
            }
        }

        if(isset($stmt)) $stmt->close();

        return isset($response) ? $response->getResponse() : Error::genericError();
    }

    static function getNews($limit = 0){
        
        $mysqli = Connection::getInstance()->getDB();
        $query = $limit > 0 ? "SELECT idnew, title, message, picture, date FROM news ORDER BY idnew DESC LIMIT $limit " : "SELECT idnew, title, message, picture, date FROM news";
        if ($stmt = $mysqli->prepare($query)) {
            if($stmt->execute()){
                $stmt->bind_result($idnew, $title, $message, $picture, $date);
                $result = array();
                while($stmt->fetch()){
                    $item = array();
                    $item["idNew"] = $idnew;
                    $item["title"] = $title;
                    $item["message"] = $message;
                    $item["picture"] = $picture;
                    $item["date"] = $date;
                    array_push($result, $item);
                }

                $response = new Response(true, "Noticias recuperadas", $result);

            } else {
                $response = new Response(false, "Ups! Algo no salió bien :(");
            }
        }

        if(isset($stmt)) $stmt->close();
        return isset($response) ? $response->getResponse() : Error::genericError();
    }

    static function delNew($userData, $data) {

        if(!User::checkSession($userData))
            return Error::noPermission();

        $idNew = isset($data->idNew) ? $data->idNew : null;

        if(isset($idNew)){
            $mysqli = Connection::getInstance()->getDB();
            if ($stmt = $mysqli->prepare("DELETE FROM news WHERE idnew = ?")) {
                $stmt->bind_param("i", $idNew);
                if($stmt->execute()){
                    $response = new Response(true, "Noticia eliminada");
                }
            }
        }

        if(isset($stmt)) $stmt->close();

        return isset($response) ? $response->getResponse() : Error::genericError();
    }
}